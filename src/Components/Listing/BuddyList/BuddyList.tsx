import React from 'react';

import { useNavigate } from 'react-router-dom';

import { BuddySummary } from '../../../api/types/buddies/BuddySummary';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import Route, { route } from '../../../Routing/Routes';
import { Cell, HeaderCell, HeaderRow, Row, Table, TableBody, TableHead } from '../../Table';
import Tag from '../../Tag';

const BuddyList: React.FC<{ buddies: BuddySummary[] }> = ({ buddies }) => {
    const navigate = useNavigate();

    function handleClick(buddyId: number): void {
        navigate(route(Route.BuddyDetail, { buddyId: buddyId + '' }));
    }

    return (
        <Table>
            <TableHead>
                <HeaderRow>
                    <HeaderCell>Name</HeaderCell>
                    <HeaderCell>Last Dive</HeaderCell>
                    <HeaderCell>Dive Count</HeaderCell>
                </HeaderRow>
            </TableHead>
            <TableBody>
                {buddies.map((buddy) => (
                    <Row key={buddy.buddy_id} onClick={(): void => handleClick(buddy.buddy_id)}>
                        <Cell>
                            <Tag label={buddy.text} backgroundColor={buddy.color} />
                        </Cell>
                        <Cell>{formatDatetime(buddy.last_dive)}</Cell>
                        <Cell>{buddy.dive_count}</Cell>
                    </Row>
                ))}
            </TableBody>
        </Table>
    );
};

export default BuddyList;
