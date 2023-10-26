import config from "@/config/enviroment";
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

export const useQueryData = (queryKey: string, query: string, variables?: any) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: async () =>
      request(config.pokemonAPI, query, variables && { ...variables }),
  });
};
