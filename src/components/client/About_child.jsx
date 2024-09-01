import React from "react";

function About_child(props) {
    const { title, img } = props;
    return (
        <div className="About_child">
            <p className="title">
                {title.split("\\n").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <p className="texts">{props.children}</p>
            <div className="img">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default About_child;
