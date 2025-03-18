# Secret Santa Assignment Program

## Overview

This program automates the process of assigning Secret Santa pairs among employees. It ensures that each employee is assigned a unique secret child, avoiding any repeats from the previous year.

## Features

- Reads employee data and previous assignments from Excel files.
- Assigns each employee a unique secret child.
- Outputs the assignments to a CSV file.
- Includes error handling for file-related issues.
- Provides a test suite to verify the correctness of the assignments.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To run the program, use the following command:

```bash
node secretSanta.js <employees.xlsx> <previous_secret_santa_assignments.xlsx> <output.csv>
```

Replace `<employees.xlsx>`, `<previous_secret_santa_assignments.xlsx>`, and `<output.csv>` with your actual file paths.

## Testing

To run the tests, use the following command:

```bash
node testSecretSanta.js
```

This will execute the test suite and output the results.

## Error Handling

The program includes error handling for the following scenarios:

- File not found: Ensures the specified files exist.
- Invalid file format: Checks that the files are correctly formatted.

## License

This project is licensed under the MIT License.
