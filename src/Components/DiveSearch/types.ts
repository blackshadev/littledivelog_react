export enum SearchOptions {
    Keyword = 'keyword',
    Tag = 'tag',
    Buddy = 'buddy',
    Before = 'before',
    After = 'after',
    Place = 'place',
}

export type SearchFilter = { type: SearchOptions; value: string | number };
export type SearchFilters = SearchFilter[];
