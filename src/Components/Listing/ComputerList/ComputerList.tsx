import React from 'react';

import { Computer } from '../../../api/types/computers/Computer';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import { Cell, HeaderCell, HeaderRow, Row, Table, TableBody, TableHead } from '../../Table';

type Props = {
    computers: Computer[];
};

export default function ComputerList({ computers }: Props): React.ReactElement {
    return (
        <Table>
            <TableHead>
                <HeaderRow>
                    <HeaderCell>Name</HeaderCell>
                    <HeaderCell>Vendor</HeaderCell>
                    <HeaderCell>Last Read</HeaderCell>
                    <HeaderCell>Dive Count</HeaderCell>
                </HeaderRow>
            </TableHead>
            <TableBody>
                {computers.map((computer) => (
                    <Row key={computer.computer_id}>
                        <Cell>{computer.name}</Cell>
                        <Cell>{computer.vendor}</Cell>
                        <Cell>{formatDatetime(computer.last_read)}</Cell>
                        <Cell>{computer.dive_count}</Cell>
                    </Row>
                ))}
            </TableBody>
        </Table>
    );
}
