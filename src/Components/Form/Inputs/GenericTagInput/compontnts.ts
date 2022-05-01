import { Chip, chipClasses, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import spacing from '../../../../Styling/Constants/spacing';

type ChipPropsWithTextColor = ChipProps & { textColor: 'black' | 'white' };

export const ChipWithTextColor = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'textColor',
})<ChipPropsWithTextColor>`
    .${chipClasses.label} {
        color: ${(props): string => props.textColor};
    }
    .${chipClasses.deleteIcon} {
        color: ${(props): string => props.textColor};
    }
    margin-right: ${spacing.sm};
`;
