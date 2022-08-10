import React from 'react';

import { DownloaderRelease, Platform } from '../../api/downloader';
import getCurrentPlatform from '../../Helpers/getCurrentPlatform';
import { ExplainationText, FileItem, FileLabel, FileListing, Header, Image, Panel, Row } from './components';
import PlatformLabel from './PlatformLabel';

import downloaderImage from '../../assets/downloader.png';

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

            <Row>
                <Panel>
                    <Image src={downloaderImage} alt="Example of the downloader application" />
                </Panel>

                <Panel>
                    <ExplainationText>
                        With the downloader you can download dives straight from your dive computer and upload them to
                        the littledive log. Or download them to a file.
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
                </Panel>
            </Row>
        </>
    );
}
