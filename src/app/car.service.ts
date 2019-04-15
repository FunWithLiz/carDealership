import { Injectable, OnInit } from '@angular/core';
import { filter } from 'lodash';

@Injectable()
export class Car implements OnInit {

returnCarArray = [];

    id: string; 
    make: string; 
    year: number;
    color: string; 
    price: number;
    hasSunroof: string; 
    isFourWheelDrive: string; 
    hasLowMiles: string;
    hasPowerWindows: string; 
    hasNavigation: string;
    hasHeatedSeats: string;


  public carData = [
    {
        id: "59d2698c2eaefb1268b69ee5", 
        make: "Chevy", 
        year: 2016, 
        color: "Gray", 
        price: 16106, 
        hasSunroof: 'false', 
        isFourWheelDrive: 'true', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'false', 
        hasNavigation: 'true', 
        hasHeatedSeats: 'false' 
    },     
    { 
        id: "59d2698c05889e0b23959106",
        make: "Toyota", 
        year: 2012, 
        color: "Silver", 
        price: 18696, 
        hasSunroof: 'true', 
        isFourWheelDrive: 'true', 
        hasLowMiles: 'false', 
        hasPowerWindows: 'true', 
        hasNavigation: 'false', 
        hasHeatedSeats: 'true' 
    }, 
    { 
        id: "59d2698c6f1dc2cbec89c413",
        make: "Mercedes",
        year: 2016, 
        color: "Black", 
        price: 18390, 
        hasSunroof: 'true', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'false', 
        hasPowerWindows: 'true', 
        hasNavigation: 'true', 
        hasHeatedSeats: 'false' 
    }, 
    {   id: "59d2698c340f2728382c0a73", 
        make: "Toyota", 
        year: 2015, 
        color: "White", 
        price: 15895, 
        hasSunroof: 'true', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'true', 
        hasNavigation: 'false', 
        hasHeatedSeats: 'true' 
    },
    { 
        id: "59d2698cba9b82c2347cd13a", 
        make: "Ford", 
        year: 2014, 
        color: "Gray", 
        price: 19710, 
        hasSunroof: 'false', 
        isFourWheelDrive: 'true', 
        hasLowMiles: 'false', 
        hasPowerWindows: 'false', 
        hasNavigation: 'true', 
        hasHeatedSeats: 'true' 
    }, 
    { 
        id: "59d2698ce2e7eeeb4f109001", 
        make: "Toyota", 
        year: 2014, 
        color: "Red", 
        price: 19248, 
        hasSunroof: 'true', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'true', 
        hasNavigation: 'true', 
        hasHeatedSeats: 'true' 
    }, 
    { 
        id: "59d2698cd6a3b8f0dd994c9d", 
        make: "Toyota", 
        year: 2015, 
        color: "Black", 
        price: 13170, 
        hasSunroof: 'true', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'true', 
        hasNavigation: 'false', 
        hasHeatedSeats: 'false' 
    }, 
    { 
        id: "59d2698c86ab54cee8acdc7b",
        make: "Mercedes", 
        year: 2013, 
        color: "Gray", 
        price: 15669, 
        hasSunroof: 'false', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'false', 
        hasNavigation: 'false', 
        hasHeatedSeats: 'false' 
    }, 
    {
        id: "59d2698cda9e8d39476c678a", 
        make: "Toyota", 
        year: 2015, 
        color: "White", 
        price: 16629, 
        hasSunroof: 'false', 
        isFourWheelDrive: 'false', 
        hasLowMiles: 'true', 
        hasPowerWindows: 'false', 
        hasNavigation: 'false', 
        hasHeatedSeats: 'true' 
    } 
    ];

    constructor(){

    }

    ngOnInit(){
        
    }

    filterColor(color){
        this.returnCarArray = filter(this.carData, (car) => {
            return car.color.toLowerCase() === color.toLowerCase();
        })
        console.log("the return cars array of color", this.returnCarArray)
    }

    filterSunroof(sunroof){
        this.returnCarArray = filter(this.carData, (car) => {
            // console.log(typeof sunroof === 'boolean')
            return car.hasSunroof === sunroof; 
        })
        console.log("the return cars array of sunroof", this.returnCarArray)
    }

    filterFourWheel(fourWheel){
        this.returnCarArray = filter(this.carData, (car) => {
            // console.log(typeof sunroof === 'boolean')
            return car.isFourWheelDrive === fourWheel; 
        })
        console.log("the return cars array of fourwheel", this.returnCarArray)
    }

    filterLowMileage(lowMileage){
        this.returnCarArray = filter(this.carData, (car) => {
            return car.hasLowMiles === lowMileage; 
        })
        console.log("the return cars array of fourwheel", this.returnCarArray)
    }

    filterPowerWindows(powerWindows){
        this.returnCarArray = filter(this.carData, (car) => {
            return car.hasPowerWindows === powerWindows; 
        })
        console.log("the return cars array of fourwheel", this.returnCarArray)
    }

    filterNavigation(navigation){
        this.returnCarArray = filter(this.carData, (car) => {
            return car.hasNavigation === navigation; 
        })
        console.log("the return cars array of navigation", this.returnCarArray)
    }

    filterHeatedSeats(heatedSeats){
        this.returnCarArray = filter(this.carData, (car) => {
            return car.hasHeatedSeats === heatedSeats; 
        })
        console.log("the return cars array of heatedSeats", this.returnCarArray)
    }

}