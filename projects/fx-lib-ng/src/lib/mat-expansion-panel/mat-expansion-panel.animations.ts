import { trigger, state, transition, animate, style, AnimationTriggerMetadata } from '@angular/animations';

export const MatExpansionPanelAnimations: {
    readonly indicatorRotate: AnimationTriggerMetadata;
    readonly bodyExpansion: AnimationTriggerMetadata;
  } = {
    indicatorRotate: trigger('indicatorRotate', [
        state('collapsed', style({transform: 'rotate(0deg)'})),
        state('expanded', style({transform: 'rotate(180deg)'})),
        transition('expanded <=> collapsed', animate('0.2s'))
    ]),
    bodyExpansion: trigger('bodyExpansion', [
        transition(':enter', [
            style({height: 0}),
            animate('0.2s', style({height: '*'}))
        ]),
        transition(':leave', [
            animate('0.2s', style({height: '0'}))
        ])
    ])
  }
