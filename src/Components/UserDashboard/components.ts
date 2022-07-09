import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../../Styling/Constants/colors';
import fontSize from '../../Styling/Constants/fontSize';
import misc from '../../Styling/Constants/misc';
import spacing from '../../Styling/Constants/spacing';
import fromSize from '../../Styling/Functions/fromSize';

export const Container = styled.section`
    width: 75%;
    max-width: 60rem;
    border-radius: ${misc.roundedBorders};
    background: ${colors['light-gray']};
    padding: ${spacing.xxxl};
    margin: ${spacing.lg} auto;

    hr {
        border: 0;
        border-top: 1px solid ${colors.highlight};
    }
`;

export const Heading = styled.h1`
    font-size: ${fontSize.xl};
    margin-bottom: ${spacing.md};
    color: ${colors.foreground};
`;

export const SubTitle = styled.h2`
    font-size: ${fontSize.lg};
    margin-bottom: ${spacing.xxl};
    color: ${colors.gray};
    margin-left: ${spacing.md};
`;

export const DashboardItems = styled.div`
    display: grid;
    justify-content: space-between;
    max-width: 25rem;
    grid-gap: ${spacing.xxl};
    padding: ${spacing.xxl};
    margin: 0 auto;
    grid-template-columns: repeat(1, minmax(75px, 100px));

    ${fromSize.sm`
        grid-template-columns: repeat(2, minmax(75px, 100px));
    `}
`;

export const DashboardItem = styled(Link)`
    display: flex;
    border-radius: ${misc.roundedBorders};
    padding: ${spacing.sm} ${spacing.md};
    background: ${colors.accent};
    color: ${colors.background};
    text-decoration: none;
    justify-content: center;
    align-items: center;

    svg {
        margin-right: ${spacing.sm};
        width: 2rem;
        height: 2rem;
    }

    span {
        vertical-align: middle;
        font-size: 1.2rem;
    }
`;
