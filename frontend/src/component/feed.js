import { useContext, useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import './feed.css'
import MyContext from "./context";


const  Feed=()=> {
    const location =useLocation();
    const history =useNavigate();
    const email=location.state.user[0].email;
    const [feed,setFeed]=useState([]);
    const handlePost=()=>{
      history('/post',{state:{email:email}});
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
      console.log(data.data);
      if(data.sucess){
        setFeed(data.data);
      }
    }
      readingData();
    },[])
    return (
      <div>
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
        
      </div>
    </header>
    <div>
      <p>
    <ul className="feed">
          {feed.map(item => (
            <p key={item.id}>
              <h3>Email = {item.email}</h3>
              <h3>Place = {item.place}</h3>
              <h3>Area = {item.area}</h3>
              <h3>NOb = {item.nob}</h3>
              <h3>Bathroom = {item.bathroom}</h3>
              <h3>Nearby = {item.nearby}</h3>
              
            </p>
          ))}
        </ul>
        </p>
    </div>
    </div>
    );
  }
  
  export default Feed;
  