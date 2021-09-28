import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course= [
  {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework used to build single-page applications using HTML and TypeScript. ','image':'./assets/images/angu-img.png'},
  {'id':2,'name':'Learn Python/Flask','description':'Flask is a micro web framework written in Python.Flask supports extensions that can add application features as if they were implemented in Flask itself.','image':'../../assets/images/flask-img.png'},
  {'id':3,'name':'Learn Reactjs','description':'React makes it easier to create interactive UIs. Declarative views in React make your code more predictable and easier to debug.','image':'../../assets/images/react-img.png'},
  {'id':4,'name':'Learn JSscript','description':'Javascript is best known as the scripting language for Web pages. It supports object-oriented, imperative, and functional programming styles','image':'../../assets/images/ts-js.png'}
]
}
