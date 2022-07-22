import React from 'react';

import { useParams } from 'react-router-dom';

import * as api from '../../api/tags';
import TagForm from '../../Components/Forms/TagForm';
import { useApiCall, useApiState } from '../../Context/Auth/callApi';
import useNotification from '../../Context/Notifications/useNotification';
import Notification from '../../Helpers/Notification';

const TagDetail: React.FC = () => {
    const { tagId } = useParams<{ tagId: string }>();
    const [tag, setTag] = useApiState(api.getTag, Number(tagId));
    const saveTag = useApiCall(api.updateTag);
    const notify = useNotification();

    if (tag.loading) {
        return <span>Loading...</span>;
    }

    return (
        <TagForm
            tag={tag.data}
            onSubmit={async (data): Promise<void> => {
                const newTagData = await saveTag(tag.data.tag_id, {
                    color: data.color,
                    text: data.text,
                });

                setTag({
                    data: newTagData,
                    loading: false,
                });
                notify(Notification.success('Tag saved successfully').time());
            }}
        />
    );
};

export default TagDetail;
