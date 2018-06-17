import { Injectable } from '@angular/core';
import {HttpClient}  from  '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient ) {
  		
    

   }


   create(task,cb){

   	this._http.post('/tasks',task)


   	.subscribe(data=>cb(data));

   }

   all(cb){

   	this._http.get("/tasks")
   	.subscribe(data=>cb(data));

   }

   
    
   } 



