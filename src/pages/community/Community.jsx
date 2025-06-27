import { useState } from "react";
import Board from "./Board";
import Gallery from "./Gallery";
import "./Community.css";

function Community() {
  const [activeTab, setActiveTab] = useState("board");

  return (
    <div className="community-page">
      <div className="community-tabs">
        <button
          className={activeTab === "board" ? "active" : ""}
          onClick={() => setActiveTab("board")}
        >
          게시판
        </button>
        <button
          className={activeTab === "gallery" ? "active" : ""}
          onClick={() => setActiveTab("gallery")}
        >
          사진첩
        </button>
      </div>

      <div className="community-content">
        {activeTab === "board" ? <Board /> : <Gallery />}
      </div>
    </div>
  );
}

export default Community;
