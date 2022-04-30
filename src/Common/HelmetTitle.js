import {Helmet} from 'react-helmet';
import {WP_TITLE} from './WordPress';

const HelmetTitle = (props) => {
  const {subject} = props;
  const pageTitle = subject ? subject + ' — ' + WP_TITLE : WP_TITLE;

  return(
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
}

export default HelmetTitle;