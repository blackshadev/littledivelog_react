import { Chip, chipClasses, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import fontColorFromBackground from '../../Helpers/Colors/fontColor';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

type ChipPropsWithTextColor = ChipProps & { backgroundColor: string };

export const Tag = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<ChipPropsWithTextColor>`
    .${chipClasses.label} {
        ${(props): string => (!props.onDelete ? `padding: 0;` : ``)}
        color: ${(props): string => fontColorFromBackground(props.backgroundColor)};
    }
    .${chipClasses.deleteIcon} {
        color: ${(props): string => fontColorFromBackground(props.backgroundColor)};
    }

    margin-right: ${spacing.sm};
    border-radius: ${misc.roundedBorders};
    background: ${(props): string => props.backgroundColor};

    ${(props): string =>
        !props.onDelete
            ? `
            height: auto;
            padding: ${spacing.xs} ${spacing.sm};
        `
            : ``}
`;
