import { gql } from "graphql-request";

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      types
      id
      name
      image
      number
    }
  }
`;

