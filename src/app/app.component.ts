import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Car } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carDealership';

filterCars: any;

cars = this.carService.carData;

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
  },
  {
    name: "silver",
    value: "silver"
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
  this.color.valueChanges.subscribe((colorValue) => {
    this.filterCars = this.carService.filterColor(colorValue);
    console.log("the color values", colorValue)
  });

  this.sunroof.valueChanges.subscribe((sunroofValue) => {
    this.carService.filterSunroof(sunroofValue);
    console.log("the sunroof values", sunroofValue)
  });

  this.fourWheel.valueChanges.subscribe((fourWheelValue) => {
    this.carService.filterFourWheel(fourWheelValue);
    console.log("the fourWheel values", fourWheelValue)
  });

  this.lowMileage.valueChanges.subscribe((lowMileageValue) => {
    this.carService.filterLowMileage(lowMileageValue);
    console.log("the lowMileage values", lowMileageValue)
  });
  
  this.powerWindows.valueChanges.subscribe((powerWindowsValue) => {
    this.carService.filterPowerWindows(powerWindowsValue);
    console.log("the powerWindows values", powerWindowsValue)
  });

  this.navigation.valueChanges.subscribe((navigationValue) => {
    this.carService.filterNavigation(navigationValue);
    console.log("the navigation values", navigationValue)
  });

  this.heatedSeats.valueChanges.subscribe((heatedSeatsValue) => {
    this.carService.filterHeatedSeats(heatedSeatsValue);
    console.log("the heatedSeats values", heatedSeatsValue)
  });
 }

 ngOnInit(){

 }

}

