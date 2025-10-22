import React from "react";
import "../App.css";

function DogCard({ dog, onBan, bannedList }) {
  const breed = dog.breeds?.[0];
  if (!breed) return null;

  const { name, temperament, origin } = breed;

  const attributes = [
    { label: "Breed", value: name },
    { label: "Temperament", value: temperament },
    { label: "Origin", value: origin },
  ];

  return (
    <div className="dog-card">
      <img src={dog.url} alt={name} className="dog-image" />
      <div className="dog-info">
        {attributes.map((attr, idx) => (
          <p key={idx}>
            <strong>{attr.label}:</strong>{" "}
            <span
              onClick={() => onBan(attr.value)}
              style={{
                textDecoration: bannedList.includes(attr.value)
                  ? "line-through"
                  : "none",
              }}
            >
              {attr.value || "Unknown"}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default DogCard;