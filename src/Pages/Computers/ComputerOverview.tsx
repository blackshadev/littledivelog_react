import React from 'react';

import { listComputers } from '../../api/computer';
import ComputerList from '../../Components/Listing/ComputerList';
import useApiData from '../../Context/Auth/callApi';

export default function ComputerOverview(): React.ReactElement {
    const computers = useApiData(listComputers);

    return <>{computers.loading ? <span>Loading...</span> : <ComputerList computers={computers.data} />}</>;
}
