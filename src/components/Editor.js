import React from 'react'

export default function Editor(props) {


    if (props.visible) {
        return (
          <div className="container">
            <img src={props.path} alt="Loading" width={300}></img>
          </div>
        );
      } else return <></>;
}
