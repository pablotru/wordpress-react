const PostDate = (date) => {
  const datePosted = new Date(date);
  return datePosted.toDateString();
}

export default PostDate