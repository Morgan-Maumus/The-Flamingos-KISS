import React, { useState } from 'react';

function Node(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [childNodes, setChildNodes] = useState([]);

  const handleAddChildNode = () => {
    const id = new Date().getTime();
    setChildNodes([...childNodes, { id }]);
  };

  const handleDeleteNode = () => {
    props.onDelete(props.id);
  };

  const handleDoubleClick = () => {
    setIsHighlighted(!isHighlighted);
  };

  const handleChildDelete = (id) => {
    const filteredNodes = childNodes.filter(node => node.id !== id);
    setChildNodes(filteredNodes);
  };

  return (
    <div className={`node ${isHighlighted ? 'highlight' : ''}`} onDoubleClick={handleDoubleClick}>
      {/* <label htmlFor={`${props.id}-child-label`}>Node</label> */}
      <div className="node-input-container">
        <input type="text" id={`${props.id}-child-label`} placeholder="Enter a label" />
        <input type="text" id={`${props.id}-child-label`} placeholder="Enter a label" />
      </div>
      <button className="add-child" onClick={handleAddChildNode}>+</button>
      <button className="delete-node" onClick={handleDeleteNode}>-</button>
      <div className="children">
        {childNodes.map(node => (
          <Node key={node.id} id={node.id} onDelete={handleChildDelete} />
        ))}
      </div>
    </div>
  );
}

function Tree() {
  const [rootNodes, setRootNodes] = useState([]);

  const handleAddRootNode = () => {
    const id = new Date().getTime();
    setRootNodes([...rootNodes, { id }]);
  };

  const handleRootDelete = (id) => {
    const filteredNodes = rootNodes.filter(node => node.id !== id);
    setRootNodes(filteredNodes);
  };

  return (
    
    <div className="container">
      <div className="add-button-container">
      <button className="add-tree" onClick={handleAddRootNode}>+</button>
      </div>
      {rootNodes.map(node => (
        <div key={node.id} className="root">
          {/* <label htmlFor="root-label">Title</label> */}
          {/* <input type="text" id="root-label" placeholder="Enter a title" />
          <button className="add-child" onClick={() => setRootNodes([...rootNodes, { id: new Date().getTime() }])}>+</button>
          <button className="delete-node" onClick={() => handleRootDelete(node.id)}>-</button> */}
          <div className="children">
            <Node id={node.id} onDelete={handleRootDelete} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Home(){
    
  return (
    <div>
    <Tree />
  </div>
  );
}
export default Home;