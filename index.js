/*** CLASES ***/
class Car{
    constructor(brand,model,year,gnc){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.gnc = gnc;
    }
    toString(){
        return `Brand: <b style="text-transform: capitalize;">${this.brand}</b> <br>
                Model: <b style="text-transform: capitalize;">${this.model}</b> <br>
                Year: <b>${this.year}</b> <br>
                GNC: <b>${this.gnc.toUpperCase()}</b> <br>`;
    }
}

class Policy{
    constructor(car,person,date){
        this.car = car;
        this.person = person;
        this.date = date;
        this.price = calculatePolicy(car)
    }
    toString(){
        return `Date: <b>${transformDate(this.date)}</b> <br>
                Price: <b>${this.price}</b> <br>`;
    }
}

class Person{
    constructor(name, surname, dateBirth, eMail, phoneNumber){
        this.name = name;
        this.surname = surname;
        this.dateBirth = dateBirth;
        this.eMail = eMail;
        this.phoneNumber = phoneNumber;
    }
    toString(){
        return `Name: <b style="text-transform: capitalize;">${this.name}</b> <br>
                Surname: <b style="text-transform: capitalize;">${this.surname}</b> <br>
                Date of Birth: <b>${this.dateBirth}</b> <br>
                Email: <b>${this.eMail}</b> <br>
                Phone Number: <b>${this.phoneNumber}</b> <br>`;
    }
}

/*** FUNCTIONS ***/

function calculatePolicy(car){
    let pricePerBrandAndModel1 = pricePerBrandAndModel(car);
    let pricePerYearManufacture1 = pricePerYearManufacture(car);
    let pricePerGNC1 = pricePerGNC(car);
    return pricePerBrandAndModel1 + pricePerYearManufacture1 + pricePerGNC1;
}

function pricePerBrandAndModel(car){
    let indexBrand = parseInt(car.brand) - 1;
    let indexModel = parseInt(car.model) - 1;
    let price = Object.values(brands)[indexBrand][indexModel][1];
    return price; 
}

function changeNumsPerBrandAndModel(car){
    let indexBrand = parseInt(car.brand) - 1;
    let indexModel = parseInt(car.model) - 1; 
    car.brand = Object.keys(brands)[indexBrand];
    car.model = Object.values(brands)[indexBrand][indexModel][0];
    return;
}

function pricePerYearManufacture(car){
    if(car.year >= 2018){
        return 50;
    }
    else if(car.year >= 2013){
        return 40;
    }
    else if(car.year >= 2008){
        return 30;
    }
    else if(car.year >= 2003){
        return 20;
    }
    return 0;
}

function pricePerGNC(car){
    if(car.gnc == 'yes'){
        let valueGNC = parseInt(prompt('How much did the GNC equipment?'));
        return valueGNC * 0.02;
    }
    return 0;
}

function findModelofBrand(car){
    
    let indexBrand = parseInt(car.brand) - 1;
    car1.model = prompt(`What is the model of your car?
${(Object.values(brands)[indexBrand]).map((model,num) => num+1 + '- ' + capitalizeTransform(model[0])).join('\n')}`);
}

function transformDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${day}/${month}/${year}`;
}

function capitalizeTransform(words){
    return words.charAt(0).toUpperCase() + words.slice(1);
}

/*** VARIABLES ***/

const brands = { 
    volkswagen: [['golf',400],['polo',300], ['gol',240], ['vento',450], ['bora',300]],
    toyota: [['etios',310],['corolla',350],['hilux',400],['yaris',390],['prius',410]],
    renault: [['sandero',370], ['duster',350], ['captur',320], ['logan',280], ['kangoo',250]],
    ford: [['ecoSport',420], ['territory',380], ['fiesta',400], ['ranger',430], ['mustang',2100]],
    fiat: [['argo',340], ['cronos',390], ['mobi',430],['toro',260],['fiorino',310]]
};

/*** EXECUTION ***/

alert('Welcome to the Secure Route, we are a car insurance company and we want to help you find the best coverage for your car');
alert('Car data');
const car1 = new Car();
car1.brand = prompt(`What is the brand of your car?
${(Object.keys(brands).map((key,num) => (num+1) + '- ' + capitalizeTransform(key))).join('\n')}`);
findModelofBrand(car1);
car1.year = parseInt(prompt('What is the year of manufacture of your car?'));
car1.gnc = prompt('Does your car have GNC? (yes or no)').toLowerCase();
alert('Personal information');
const person1 = new Person();
person1.name = prompt('What is your name?');
person1.surname = prompt('What is your surname?');
person1.dateBirth = prompt('What is your birth day?');
person1.eMail = prompt('What is your email?');
person1.phoneNumber = prompt('What is your phone number?');
const policy1 = new Policy(car1,person1);
policy1.date = new Date();
changeNumsPerBrandAndModel(car1);
document.write(`<div class="dataCar">
                    <h5 class="titleCar">Data Car<img src="./img/car.png" alt="Data Car"></h5>
                    <p class="textCar">${policy1.car.toString()}</p>
                </div>
                <div class="dataPerson">
                    <h5 class="titlePerson">Personal Information <img src="./img/personal-information.png" alt="Personal Information"></h5>
                    <p class="textPerson">${policy1.person.toString()}</p>
                </div>
                <div class="dataPolicy">
                    <h5 class="titlePolicy">Policy<img src="./img/policy.png" alt="Policy"></h5>
                    <p class="textPolicy">${policy1.toString()}</p>
                </div>
                `);
