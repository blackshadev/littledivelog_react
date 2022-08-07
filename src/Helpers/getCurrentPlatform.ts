import { Platform } from '../api/downloader';

export default function getCurrentPlatform(): Platform {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Win')) {
        return Platform.Windows;
    }

    if (userAgent.includes('Linux')) {
        return Platform.Linux;
    }

    if (userAgent.includes('Mac')) {
        return Platform.Mac;
    }

    return Platform.Unknown;
}
