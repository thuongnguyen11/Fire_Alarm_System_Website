import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route exact path={'/'} component={Home} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<SignIn />} />
        </Routes>
      </div>

    </Router>
  )
}

export default App;
