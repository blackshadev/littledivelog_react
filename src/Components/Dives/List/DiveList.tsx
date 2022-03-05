import React from 'react';

import { useNavigate } from 'react-router-dom';

import { DiveSummary } from '../../../api/types/dives/DiveSummary';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import formatDivetime from '../../../Helpers/Formatters/formatDiveTime';
import formatPlace from '../../../Helpers/Formatters/formatPlace';
import { Route, route } from '../../../Routing/Routes';
import {
    Cell,
    HeaderCell,
    HeaderRow,
    Row,
    Table,
    TableBody,
    TableHead,
} from '../../Table';

const DiveList: React.FC<{ dives: DiveSummary[] }> = ({ dives }) => {
    const navigate = useNavigate();

    function handleClick(diveId: number): void {
        navigate(route(Route.DiveDetail, { diveId: diveId + '' }));
    }

    return (
        <Table>
            <TableHead>
                <HeaderRow>
                    <HeaderCell>Date</HeaderCell>
                    <HeaderCell>Divetime</HeaderCell>
                    <HeaderCell>Tags</HeaderCell>
                    <HeaderCell>Divespot</HeaderCell>
                </HeaderRow>
            </TableHead>
            <TableBody>
                {dives.map((dive) => (
                    <Row
                        key={dive.dive_id}
                        onClick={(): void => handleClick(dive.dive_id)}
                    >
                        <Cell>{formatDatetime(dive.date)}</Cell>
                        <Cell>{formatDivetime(dive.divetime)}</Cell>
                        <Cell>{dive.tags.map((t) => t.text).join(', ')}</Cell>
                        <Cell>{formatPlace(dive.place)}</Cell>
                    </Row>
                ))}
            </TableBody>
        </Table>
    );
};

export default DiveList;
