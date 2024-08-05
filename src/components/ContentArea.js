// src/components/ContentArea.js
import React, { useState } from 'react';
import { findFolder } from '../utils/findFolder';
import './ContentArea.css';

const ContentArea = ({ selectedFolder, fileSystem, addItem, deleteItem, renameItem }) => {
  const [newItemName, setNewItemName] = useState('');
  const [showInput, setShowInput] = useState({ show: false, type: '' });
  const [showMenu, setShowMenu] = useState(null);
  const [renamingItem, setRenamingItem] = useState(null);
  const [newName, setNewName] = useState('');

  const folder = selectedFolder ? findFolder(selectedFolder, fileSystem) : null;

  const handleAddItem = (type) => {
    addItem(selectedFolder, newItemName, type);
    setNewItemName('');
    setShowInput({ show: false, type: '' });
  };

  const handleDelete = (item) => {
    deleteItem(selectedFolder, item.id);
    setShowMenu(null);
  };

  const handleRename = (item) => {
    renameItem(selectedFolder, item.id, newName);
    setRenamingItem(null);
    setNewName('');
    setShowMenu(null);
  };

  const handleRenameClick = (item) => {
    setRenamingItem(item.id);
    setNewName(item.name);
    setShowMenu(null);
  };

  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter') {
      handleRename(item);
    }
  };

  const handleMenuToggle = (e, item) => {
    e.stopPropagation();
    if (showMenu === item.id) {
      setShowMenu(null);
    } else {
      setShowMenu(item.id);
    }
  };

  return (
    <div className="content-area">
      {folder ? (
        <div>
          <h2>{folder.name}</h2>
          <ul>
            {folder.children.map(item => (
              <li key={item.id} className="item">
                {item.type === 'folder' ? '📁' : '📄'}
                {renamingItem === item.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onBlur={() => handleRename(item)}
                    onKeyDown={(e) => handleKeyDown(e, item)}
                    autoFocus
                  />
                ) : (
                  <span>{item.name}</span>
                )}
                <div className="menu" onClick={(e) => handleMenuToggle(e, item)}>
                  ⋮
                  {showMenu === item.id && (
                    <div className="menu-options">
                      <button onClick={() => handleRenameClick(item)}>Rename</button>
                      <button onClick={() => handleDelete(item)}>Delete</button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {showInput.show && (
            <div className="add-item">
              <input
                type="text"
                placeholder={`New ${showInput.type} name`}
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddItem(showInput.type)}
              />
              <button onClick={() => handleAddItem(showInput.type)}>Add</button>
            </div>
          )}
          <div className="add-item">
            <button onClick={() => setShowInput({ show: true, type: 'folder' })}>Add Folder</button>
            <button onClick={() => setShowInput({ show: true, type: 'file' })}>Add File</button>
          </div>
        </div>
      ) : (
        <p>Select a folder to view its contents</p>
      )}
    </div>
  );
};

export default ContentArea;
