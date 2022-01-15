import styled, { css } from 'styled-components';

import colors from '../../styling/colors';
import spacing from '../../styling/spacing';

const sharedCellStyling = css`
    border: 0;
    border-bottom: 1px solid ${colors['light-gray']};
    padding-left: ${spacing.sm};
    padding-right: ${spacing.sm};
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHead = styled.thead``;
export const HeaderRow = styled.tr``;
export const HeaderCell = styled.th`
    text-align: left;
    padding-top: ${spacing.lg};
    padding-bottom: ${spacing.lg};
    ${sharedCellStyling};
`;

export const TableBody = styled.tbody``;

export const Cell = styled.td`
    ${sharedCellStyling};
    padding: ${spacing.sm} 0;
`;

export const Row = styled.tr`
    cursor: pointer;

    &:hover ${Cell} {
        background-color: ${colors.hover};
    }
`;
