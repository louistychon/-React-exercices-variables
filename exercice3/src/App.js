let date = new Date()

let day = date.getDate()
let year = date.getFullYear()
let month = date.getMonth() + 1
console.log(day + " " + month + " " + year)
document.open()
document.write("Nous sommes le " + day + "/" + month + "/" + year)
document.close()