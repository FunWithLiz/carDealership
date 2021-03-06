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
    this.cars = this.carService.filterColor(colorValue);
  });

  this.sunroof.valueChanges.subscribe((sunroofValue) => {
    this.carService.filterSunroof(sunroofValue);
    this.cars = this.carService.filterSunroof(sunroofValue);
  });

  this.fourWheel.valueChanges.subscribe((fourWheelValue) => {
    this.carService.filterFourWheel(fourWheelValue);
    this.cars = this.carService.filterFourWheel(fourWheelValue);
  });

  this.lowMileage.valueChanges.subscribe((lowMileageValue) => {
    this.carService.filterLowMileage(lowMileageValue);
    this.cars = this.carService.filterLowMileage(lowMileageValue);
  });
  
  this.powerWindows.valueChanges.subscribe((powerWindowsValue) => {
    this.carService.filterPowerWindows(powerWindowsValue);
    this.cars = this.carService.filterPowerWindows(powerWindowsValue);
  });

  this.navigation.valueChanges.subscribe((navigationValue) => {
    this.carService.filterNavigation(navigationValue);
    this.cars = this.carService.filterNavigation(navigationValue);
  });

  this.heatedSeats.valueChanges.subscribe((heatedSeatsValue) => {
    this.carService.filterHeatedSeats(heatedSeatsValue);
    this.cars = this.carService.filterHeatedSeats(heatedSeatsValue);
  });





 }

 ngOnInit(){

 }

}

