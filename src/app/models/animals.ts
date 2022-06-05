import { VideoDetails } from '../types/clickable-item';

const inSec = (min = 0, seconds = 0) => {
    return min * 60 + seconds;
}

export const animals = new Map<string, Array<VideoDetails>>([
    ['cow', [
        { videoId: 'KjmuBo8xoCU', startTime: 26, endTime: 45}
    ]],
    ['bird', [
        { videoId: 'rV_ERKtNyNA', startTime: 30, endTime: 40}
    ]],
    ['cat', [
        { videoId: 'W86cTIoMv2U', startTime: 16, endTime: 44}
    ]],
    ['dolphin', [
        { videoId: '_bnur3gHJ0s', startTime: 170, endTime: 185}
    ]],
    ['dog', [
        { videoId: '4x2OdlSk5Ms', startTime: inSec(4,1), endTime: inSec(4,11)},
        { videoId: '4x2OdlSk5Ms', startTime: inSec(9), endTime: inSec(9,20)},
    ]],
    ['elephant', [
        { videoId: 'F1zApA1NE6M', startTime: 15, endTime: 40},
        { videoId: 'Hjx-S-6U9k0', startTime: 6, endTime: 18},
    ]],
    ['frog', [
        { videoId: 'bkogBkae-Ks', startTime: 0, endTime: 15},
        { videoId: 'akOIcEND-_w', startTime: 0, endTime: 10}
    ]],
    ['horse', [
        { videoId: 'CU0kyxIiIC0', startTime: 5, endTime: 13}
    ]],
    ['lion', [
        { videoId: 'FmLC0htEXVE', startTime: inSec(78), endTime: inSec(1,15)}
    ]],
    ['penguin', [
        { videoId: 'Ys6D8qrG59s', startTime: 20, endTime: 30},
        { videoId: 'Ys6D8qrG59s', startTime: inSec(1,35), endTime: inSec(1,40)}
    ]],
    ['squirrel', [
        { videoId: 'IMOQv1QHxSQ', startTime: 18, endTime: 25},
        { videoId: 'IMOQv1QHxSQ', startTime: 26, endTime: 36}
    ]],
]);

