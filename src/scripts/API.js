
// expand on fetch so all cross references are accessible - makes pulling the data much easier
const API = {
    getEmployees () {
        return fetch("http://localhost:8088/employees?_expand=computers&_expand=departments")
        .then(response => response.json())
    }
}

export default API