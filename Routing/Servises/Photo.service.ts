import Photo from "../Essence/Photos";

export default class PhotoService {
    constructor() {
    }
    public urle: Photo[] = [];
    public urls: Photo[] = [];

    getAllImages() {
       let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', false);
        xhr.send();
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            let jso = JSON.parse(xhr.responseText);
            for (let i = 0; i < jso.length; i++) {
                this.urls.push(new Photo(jso[i].url));
            }
           // console.log(this.urls);
            return this.urls
        }
    }

    getImage(id) {
        this.urle = [];
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos/' + id, false);
        xhr.send();
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {
            let jso = JSON.parse(xhr.responseText);
            this.urle.push(new Photo(jso.url));
        }
        console.log(this.urle);
        return this.urle

    }

}