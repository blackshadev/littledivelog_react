import { styled } from 'styled-components';

import colors from '../../../Styling/Constants/colors';
import misc from '../../../Styling/Constants/misc';
import spacing from '../../../Styling/Constants/spacing';

export const SelectedSampleContainer = styled.dl<{ $position?: { x: number; y: number }; $isAbove: boolean }>`
    width: 220px;
    position: absolute;
    display: ${({ $position }): string => ($position ? 'grid' : 'none')};
    grid-template-columns: repeat(2, auto);
    left: ${({ $position }): string => `${$position?.x}px`};
    top: ${({ $position }): string => `${$position?.y}px`};
    transform: ${({ $isAbove }): string => ($isAbove ? `translate(-50%, -90%)` : `translate(-50%, 0)`)};
    margin-top: ${({ $isAbove }): string => ($isAbove ? `-${spacing.xl}` : spacing.xl)};
    padding: ${spacing.sm};
    border-radius: ${misc.roundedBorders};
    border: 1px solid ${colors.accent};
    background-color: ${colors.background};
    pointer-events: none;
`;

export const SelectedSampleLabel = styled.dt`
    font-weight: bold;

    &::after {
        content: ':';
    }
`;

export const SelectedSampleValue = styled.dd`
    margin: 0 0 ${spacing.sm} ${spacing.sm};
    &:last-child {
        margin: 0 0 0 ${spacing.sm};
    }
`;
