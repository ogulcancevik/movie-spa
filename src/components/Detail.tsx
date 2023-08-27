import { useSelector } from 'react-redux';
import { rootSelector } from '../store/root';

const Card = () => {
  const { selectedData } = useSelector(rootSelector);
  return (
    <div className="card">
      <div className="poster-container">
        <img
          src={selectedData.Poster}
          alt={`${selectedData.Title} Poster`}
        />
      </div>
      <div className="info-container">
        <h1 className="title">{selectedData.Title}</h1>
        <p className="plot">{selectedData.Plot}</p>
        <div className="details">
          <span className="detail-label">Year: {selectedData.Year}</span>
          <span className="detail-label">Genre: {selectedData.Genre}</span>
          <span className="detail-label">Director: {selectedData.Director}</span>
          <span className="detail-label">Writer: {selectedData.Writer}</span>
          <span className="detail-label">Actors: {selectedData.Actors}</span>
          <span className="detail-label">Language: {selectedData.Language}</span>
          <span className="detail-label">Country: {selectedData.Country}</span>
          <span className="detail-label">Runtime: {selectedData.Runtime}</span>
          <span className="detail-label">IMDb Rating: {selectedData.imdbRating}</span>
          <span className="detail-label">IMDb Votes: {selectedData.imdbVotes}</span>
        </div>
        <div className="imdb-link">
          <a
            href={`https://www.imdb.com/title/${selectedData.imdbID}`}
            target="_blank"
          >
            IMDb Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;