import {WP_FOOTER} from '../Common/WordPress';

const Footer = () => {
  return(
    <footer className="container-fluid p-5 bg-dark text-white text-center">
      <span dangerouslySetInnerHTML={{__html:WP_FOOTER}}/>
    </footer>
  )
}

export default Footer;