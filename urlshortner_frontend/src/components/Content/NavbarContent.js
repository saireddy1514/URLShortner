import React, { useEffect, useState } from "react";
import GenerateURL from './GenerateURL';
import axios from 'axios';

export default function NavbarContent() {
  const [link,setlink]= useState(null);
  const [showBar,setshowBar] = useState(false);
  const [shorturllink,setshorturllink] = useState(null);
  function SubmitLink(e){
    e.preventDefault();
    const SendAPI = process.env.REACT_APP_SERVER_URL+"api/convertShort"
    const form = document.getElementById("urlform");
    const config = {     
      headers: { 'content-type': 'application/json' }
    }
    axios.post(SendAPI, JSON.stringify({"link":form.elements.url.value}), config)
    .then(response => {
      if(response.data.status){
        setshowBar(true);
        setshorturllink(response.data.shorturl);
      }  
      else{
        alert(response.data.message);
        setshowBar(false);
      }

    })
    .catch(error => {
        console.log(error);
    });
  }
  return (
    <div className="container-fluid mt-5">
      <h2>Paste your link and generate a shortened URL</h2>
      <form className="d-flex" role="search" onSubmit={SubmitLink} id="urlform">
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
              id="url"
              name="url"
              onChange={(e) => setlink(e.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter link here"
              style={{ padding: "1rem 1.5rem", width: "60%" }}
            />
            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ padding: "1rem 1.5rem", margin: 1 }}
            >
              Short URL
            </button>
          </div>
        </div>
      </form>
      {showBar&&
      <GenerateURL slink={shorturllink}/>}
    </div>
  );
}
