import React, { useCallback } from 'react';

import { get, useFormState } from 'react-hook-form';

import * as api from '../../../../api/buddies';
import { DiveBuddy } from '../../../../api/types/dives/DiveBuddy';
import useAccessToken from '../../../../Context/Auth/useAccessToken';
import GenericTagInput, { GenericTag } from '../GenericTagInput/GenericTagInput';

type BuddyInputArgs = {
    name: string;
    value: DiveBuddy[];
    placeholder: string;
    label: string;
    onValueChange(value: null | DiveBuddy[]): void;
};

const BuddiesInput: React.FC<BuddyInputArgs> = ({ name, value, placeholder, label, onValueChange }) => {
    const { errors } = useFormState();
    const error = get(errors, name)?.message as string | undefined;

    const { accessToken } = useAccessToken();

    const search = useCallback(async (): Promise<(GenericTag & DiveBuddy)[]> => {
        const buddies = await api.listBuddies(accessToken);
        return buddies.map((b) => ({
            buddy_id: b.buddy_id,
            color: b.color,
            id: b.buddy_id,
            text: b.text,
        }));
    }, [accessToken]);

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

export default BuddiesInput;
