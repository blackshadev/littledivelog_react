import React from 'react';

import { listTags } from '../../api/tags';
import AddButton from '../../Components/Buttons/AddButton';
import TagList from '../../Components/Listing/TagList';
import useApiData from '../../Context/Auth/callApi';
import Route from '../../Routing/Routes';

const TagsOverview: React.FC = () => {
    const tags = useApiData(listTags);

    return (
        <>
            <AddButton to={Route.TagDetailNew} />
            {tags.loading ? <span>Loading...</span> : <TagList tags={tags.data} />}
        </>
    );
};

export default TagsOverview;
