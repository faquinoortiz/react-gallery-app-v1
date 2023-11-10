import PropTypes from 'prop-types';

function Photo({ url, alt }) {
  return (
    <li className="photo-item">
      <img src={url} alt={alt} />
    </li>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;