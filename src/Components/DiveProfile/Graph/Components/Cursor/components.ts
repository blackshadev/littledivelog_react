import { styled } from 'styled-components';

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
