import { Fragment } from 'react/cjs/react.production.min';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return<Fragment>
  <div className={classes.spinner}></div>
   
  <div>Saving..</div>
  </Fragment>;
}

export default LoadingSpinner;
