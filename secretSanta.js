// Secret Santa Assignment Program

const { readEmployeeData, readPreviousAssignments } = require('./readData');
const assignSecretChildren = require('./assignSecretChildren');
const writeAssignmentsToCSV = require('./writeAssignments');

// Main function to execute the Secret Santa assignment
async function executeSecretSanta(inputFilePath, previousAssignmentsFilePath, outputFilePath) {
    try {
        console.log("1")
        const employees = await readEmployeeData(inputFilePath);
        const previousAssignments = await readPreviousAssignments(previousAssignmentsFilePath);
        // console.log("employee",employees);
        // console.log("3",previousAssignments)
        const assignments = await assignSecretChildren(employees, previousAssignments);
        await writeAssignmentsToCSV(assignments, outputFilePath);
        console.log('Secret Santa assignments have been successfully created!');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('File not found. Please check the file paths and try again.');
        } else if (error instanceof SyntaxError) {
            console.error('Invalid file format. Please ensure the files are correctly formatted.');
        } else {
            console.error('An unexpected error occurred:', error.message);
        }
        console.error('Error during Secret Santa assignment:', error);
    }
}

const inputFilePath = process.argv[2];
const previousAssignmentsFilePath = process.argv[3];
const outputFilePath = process.argv[4];

if (!inputFilePath || !previousAssignmentsFilePath || !outputFilePath) {
    console.error('Usage: node secretSanta.js <employees.csv> <previous_secret_santa_assignments.csv> <secret_santa_assignments.csv>');
    process.exit(1);
}
console.log("hello")
executeSecretSanta(inputFilePath, previousAssignmentsFilePath, outputFilePath);
