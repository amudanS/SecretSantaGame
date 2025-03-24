const csvWriter = require('csv-writer').createObjectCsvWriter;

function writeAssignmentsToCSV(assignments, outputFilePath) {
    const writer = csvWriter({
        path: outputFilePath,
        header: [
            { id: 'Employee_Name', title: 'Employee_Name' },
            { id: 'Employee_EmailID', title: 'Employee_EmailID' },
            { id: 'Employee_Gender', title: 'Employee_Gender' },
            { id: 'Employee_Team', title: 'Employee_Team' },
            { id: 'Secret_Child_Name', title: 'Secret_Child_Name' },
            { id: 'Secret_Child_EmailID', title: 'Secret_Child_EmailID' },
            { id: 'Secret_Child_Gender', title: 'Secret_Gender' },
            { id: 'Secret_Child_Team', title: 'Secret_Team' },
        ],
    });

    return writer.writeRecords(assignments);
}

module.exports = writeAssignmentsToCSV;
