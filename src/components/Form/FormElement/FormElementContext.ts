import React from 'react';

const FormElementContext = React.createContext<{
    focus(v: boolean): void;
}>({
    focus() {
        /**/
    },
});
FormElementContext.displayName = 'FormElementContext';

export default FormElementContext;
