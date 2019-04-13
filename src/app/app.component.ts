import { Component, OnInit } from '@angular/core';
import { Car } from './car.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carDealership';

  carDes: FormGroup;
  color: FormControl;
  sunroof: FormControl;
  fourWheel: FormControl;
  lowMileage: FormControl;
  powerWindows: FormControl;
  navigation: FormControl;
  heatedSeats: FormControl;

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

 constructor(public carService: Car){
  this.color = new FormControl();
  this.sunroof = new FormControl();
  this.fourWheel = new FormControl();
  this.lowMileage = new FormControl();
  this.powerWindows = new FormControl();
  this.navigation = new FormControl();
  this.heatedSeats = new FormControl();
  this.carDes = new FormGroup({
    Color: this.color,
    Sunroof: this.sunroof,
    FourWheel: this.fourWheel,
    LowMileage: this.lowMileage,
    PowerWindows: this.powerWindows,
    Nagivation: this.navigation,
    HeatedSeats: this.heatedSeats
  })
 }

 ngOnInit(){

 }

}

