// src/components/FileExplorer.js
import React from 'react';
import Sidebar from './Sidebar';
import ContentArea from './ContentArea';
import './FileExplorer.css';

const FileExplorer = ({ fileSystem, addItem, deleteItem, renameItem, selectedFolder, setSelectedFolder }) => {
  return (
    <div className="file-explorer">
      <Sidebar
        fileSystem={fileSystem}
        setSelectedFolder={setSelectedFolder}
      />
      <ContentArea
        selectedFolder={selectedFolder}
        fileSystem={fileSystem}
        addItem={addItem}
        deleteItem={deleteItem}
        renameItem={renameItem}
      />
    </div>
  );
};

export default FileExplorer;
