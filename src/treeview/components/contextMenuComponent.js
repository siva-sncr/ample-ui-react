import React from 'react';

const contextMenu = (props) => {
    return (
        <div className="contextMenu" style={{ "left": props.context.left, "top": props.context.top, display: props.context.display }}><ul><li onClick={() => props.clicked("edit")}>Edit</li></ul></div>
    )
}

export default contextMenu;