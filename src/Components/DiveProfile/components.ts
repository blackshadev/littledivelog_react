import styled from 'styled-components';

export const ProfileSvg = styled.svg`
    height: 100%;
`;

export const SelectedSampleContainer = styled.dl<{ $position?: { x: number; y: number } }>`
    width: 250px;
    display: ${({ $position }): string => ($position ? 'grid' : 'none')};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    position: absolute;
    left: 0;
    right: 0;
`;

export const SelectedSampleLabel = styled.dt``;

export const SelectedSampleValue = styled.dd``;
