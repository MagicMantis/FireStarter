
import { trigger, transition, animate, state, style, query } from '@angular/animations';

export let itemAnimation = trigger("fade", [

    transition(':enter', [
        query("mat-card", [
            style({       
                opacity: 0,  
                height: 0,
                "padding-top": 0,
                "padding-bottom": 0, 
                overflow: "hidden",
                "background-color": "lightgrey"
            }),
            animate("300ms 0s ease-out"),
        ])
    ]),

    transition(':leave', [
        query("mat-card", [
            animate("300ms 0s ease-out", style({     
                opacity: 0,      
                height: 0,
                "padding-top": 0,
                "padding-bottom": 0, 
                overflow: "hidden",
                "background-color": "lightgrey"
            })),
        ])
    ]),

]);