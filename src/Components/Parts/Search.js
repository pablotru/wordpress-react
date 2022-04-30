import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Search = () => {
  const [Query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    return navigate({
      pathname: '/search',
      search: `?q=${Query}`
    });
  }

  return (
    <form className="d-flex my-2 my-lg-2" onSubmit={onSubmit}>
      <input className="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setQuery(e.target.value)} value={Query}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  );
}

export default Search;