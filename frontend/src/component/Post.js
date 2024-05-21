import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./post.css";

const Post = () => {
  const location =useLocation();
  console.log(location)
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [nob, setNob] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [nearby, setNearby] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handlePost =async () => {
    try {
      const response = await fetch("https://rentifyapi.vercel.app/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        place: place,
        area: area,
        nob:nob,
        bathroom:bathroom,
        nearby:nearby,
        email:location.email
      }),
    });
    const data = await response.json();
    if (data.sucess){
      setShowAlert(true);
      setTimeout(() => {
          setShowAlert(false);
        }, 3000); 
    }
  } catch (error) {
      
  }
  };

  return (
    <div className="container">
      <div className="box1"> 
        <input placeholder="Place" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
        <input placeholder="Area" type="text" value={area} onChange={(e) => setArea(e.target.value)} />
        <input
          placeholder="No of bedroom"
          type="text" value={nob}
          onChange={(e) => setNob(e.target.value)}
        />

        <input
          placeholder="Bathroom"
          type="text" value={bathroom}
          onChange={(e) => setBathroom(e.target.value)}
        />

        <input
          placeholder="Near by hospital and college"
          type="text" value={nearby}
          onChange={(e) => setNearby(e.target.value)}
        />

        <button type="submit" onClick={handlePost}>Post</button>
      </div>
      <div className="box2">
        <div>
        {showAlert && (
        <div className="alert">
          Signup successful! You can now login.
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Post;
