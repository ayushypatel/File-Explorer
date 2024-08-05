# File Explorer Application

A React-based file explorer application to navigate directories, view files, and perform basic file operations like create, delete, and rename. Includes error messages and validation.

## Features

- Tree structure for directories
- Content area to display files
- Expand/collapse directories
- File/folder icons
- Basic file operations: create, rename, delete
- State management using React's `useState`
- Responsive design
- Error messages and validation

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ayushypatel/File-Explorer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd file-explorer
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Run the application:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## File Operations

### Adding Files and Folders

- Click "Add Folder" or "Add File" button
- Enter a name and press "Enter" or click "Add"

### Renaming Files and Folders

- Click the three dots menu next to the item
- Click "Rename" and enter a new name

### Deleting Files and Folders

- Click the three dots menu next to the item
- Click "Delete"

### Viewing File Contents

- Click on a file name to open it in a new page

## Error Messages and Validation

- Displays errors for empty names or duplicates
- Validates delete operations

## Pushing Code to GitHub

1. Initialize a new Git repository:

    ```bash
    git init
    ```

2. Add all files:

    ```bash
    git add .
    ```

3. Commit the files:

    ```bash
    git commit -m "Initial commit"
    ```

4. Add the remote repository:

    ```bash
    git remote add origin https://github.com/example/File-Explorer.git
    ```

5. Push the code to GitHub:

    ```bash
    git push -u origin main
    ```



