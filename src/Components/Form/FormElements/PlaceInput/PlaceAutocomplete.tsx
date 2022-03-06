import React, { useContext, useEffect } from 'react';

import {
    Autocomplete,
    AutocompleteChangeDetails,
    AutocompleteChangeReason,
    CircularProgress,
    TextField as MUITextField,
} from '@mui/material';
import { FieldError, get, useFormState } from 'react-hook-form';

import { Place } from '../../../../api/types/places/country';
import SubmitContext from '../../Form/SubmitContext';

type PlaceAutoCompleteArgs = {
    name: string;
    value: Place;
    placeholder: string;
    label: string;
    onChange(
        event: React.SyntheticEvent,
        value: null | Place,
        reason: AutocompleteChangeReason,
        details?: AutocompleteChangeDetails<Place>,
    ): void;
};

const PlaceAutocomplete: React.FC<PlaceAutoCompleteArgs> = ({
    value,
    onChange,
    placeholder,
    label,
    name,
}) => {
    const submitContext = useContext(SubmitContext);
    const { errors } = useFormState();
    const error = get(errors, name)?.message as FieldError | undefined;

    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly Place[]>([]);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setOptions([
                { country_code: 'NL', name: 'test1', place_id: 1 },
                { country_code: 'NL', name: 'test2', place_id: 2 },
                { country_code: 'NL', name: 'test3', place_id: 3 },
                { country_code: 'NL', name: 'test4', place_id: 4 },
                { country_code: 'NL', name: 'test5', place_id: 5 },
                { country_code: 'NL', name: 'Het Koepeltje', place_id: 13 },
            ]);
            setLoading(false);
        }, 2000);
    }, [inputValue]);

    return (
        <Autocomplete<Place>
            options={options}
            isOptionEqualToValue={(option, value): boolean =>
                option.place_id === value.place_id
            }
            getOptionLabel={(option: Place): string =>
                `${option.name}, ${option.country_code}`
            }
            loading={loading}
            onInputChange={(_, value): void => setInputValue(value)}
            filterOptions={(options): Place[] => options}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            renderInput={(params): React.ReactElement => {
                return (
                    <MUITextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20}
                                        />
                                    ) : null}
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
    );
};

export default PlaceAutocomplete;
