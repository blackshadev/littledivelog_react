import React from 'react';

export type FormContextState = {
    error?: Error;
    onChangeHandler: React.ChangeEventHandler;
};

const initialState: FormContextState = {
    onChangeHandler() {
        /**/
    },
};

export default initialState;
