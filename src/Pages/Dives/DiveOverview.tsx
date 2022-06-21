import React from 'react';

import { listDives } from '../../api/dives';
import AddButton from '../../Components/Buttons/AddButton';
import DiveList from '../../Components/Listing/DiveList';
import useApiData from '../../Context/Auth/callApi';
import Route from '../../Routing/Routes';

const DiveOverview: React.FC = () => {
    const dives = useApiData(listDives);

    return (
        <>
            <AddButton to={Route.DiveDetailNew} />
            {dives.loading ? <span>Loading...</span> : <DiveList dives={dives.data} />}
        </>
    );
};

export default DiveOverview;
