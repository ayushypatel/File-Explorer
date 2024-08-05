// src/App.js
import React, { useState } from 'react';
import FileExplorer from './components/FileExplorer';
import parentData from './jsonData';
import { findFolder } from './utils/findFolder';
import './App.css';

function App() {
  const [fileSystem, setFileSystem] = useState(parentData);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const addItem = (path, name, type) => {
    if (!name.trim()) {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    const newFileSystem = [...fileSystem];
    const parent = findFolder(path, newFileSystem);
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      if (parent.children.find(item => item.name === name)) {
        setErrorMessage('An item with this name already exists.');
        return;
      }
      parent.children.push({
        id: Date.now(),
        name: name,
        type: type,
        children: type === 'folder' ? [] : undefined
      });
      setFileSystem(newFileSystem);
      setErrorMessage('');
    }
  };

  const deleteItem = (path, id) => {
    const newFileSystem = [...fileSystem];
    const parent = findFolder(path, newFileSystem);
    if (parent) {
      const index = parent.children.findIndex(item => item.id === id);
      if (index !== -1) {
        parent.children.splice(index, 1);
        setFileSystem(newFileSystem);
        setErrorMessage('');
      } else {
        setErrorMessage('Item not found.');
      }
    }
  };

  const renameItem = (path, id, newName) => {
    if (!newName.trim()) {
      setErrorMessage('Name cannot be empty.');
      return;
    }
    const newFileSystem = [...fileSystem];
    const parent = findFolder(path, newFileSystem);
    if (parent) {
      const item = parent.children.find(item => item.id === id);
      if (item) {
        if (parent.children.find(child => child.name === newName)) {
          setErrorMessage('An item with this name already exists.');
          return;
        }
        item.name = newName;
        setFileSystem(newFileSystem);
        setErrorMessage('');
      } else {
        setErrorMessage('Item not found.');
      }
    }
  };

  return (
    <div className="App">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <FileExplorer
        fileSystem={fileSystem}
        addItem={addItem}
        deleteItem={deleteItem}
        renameItem={renameItem}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
    </div>
  );
}

export default App;
