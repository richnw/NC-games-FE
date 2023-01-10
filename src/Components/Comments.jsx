const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchComments().then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <ul>
      {comments.map((comment) => (
        <ReviewCard review={review} />
      ))}
    </ul>
  );
};

export default Comments;
