import LoadingSpinner from "./LoadingSpinner"
import classes from './LoadingBackdrop.module.css'

const LoadingBackdrop = (props) => {
    return (<div className={classes.loading}>
        <LoadingSpinner message={props.loadingMsg} />
    </div>);
}

export default LoadingBackdrop;