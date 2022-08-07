import React from 'react';

import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Platform } from '../../api/downloader';
import { PlatformLabel as StyledPlatformLabel } from './components';

export default function PlatformLabel({ platform }: { platform: Platform }): React.ReactElement {
    switch (platform) {
        case Platform.Linux:
            return (
                <StyledPlatformLabel>
                    <FontAwesomeIcon icon={faLinux} />
                </StyledPlatformLabel>
            );
        case Platform.Windows:
            return (
                <StyledPlatformLabel>
                    <FontAwesomeIcon icon={faWindows} />
                </StyledPlatformLabel>
            );
        case Platform.Mac:
            return (
                <StyledPlatformLabel>
                    <FontAwesomeIcon icon={faApple} />
                </StyledPlatformLabel>
            );
        default:
            throw new Error('Unknown platform to display');
    }
}
