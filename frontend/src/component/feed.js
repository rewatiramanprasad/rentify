import { useContext, useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import MyContext from "./context";


const  Feed=()=> {
    const location =useLocation();
    const history =useNavigate();
    const email=location.state.user[0].email;
    const [feed,setFeed]=useState([]);
    const handlePost=()=>{
      history.push('/post',{email:email});
    }
    useEffect(()=>{
      const readingData=async()=>{
        const response = await fetch("https://rentifyapi.vercel.app/feed", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   email: username,
        //   mobile: password,
        // }),
      });
      const data = await response.json();
      console.log(data.data[0]);
      if(data.sucess){
        setFeed(data.data);
      }
    }
      readingData();
    },[feed])
    return (
      <header className="header">
      <h1>Rentify</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="feed">
        <h2 onClick={handlePost}>POST</h2>
        <ul>
          {feed.map(item => (
            <li key={item.id}>
              <h3>{item.email}</h3>
              <h3>{item.place}</h3>
              <h3>{item.area}</h3>
              <h3>{item.nob}</h3>
              <h3>{item.bathroom}</h3>
              <h3>{item.nearby}</h3>
              
            </li>
          ))}
        </ul>
      </div>
    </header>
    );
  }
  
  export default Feed;
  