import "./App.css";
import Create_post from "./Components/Create _post";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./Store/Post_list_store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <Create_post />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
