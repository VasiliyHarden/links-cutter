import React from 'react';

import './LinkCard.scss';

const LinkCard = ({ from, to, clicks, date }) => (
  <div className='link-card'>
    <div className='link-card__section'>
      <span className='link-card__key'>Your link:</span>
      <span className='link-card__value'>
        <a href={to} className='link-card__link' target='_blanc' rel='noopener norefferer'>
          {to}
        </a>
      </span>
    </div>
    <div className='link-card__section'>
      <span className='link-card__key'>Original link:</span>
      <span className='link-card__value'>
        <a href={from} className='link-card__link' target='_blanc' rel='noopener norefferer'>
          {from}
        </a>
      </span>
    </div>
    <div className='link-card__section'>
      <span className='link-card__key'>Clicks:</span>
      <span className='link-card__value'>{clicks}</span>
    </div>
    <div className='link-card__section'>
      <span className='link-card__key'>Creation date:</span>
      <span className='link-card__value'>{new Date(date).toLocaleDateString()}</span>
    </div>
  </div>
);

export default LinkCard;