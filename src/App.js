// import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


// import React, { Component } from 'react'
// import NavBar from './Components/NavBar';
// import News from './Components/News';

// export default class App extends Component {
//   pagesize=6;
//   apiKey = process.env.REACT_APP_NEWS_API

//   state={
//     progress:0
//   }
//   setProgress = (progress)=>{
//     setState({progress:progress})
//   }

//   render() {
//     return (
//       <Router>
//       <div>
//         <NavBar />
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={state.progress}
//       />
        
//         <Routes>
        
//           <Route exact  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pagesize} country="in" category="general" />}/>
//           <Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sport" pageSize={pagesize} country="in" category="sport" />}/>
//           <Route exact  path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country="in" category="business" />}/>
//           <Route exact  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country="in" category="entertainment" />}/>
//           <Route exact  path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category="general" />}/>
//           <Route exact  path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country="in" category="health" />}/>
//           <Route exact  path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country="in" category="science" />}/>
//           <Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country="in" category="sports" />}/>
//           <Route exact  path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesize} country="in" category="technology" />}/>
          
//         </Routes>
//       </div>
//       </Router>
//     )
//   }
// }

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


import React, { useState } from 'react'
import NavBar from './Components/FNavBar';
import News from './Components/FNews';

const App =()=> {
  const pagesize=6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
    return (
      <Router>
      <div>
        <NavBar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        
        <Routes>
        
          <Route exact  path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pagesize} country="in" category="general" />}/>
          <Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sport" pageSize={pagesize} country="in" category="sport" />}/>
          <Route exact  path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country="in" category="business" />}/>
          <Route exact  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country="in" category="entertainment" />}/>
          <Route exact  path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country="in" category="general" />}/>
          <Route exact  path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country="in" category="health" />}/>
          <Route exact  path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country="in" category="science" />}/>
          <Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country="in" category="sports" />}/>
          <Route exact  path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesize} country="in" category="technology" />}/>
          
        </Routes>
      </div>
      </Router>
    )
  }

export default App;


