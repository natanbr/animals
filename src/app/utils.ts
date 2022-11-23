import { VideoDetails } from './types/clickable-item';

export function normalizeData(data: Map<string, Array<VideoDetails>>): Map<string, Array<VideoDetails>> {
    const normalizedMap = new Map<string, Array<VideoDetails>>();

    data.forEach((v, k) => {
        const videoDetails = v.map(vd => {
            let startTime = vd.startTime;
            let endTime = vd.endTime;

            if (typeof (vd.startTime) === 'string')
                startTime = timeStrToSec(vd.startTime) || 0;

            if (typeof (vd.endTime) === 'string')
                endTime = timeStrToSec(vd.endTime) || 0;

            return { ...vd, startTime, endTime };
        });

        normalizedMap.set(k, videoDetails);
    });

    return normalizedMap;
}

export function timeStrToSec(timeStr: string): number | undefined {
    const timeArr = timeStr.split(":").reverse();

    if (timeArr.length === 2)
        return +timeArr[0] + (+timeArr[1]) * 60;

    return undefined;
}