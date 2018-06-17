import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
		private task:any;
		private tasks:"";
  constructor(private ts:HttpService) { }

  ngOnInit() {

  	this.task={
  		title:"",
  		description:"",
  		completed:false
  	};

  	this.all();
  }

  create(){
  	this.ts.create(this.task,(data)=>{
      console.log("its from task component",data)
      // this.task=this.task;

  	});
  }

  all(){
  	this.ts.all(data=>{
  		this.tasks=data.tasks;
      console.log(data)
  	});

  
  }

   onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
  }






}
