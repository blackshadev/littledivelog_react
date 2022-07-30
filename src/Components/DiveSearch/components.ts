import styled from 'styled-components';

import { Button, NativeSelect, nativeSelectClasses, styled as muiStyled, TextField } from '@mui/material';

import colors from '../../Styling/Constants/colors';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

export const Container = styled.form``;

export const SearchSelect = muiStyled(NativeSelect)`
// Remove borders from select
&::before, &::after {
    content: none;
}

.${nativeSelectClasses.select} {
    width: auto;
}
`;

export const SearchInput = muiStyled(TextField)`
    margin-bottom: ${spacing.sm};
`;

export const SearchValuesList = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: row;
    margin-left: ${spacing.md};
`;

export const SearchValueItem = styled.li`
    border-radius: ${misc.roundedBorders};
    border: 1px solid ${colors.gray};
    padding: ${spacing.sm} ${spacing.md};
    margin-right: ${spacing.sm};
`;

export const RemoveSearchValueButton = muiStyled(Button)`
    padding: 0;
    min-width: auto;
    margin-left: ${spacing.sm};
`;
