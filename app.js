const a = .25
const b = .50
const c = .75

let nombre = prompt ("Ingresá tu nombre")

if (!isNaN(nombre)) {

    alert ("El valor ingresado no es válido")
    
} else {

    let kilogramos = parseInt (prompt ("Ingresá los Kg."))
    
    if (isNaN(kilogramos)) {

        alert ("El valor ingresado es inválido")
        
    } else if (kilogramos <= 0) {

        alert ("El número ingresado debe ser mayor a 0")
        
    } else {

        let corte = prompt(nombre + " " + "Ingresá \nA) Entraña \nB) Matambre \nC) Costillas")
    
        if (corte == "a") {
            
            alert("Entraña:" + " " + a * kilogramos + " " + "Kg.")
            
        } else if (corte == "b") {
            
            alert("Matambre:" + " " + b * kilogramos + " " + "Kg.")
            
        } else if (corte == "c") {
            
            alert("Costilla:" + " " + c * kilogramos + " " + "Kg.")
            
        } else {
            
            alert ("La opción ingresada no es válida")
            
        }
    }
}