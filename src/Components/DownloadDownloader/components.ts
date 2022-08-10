import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import colors from '../../Styling/Constants/colors';
import fontSize from '../../Styling/Constants/fontSize';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';
import fromSize from '../../Styling/Functions/fromSize';

export const Header = styled.h1`
    margin-bottom: ${spacing.md};
    font-size: ${fontSize.lg};
`;

export const ExplainationText = styled.p`
    margin-bottom: ${spacing.md};
`;

export const FileListing = styled.ul``;

export const FileItem = styled.li<{ isCurrentPlatform: boolean }>`
    margin-bottom: ${spacing.sm};

    a {
        display: flex;
        border-radius: ${misc.roundedBorders};
        border: 1px solid ${colors.accent};

        padding: ${spacing.md};
        color: ${colors.background};
        text-decoration: none;
        max-width: 350px;
        align-items: center;

        ${({ isCurrentPlatform }): FlattenSimpleInterpolation => css`
            background: ${isCurrentPlatform ? colors.accent : colors.background};
            color: ${isCurrentPlatform ? colors.background : colors.accent};
        `}
    }
`;

export const PlatformLabel = styled.span`
    margin-right: ${spacing.md};
    font-size: ${fontSize.lg};
`;
export const FileLabel = styled.span`
    word-break: break-all;
`;

export const Image = styled.img`
    border: 1px solid ${colors.foreground};
    border-radius: ${misc.roundedBorders};
    box-shadow: ${misc.shadow};
    overflow: hidden;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column-reverse;

    ${fromSize.lg`
        flex-direction: row;
    `}
`;

export const Panel = styled.div`
    margin-right: ${spacing.md};
    margin-bottom: ${spacing.md};
`;
