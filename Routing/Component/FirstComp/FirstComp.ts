import {Component} from '@angular/core';
import PhotoService from "../../Servises/Photo.service";
import Photo from "../../Essence/Photos";

@Component({
    selector: 'fc',
    template: require('./FirstCompHTML.html'),
})

export class FirstComp {

    constructor(private Photoservice: PhotoService) {
    }

    public url: Photo[] = [];

    look() {
        this.url = this.Photoservice.getAllImages();
    }
}