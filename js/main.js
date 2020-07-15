let porsche = {

    make: "Porsche",
    model: "911",
    year: "2016",
    color: "yellow",
    passengers: 2,
    convertible: false,
    mileage: 1099,
    started: false,

    light: function() { // это не функция, а метод!!!
        console.log("switchON");
    },

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert("Let's Go!");
        } else {
            alert(" Need to Start");
        }
    }
};

porsche.drive();
porsche.start();
porsche.drive();
porsche.stop();
// porsche.start()


console.log(porsche);



// let mersedes = {

//     make: "Mersedes",
//     model: "S",
//     year: "2020",
//     color: "red",
//     passengers: 4,
//     convertible: true,
//     mileage: 99

// };

// function check(car) {
//     if (car.mileage > 1100) {
//         return false;
//     } else if (car.year > 2017) {
//         return false;
//     }
//     car.bay = true;
// }

// let car = check(porsche);

// porsche.light(); // вызываем метод объекта