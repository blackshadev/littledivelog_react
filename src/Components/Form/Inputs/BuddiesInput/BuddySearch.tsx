import React, { useCallback, useEffect } from 'react';

import { access } from 'fs';
import { Autocomplete, CircularProgress, createFilterOptions, TextField as MUITextField } from '@mui/material';
import { get, useFormState } from 'react-hook-form';

import * as api from '../../../../api/buddies';
import { DiveBuddy } from '../../../../api/types/dives/DiveBuddy';
import useAccessToken from '../../../../Context/Auth/useAccessToken';
import GenericTagInput from '../GenericTagInput';
import { GenericTag } from '../GenericTagInput/GenericTagInput';

type BuddyInputArgs = {
    name: string;
    placeholder: string;
    value: DiveBuddy[];
    label: string;
    onValueChange(value: DiveBuddy[]): void;
};

const BuddySearch: React.FC<BuddyInputArgs> = ({ name, placeholder, label, value, onValueChange }) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as string | undefined;

    const { accessToken } = useAccessToken();

    const search = useCallback(
        async (search: string): Promise<(GenericTag & DiveBuddy)[]> => {
            const buddies = await api.listBuddies(accessToken);
            return buddies.map((b) => ({
                buddy_id: b.buddy_id,
                color: b.color,
                id: b.buddy_id,
                text: b.text,
            }));
        },
        [accessToken],
    );

    return (
        <GenericTagInput<DiveBuddy>
            label={label}
            value={value}
            placeholder={placeholder}
            search={search}
            error={error}
            onValueChange={onValueChange}
            isEqual={(a, b): boolean => a.buddy_id === b.buddy_id}
        />
    );
};

export default BuddySearch;
