import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carDealership';

colors = [
  {
    name: "red",
    value: "red"
  },
  {
    name: "black",
    value: "black"
  },
  {
    name: "white",
    value: "white"
  },
  {
    name: "gray",
    value: "gray"
  }
];

options = [
  {
    name: 'true',
    value: 'true'
  },
  {
    name: 'false',
    value: 'false'
  }
]

 constructor(){

 }

 ngOnInit(){

 }

}

