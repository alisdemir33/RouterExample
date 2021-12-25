import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import { loadingActions } from '../store/loading';
import { useDispatch } from 'react-redux';


const AllQuotes = () => {
  const dispatch = useDispatch();
 
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {

    const loadingStatus = status === 'pending' ? true : false;
    const message = loadingStatus ===true ? 'All Quotes Loading!!':'';
    dispatch(loadingActions.setLoading({ isLoadingStatus: loadingStatus, loadingMessage: message }));

  }, [status]);

  useEffect(()=>{
    sendRequest();
  },[])


   if (status === 'pending') {
    return <div></div>;
  } 

  /* if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner message="Loading Quates" />
      </div>
    );
  } */

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
