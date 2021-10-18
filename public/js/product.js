window.onload = function () {

    fetch('http://localhost:8080/test')
        .then(response => {
            if (response.status == 200) {
                //통신 성공
                console.log("통신 성공");
                return response.json();
            } else {
                //통신 실패
                console.log("통신 실패");
            }
        })
        .then(jsonData => {
            const tbody = document.querySelector("tbody")
            
            for(let employee of jsonData) {
                const tr = document.createElement("tr");
                const td_employee_id = document.createElement("td");
                const td_employee_name = document.createElement("td");
                
                td_employee_id.textContent = employee.employeeId
                td_employee_name.textContent = employee.employeeName

                tr.appendChild(td_employee_id)
                tr.appendChild(td_employee_name)

                tbody.appendChild(tr)
            }
        })
        .catch(err => {
            console.log(err)
        })

}