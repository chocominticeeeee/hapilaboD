import React from "react";

function FlowChild(props) {
    const { title, index } = props;
    return (
        <li className="FlowChild">
            <p className="title" data-index={index}>
                {title}
            </p>
            <div className="details">{props.children}</div>
        </li>
    );
}

export default FlowChild;
