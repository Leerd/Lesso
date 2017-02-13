import {Component} from '@angular/core';
import PhotoService from "../../Servises/Photo.service";
import Photo from "../../Essence/Photos";

@Component({
    selector: 'sc',
    template: require('./SecondCompHTML.html'),
})

export class SecondComp {

    constructor(private Photoservice: PhotoService) {
    }

    public urle: Photo[] = [];

    looks(id) {

        let ID = id.value;
        this.urle = this.Photoservice.getImage(ID);

    }
}
