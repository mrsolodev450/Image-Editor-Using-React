import React from "react";

export default function UplaodImage(props) {

  const myStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "#E3E2E2",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#aaa",
    fontSize: "2rem",
    cursor: 'pointer',
    input: {
      display: "none",
    },
  };

  if (props.visible) {
    return (
      <div className="container">
        <label htmlFor="img" style={myStyle}>
          Upload
        </label>
        <input type="file" name="" id="img" style={myStyle.input} onChange={props.saveFile} />
      </div>
    );
  } else return <></>;
}


