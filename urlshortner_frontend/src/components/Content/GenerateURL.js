import React, { useState } from "react";

export default function GenerateURL(props) {
  const [textcopy,settestcopy]= useState(false);
  function copyText() {
    var divElement = document.getElementById("myUrl");
    var range = document.createRange();
    range.selectNode(divElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    settestcopy(true);
  }
  window.onclick = function (event) {
    var myBox = document.getElementById('myUrl');

    if (event.target.contains(myBox) && event.target !== myBox) {
      settestcopy(false);
    }
}

    return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="alert alert-warning"
            style={{
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span>
              <b>Link:</b>{" "}
              <p style={{ wordWrap: "break-word" }} id="myUrl">
              http://localhost:3000/{props.slink}
              </p>
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {!textcopy ?<button className="btn btn-success m-1" onClick={copyText}><i class="bi bi-clipboard"></i> Copy</button>:<button className="btn btn-success m-1"><i class="bi bi-clipboard-check"></i> Copied</button>}
              <button className="btn btn-success m-1" disabled><i class="bi bi-pen"></i> Edit </button> //as of now disabled will update it soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
