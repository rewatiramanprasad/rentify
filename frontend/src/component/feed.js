import { useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "./context";


const  Feed=()=> {
    
    
    const {user} = useContext(MyContext);
    console.log(user)
    return (<>
    
    <h1>Feed</h1>
    {/* <h2>{data}</h2> */}
    
    
    </>);
  }
  
  export default Feed;
  