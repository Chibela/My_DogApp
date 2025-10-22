import React from "react";
import "../App.css";

function Sidebar({ title, items, onClick, type }) {
  return (
    <div className="sidebar">
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p className="empty">Nothing here yet...</p>
      ) : (
        <div className="sidebar-list">
          {type === "viewed"
            ? items.map((d, i) => (
                <div key={i} className="sidebar-item">
                  <img src={d.url} alt="dog" />
                  <span>{d.breeds?.[0]?.name || "Unknown"}</span>
                </div>
              ))
            : items.map((attr, i) => (
                <button
                  key={i}
                  className="ban-item"
                  onClick={() => onClick(attr)}
                >
                  {attr} ✕
                </button>
              ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
