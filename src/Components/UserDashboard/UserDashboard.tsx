import React from 'react';

import ComputerIcon from '@mui/icons-material/Computer';
import LabelIcon from '@mui/icons-material/Label';
import PeopleIcon from '@mui/icons-material/People';
import WaterIcon from '@mui/icons-material/Water';

import { Profile } from '../../api/types/profile/profile';
import Route, { route } from '../../Routing/Routes';
import { Container, DashboardItem, DashboardItems, Heading, SubTitle } from './components';

export default function UserDashboard({ userProfile }: { userProfile: Profile }): React.ReactElement {
    return (
        <Container>
            <Heading>Welcome {userProfile.name}!</Heading>
            <SubTitle>Happy logging</SubTitle>
            <hr />

            <DashboardItems>
                <DashboardItem to={route(Route.Dives)} aria-label={`Dive count: ${userProfile.dive_count}`}>
                    <WaterIcon />
                    <span>{userProfile.dive_count}</span>
                </DashboardItem>
                <DashboardItem to={route(Route.Buddies)} aria-label={`Buddy count: ${userProfile.buddy_count}`}>
                    <PeopleIcon />
                    <span>{userProfile.buddy_count}</span>
                </DashboardItem>
                <DashboardItem to={route(Route.Home)} aria-label={`Computer count: ${userProfile.computer_count}`}>
                    <ComputerIcon />
                    <span>{userProfile.computer_count}</span>
                </DashboardItem>
                <DashboardItem to={route(Route.Tags)} aria-label={`Tag count: ${userProfile.tag_count}`}>
                    <LabelIcon />
                    <span>{userProfile.tag_count}</span>
                </DashboardItem>
            </DashboardItems>
        </Container>
    );
}
