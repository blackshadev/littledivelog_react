import { useEffect, useRef } from 'react';

import { DefaultValues, FieldValues, useForm as useReactHookForm, UseFormReturn } from 'react-hook-form';

export default function useFormWithValue<TData extends FieldValues, TContext = any>(
    data: DefaultValues<TData>,
): UseFormReturn<TData, TContext> {
    const form = useReactHookForm<TData>({ defaultValues: data });
    const firstUpdate = useRef(true);

    useEffect(() => {
        if (!firstUpdate.current) {
            form.reset(data);
        }
        firstUpdate.current = false;
    }, [data, form]);

    return form;
}
