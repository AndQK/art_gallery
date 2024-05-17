import "./artwork.css";

function Artwork({ index, imageSrc, alt, prompt, genre, websiteUrl }) {
  return (
    <div className={`artwork-item ${index % 2 === 0 ? "left" : "right"}`}>
      <img src={imageSrc} alt={alt} />
      <div className="artwork-details">
        <h3>Prompt: {prompt}</h3>
        <p>Genre: {genre}</p>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          Visit website
        </a>
      </div>
    </div>
  );
}

export default Artwork;
