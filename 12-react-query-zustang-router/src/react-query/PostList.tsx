import { useState } from "react";
import usePosts, { PostQuery } from "./hooks/usePosts";

const PostList = () => {
  const [postQuery, setPostQuery] = useState<PostQuery>({
    page: 1,
    pageSize: 10,
  });

  const { data: posts, error, isLoading } = usePosts(postQuery);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error?.message}</p>;

  return (
    <>
      <select
        onChange={(event) =>
          setPostQuery((prevState) => ({
            ...prevState,
            userId: parseInt(event.target.value),
          }))
        }
        value={postQuery.userId}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      {posts?.length ? (
        <ul className="list-group">
          {posts?.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}

      <div className="d-flex gap-2 my-3">
        <button
          disabled={postQuery.page <= 1}
          className="btn btn-primary"
          onClick={() =>
            setPostQuery((prevState) => ({
              ...prevState,
              page: prevState.page - 1,
            }))
          }
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            setPostQuery((prevState) => ({
              ...prevState,
              page: prevState.page + 1,
            }))
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
