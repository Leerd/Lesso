import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { FirstComp } from '../Component/FirstComp/FirstComp';
import { SecondComp } from '../Component/SecondComp/SecondComp';
import { TriedComp } from '../Component/TriedComp/TriedComp';
import {StartComp} from "../Component/StartComp/StartComp";
import PhotoService from "../Servises/Photo.service";

const AppRouts: Routes = [
    { path:'', component:FirstComp},
    { path:'second', component:SecondComp},
];

@NgModule({
    declarations: [StartComp, FirstComp, SecondComp, TriedComp],
    bootstrap: [StartComp],
    imports: [BrowserModule, RouterModule.forRoot(AppRouts)],
    providers:[PhotoService]
})
export class GeneralMod {}