import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { loadingActions } from '../store/loading';

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

    const isLoadingStatus = status === 'pending' ? true:false;
    console.log(status);
    if(status === 'pending')
      dispatch(loadingActions.setLoading(isLoadingStatus));
      else
      dispatch(loadingActions.setLoading(isLoadingStatus));
    if (status === 'completed') {
      history.push('/quotes');
    }    
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
