import React, { useEffect, useState } from 'react';

import { listDives, searchDives } from '../../api/dives';
import { DiveSummary } from '../../api/types/dives/DiveSummary';
import AddButton from '../../Components/Buttons/AddButton';
import DiveSearch from '../../Components/DiveSearch';
import { SearchFilters } from '../../Components/DiveSearch';
import convertFiltersToSearchParams from '../../Components/DiveSearch/convertFiltersToSearchParams';
import DiveList from '../../Components/Listing/DiveList';
import { ApiState } from '../../Context/Auth/callApi';
import useAccessToken from '../../Context/Auth/useAccessToken';
import Route from '../../Routing/Routes';

const DiveOverview: React.FC = () => {
    const { accessToken } = useAccessToken();
    const [filters, setFilters] = useState<SearchFilters>([]);
    const [dives, setDives] = useState<ApiState<DiveSummary[]>>({ data: undefined, loading: true });

    useEffect(() => {
        setDives({ data: undefined, loading: true });
        if (!filters.length) {
            listDives(accessToken).then((dives) => setDives({ data: dives, loading: false }));
        } else {
            searchDives(accessToken, convertFiltersToSearchParams(filters)).then((dives) =>
                setDives({ data: dives, loading: false }),
            );
        }
    }, [filters, accessToken]);

    return (
        <>
            <AddButton to={Route.DiveDetailNew} />
            <DiveSearch value={filters} onChange={(newFilters): void => setFilters(newFilters)} />
            {dives.loading ? <span>Loading...</span> : <DiveList dives={dives.data} />}
        </>
    );
};

export default DiveOverview;
