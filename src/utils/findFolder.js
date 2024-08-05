// src/utils/findFolder.js
export const findFolder = (path, data) => {
    const segments = path.split('/');
    let current = { children: data };
    for (const segment of segments) {
      if (segment) {
        current = current.children.find(item => item.id === parseInt(segment));
        if (!current) return null;
      }
    }
    return current;
  };
  