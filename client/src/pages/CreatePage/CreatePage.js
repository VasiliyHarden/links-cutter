import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { useAuth } from '../../hooks/auth.hook';

import './CreatePage.scss';

const CreatePage = () => {

  const auth = useAuth();
  const history = useHistory();
  const { request } = useHttp();
  const [link, setLink] = useState('');

  const changeHandler = (e) => {
    setLink(e.target.value);
  };

  const createLinkHandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`
        });
        history.push(`detail/${data.link._id}`);
      } catch (e) {}
    }
  }

  return (
    <div className='create-page'>
      <input 
        type='text'
        placeholder='Insert link and hit Enter'
        className='create-page__input'
        value={ link }
        onChange={ changeHandler }
        onKeyPress={ createLinkHandler }
      />
    </div>
  );
}

export default CreatePage;