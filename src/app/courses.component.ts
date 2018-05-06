import {Component} from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
    <h2> {{ numCourses }} {{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    <div (click) = "onDivClicked()">
    <button class="btn btn-primary" [class.active]="isActive" (click) = "onSave($event)"> Save
    </button>
    </div>
    <input type= "text" [(ngModel)]="movie" (keyup.enter)="onKeyUp()" /> <br/>
    {{ movie | titleCase }}
    `
})
export class CoursesComponent {
title = "List of courses";
movie = "";

getTitle() {
   return this.title; 
}

courses : string[];
numCourses : number;
constructor(service: CoursesService)
{
    this.courses = service.getCourses();
    this.numCourses = this.courses.length;
}

isActive = true;
onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
}

onDivClicked(){
    console.log("Div was clicked");
}

onKeyUp(){
    console.log(this.movie);
}

}