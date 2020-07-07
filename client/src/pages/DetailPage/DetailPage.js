import React, { useState, useCallback, Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import Loader from '../../components/Loader/Loader';
import LinkCard from '../../components/LinkCard/LinkCard';
import { AuthContext } from '../../context/AuthContext';

import './DetailPage.scss';

const DetailPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setLink(fetched);
    } catch (e) {}
  }, [token, linkId, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      { link && <LinkCard { ...link } /> }
    </Fragment>
  );
}

export default DetailPage;