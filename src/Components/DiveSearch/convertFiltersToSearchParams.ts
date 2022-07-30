import { DiveSearchParameters } from '../../api/types/dives/DiveSearchParameters';
import { SearchOptions } from './searchOptions';
import { SearchFilters } from './types';

export default function convertFiltersToSearchParams(filters: SearchFilters): DiveSearchParameters {
    const params: DiveSearchParameters = {};

    for (const filter of filters) {
        switch (filter.type) {
            case SearchOptions.Keyword:
                params.keywords = params.keywords ? `${params.keywords} ${filter.value}` : (filter.value as string);
                break;
            default:
                throw new Error('Not yet supported');
        }
    }

    return params;
}
