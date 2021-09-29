import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  user!: any;
  content!: any[];
  book!: string;

  course= [
    {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework used to build single-page applications using HTML and TypeScript. ','image':'../../assets/images/angu-img.png','link':'https://angular.io/'},
    {'id':2,'name':'Learn Python/Flask','description':'Flask is a micro web framework written in Python.Flask supports extensions that can add application features as if they were implemented in Flask itself.','image':'../../assets/images/flask-img.png','link':'https://flask.palletsprojects.com/en/2.0.x/'},
    {'id':3,'name':'Learn Reactjs','description':'React makes it easier to create interactive UIs. Declarative views in React make your code more predictable and easier to debug.','image':'../../assets/images/react-img.png','link':'https://reactjs.org/'},
    {'id':4,'name':'Learn JSscript','description':'Javascript is best known as the scripting language for Web pages. It supports object-oriented, imperative, and functional programming styles','image':'../../assets/images/ts-js.png','link':'https://www.w3schools.com/js/DEFAULT.asp'}
  ]
  constructor(private servicesService:ServicesService,private http:HttpClient) {
   
   }
   findBook(){
    this.servicesService.getUser(this.book).subscribe((data) => {
  
    
      // console.table(data)
         return this.user=data;
        
      },(error)=>{
    alert("please write the correct bookname")
  });
  }
  findCont(){
    this.servicesService.getCont(this.book).subscribe((data) => {
      this.content=data
    
      // console.table(data)
         return this.content=data.books;
        
      },(error)=>{
    alert("please write the correct bookname")
      });
    }

  ngOnInit(): void {
    this.book="sql"
      this.findBook()
      this.findCont()
  }

}
