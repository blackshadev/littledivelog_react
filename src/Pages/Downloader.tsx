import { getDownloaderRelease } from '../api/downloader';
import DownloadDownloader from '../Components/DownloadDownloader';
import usePromise, { PromiseState } from '../Helpers/usePromise';

export default function Downloader(): React.ReactElement {
    const [release, , state] = usePromise(getDownloaderRelease());

    if (state !== PromiseState.Resolved) {
        return <span>Getting latest release ...</span>;
    }

    return <DownloadDownloader release={release} />;
}
