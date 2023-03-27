import React, { useState } from 'react';

function Node(props) {
  
  //keep track of our node states
  const [isHighlighted, setIsHighlighted] = useState(false); // node highlight
  const [childNodes, setChildNodes] = useState([]); //child nodes
  const [isZoomed, setZoom] = useState(false); //node zoom
  
  //adds a child node to parent 
  const handleAddChildNode = () => {
    const id = new Date().getTime();
    setChildNodes([...childNodes, { id }]);
    
  };
  //deletes node
  const handleDeleteNode = () => {
    props.onDelete(props.id);
  };
  //highlights node
  const handleHighlight = () => {
      setIsHighlighted(!isHighlighted);
    
  };
  //deletes children nodes of parent 
  const handleChildDelete = (id) => {
    const filteredNodes = childNodes.filter(node => node.id !== id);
    setChildNodes(filteredNodes);
  };

  //zooms in on node
  const handleZoomIn = ()=>{
    setZoom(true);
   
  }
  //zooms out of node
  const handleZoomOut=()=>{
    setZoom(false);
  }

  // node container
  return (
    <div className="node-contain" >   
    {/* Node */}
      <div className={`node ${isHighlighted ? 'highlight' : ''} ${isZoomed ? 'zoomed' : ''}` } onDoubleClick={handleHighlight }  onClick={handleZoomIn} onPointerLeave={handleZoomOut} >
        {/* add and delete buttons on each node */}
        <div className= "node-buttons">
            <button className="add-child" onClick={handleAddChildNode}>+</button>
            <div className= "middle-button"></div>
            <button className="delete-node" onClick={handleDeleteNode}>-</button>
        </div>
        {/* input and description of node */}
        <div className="column-container">
          <input className={`node-input input-title ${isHighlighted ? 'highlight' : ''}`} type="text" id={`${props.id}-child-label`} placeholder="Title" />
          <input className={`node-input input-descrip ${isHighlighted ? 'highlight' : ''}`} type="text"  placeholder="Description" />  {/* id={`${props.id}-child-label`} */}
        </div>
        
      </div>
      {/* children nodes on right of each node */}
      <div className="children">
        {childNodes.map(node => (
          <Node key={node.id} id={node.id} onDelete={handleChildDelete} />
        ))}
      </div>
    </div>
  );
}

function Tree() {
  //all root nodes on page
  const [rootNodes, setRootNodes] = useState([]);

  //adds root node
  const handleAddRootNode = () => {
    const id = new Date().getTime();
    setRootNodes([...rootNodes, { id }]);
  };

  //deletes root node and kids
  const handleRootDelete = (id) => {
    const filteredNodes = rootNodes.filter(node => node.id !== id);
    setRootNodes(filteredNodes);
  };

  return (
    
    <div className="container">
      <div className="add-button-container">
        {/* add button to add root */}
      <button className="add-tree" onClick={handleAddRootNode}>+</button>
      </div>
      {rootNodes.map(node => (
        <div key={node.id} className="root">
          {/* progress bar */}
          <div className="progress" > 
            <div className="progress-bar">
              <div className="progress-fill" style={{width: 50+'%'}}>
              </div>
            </div>
          </div>
          {/* root node */}
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