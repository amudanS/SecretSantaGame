function assignSecretChildren(employees, previousAssignments) {
    const assignments = [];
    const availableChildren = [...employees];

    employees.forEach((employee) => {
        let secretChild;
        do {
            const randomIndex = Math.floor(Math.random() * availableChildren.length);
            secretChild = availableChildren[randomIndex];
        } while (
            secretChild.Employee_EmailID === employee.Employee_EmailID ||
            previousAssignments.some(
                (assignment) =>
                    assignment.Employee_EmailID === employee.Employee_EmailID &&
                    assignment.Secret_Child_EmailID === secretChild.Employee_EmailID
            )
        );

        assignments.push({
            Employee_Name: employee.Employee_Name,
            Employee_EmailID: employee.Employee_EmailID,
            Secret_Child_Name: secretChild.Employee_Name,
            Secret_Child_EmailID: secretChild.Employee_EmailID,
        });

        // Remove assigned child from available list
        availableChildren.splice(availableChildren.indexOf(secretChild), 1);
    });

    return assignments;
}

module.exports = assignSecretChildren;
