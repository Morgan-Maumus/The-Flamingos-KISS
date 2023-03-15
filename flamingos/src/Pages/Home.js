import React, { useState } from 'react';

function Node(props) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [childNodes, setChildNodes] = useState([]);
  const [isZoomed, setZoom] = useState(false);

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

  const handleZoom = ()=>{
    setZoom(!isZoomed);
  }
  // const handleZoomOut=()=>{
  //   setZoom(isZoomed);
  // }

  return (
    // ${isZoomed ? 'zoomed' : ''}
    // className={`node ${isHighlighted ? 'highlight' : ''}`} onDoubleClick={handleDoubleClick}
    // onClick={handleZoomIn}
    <div className="node " >  
      <div className={`node-container ${isHighlighted ? 'highlight' : ''} ${isZoomed ? 'zoomed' : ''}` } onDoubleClick={handleDoubleClick }  onPointerEnter={handleZoom} onPointerLeave={handleZoom} >
        <div className="column-container">
          <input className={`node-input input-title ${isHighlighted ? 'highlight' : ''}`} type="text" id={`${props.id}-child-label`} placeholder="Title" />
          <input className={`node-input input-descrip ${isHighlighted ? 'highlight' : ''}`} type="text"  placeholder="Description" />  {/* id={`${props.id}-child-label`} */}
        </div>
        <div className="column-container">
          <button className="add-child" onClick={handleAddChildNode}>+</button>
          <button className="delete-node" onClick={handleDeleteNode}>-</button>
        </div>
      </div>
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