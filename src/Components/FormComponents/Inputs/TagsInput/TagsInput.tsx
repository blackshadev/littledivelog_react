import React, { useCallback } from 'react';

import { get, useFormState } from 'react-hook-form';

import * as api from '../../../../api/tags';
import { DiveBuddy } from '../../../../api/types/dives/DiveBuddy';
import { DiveTag } from '../../../../api/types/dives/DiveTag';
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

    const search = useCallback(async (): Promise<(GenericTag & DiveTag)[]> => {
        const tags = await api.listTags(accessToken);
        return tags.map((b) => ({
            color: b.color,
            id: b.tag_id,
            tag_id: b.tag_id,
            text: b.text,
        }));
    }, [accessToken]);

    return (
        <GenericTagInput<DiveTag>
            label={label}
            value={value}
            placeholder={placeholder}
            search={search}
            error={error}
            onValueChange={onValueChange}
            isEqual={(a, b): boolean => a.tag_id === b.tag_id}
        />
    );
};

export default BuddiesInput;
