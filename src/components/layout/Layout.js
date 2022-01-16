import { Fragment } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useSelector } from 'react-redux';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import LoadingBackdrop from '../UI/LoadingBackdrop';

const Layout = (props) => {
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
  const loadingMsg = useSelector(state => state.loadingReducer.message);

  const loadingDiv= isLoading && (
    <LoadingBackdrop  loadingMsg={loadingMsg}></LoadingBackdrop>
    ) ; 

 /*  const loadingDiv =  ( <LoadingBackdrop loadingMsg={loadingMsg}/>);;
let returnUI;
  if(isLoading)
  returnUI =loadingDiv;
  else
  returnUI =  <main className={classes.main}>{props.children}</main>; */
 
  return (
   
    <Fragment>  
      <MainNavigation />
      {loadingDiv}
      <main className={classes.main}>{props.children}</main> 
    </Fragment>
  );
};

export default Layout;
