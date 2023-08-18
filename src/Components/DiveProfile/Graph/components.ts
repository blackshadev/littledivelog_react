import styled from 'styled-components';

export const StyledLineGroup = styled.g`
    fill: none;
    stroke: blue;
`;

export const ProfileSvg = styled.svg`
    height: 100%;
`;

export const SelectionGroup = styled.g`
    fill: none;
    stroke: coral;
    stroke-width: 3px;
`;

export const HoverGroup = styled.g``;

export const HoverLine = styled.line`
    fill: none;
    stroke: grey;
    stroke-width: 1px;
`;

export const HoverTextBottom = styled.text`
    text-anchor: middle;
    font-size: 10px;
`;

export const HoverTextLeft = styled.text`
    text-anchor: start;
    font-size: 10px;
    transform: translateX(10px);
`;

export const EventsGroup = styled.g`
    fill: coral;
`;
