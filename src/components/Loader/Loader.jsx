import { Oval } from 'react-loader-spinner';

// Import CSS modules
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer} role="alert">
      <Oval
        height={80}
        width={80}
        color="grey"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="yellow"
        strokeWidth={2}
        strokeWidthSecondary={2} />
    </div>
  );
};

export default Loader;
