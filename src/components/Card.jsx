import PropTypes from 'prop-types';

const Card = ({ carddata }) => {
  const { link, img, content, Author, Date, Read } = carddata;

  return (
    <div
      style={{ width: "65vh" }}
      className="card col-sm-12 col-lg-4 col-md-4 col-xl-4 mx-2 mt-3"
    >
      <a href={link} style={{ textDecoration: "none" }}>
        <img
          className="card-img-top"
          style={{ height: "35vh" }}
          src={img}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-text text-black">{content}</h5>
        </div>
        <div className="card-footer bg-transparent border-0">
          <p className="text-muted mb-0">
            By<span className="mx-2">{Author}</span>
          </p>
          <div className="d-flex flex-row">
            <p className="text-black">{Date}</p>
            <p className="text-black position-absolute end-0 me-3">{Read}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  carddata: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    Author: PropTypes.string.isRequired,
    Date: PropTypes.string.isRequired,
    Read: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
