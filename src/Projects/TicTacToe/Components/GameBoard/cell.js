import React from "react";

export default function Cell({id = "", player = "", onClickedCell = f => f}) {
    const cellId = id;
    const onClicked = () => {
        if(player === "") {
            onClickedCell(cellId);
        }
    }

    return (
        <div className="gameCell" id={id} onClick={onClicked}
        >
            {player}
        </div>
    );
}
