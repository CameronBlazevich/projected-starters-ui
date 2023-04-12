import { RotatingLines } from "react-loader-spinner";

const LoadingIndicator = (props) => {
    return <div className='loading-indicator'><RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="96"
    visible={true}
  /></div>
}

export default LoadingIndicator;