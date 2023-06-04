import { useState } from "react";
import usePostsInfinite, { PostQuery } from "./hooks/usePostsInfinite";
import React from "react";

const PostListInfinite = () => {
  const [postQuery, setPostQuery] = useState<PostQuery>({
    pageSize: 10,
  });

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePostsInfinite(postQuery);

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

      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <div className="d-flex gap-2 my-3">
        <button
          className="btn btn-primary"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </>
  );
};

export default PostListInfinite;
