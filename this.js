let car={
    carName:"thar",
    carModel:2000,
    carOil:"patrol",
    carAge:20,
    myFunction:function(){
        return this
    }

}
console.log(car.myFunction())//this =object method

