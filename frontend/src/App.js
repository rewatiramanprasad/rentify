// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Login from './component/login';
import Feed from './component/feed';
import Post from './component/Post';
// import Component2 from './Component2';

const App=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </Router>
  );
}

export default App;

