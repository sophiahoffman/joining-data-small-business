const cards = {
    employeeCards (name, department, computer) {
        const articleEl = document.createElement("article")
        articleEl.class = "employee"
        articleEl.innerHTML = `
        <header class="employee__name">
            <h1>${name}</h1>
        </header>
        <section class="employee_department">
            Works in the ${department} department
        </section>
        <section class = "employee__computer">
            Currently using a ${computer}
        </section>`
        const containerEl = document.querySelector("#container")
        containerEl.appendChild(articleEl)
    }
}

export default cards