import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useFetchData = (queryKey, endpoint) => {
  const axiosSecure = useAxiosSecure()
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await axiosSecure.get(`${import.meta.env.VITE_Url}/api/${endpoint}`);
      return response.data;
    },
    enabled: Boolean(endpoint),
  });
};

export default useFetchData;
