import { Route, Redirect,Routes, Navigate } from 'react-router-dom';
import React,{Suspense} from 'react';
import classes from './components/layout/Layout.module.css';

import LoadingSpinner from './components/UI/LoadingSpinner';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments  from './components/comments/Comments';
/* import AllQuotes from './pages/AllQuotes'; 
import NewQuote from './pages/NewQuote';*/

const NewQuote =React.lazy( () => {return  import('./pages/NewQuote')});
const AllQuotes =React.lazy( () => {return  import('./pages/AllQuotes')});

function App() {
  const loadingDiv= (
    <div className={classes.loading}>
       <LoadingSpinner message={"TESSSSSSSSSSSSSSSSSTTTTTT"}/>                        
    </div>
  ) ;

  return (
    <Layout>
       <Suspense fallback = {loadingDiv}> 
      <Routes>
        <Route path='/' element={ <Navigate to ='/quotes'/>} />    
        <Route path='/quotes' element={<AllQuotes />}/>
        <Route path='/quotes/:quoteId/*'  element={<QuoteDetail />}> 
           <Route path={'comments'} element ={<Comments />}/>      
        </Route> 

        <Route path='/new-quote' element={ <NewQuote />} />
        <Route path='*' element={ <NotFound />}/>
      </Routes>
       </Suspense> 
    </Layout>
  );
}

export default App;
