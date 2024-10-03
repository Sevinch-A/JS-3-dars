// DATA TABS IN JS (undefined, boolen, object)

// let matn = "salom";          //string
// let = "49999";               // number
// let soz;
// document.write(typeof soz)

// let rost = false;
// document.write(rost);        //boolean
// let rost = 45 == 46 ? true:false;
// document.write(rost);
                                                                        
// let arrayObject = [45, 78, "salom", "matn", true, "olma", "true", 231];

// console.log(arrayObject[0]);
// let oddiyObject = {ism:"Umid", yoshi: 20, mahallasi:"Xalqobod", dustninismi:"Asilbek"}      //key, value
// console.log(oddiyObject.);

//FUNCTIONS IN JS

// let savatcha = [12, "matn"];
// document.write(savatcha.length);

// function savatchaniTekshir(uzatilganContainer = [45, "false" false]){
//     if(uzatilganContainer.length == 0){
//         document.write("Savatchaning ichida" + uzatilganContainer.container.length + "dona ma'lumot bor");
//     }
//     else{
//         document.write("Savatchaning ichida" + uzatilganContainer.length + "ta ma'lumot bor")
//     }
// }
// let container = [ 12, true, 78, "matn", "js", "true"]
// savatchaniTekshir();


// DATE IN JS

sana.setFullYear(2008);
sana.setMonth()
sana.setDate(24)

let sana = new Date();
let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let xaftakuni = sana.getDay()

let oylar = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"]

let hafta = ["yajshamba", "dushamba", "seyshamba", "chorshanba", "payshanba", "juma", "shanba" ]

document.write("Bugun " + yil + " -yil " + oylar[oy] + " oyning " + kun + "-kuni. haftaning " + hafta[xaftakuni] + " kuni.")

