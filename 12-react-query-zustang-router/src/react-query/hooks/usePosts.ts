import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostQuery {
  page: number;
  pageSize: number;
  userId?: number;
}

const usePosts = (query: PostQuery) => {
  const { page, pageSize, userId } = query;

  const fetchPosts = () => {
    const params: any = {
      _start: (page - 1) * pageSize,
      _limit: pageSize,
    };

    if (userId) params["userId"] = userId;

    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params,
      })
      .then((res) => res.data);
  };

  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 60 * 1000,
    keepPreviousData: true,
  });
};

export default usePosts;
