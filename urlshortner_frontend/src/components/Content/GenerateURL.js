import React, { useState } from "react";

export default function GenerateURL() {
  const [textcopy,settestcopy]= useState(false);
  function copyText() {
    var divElement = document.getElementById("myUrl");
    var range = document.createRange();
    range.selectNode(divElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    settestcopy(true);
    // alert("Text copied to clipboard!");
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
                urlshortner.netlify.app/sfsdgfr
              </p>
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {!textcopy ?<button className="btn btn-success m-1" onClick={copyText}><i class="bi bi-clipboard"></i> Copy</button>:<button className="btn btn-success m-1"><i class="bi bi-clipboard-check"></i> Copied</button>}
              <button className="btn btn-success m-1" disabled><i class="bi bi-pen"></i> Edit </button>
            </div>
          </div>
          {/* <h6>If you want to edit the link, please login first</h6> */}
        </div>
      </div>
    </div>
  );
}
