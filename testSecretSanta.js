const { readEmployeeData, readPreviousAssignments } = require('./readData');
const assignSecretChildren = require('./assignSecretChildren');
const writeAssignmentsToCSV = require('./writeAssignments');
const fs = require('fs');

async function testSecretSanta() {
    try {
        const employees = await readEmployeeData('test_employees.xlsx');
        const previousAssignments = await readPreviousAssignments('test_previous_assignments.xlsx');
        const assignments = assignSecretChildren(employees, previousAssignments);

        console.log('Assignments:', assignments);

        // Check if each employee has a unique secret child
        const uniqueAssignments = new Set(assignments.map(a => a.Secret_Child_EmailID));
        if (uniqueAssignments.size !== assignments.length) {
            console.error('Test failed: Not all employees have unique secret children.');
        } else {
            console.log('Test passed: All employees have unique secret children.');
        }

        // Write to a test output file
        await writeAssignmentsToCSV(assignments, 'test_output.csv');
        console.log('Test output written to test_output.csv');
    } catch (error) {
        console.error('Test failed:', error);
    }
}

testSecretSanta();
