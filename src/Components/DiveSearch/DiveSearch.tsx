import React, { useState } from 'react';

import { Close, Search } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import {
    Container,
    RemoveSearchValueButton,
    SearchInput,
    SearchSelect,
    SearchValueItem,
    SearchValuesList,
} from './components';
import { SearchFilter, SearchFilters, SearchOptions } from './types';

const searchOptionLabels: { [key in SearchOptions]: string } = {
    [SearchOptions.Keyword]: 'With keyword',
    [SearchOptions.After]: 'Date after',
    [SearchOptions.Before]: 'Date before',
    [SearchOptions.Buddy]: 'With buddy',
    [SearchOptions.Place]: 'On place',
    [SearchOptions.Tag]: 'With tag',
};

const searchOptions = [
    SearchOptions.Keyword,
    // { label: 'Tag', value: SearchOptions.Tag },
    // { label: 'Buddy', value: SearchOptions.Buddy },
    // { label: 'Before', value: SearchOptions.Before },
    // { label: 'After', value: SearchOptions.After },
];

type Props = {
    value?: SearchFilters;
    onChange?(val: SearchFilters): void;
};

export default function DiveSearch({ value: searchItems = [], onChange }: Props): React.ReactElement {
    const [searchType, setSearchType] = useState<SearchOptions>(SearchOptions.Keyword);
    const [inputValue, setInputValue] = useState<string>('');

    function addItem(newType: SearchOptions, newValue: string): void {
        onChange?.([...searchItems, { type: newType, value: newValue }]);
        setInputValue('');
    }

    function removeItem(item: SearchFilter): void {
        const index = searchItems.indexOf(item);
        if (index === -1) {
            return;
        }

        onChange?.([...searchItems.slice(0, index), ...searchItems.slice(index + 1)]);
    }

    return (
        <Container
            onSubmit={(e): void => {
                e.preventDefault();
                addItem(searchType, inputValue);
            }}
        >
            <SearchInput
                fullWidth
                variant="outlined"
                value={inputValue}
                onChange={(e): void => {
                    setInputValue(e.target.value);
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button type="submit">
                                <Search />
                            </Button>
                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchSelect
                                variant="outlined"
                                value={searchType}
                                onChange={(e): void => setSearchType(e.target.value as SearchOptions)}
                            >
                                {searchOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {searchOptionLabels[opt]}
                                    </option>
                                ))}
                            </SearchSelect>
                        </InputAdornment>
                    ),
                }}
            />
            <SearchValuesList>
                {searchItems.map((item) => (
                    <SearchValueItem key={item.type + ':' + item.value}>
                        {searchOptionLabels[item.type]} {item.value}
                        <RemoveSearchValueButton onClick={(): void => removeItem(item)}>
                            <Close fontSize="small" />
                        </RemoveSearchValueButton>
                    </SearchValueItem>
                ))}
                {/* <SearchValueItem>
                    With tag &quot;test&quot;
                    <RemoveSearchValueButton>
                        <Close fontSize="small" />
                    </RemoveSearchValueButton>
                </SearchValueItem>
                <SearchValueItem>
                    On place &quot;test&quot;
                    <RemoveSearchValueButton>
                        <Close fontSize="small" />
                    </RemoveSearchValueButton>
                </SearchValueItem> */}
            </SearchValuesList>
        </Container>
    );
}
