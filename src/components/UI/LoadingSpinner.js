import { Fragment } from 'react/cjs/react.production.min';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = (props) => {
  return <Fragment>
    <div className={classes.ortala}>
      <div className={classes.message_box}>{props.message}</div>
      <div className={classes.spinner}>
      </div>
    </div>
  </Fragment>;
}

export default LoadingSpinner;
