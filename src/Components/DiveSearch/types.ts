import { SearchOptions } from './searchOptions';

export type SearchFilter = { type: SearchOptions; value: string | number };
export type SearchFilters = SearchFilter[];
