const NoResults = (props) => {
  const {query} = props;
  
  return(
    <div className="error">
      <h3>No search results for {query}</h3>
    </div>
  );
}

export default NoResults;