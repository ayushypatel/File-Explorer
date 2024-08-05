// src/components/Folder.js
import React, { useState } from 'react';
import './Folder.css';

const Folder = ({ folder, path, setSelectedFolder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleFolderClick = () => {
    setSelectedFolder(path);
    toggleOpen();
  };

  return (
    <div className="folder">
      <div className="folder-header" onClick={handleFolderClick}>
        <span>{isOpen ? '📂' : '📁'} {folder.name}</span>
      </div>
      {isOpen && (
        <div className="folder-contents">
          {folder.children && folder.children.map(item => (
            item.type === 'folder' ? (
              <Folder
                key={item.id}
                folder={item}
                path={`${path}/${item.id}`}
                setSelectedFolder={setSelectedFolder}
              />
            ) : (
              <div key={item.id} className="file">
                <span onClick={() => setSelectedFolder(path)}>📄 {item.name}</span>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
