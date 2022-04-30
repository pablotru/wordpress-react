import {Fragment} from 'react';
import HelmetTitle from '../../Common/HelmetTitle';

const NotFound = () => {
  const subject = 'Not Found';
  
  return(
    <Fragment>
      <HelmetTitle subject={subject}/>
      <div className="error flex-column">
        <h1>404</h1>
        <h5>Page not found</h5>
      </div>
    </Fragment>
  );
}

export default NotFound;