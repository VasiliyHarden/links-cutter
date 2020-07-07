import React, { useState, useCallback, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';
import Loader from '../../components/Loader/Loader';
import LinkList from '../../components/LinkList/LinkList';

const LinksPage = () => {
  const { token } = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [links, setLinks] = useState([]);

  const getLinks = useCallback( async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request, setLinks]);

  useEffect(() => {
    getLinks();
  }, [getLinks]);

  if (loading) {
    return <Loader />;
  }

  return <LinkList links={links} />;
}

export default LinksPage;