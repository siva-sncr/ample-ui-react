import React from 'react';

const contextMenu = (props) => {
    return (
        <div style={{ "left": props.context.left, "top": props.context.top, "height": "50px", "width": "50px", display: props.context.display, position: "absolute" }}><button onClick={() => props.clicked("edit")}>Edit</button></div>
    )
}

export default contextMenu;