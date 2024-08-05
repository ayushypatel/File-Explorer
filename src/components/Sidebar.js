// src/components/Sidebar.js
import React from 'react';
import Folder from './Folder';
import './Sidebar.css';

const Sidebar = ({ fileSystem, setSelectedFolder }) => {
  return (
    <div className="sidebar">
      {fileSystem.map(folder => (
        <Folder
          key={folder.id}
          folder={folder}
          path={folder.id.toString()}
          setSelectedFolder={setSelectedFolder}
        />
      ))}
    </div>
  );
};

export default Sidebar;
