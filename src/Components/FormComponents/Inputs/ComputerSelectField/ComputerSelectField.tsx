import React, { useEffect, useState } from 'react';

import { Autocomplete, TextField as MUITextField } from '@mui/material';
import { get, useFormState } from 'react-hook-form';

import * as api from '../../../../api/computer';
import { Computer } from '../../../../api/types/computers/Computer';
import { DiveComputer } from '../../../../api/types/dives/DiveComputer';
import useApiData from '../../../../Context/Auth/callApi';
import FormFieldError from '../../FormFieldError';

type ComputerSelectProps = {
    name: string;
    label: string;
    value: DiveComputer | null;
    placeholder: string;
    isImported: boolean;
    onValueChange(value: DiveComputer | null): void;
    onChange?(event: React.SyntheticEvent<Element, Event>, value: DiveComputer | null): void;
};

export default function ComputerSelectField({
    name,
    onChange,
    onValueChange,
    label,
    placeholder,
    isImported,
    value,
}: ComputerSelectProps): React.ReactElement {
    const listComputers = useApiData(api.listComputers);
    const [selectedOption, setSelectedOption] = useState<Computer | null>(null);
    const { errors } = useFormState();

    const options = listComputers.data ?? [];
    const error = get(errors, name)?.message as string | undefined;

    useEffect(() => {
        const selectedValueOption = (listComputers.data ?? []).find(
            (option) => option.computer_id === value?.computer_id,
        );
        setSelectedOption(selectedValueOption ?? null);
    }, [listComputers, setSelectedOption, value]);

    return (
        <Autocomplete<DiveComputer>
            disabled={isImported}
            options={options}
            value={selectedOption}
            isOptionEqualToValue={(option, value): boolean => option.computer_id === value.computer_id}
            getOptionLabel={(option): string => `${option.vendor} ${option.name}`}
            fullWidth
            placeholder={placeholder}
            onChange={(event, value): void => {
                value = value && {
                    computer_id: value.computer_id,
                    name: value.name,
                    vendor: value.vendor,
                };
                onChange?.(event, value);
                onValueChange?.(value);
            }}
            renderInput={(params): React.ReactElement => {
                const helperText = error ? (
                    <FormFieldError error={error} />
                ) : isImported ? (
                    'Dive is imported from a dive computer, the source computer cannot be changed'
                ) : null;
                return <MUITextField {...params} label={label} error={!!error} helperText={helperText} />;
            }}
        />
    );
}
