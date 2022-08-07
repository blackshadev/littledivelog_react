import axios from 'axios';

import { DOWNLOADER_REPO } from './config';

export enum Platform {
    Windows,
    Linux,
    Mac,
    Unknown,
}
interface ReleaseFile {
    filename: string;
    downloadURL: string;
    platform: Platform;
}

export interface DownloaderRelease {
    version: string;
    files: ReleaseFile[];
}

interface GHResponse {
    url: string;
    tag_name: string;
    published_at: string;
    assets: {
        name: string;
        browser_download_url: string;
    }[];
}

function getPlatformFromString(file: string): Platform {
    if (file.endsWith('.exe')) {
        return Platform.Windows;
    }
    if (file.endsWith('.deb')) {
        return Platform.Linux;
    }
    if (file.endsWith('.rpm')) {
        return Platform.Linux;
    }

    return Platform.Unknown;
}

export async function getDownloaderRelease(): Promise<DownloaderRelease> {
    const release = await axios.get<GHResponse>(`https://api.github.com/repos/${DOWNLOADER_REPO}/releases/latest`);

    if (release.status !== 200) {
        throw new Error('Unable to get downloade release: ' + release.data);
    }

    const files: ReleaseFile[] = [];

    for (const releaseFile of release.data.assets) {
        files.push({
            downloadURL: releaseFile.browser_download_url,
            filename: releaseFile.name,
            platform: getPlatformFromString(releaseFile.name),
        });
    }

    return {
        files,
        version: release.data.tag_name,
    };
}
