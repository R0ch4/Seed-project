import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles:[`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width:80%;
        }
        .config{
            display: inline-block;
            text-aling: right;
            font-size: 12px;
            width:15%;  
        }
    `]
})

export class MessageComponent{
    //input da classe angular core importada
    //esse message é o que está na app.component dentro da tag app-message em [message]
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit(){
        this.editClicked.emit('A new event');
    }
}