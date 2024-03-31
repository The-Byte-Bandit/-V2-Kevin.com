import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/card.css'

const Card = (props) => {
  const { name, image, description } = props;

  return (
    <div className='flex flex-wrap card'>
      <div className='Proj-img-div flex'>
        <img className= 'proj-img' src={image} alt={name} />
      </div>

      <div className='flex flex-col text-right flex-1 proj-details'>
        <h3>{name}</h3>
        <div className=''>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
