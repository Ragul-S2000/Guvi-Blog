import PropTypes from 'prop-types';
import Card from "../components/Card";

const All = ({ datas }) => {
  return (
    <>
      {datas.map((carddata) => (
        <Card carddata={carddata} key={carddata.id} />
      ))}
    </>
  );
};

All.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default All;
