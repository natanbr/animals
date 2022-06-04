import { trigger, transition, group, query, style, animate } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        // transition('* => *', [
        //     query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(100%)' }),
        //             animate('2s ease-in-out', style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('2s ease-in-out', style({ transform: 'translateX(-100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        transition('Home => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'scale(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'scale(100%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'scale(100%)' }),
                    animate('.3s ease-in-out', style({ transform: 'scale(0)' }))
                ], { optional: true }),
            ])
        ]),
        transition('* => Home', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'scale(0%)' }),
                    animate('1s ease-in-out', style({ transform: 'scale(100%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'scale(100%)' }),
                    animate('.3s ease-in-out', style({ transform: 'scale(0)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Animals => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Video => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('.5s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);