import {NavLink} from 'react-router-dom';

const Taxonomies = (props) => {
  const {list, type} = props;

  return list.map((ID) => {
    const taxonomy = type.list[ID];
    const url = `${type.route}/${taxonomy.slug}`;

    return (
      <span className="taxonomy-badge badge bg-primary rounded-pill">
        <NavLink to={url}>{taxonomy.name}</NavLink>
      </span>
    );
  });
}

export default Taxonomies;