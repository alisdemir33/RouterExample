import { Fragment } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useSelector } from 'react-redux';
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

const Layout = (props) => {
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
  const loadingMsg = useSelector(state => state.loadingReducer.message);

 const loadingDiv= isLoading && (
      <div className={classes.loading}>
         <LoadingSpinner message={loadingMsg}/>                        
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
