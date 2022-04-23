import React, { useEffect } from 'react';

import { createFilterOptions } from '@mui/lab/node_modules/@mui/base';
import { Autocomplete, CircularProgress, TextField as MUITextField } from '@mui/material';
import { FieldError, get, useFormState } from 'react-hook-form';

import * as api from '../.../../../../../api/place';
import { Place } from '../../../../api/types/places/country';
import useAccessToken from '../../../../Context/Auth/useAccessToken';
import useDebounce from '../../../../Helpers/useDebounce';
import HorizontalLayout from '../../FormLayout/HorizontalLayout';
import CountrySelectInput from './CountrySelectInput';

type PlaceAutoCompleteArgs = {
    name: string;
    value?: Place;
    placeholder: string;
    label: string;
    onValueChange(value: null | Place): void;
};

const PlaceSearch: React.FC<PlaceAutoCompleteArgs> = ({ value, onValueChange, placeholder, label, name }) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as FieldError | undefined;

    const filter = createFilterOptions<Place>();
    const [countryCode, setCountryCode] = React.useState<string | null>(value?.country_code ?? null);
    const [placeInputValue, setPlaceInputValue] = React.useState(value?.name);
    const [options, setOptions] = React.useState<readonly Place[]>([]);
    const [loading, setLoading] = React.useState(false);
    const { accessToken } = useAccessToken();

    const debouncedPlaceInputValue = useDebounce(placeInputValue);

    useEffect(() => {
        setLoading(true);

        const fetchPlaces = async (): Promise<void> => {
            const places = await api.listPlaces(accessToken, {
                country: countryCode ?? undefined,
                keywords: debouncedPlaceInputValue,
            });
            setOptions(places);
        };

        fetchPlaces().finally((): void => setLoading(false));
    }, [accessToken, countryCode, debouncedPlaceInputValue]);

    return (
        <HorizontalLayout>
            <CountrySelectInput
                label="Country"
                value={countryCode}
                onChange={(_, value): void => setCountryCode(value)}
            />
            <Autocomplete<Place>
                options={options}
                fullWidth
                openOnFocus
                isOptionEqualToValue={(option, value): boolean => option.place_id === value.place_id}
                getOptionLabel={(option: Place): string => {
                    return option !== undefined ? `${option.name}` : '';
                }}
                loading={loading}
                onInputChange={(_, value): void => setPlaceInputValue(value)}
                filterOptions={(options, params): Place[] => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some((option) => inputValue === option.name);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            country_code: countryCode ?? '',
                            name: `Add "${inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                placeholder={placeholder}
                onChange={(_, value): void => {
                    onValueChange?.(value);
                }}
                value={value}
                inputValue={placeInputValue}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                freeSolo={true as any}
                renderInput={(params): React.ReactElement => {
                    return (
                        <MUITextField
                            {...params}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                            label={label}
                            error={!!error}
                            helperText={error ?? ' '}
                        />
                    );
                }}
            />
        </HorizontalLayout>
    );
};

export default PlaceSearch;
