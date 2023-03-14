import React, { useState } from 'react';

function Node({ level, onDelete, onAddChild }) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [children, setChildren] = useState([]);

  const handleDelete = () => {
    onDelete();
  };

  const handleAddChild = () => {
    const newChildNode = { id: children.length, children: [] };
    setChildren([...children, newChildNode]);
  };

  const handleDeleteChild = childId => {
    const filteredChildren = children.filter(child => child.id !== childId);
    setChildren(filteredChildren);
  };

  const renderChild = child => {
    return (
      <div key={child.id}>
        <Node
          level={level + 1}
          onDelete={() => handleDeleteChild(child.id)}
          onAddChild={() => handleAddChildToChild(child.id)}
        />
        {child.children && child.children.map(renderChild)}
      </div>
    );
  };

  const handleAddChildToChild = childId => {
    const newChildNode = { id: children.length, children: [] };
    const newChildren = children.map(child => {
      if (child.id === childId) {
        child.children.push(newChildNode);
      }
      return child;
    });
    setChildren(newChildren);
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <input type="text" value={value1} onChange={e => setValue1(e.target.value)} />
      <input type="text" value={value2} onChange={e => setValue2(e.target.value)} />
      <button onClick={handleAddChild}>Add Child</button>
      <button onClick={handleDelete}>Delete</button>
      {children && children.map(renderChild)}
    </div>
  );
}

function Home(){
    const [nodes, setNodes] = useState([]);

  const handleAddNode = () => {
    const newNode = { id: nodes.length, children: [] };
    setNodes([...nodes, newNode]);
  };

  const handleDeleteNode = nodeId => {
    const filteredNodes = nodes.filter(node => node.id !== nodeId);
    setNodes(filteredNodes);
  };

  const renderNode = node => {
    return (
      <div key={node.id} style={{ display: 'inline-block', marginLeft: '20px' }}>
        {/* <input placeholder='Tree title'> </input> */}
        <h3>Tree {node.id + 1}</h3>
        <Node
          level={0}
          onDelete={() => handleDeleteNode(node.id)}
          onAddChild={() => handleAddChildToNode(node.id)}
        />
        {node.children && node.children.map(childNode => renderNode(childNode))}
      </div>
    );
  };

  const handleAddChildToNode = nodeId => {
    const newChildNode = { id: nodes.length, children: [] };
    const newNodes = nodes.map(node => {
      if (node.id === nodeId) {
        node.children.push(newChildNode);
      }
      return node;
    });
    setNodes(newNodes);
  };

  return (
    <div>
        <div className = 'button-container'>
            <button className="add-button"onClick={handleAddNode}>Add Tree</button>
      </div>
      {nodes.map(renderNode)}
    </div>
  );
}
export default Home;