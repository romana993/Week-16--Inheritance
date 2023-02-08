// //Aplicationlicationlications:
// 1. Create constructor functions with properties representing the following:
// ○ webAplicationlication: name, url, technologies, licence, stars
// ○ MobileAplicationlication: name, platforms, licence, stars

// 2. All web Aplicationlicationlications should inherit methods:
// ○ getData which prints out all the information
// ○ reactBased which checks if one of the used technologies is React

// 3. All mobile Aplicationlicationlications should inherit methods:
// ○ getData which prints out all the informations
// ○ forAndroid which checks if one of the platforms the Aplicationlicationlication is developed for is
// Android

// 4. Both web and mobile Aplicationlicationlications should inherit methods:
// ○ isCCLicence which checks if the licence of the Aplicationlicationlication is CC (Creative
// Commons)
// ○ like which increases the number of stars by one
// ○ showStars which prints out the number of stars


function Aplication(name, licence, stars) {
  this.name = name
  this.licence = licence
  this.stars = stars
}

Aplication.prototype.isCCLicence = function () {
    if (this.licence === "CC") {
        return "Yes, it is CC licence"
    } else return "No, it is not CC licence"
  
} 
Aplication.prototype.like = function () {
return this.stars = (this.stars+0.01)
  
  
} 

Aplication.prototype.showStars = function () {
    return this.stars.toFixed(2)
 
    
  } 
function webAplication(name, url, technogies, licence, stars) {
    Aplication.call(this, name, licence, stars)
    this.url = url
    this.technogies = technogies
}

webAplication.prototype = Object.create(Aplication.prototype)
webAplication.prototype.constructor = webAplication

webAplication.prototype.getData = function () {
    return this.name + " " + this.url + " " +this.technogies + " " +this.licence + " " + this.stars 
} 

webAplication.prototype.reactBased = function () {
    if (this.technogies === "react") {
        return "Yes, React is used"
    } else return "No, React is not used"
  
} 



let webAplicationlication_1 = new webAplication("Instagram", "https://www.instagram.com/", "react", "CC", 4.0 )
console.log(webAplicationlication_1.getData())
console.log(webAplicationlication_1.reactBased())
console.log(webAplicationlication_1.isCCLicence())
console.log(webAplicationlication_1.like())
webAplicationlication_1.like()
webAplicationlication_1.like()
webAplicationlication_1.like()
console.log(webAplicationlication_1.showStars())

//Mobile Aplication

function mobiAplication(name, platforms, licence, stars) {
  Aplication.call(this, name, licence, stars)
  this.platforms = platforms
}

mobiAplication.prototype = Object.create(Aplication.prototype)
mobiAplication.prototype.constructor = mobiAplication

mobiAplication.prototype.getData = function () {
  return this.name + " " + this.platforms + " " +this.licence + " " + this.stars 
} 

mobiAplication.prototype.forAndroid = function () {
  if (this.platforms === "Android") {
      return "Yes, Android is used"
  } else return "No, Android is not used"

} 


let mobiAplication_1  = new mobiAplication("Instagram", "Android", "CC0", 4.2 )
console.log(mobiAplication_1.getData())
console.log(mobiAplication_1.forAndroid())
console.log(mobiAplication_1.isCCLicence())
console.log(mobiAplication_1.like())
mobiAplication_1.like()
mobiAplication_1.like()
mobiAplication_1.like()
console.log(mobiAplication_1.showStars())
  