import styled from 'styled-components';

import { inputBaseClasses, inputLabelClasses, textFieldClasses } from '@mui/material';

import misc from '../../../../Styling/Constants/misc';
import spacing from '../../../../Styling/Constants/spacing';

export const Row = styled.div`
    display: flex;
    width: 100%;
`;

export const TankLabel = styled.legend``;

export const TankInputContainer = styled.fieldset`
    &:focus-within {
        ${TankLabel} {
            color: rgb(25, 118, 210);
        }
    }
`;

export const Container = styled.fieldset`
    .${textFieldClasses.root} {
        flex: 1;
        /* padding: 0 ${spacing.md}; */
        margin-right: ${spacing.md};
    }

    .${inputBaseClasses.root} {
        border-radius: 0;
    }

    .--first .${inputBaseClasses.root} {
        border-top-left-radius: ${misc.roundedBorders};
        border-bottom-left-radius: ${misc.roundedBorders};
    }
    .--last .${inputBaseClasses.root} {
        border-top-right-radius: ${misc.roundedBorders};
        border-bottom-right-radius: ${misc.roundedBorders};
    }

    .${inputLabelClasses.root} {
    }

    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: ${misc.roundedBorders};
    padding: ${spacing.md};
    margin-bottom: ${spacing.md};

    legend {
        margin-bottom: ${spacing.md};
        margin-left: ${spacing.md};
        padding: 0 ${spacing.sm};
        color: rgba(0, 0, 0, 0.6);
    }

    ${TankInputContainer} {
        margin-bottom: ${spacing.md};
    }
`;
export const PressureWrapper = styled.div`
    width: 7rem;
`;
