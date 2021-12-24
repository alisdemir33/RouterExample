import { Fragment } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useSelector } from 'react-redux';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
 const loadingDiv=    isLoading && (
      <div className={classes.loading}>
         <LoadingSpinner message="Saving Form!" />                        
      </div>
    ) ;
 
  return (
   
    <Fragment>  
      <MainNavigation />
      {loadingDiv}
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
