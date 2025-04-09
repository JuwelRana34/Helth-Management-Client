import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchData = (queryKey, endpoint) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_Url}/api/${endpoint}`);
      return response.data;
    },
    enabled: Boolean(endpoint),
  });
};

export default useFetchData;
