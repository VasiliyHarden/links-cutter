import React from 'react';
import { Link } from 'react-router-dom';

import './LinkList.scss';

const LinkList = ({ links }) => {
  if (!links.length) {
    return (
      <div className='link-list'>
        <h2 className='link-list__header'>No links founded</h2>
      </div>
    );
  }

  return (
    <div className='link-list'>
      <table className='link-list__table'>
        <colgroup>
          <col span="1" style={{ width: '5%' }} />
          <col span="1" style={{ width: '40%' }} />
          <col span="1" style={{ width: '40%' }} />
          <col span="1" style={{ width: '15%' }} />
        </colgroup>
        <thead>
          <tr>
            <th className='link-list__cell'>#</th>
            <th className='link-list__cell'>Minimized</th>
            <th className='link-list__cell'>Original</th>
            <th className='link-list__cell'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            links.map((link, index) => (
              <tr key={link._id}>
                <td className='link-list__cell'>{index + 1}</td>
                <td className='link-list__cell'>{link.to}</td>
                <td className='link-list__cell'>{link.from}</td>
                <td className='link-list__cell'>
                  <Link to={`/detail/${link._id}`} className='link-list__link'>Open</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default LinkList;