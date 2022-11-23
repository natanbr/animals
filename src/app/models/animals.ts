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
        {videoId: 'GIAjzCH3X8Q', startTime: '0:09', endTime: '0:29'}
    ]],
    [ 'Fox' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '0:29', endTime: '0:49'}
    ]],
    [ 'Tiger' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '0:49', endTime: '1:09'}
    ]],
    [ 'Wolf' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:09', endTime: '1:29'}
    ]],
    [ 'Giraffe' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:29', endTime: '1:49'}
    ]],
    [ 'Panda' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '1:49', endTime: '2:09'}
    ]],
    [ 'Orangutan' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:09', endTime: '2:29'}
    ]],
    [ 'Kangaroo' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:29', endTime: '2:49'}
    ]],
    [ 'Grizzly Bear' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '2:49', endTime: '3:09'}
    ]],
    [ 'Rhinoceros' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '3:09', endTime: '3:29'}
    ]],
    [ 'Koala' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '3:29', endTime: '3:49'}
    ]],
    [ 'Sealion' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '3:49', endTime: '4:09'}
    ]],
    [ 'Meerkat' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '4:09', endTime: '4:29'}
    ]],
    [ 'Lion' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '4:29', endTime: '4:49'}
    ]],
    [ 'Penguin' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '4:49', endTime: '5:09'}
    ]],
    [ 'Leopard' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '5:09', endTime: '5:29'}
    ]],
    [ 'Polar Bear' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '5:29', endTime: '5:49'}
    ]],
    [ 'Hippopotamus' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '5:49', endTime: '6:09'}
    ]],
    [ 'Owl' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:09', endTime: '6:29'}
    ]],
    [ 'Elephant' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:29', endTime: '6:49'}
    ]],
    [ 'Gorilla' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '6:49', endTime: '7:09'}
    ]],
    [ 'Ostrich' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:09', endTime: '7:29'}
    ]],
    [ 'Boa Constrictor' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:29', endTime: '7:49'}
    ]],
    [ 'Zebra' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '7:49', endTime: '8:09'}
    ]],
    [ 'Chimpanzee' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '8:09', endTime: '8:29'}
    ]],
    [ 'Muskox' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '8:29', endTime: '8:49'}
    ]],
    [ 'Crocodile' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '8:49', endTime: '9:09'}
    ]],
    [ 'Sloth' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '9:09', endTime: '9:29'}
    ]],
    [ 'Otter' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '9:29', endTime: '9:49'}
    ]],
    [ 'Moose' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '9:49', endTime: '10:09'}
    ]],
    [ 'Hyena' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '10:09', endTime: '10:29'}
    ]],
    [ 'Lynx' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '10:29', endTime: '10:49'}
    ]],
    [ 'Lemur' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '10:49', endTime: '11:09'}
    ]],
    [ 'Anteater' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '11:09', endTime: '11:29'}
    ]],
    [ 'Capybara' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '11:29', endTime: '11:49'}
    ]],
    [ 'Bearcat' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '11:49', endTime: '12:09'}
    ]],
    [ 'Gazelle' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '12:09', endTime: '12:29'}
    ]],
    [ 'Cougar' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '12:29', endTime: '12:49'}
    ]],
    [ 'Baboon' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '12:49', endTime: '13:09'}
    ]],
    [ 'African Buffalo' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '13:09', endTime: '13:29'}
    ]],
    [ 'Bonobo' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '13:29', endTime: '13:49'}
    ]],
    [ 'Seal' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '13:49', endTime: '14:09'}
    ]],
    [ 'Chameleon' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '14:09', endTime: '14:29'}
    ]],
    [ 'Snow Leopard' , [
        {videoId: 'GIAjzCH3X8Q', startTime: '14:29', endTime: '15:00'}
    ]],
]));

// 0:09 Cheetah
// 0:29 Fox
// 0:49 Tiger
// 1:09 Wolf
// 1:29 Giraffe
// 1:49 Panda
// 2:09 Orangutan
// 2:29 Kangaroo
// 2:49 Grizzly Bear
// 3:09 Rhinoceros
// 3:29 Koala
// 3:49 Sealion
// 4:09 Meerkat
// 4:29 Lion
// 4:49 Penguin
// 5:09 Leopard
// 5:29 Polar Bear
// 5:49 Hippopotamus
// 6:09 Owl
// 6:29 Elephant
// 6:49 Gorilla
// 7:09 Ostrich
// 7:29 Boa Constrictor
// 7:49 Zebra
// 8:09 Chimpanzee
// 8:29 Muskox
// 8:49 Crocodile
// 9:09 Sloth
// 9:29 Otter
// 9:49 Moose
// 10:09 Hyena
// 10:29 Lynx
// 10:49 Lemur
// 11:09 Anteater
// 11:29 Capybara
// 11:49 Bearcat
// 12:09 Gazelle
// 12:29 Cougar
// 12:49 Baboon
// 13:09 African Buffalo
// 13:29 Bonobo
// 13:49 Seal
// 14:09 Chameleon
// 14:29 Snow Leopard