import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import About from "./components/sidebar/Sidebar"
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/register" element={user ? <Home/> :<Register />}/>
        <Route path="/login" element={user ? <Home/> :<Login />}/>
        <Route path="/write" element={user ? <Write /> :<Register/>}/>
        <Route path="/settings" element={user ? <Settings /> :<Register/>}/>
        <Route path="/post/:postId" element={<Single />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
