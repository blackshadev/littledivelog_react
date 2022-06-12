import React from 'react';

import { useNavigate } from 'react-router-dom';

import { TagSummary } from '../../../api/types/tags/TagSummary';
import formatDatetime from '../../../Helpers/Formatters/formatDatetime';
import Route, { route } from '../../../Routing/Routes';
import { Cell, HeaderCell, HeaderRow, Row, Table, TableBody, TableHead } from '../../Table';
import Tag from '../../Tag';

const TagList: React.FC<{ tags: TagSummary[] }> = ({ tags }) => {
    const navigate = useNavigate();

    function handleClick(tagId: number): void {
        navigate(route(Route.TagDetail, { tagId: tagId + '' }));
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
                {tags.map((tag) => (
                    <Row key={tag.tag_id} onClick={(): void => handleClick(tag.tag_id)}>
                        <Cell>
                            <Tag label={tag.text} backgroundColor={tag.color} />
                        </Cell>
                        <Cell>{formatDatetime(tag.last_dive)}</Cell>
                        <Cell>{tag.dive_count}</Cell>
                    </Row>
                ))}
            </TableBody>
        </Table>
    );
};

export default TagList;
