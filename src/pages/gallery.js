import "./gallery.css";
import Artwork from "../components/artwork";
import { useEffect, useState } from "react";

function Gallery() {
  const [artworks, setArtWorks] = useState([]);
    useEffect(() => {
    fetch("./artworks.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setArtWorks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="gallery">
      {artworks.map((item, index) => (
        <Artwork
          key={index}
          index={index}
          imageSrc={item.src}
          alt={item.alt}
          prompt={item.prompt}
          genre={item.genre}
          websiteUrl={item.website}
        />
      ))}
    </div>
  );
}

export default Gallery;
