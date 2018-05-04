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
    `
})
export class CoursesComponent {
title = "List of courses";

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
}