import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  

  constructor() { }
  getName(){
    alert("we will get back to you")
  }

  ngOnInit(): void {

  }
 

}
