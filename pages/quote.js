/*** CLASSES ***/

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
      this.date = transformDate(date);
      this.price = calculatePolicy(car);
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
  let indexBrand = Object.keys(brands).map(brand => brand).indexOf(car.brand);
  let indexModel;
  switch(car.brand){
    case 'volkswagen': indexModel = brands.volkswagen.map(item => item[0]).indexOf(car.model);
                       break;
    case 'toyota': indexModel = brands.toyota.map(item => item[0]).indexOf(car.model);
                       break;
    case 'renault': indexModel = brands.renault.map(item => item[0]).indexOf(car.model);
                       break;
    case 'ford': indexModel = brands.ford.map(item => item[0]).indexOf(car.model);
                       break;
    case 'fiat': indexModel = brands.fiat.map(item => item[0]).indexOf(car.model);
                       break;

  }
  if(indexModel != undefined){
      let price = Object.values(brands)[indexBrand][indexModel][1];
      return price; 
  };
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
      let valueGNC = document.getElementById("gncEquipament").value;
      return valueGNC * 0.02;
  }
  return 0;
}

function transformDate(date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${day}/${month}/${year}`;
}

function clearAnswer(){
  document.getElementById('gncPrice').innerHTML = "";
}

function clearModels(){
  let modelimages = document.querySelectorAll('.chooseModel-container label img');
  modelimages.forEach((img,) => {img.src = ""
                                img.alt = ""})
};

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

/*** EVENTOS ***/

const radios = document.querySelectorAll('.chooseBrand-container input')
for (const radio of radios) {
  radio.onclick = (e) => {
    let modelInputs = document.querySelectorAll('.chooseModel-container input');
    let modelimages = document.querySelectorAll('.chooseModel-container label img');
    modelInputs.forEach(input => input.checked = false);
    if(e.target.value == 'volkswagen'){
        const modelVolkswagen = brands.volkswagen.map(model => model[0]);
        modelInputs.forEach((model , c = 0) => model.value = modelVolkswagen[c++]);
        modelimages.forEach((img, c = 0) => {img.src = `../img/volkswagen/model_${modelVolkswagen[c]}.png`
                                            img.alt = `${modelVolkswagen[c++]}`})
    }
    else if(e.target.value == 'toyota'){
      const modelToyota = brands.toyota.map(model => model[0]);
      modelInputs.forEach((model , c = 0) => model.value = modelToyota[c++]);
      modelimages.forEach((img, c = 0) => {img.src = `../img/toyota/model_${modelToyota[c]}.png`
                                          img.alt = `${modelToyota[c++]}`})
    }
    else if(e.target.value == 'renault'){
      const modelRenault = brands.renault.map(model => model[0]);
      modelInputs.forEach((model , c = 0) => model.value = modelRenault[c++]);
      modelimages.forEach((img, c = 0) => {img.src = `../img/renault/model_${modelRenault[c]}.png`
                                          img.alt = `${modelRenault[c++]}`})
    }
    else if(e.target.value == 'ford'){
      const modelFord = brands.ford.map(model => model[0]);
      modelInputs.forEach((model , c = 0) => model.value = modelFord[c++]);
      modelimages.forEach((img, c = 0) => {img.src = `../img/ford/model_${modelFord[c]}.png`
                                          img.alt = `${modelFord[c++]}`})
    }
    else if(e.target.value == 'fiat'){
      const modelFiat = brands.fiat.map(model => model[0]);
      modelInputs.forEach((model , c = 0) => model.value = modelFiat[c++]);
      modelimages.forEach((img, c = 0) => {img.src = `../img/fiat/model_${modelFiat[c]}.png`
                                          img.alt = `${modelFiat[c++]}`})
    }
  }
}

const buttonYesGnc = document.getElementById("yes");
buttonYesGnc.addEventListener('click',function(){
  document.getElementById('gncPrice').innerHTML += `<label for="gncEquipament" class="title-DataCar">How much your gnc equipament?</label>
  <input type="number" class="input-form" id="gncEquipament">`;
});

const buttonNoGnc = document.getElementById("no");
buttonNoGnc.addEventListener('click',clearAnswer)

const buttonQuote = document.getElementById("quote");
buttonQuote.addEventListener('click',function (e){
  e.preventDefault();
  const car = new Car();
  document.querySelectorAll(".chooseBrand-container input").forEach(input => input.checked == true? car.brand = input.value: "");
  document.querySelectorAll(".chooseModel-container input").forEach(input => input.checked == true? car.model = input.value: "");
  car.year = document.getElementById("yearManufacture").value;
  document.querySelectorAll(".answer-container input").forEach(input => input.checked == true? car.gnc = input.value: "");
  const person = new Person();
  person.name = document.getElementById("names").value;
  person.surname = document.getElementById("surnames").value;
  person.dateBirth = document.getElementById("birthDay").value;
  person.eMail = document.getElementById("email").value;
  person.phoneNumber = document.getElementById("phoneNumber").value;
  
  if( (car.year != '') && (!(Object.values(car).includes(undefined))) && (!(Object.values(person).includes(''))) && (car.gnc == 'yes'?document.getElementById("gncEquipament").value != undefined:true)){
    const policy = new Policy(car,person,new Date());
    const registeredPolicy = {...policy,
                              user: localStorage.getItem('registeredUsername') || ''}
    swal({title: `${capitalizeTransform(registeredPolicy.user)} Quote`,
          text: `Date: ${registeredPolicy.date}
                Price: ${registeredPolicy.price}`,
          icon: 'success'});
    document.getElementById("quote-form").reset();
    clearAnswer();
    clearModels();
  }
  else{
    swal({title: 'Warning', text:'You have missing data to fill in',icon:'warning'});
  }
});