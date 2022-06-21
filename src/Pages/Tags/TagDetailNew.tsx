import React from 'react';

import { useNavigate } from 'react-router-dom';

import * as api from '../../api/tags';
import TagForm from '../../Components/Forms/TagForm';
import { useApiCall } from '../../Context/Auth/callApi';
import { randomColor } from '../../Helpers/Colors/randomColor';
import Route, { route } from '../../Routing/Routes';

const TagDetailNew: React.FC = () => {
    const saveTag = useApiCall(api.newTag);
    const navigate = useNavigate();

    return (
        <TagForm
            tag={{
                color: randomColor(),
                text: '',
            }}
            onSubmit={async (data): Promise<void> => {
                const tag = await saveTag(data);
                navigate(route(Route.TagDetail, { tagId: tag.tag_id + '' }));
            }}
        />
    );
};

export default TagDetailNew;
