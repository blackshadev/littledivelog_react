import React from 'react';

import { DownloaderRelease, Platform } from '../../api/downloader';
import getCurrentPlatform from '../../Helpers/getCurrentPlatform';
import { ExplainationText, FileItem, FileLabel, FileListing, Header } from './components';
import PlatformLabel from './PlatformLabel';

export default function DownloadDownloader({ release }: { release: DownloaderRelease }): React.ReactElement {
    const platform = getCurrentPlatform();

    const downloadableFiles = release.files
        .filter((file) => file.platform !== Platform.Unknown)
        .sort((a, b) =>
            a.platform === platform && b.platform !== platform
                ? -1
                : a.platform !== platform && b.platform === platform
                ? 1
                : 0,
        );

    return (
        <>
            <Header>Downloader {release.version}</Header>

            <ExplainationText>
                With the downloader you can download dives straight from your dive computer to the littledive log.
            </ExplainationText>

            <FileListing>
                {downloadableFiles.map((file) => (
                    <FileItem isCurrentPlatform={file.platform === platform} key={file.filename}>
                        <a href={file.downloadURL}>
                            <PlatformLabel platform={file.platform} />
                            <FileLabel>{file.filename}</FileLabel>
                        </a>
                    </FileItem>
                ))}
            </FileListing>
        </>
    );
}
