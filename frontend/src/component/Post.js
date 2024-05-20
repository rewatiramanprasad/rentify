import { useState } from "react";
import "./post.css";

const Post = () => {
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [nob, setNob] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [nearby, setNearby] = useState("");

  const handlePost = () => {};

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
      <div className="box2">////////</div>
    </div>
  );
};

export default Post;
