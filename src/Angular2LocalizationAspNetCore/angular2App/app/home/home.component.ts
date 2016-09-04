import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'homecomponent',
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = "home.component";
    }

    ngOnInit() {
        console.log("ngOnInit HomeComponent");
    }
}
