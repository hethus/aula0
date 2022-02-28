const prompt = require('prompt-sync')();

let nivel = 0
let n = prompt("\nvc estava na cena do crime?")

if(n == "s"){
  nivel++
}

n = prompt("\nvc conhecia a vitima?")

if(n == "s"){
  nivel++
}

n = prompt("\nconhecia algum parente da vitima?")

if(n == "s"){
  nivel++
}

n = prompt("\na vitima devia algo pra ti?")

if(n == "s"){
  nivel++
}

n = prompt("\nsabe atirar?")

if(n == "s"){
  nivel++
}

console.log("\nVOCE É: \n")

if(nivel >= 4){
  console.log("aeee, culpado")
} else if(nivel == 3){
  console.log("HUNMMM... suspeito")
} else{
  console.log("...inocente, triste")
}
