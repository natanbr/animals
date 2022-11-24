import { VideoDetails, VideoDetailsStr } from '../types/clickable-item';
import { normalizeData } from '../utils';

const inSec = (min = 0, seconds = 0) => {
    return min * 60 + seconds;
}

// export const animals = new Map<string, Array<VideoDetails>>([
//     ['cow', [
//         { videoId: 'KjmuBo8xoCU', startTime: 26, endTime: 45}
//     ]],
//     ['bird', [
//         { videoId: 'rV_ERKtNyNA', startTime: 30, endTime: 40}
//     ]],
//     ['cat', [
//         { videoId: 'W86cTIoMv2U', startTime: 16, endTime: 44}
//     ]],
//     ['dolphin', [
//         { videoId: '_bnur3gHJ0s', startTime: 170, endTime: 185}
//     ]],
//     ['dog', [
//         { videoId: '4x2OdlSk5Ms', startTime: inSec(4,1), endTime: inSec(4,11)},
//         { videoId: '4x2OdlSk5Ms', startTime: inSec(9), endTime: inSec(9,20)},
//     ]],
//     ['elephant', [
//         { videoId: 'F1zApA1NE6M', startTime: 15, endTime: 40},
//         { videoId: 'Hjx-S-6U9k0', startTime: 6, endTime: 18},
//     ]],
//     ['frog', [
//         { videoId: 'bkogBkae-Ks', startTime: 0, endTime: 15},
//         { videoId: 'akOIcEND-_w', startTime: 0, endTime: 10}
//     ]],
//     ['horse', [
//         { videoId: 'CU0kyxIiIC0', startTime: 5, endTime: 13}
//     ]],
//     ['lion', [
//         { videoId: 'FmLC0htEXVE', startTime: inSec(78), endTime: inSec(1,15)}
//     ]],
//     ['penguin', [
//         { videoId: 'Ys6D8qrG59s', startTime: 20, endTime: 30},
//         { videoId: 'Ys6D8qrG59s', startTime: inSec(1,35), endTime: inSec(1,40)}
//     ]],
//     ['squirrel', [
//         { videoId: 'IMOQv1QHxSQ', startTime: 18, endTime: 25},
//         { videoId: 'IMOQv1QHxSQ', startTime: 26, endTime: 36}
//     ]],
// ]);
export const animals = normalizeData(new Map<string, Array<VideoDetailsStr>>([
    [ 'Cheetah' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '0:09', endTime: '0:27'}
    ]],
    [ 'Fox' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '0:29', endTime: '0:47'}
    ]],
    [ 'Tiger' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '0:49', endTime: '1:07'}
    ]],
    [ 'Wolf' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:09', endTime: '1:27'}
    ]],
    [ 'Giraffe' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:29', endTime: '1:47'}
    ]],
    [ 'Panda' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:49', endTime: '2:07'}
    ]],
    [ 'Orangutan' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:09', endTime: '2:27'}
    ]],
    [ 'Kangaroo' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:29', endTime: '2:47'}
    ]],
    [ 'Grizzly-Bear' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:49', endTime: '3:07'}
    ]],
    [ 'Rhinoceros' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '3:09', endTime: '3:27'}
    ]],
    [ 'Koala' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '3:29', endTime: '3:47'}
    ]],
    // [ 'Sealion' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '3:49', endTime: '4:07'}
    // ]],
    // [ 'Meerkat' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '4:09', endTime: '4:27'}
    // ]],
    [ 'Lion' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '4:29', endTime: '4:47'}
    ]],
    [ 'Penguin' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '4:49', endTime: '5:07'}
    ]],
    [ 'Leopard' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '5:09', endTime: '5:27'}
    ]],
    // [ 'Polar Bear' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '5:29', endTime: '5:47'}
    // ]],
    [ 'Hippopotamus' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '5:49', endTime: '6:07'}
    ]],
    [ 'Owl' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:09', endTime: '6:27'}
    ]],
    [ 'Elephant' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:29', endTime: '6:47'}
    ]],
    [ 'Gorilla' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:49', endTime: '7:07'}
    ]],
    [ 'Ostrich' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:09', endTime: '7:27'}
    ]],
    [ 'Boa Constrictor' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:29', endTime: '7:47'}
    ]],
    [ 'Zebra' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:49', endTime: '8:07'}
    ]],
    // [ 'Chimpanzee' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '8:09', endTime: '8:27'}
    // ]],
    // [ 'Muskox' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '8:29', endTime: '8:47'}
    // ]],
    [ 'Crocodile' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '8:49', endTime: '9:07'}
    ]],
    [ 'Sloth' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '9:09', endTime: '9:27'}
    ]],
    // [ 'Otter' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '9:29', endTime: '9:47'}
    // ]],
    // [ 'Moose' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '9:49', endTime: '10:07'}
    // ]],
    // [ 'Hyena' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '10:09', endTime: '10:27'}
    // ]],
    // [ 'Lynx' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '10:29', endTime: '10:47'}
    // ]],
    [ 'Lemur' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '10:49', endTime: '11:07'}
    ]],
    // [ 'Anteater' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '11:09', endTime: '11:27'}
    // ]],
    // [ 'Capybara' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '11:29', endTime: '11:47'}
    // ]],
    // [ 'Bearcat' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '11:49', endTime: '12:07'}
    // ]],
    // [ 'Gazelle' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '12:09', endTime: '12:27'}
    // ]],
    // [ 'Cougar' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '12:29', endTime: '12:47'}
    // ]],
    // [ 'Baboon' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '12:49', endTime: '13:07'}
    // ]],
    // [ 'African Buffalo' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '13:09', endTime: '13:27'}
    // ]],
    // [ 'Bonobo' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '13:29', endTime: '13:47'}
    // ]],
    // [ 'Seal' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '13:49', endTime: '14:07'}
    // ]],
    // [ 'Chameleon' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '14:09', endTime: '14:27'}
    // ]],
    // [ 'Snow Leopard' , [
    //     {videoId: 'GIAjzCH3X8Q', startTime: '14:29', endTime: '15:00'}
    // ]],
]));
