import PropTypes from 'prop-types';
import Photo from './Photo';

function PhotoList({ photos, pageTitle }) {
  return (
    <div className="photo-list">
      <h2>{pageTitle}</h2>
      <ul className="photos">
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            url={`https://live.staticflickr.com/${photo.server}/{photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
          />
        ))}
      </ul>
    </div>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      server: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default PhotoList;