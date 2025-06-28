import React, { useState } from 'react';

function ScreenDoor2() {
    const [isOpen, setIsOpen] = useState(true);

    function change() {
        setIsOpen(!isOpen);
    }

    return (
        <button onClick={change}>
            {isOpen ? "close the door" : "open the door"}
        </button>
    );
}

export default ScreenDoor2;
