import React, { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Sidebar from "./components/Sidebar";
import "./App.css";

const API_URL = "https://api.thedogapi.com/v1/images/search?has_breeds=1";
const API_KEY = import.meta.env.VITE_DOG_API_KEY || "DEMO-API-KEY";

function App() {
  const [dog, setDog] = useState(null);
  const [viewedDogs, setViewedDogs] = useState(() => {
    const saved = localStorage.getItem("viewedDogs");
    return saved ? JSON.parse(saved) : [];
  });
  const [banned, setBanned] = useState(() => {
    const saved = localStorage.getItem("bannedAttributes");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  const handleBeforeUnload = () => {
    localStorage.removeItem("viewedDogs");
  };

  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    localStorage.setItem("viewedDogs", JSON.stringify(viewedDogs));
  }, [viewedDogs]);

  useEffect(() => {
    localStorage.setItem("bannedAttributes", JSON.stringify(banned));
  }, [banned]);

  const fetchDog = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(API_URL, {
        headers: { "x-api-key": API_KEY },
      });

      if (!res.ok) throw new Error("Failed to fetch dog data");
      const data = await res.json();

      if (!data.length || !data[0].breeds?.length) {
        setError("No breed found, try again!");
        setLoading(false);
        return;
      }

      const newDog = data[0];
      const breed = newDog.breeds[0];
      const breedName = breed.name;
      const temperament = breed.temperament || "Unknown";
      const origin = breed.origin || "Unknown";

      const hasBanned = [breedName, temperament, origin].some((a) =>
        banned.includes(a)
      );
      if (hasBanned) {
        setError("Skipped banned dog, try again!");
        setLoading(false);
        return;
      }

      setDog(newDog);
      setViewedDogs((prev) => [...prev, newDog]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Error fetching dog data.");
      setLoading(false);
    }
  };

  const handleBan = (attr) => {
    setBanned((prev) =>
      prev.includes(attr)
        ? prev.filter((a) => a !== attr)
        : [...prev, attr]
    );
  };

  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <Sidebar title="Viewed Dogs" items={viewedDogs} type="viewed" />

      {/* Main Content */}
      <div className="main">
        <div className="main-card">
          <h1 className="title">DogFetch</h1>
          <p className="subtitle">
            Discover random dogs and learn about their breeds 🐾
          </p>

          <button onClick={fetchDog} className="discover-btn" disabled={loading}>
            {loading ? "Fetching..." : "Discover"}
          </button>

          {error && <p className="error-msg">{error}</p>}

          {dog && (
            <DogCard dog={dog} onBan={handleBan} bannedList={banned} />
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <Sidebar
        title="Banned Attributes"
        items={banned}
        onClick={handleBan}
        type="banned"
      />
    </div>
  );
}

export default App;
