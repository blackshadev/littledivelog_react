import React from 'react';

import { listTags } from '../../api/tags';
import TagList from '../../Components/Listing/TagList';
import useApiData from '../../Context/Auth/callApi';

const TagsOverview: React.FC = () => {
    const tags = useApiData(listTags);

    if (tags.loading) {
        return <span>Loading...</span>;
    }

    return <TagList tags={tags.data} />;
};

export default TagsOverview;
