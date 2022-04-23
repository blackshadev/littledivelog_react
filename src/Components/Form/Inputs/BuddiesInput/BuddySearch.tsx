import React, { useEffect } from 'react';

import { Autocomplete, Chip, CircularProgress, createFilterOptions, TextField as MUITextField } from '@mui/material';
import { FieldError, get, useFormState } from 'react-hook-form';

import * as api from '../../../../api/buddies';
import { DiveBuddy } from '../../../../api/types/dives/DiveBuddy';
import useAccessToken from '../../../../Context/Auth/useAccessToken';
import fontColor from '../../../../Helpers/Colors/fontColor';
import { randomColor } from '../../../../Helpers/Colors/randomColor';
import useDebounce from '../../../../Helpers/useDebounce';

type BuddyInputArgs = {
    name: string;
    placeholder: string;
    value: DiveBuddy[];
    label: string;
    onValueChange(value: DiveBuddy[]): void;
};

const BuddySearch: React.FC<BuddyInputArgs> = ({ name, placeholder, label, value, onValueChange }) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as FieldError | undefined;

    const filter = createFilterOptions<DiveBuddy>();
    const [buddyInputValue, setBuddyInputValue] = React.useState('');
    const [options, setOptions] = React.useState<readonly DiveBuddy[]>([]);
    const [loading, setLoading] = React.useState(false);
    const { accessToken } = useAccessToken();

    const debouncedBuddyInputValue = useDebounce(buddyInputValue);

    useEffect(() => {
        setLoading(true);

        const fetchBuddies = async (): Promise<void> => {
            const places = await api.listBuddies(accessToken);
            setOptions(places);
        };

        fetchBuddies().finally((): void => setLoading(false));
    }, [accessToken, debouncedBuddyInputValue]);

    return (
        <Autocomplete<DiveBuddy, true, false, true>
            options={options}
            fullWidth
            openOnFocus
            multiple
            freeSolo
            isOptionEqualToValue={(option, value): boolean => option.buddy_id === value.buddy_id}
            getOptionLabel={(option: DiveBuddy): string => {
                return option !== undefined ? `${option.text}` : '';
            }}
            value={value}
            placeholder={placeholder}
            loading={loading}
            onInputChange={(_, value): void => setBuddyInputValue(value)}
            inputValue={buddyInputValue}
            filterOptions={(options, params): DiveBuddy[] => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.text);
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        color: randomColor(),
                        text: `Add "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            onChange={(_, value): void => {
                const buddies = value.filter(() => typeof value !== 'string') as DiveBuddy[];

                console.log(buddies);
                onValueChange?.(buddies);
            }}
            renderTags={(value, getTagProps): React.ReactElement[] =>
                value.map((option: DiveBuddy, index: number) => {
                    const tagStyling = { backgroundColor: option.color, color: fontColor(option.color) };
                    return <Chip label={option.text} {...getTagProps({ index })} key={index} sx={tagStyling} />;
                })
            }
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
    );
};

export default BuddySearch;
