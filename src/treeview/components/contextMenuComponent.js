import React from 'react';

const contextMenu = (props) => {
    return (
        <div className="contextMenu">
            <ul>
                <li onClick={(event) => props.clicked(event, "edit")}>Edit Node</li>
                <li>Add Region</li>
                <li>Add Device</li>
                <li>Details</li>
            </ul>
        </div>
    )
}

export default contextMenu;