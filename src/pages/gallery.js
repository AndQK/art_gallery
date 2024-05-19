import "./gallery.css";
import Artwork from "../components/gallery/artwork";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [artworks, setArtWorks] = useState([]);
  const [open, setOpen] = useState(false);
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
          setOpen={setOpen}
          setPhotoIndex={setPhotoIndex}
        />
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={artworks.map((item) => ({ src: item.src }))}
        index={photoIndex}
        onIndexChange={setPhotoIndex}
        plugins={[Zoom]}
      />
    </div>
  );
}

export default Gallery;
