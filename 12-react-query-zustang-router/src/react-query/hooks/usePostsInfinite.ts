import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  pageSize: number;
  userId?: number;
}

const usePostsInfinite = (query: PostQuery) => {
  const { pageSize, userId } = query;

  const fetchPosts = ({ pageParam = 1 }) => {
    const params: any = {
      _start: (pageParam - 1) * pageSize,
      _limit: pageSize,
    };

    if (userId) params["userId"] = userId;

    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params,
      })
      .then((res) => res.data);
  };

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePostsInfinite;
