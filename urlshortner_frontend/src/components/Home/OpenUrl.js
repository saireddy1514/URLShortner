import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OpenUrl() {
    const [message,setmessage]=useState(null);
    const {url}=useParams();
    const surl= process.env.REACT_APP_SERVER_URL+`api/${url}`;
    try{
        useEffect(() => {
            (async () => {
                await axios.get(surl).then((response)=>{
                    if(response.data.status){
                            // window.open(response.data.url,"__self");
                            window.location.replace(response.data.url)
                    }
                    else{
                        setmessage(response.data.msg);
                    }
                }).catch((err)=>{
                setmessage("Something went wrong");
        
                })
            })();
          }, []) 
        
    }
    catch(err){
        setmessage("Something went wrong");
    }
  return (
     message!=null && message.length>0 &&<div>
      {message}
    </div>
  )
}
