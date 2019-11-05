import API from "./API.js"
import cards from "./DOMmanager.js"



API.getEmployees()
.then(response => {
    console.log(response)
    response.forEach( r => {
    let name = r.name
    let department = r.departments.dept
    let computer = r.computers.model
    cards.employeeCards (name, department, computer)
    } )
})

