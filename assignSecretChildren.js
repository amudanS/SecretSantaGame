async function assignSecretChildren(employees, previousAssignments) {
    try {
    const assignments = [];
    const availableChildren = [...employees];

    // **Team Constraint**:
    // - Ensure that employees are not assigned to someone within the same team.

    employees.forEach((employee) => {
        let secretChild;
        do {
            const randomIndex = Math.floor(Math.random() * availableChildren.length);
            secretChild = availableChildren[randomIndex];
            console.log("secret c",secretChild);
            console.log("emp",employee)

        } while (
            (secretChild.Employee_Gender === employee.Employee_Gender && secretChild.Employee_Team === employee.Employee_Team )||
            secretChild.Employee_EmailID === employee.Employee_EmailID ||
            previousAssignments.some(
                (assignment) =>
                    assignment.Employee_Gender === employee.Employee_EmailID &&
                    assignment.Secret_Child_EmailID === secretChild.Employee_EmailID 
            )
         
        );

        assignments.push({
            Employee_Name: employee.Employee_Name,
            Employee_EmailID: employee.Employee_EmailID,
            Employee_Gender: employee.Employee_Gender,
            Employee_Team: employee.Employee_Team,
            Secret_Child_Name: secretChild.Employee_Name,
            Secret_Child_EmailID: secretChild.Employee_EmailID,
            Secret_Child_Gender: secretChild.Employee_Gender,
            Secret_Child_Team: secretChild.Employee_Team,
        });

        // Remove assigned child from available list
        availableChildren.splice(availableChildren.indexOf(secretChild), 1);
    });

    console.log(assignments)
    return assignments;
}
 catch(error) {
    console.error(error)
 }
}

module.exports = assignSecretChildren;
