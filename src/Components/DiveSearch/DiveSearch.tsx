import React, { useState } from 'react';

import { Close, Search } from '@mui/icons-material';
import { Button, InputAdornment } from '@mui/material';

import { Container, RemoveSearchValueButton, SearchInput, SearchValueItem, SearchValuesList } from './components';
import { searchOptionLabels, SearchOptions } from './searchOptions';
import { SearchFilter, SearchFilters } from './types';

type Props = {
    value?: SearchFilters;
    onChange?(val: SearchFilters): void;
};

export default function DiveSearch({ value: searchItems = [], onChange }: Props): React.ReactElement {
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
                addItem(SearchOptions.Keyword, inputValue);
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
                    startAdornment: (
                        <InputAdornment position="start">
                            <Button type="submit">
                                <Search />
                            </Button>
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
            </SearchValuesList>
        </Container>
    );
}
