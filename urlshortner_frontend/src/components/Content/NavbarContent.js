import React from "react";
import GenerateURL from './GenerateURL';
export default function NavbarContent() {
  return (
    <div className="container-fluid mt-5">
      <h2>Paste your link and generate a shortened URL</h2>
      <form className="d-flex" role="search">
        <div className="container mt-4">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter link here"
              style={{ padding: "1rem 1.5rem", width: "60%" }}
            />
            <button
              className="btn btn-outline-primary"
              style={{ padding: "1rem 1.5rem", margin: 1 }}
            >
              Short URL
            </button>
          </div>
        </div>
      </form>
      <GenerateURL/>
    </div>
  );
}
