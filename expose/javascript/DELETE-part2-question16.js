// for(let car in statistics) {
//     if((car.charAt(0) == 'r') || statistics[car] % 2 == 1) {
//         console.log(statistics[car]);
//     }
// }

for (let property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 !== 0) {
      console.log(statistics[property]);
    }
}

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num) {
//     return num * 2;
// }

// modifyArray([1,2,3], doSomething);