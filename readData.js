const fs = require('fs');
const xlsx = require('xlsx');

function readExcelData(filePath) {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
}

function readEmployeeData(filePath) {
    if (filePath.endsWith('.xlsx')) {
        console.log("2")
        return Promise.resolve(readExcelData(filePath));
    }
    return new Promise((resolve, reject) => {
        const employees = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                employees.push(row);
            })
            .on('end', () => {
                resolve(employees);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

function readPreviousAssignments(filePath) {
    if (filePath.endsWith('.xlsx')) {
        return Promise.resolve(readExcelData(filePath));
    }
    return new Promise((resolve, reject) => {
        const previousAssignments = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                previousAssignments.push(row);
            })
            .on('end', () => {
                resolve(previousAssignments);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

module.exports = { readEmployeeData, readPreviousAssignments };
