import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Community from "./Community";
import Setting from "./Setting";
import Communities from "./Communities";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/community" element={<Community />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </div>
  );
}

export default App;
