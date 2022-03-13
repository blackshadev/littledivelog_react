import React, { useEffect, useState } from 'react';

import { Autocomplete, TextField as MUITextField } from '@mui/material';

import * as api from '../../../../api/country';
import { Country } from '../../../../api/types/places/country';
import useApi from '../../../../Context/Auth/callApi';

type CountryArguments = {
    value: string;
    label: string;
    onChange?(event: React.SyntheticEvent<Element, Event>, value: string): void;
};

const CountrySelectInput: React.FC<CountryArguments> = ({
    value,
    label,
    onChange,
}: CountryArguments) => {
    const listCountries = useApi(api.listCountries);
    const options = listCountries.data ?? [];
    const [selectedOption, setSelectedOption] = useState<Country | null>(null);

    useEffect(() => {
        const selectedValueOption = (listCountries.data ?? []).find(
            (option) => option.iso2 === value,
        );
        setSelectedOption(selectedValueOption ?? null);
    }, [listCountries, setSelectedOption, value]);

    return (
        <Autocomplete<Country>
            options={options}
            value={selectedOption}
            isOptionEqualToValue={(option, value): boolean =>
                option.iso2 === value.iso2
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            disableClearable={true as any}
            getOptionLabel={(option): string => option.name}
            fullWidth
            renderInput={(params): React.ReactElement => {
                return <MUITextField {...params} label={label} />;
            }}
            onChange={(_, value): void => {
                console.log(value);
            }}
        />
    );
};

export default CountrySelectInput;
