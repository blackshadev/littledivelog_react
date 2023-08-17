import styled from 'styled-components';

import colors from '../../Styling/Constants/colors';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';

export const ProfileSvg = styled.svg`
    height: 100%;
`;

export const SelectedSampleContainer = styled.dl<{ $position?: { x: number; y: number } }>`
    width: 200px;
    position: absolute;
    display: ${({ $position }): string => ($position ? 'inherit' : 'none')};
    left: ${({ $position }): string => `${$position?.x}px`};
    top: ${({ $position }): string => `${$position?.y}px`};
    transform: translate(-50%, -100%);
    margin-top: -${spacing.md};
    padding: ${spacing.sm};
    border-radius: ${misc.roundedBorders};
    border: 1px solid ${colors.accent};
    background-color: ${colors.background};
    pointer-events: none;
`;

export const SelectedSampleLabel = styled.dt`
    float: left;
    clear: left;
    width: 110px;
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

export const DiveProfileContainer = styled.div`
    position: relative;
`;
