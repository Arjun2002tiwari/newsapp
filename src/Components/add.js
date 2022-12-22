import React, { useState } from "react";

export default  function add() {
    
 const addar = async (e) => {
    e.preventDefault();
 
    const res = await fetch("http://localhost:80/postarticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({author, title, description, images,content, category }),
    });
    const json = await res.json();

    console.log(json);
    if (json) {
     window.location.reload ()
      console.log("noteadded")
    } else {
      alert("Invalid credentials");
    }
}
  return (


    <div></div>
  )
}


