import React, { useEffect, useState } from 'react';

import { Autocomplete, CircularProgress, createFilterOptions, TextField as MUITextField } from '@mui/material';

import fontColor from '../../../../Helpers/Colors/fontColor';
import { randomColor } from '../../../../Helpers/Colors/randomColor';
import useDebounce from '../../../../Helpers/useDebounce';
import FormFieldError from '../../FormFieldError';
import { ChipWithTextColor } from './compontnts';

type Props<T> = {
    placeholder: string;
    value: T[];
    label: string;
    error?: string;
    search(inputValue: string): Promise<T[]>;
    onValueChange(tags: T[]): void;
    isEqual(a: T, b: T): boolean;
};

export type GenericTag = { text: string; color: string };

const GenericTagInput = <T extends GenericTag>({
    value,
    label,
    error,
    placeholder,
    search,
    onValueChange,
    isEqual,
}: Props<T>): React.ReactElement => {
    const [options, setOptions] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const filter = createFilterOptions<T>();

    const debouncedInputValue = useDebounce(inputValue);
    useEffect(() => {
        setLoading(true);

        search(debouncedInputValue)
            .then((o) => setOptions(o))
            .finally((): void => setLoading(false));
    }, [debouncedInputValue, search]);

    return (
        <Autocomplete<T, true, false, true>
            options={options}
            fullWidth
            openOnFocus
            multiple
            freeSolo
            isOptionEqualToValue={isEqual}
            getOptionLabel={(option: T | string): string => {
                if (typeof option === 'string') {
                    return option;
                }

                return option !== undefined ? option.text : '';
            }}
            value={value}
            placeholder={placeholder}
            loading={loading}
            onInputChange={(_, value): void => setInputValue(value)}
            inputValue={inputValue}
            filterOptions={(options, params): T[] => {
                const filtered = filter(options, params);

                const { inputValue } = params;

                // Suggest the creation of a new value
                const isExisting = options.some(
                    (option) => inputValue.localeCompare(option.text, undefined, { sensitivity: 'accent' }) === 0,
                );
                if (inputValue !== '' && !isExisting) {
                    filtered.push({
                        color: randomColor(),
                        text: `Add "${inputValue}"`,
                    } as T);
                }

                return filtered;
            }}
            onChange={(_, value): void => {
                const tags = value.filter(() => typeof value !== 'string') as T[];
                onValueChange(tags);
            }}
            renderTags={(value, getTagProps): React.ReactElement[] =>
                value.map((option: T, index: number) => {
                    const color = fontColor(option.color);
                    const tagStyling = { backgroundColor: option.color };
                    return (
                        <ChipWithTextColor
                            label={option.text}
                            textColor={color}
                            {...getTagProps({ index })}
                            key={index}
                            className={`text-${color}`}
                            sx={tagStyling}
                        />
                    );
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
                        helperText={<FormFieldError error={error} />}
                    />
                );
            }}
        />
    );
};

export default GenericTagInput;
