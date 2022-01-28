import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Community from "./Community";
import Setting from "./Setting";
import PostDetail from "./PostDetail";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createPost/:id" element={<CreatePost />} />
        <Route path="/community/:id" element={<Community />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/search/:id" element={<SearchResult />} />
      </Routes>
    </div>
  );
}

export default App;
