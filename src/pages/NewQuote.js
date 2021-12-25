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

    const loadingStatus = status === 'pending' ? true : false;
    const message = loadingStatus === true ? 'NEW QUOTE SAVING!!!!' : '';
    dispatch(loadingActions.setLoading({ isLoadingStatus: loadingStatus, loadingMessage: message }));

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
