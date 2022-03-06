import React, { useContext } from 'react';

import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, FieldError, get, useFormState } from 'react-hook-form';

import { Place } from '../../../../api/types/places/country';
import SubmitContext from '../../Form/SubmitContext';
import PlaceAutocomplete from './PlaceAutocomplete';

type PlaceInputArgs = {
    name: string;
    placeholder: string;
    label: string;
};
const PlaceInput: React.FC<PlaceInputArgs> = ({ name, placeholder, label }) => {
    return (
        // <FormControl error={!!error}>
        //     <InputLabel>{label}</InputLabel>
        <Controller
            render={({ field }): React.ReactElement => (
                <PlaceAutocomplete
                    name={name}
                    value={field.value}
                    label={label}
                    placeholder={placeholder}
                    onChange={(_, value): void => field.onChange(value)}
                />
            )}
            name={name}
        />
        //     <FormHelperText>{error ?? ' '}</FormHelperText>
        // </FormControl>
    );
};

export default PlaceInput;
