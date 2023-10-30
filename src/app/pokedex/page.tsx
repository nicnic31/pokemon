"use client";
import { useEffect, useState } from "react";
import Layout from "@/layout/pageLayout";
import { GET_POKEMONS } from "@/queries/pokemons";
import { useQueryData } from "@/hooks/useQueryData";
import Search from "@/components/search";
import Button from "@/components/ui/button";
import FilterIcon from "@/components/icon/filter";
import useModal from "@/components/modal/context";
import Card from "@/components/card";
import Loader from "@/components/loader";
import useFilterType from "@/stores/useFilterType";
import FilterStorage from "@/components/filterStorage";
import PokedexContent from "@/modules/pokedex/components/pokedexContent";

export type Pokemons = {
  id: string;
  image: string;
  name: string;
  number: string;
  types: Array<string>;
};

const convertIntoLowerCase = (word: string) => word.toLowerCase();

// check if pokemon exist on the given array
const checkPokemonExist = (pokemons: Pokemons[], name: string) =>
  pokemons.find((pokemon) => pokemon?.name === name) ? true : false;

// check if the search name match the pokemon name
const checkSearchNameMatch = (pokemonName: string, searchName: string) =>
  pokemonName.includes(searchName);

// check if the type is exist in filter
const checkTypeExist = (filterTypes: string[], type: string) =>
  filterTypes.includes(type);

export default function Pokedex() {
  const { openModal } = useModal((state) => ({ openModal: state.openModal }));
  const { data, isLoading }: any = useQueryData("pokemons", GET_POKEMONS, {
    first: 100,
  });
  const { filter, clearFilter, setFilter } = useFilterType((state) => ({
    filter: state.filter,
    clearFilter: state.clearFilter,
    setFilter: state.setFilter,
  }));

  const pokemonData = data ? data?.pokemons : [];

  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(isLoading);
  const [maxIndex, setMaxIndex] = useState<number>(20);
  const [totalPokemon, setTotalPokemon] = useState<number>(0);

  const handleFilterChip = (title: string) => {
    const storage = [...filter];
    const filteredStorage = storage.filter((value) => value !== title);
    setFilter(filteredStorage);
  };

  const handleLoadMoreBtn = () => {
    setMaxIndex((prev) => prev + 20);
  };

  useEffect(() => {
    if (data) {
      setPokemons(data?.pokemons);
      setTotalPokemon(data?.pokemons.length);
    } else {
      setPokemons([]);
      setTotalPokemon(0);
    }
    setLoading(false);
  }, [data]);

  useEffect(() => {
    const pokemonsStorage: Pokemons[] = [...pokemonData];
    const searchLowerCase = convertIntoLowerCase(name);
    if (name !== "" && filter.length > 0) {
      const newPokemonStorage: Pokemons[] = [];

      pokemonsStorage.forEach((pokemon) => {
        pokemon.types.forEach((type) => {
          const pokemonNameLowerCase = convertIntoLowerCase(pokemon.name);
          const isNameMatch = checkSearchNameMatch(
            pokemonNameLowerCase,
            searchLowerCase
          );
          const isPokemonExist = checkPokemonExist(
            newPokemonStorage,
            pokemon.name
          );
          const isTypeExist = checkTypeExist(filter, type);

          if (!isPokemonExist && isNameMatch && isTypeExist) {
            newPokemonStorage.push(pokemon);
          }
        });
      });
      setPokemons(newPokemonStorage);
      setTotalPokemon(newPokemonStorage.length);
    } else if (name !== "" && filter.length === 0) {
      const filteredPokemons = pokemonsStorage.filter((pokemon) => {
        const pokemonNameLowerCase = convertIntoLowerCase(pokemon.name);
        return checkSearchNameMatch(pokemonNameLowerCase, searchLowerCase);
      });

      setPokemons(filteredPokemons);
      setTotalPokemon(filteredPokemons.length);
    } else if (name === "" && filter.length > 0) {
      const newPokemonStorage: Pokemons[] = [];
      pokemonsStorage.forEach((pokemon) => {
        pokemon.types.forEach((type) => {
          const isTypeExist = checkTypeExist(filter, type);
          const isPokemonExist = checkPokemonExist(
            newPokemonStorage,
            pokemon.name
          );
          if (isTypeExist && !isPokemonExist) {
            newPokemonStorage.push(pokemon);
          }
        });
      });

      setPokemons(newPokemonStorage);
      setTotalPokemon(newPokemonStorage.length);
    } else {
      setPokemons(pokemonData);
      setTotalPokemon(pokemonData.length);
    }

    setMaxIndex(20);
  }, [filter, name]);

  return (
    <Layout>
      <div className="flex flex-row align-items gap-2 mb-5">
        <div className="w-full">
          <Search
            placeholder="Search by name..."
            value={name}
            handleSearch={(search: string) => setName(search)}
          />
        </div>

        <div className="">
          <Button
            className="h-full px-3"
            onClick={() => openModal("FILTER_MODAL", "")}
          >
            <FilterIcon />
          </Button>
        </div>
      </div>
      {filter.length > 0 && (
        <FilterStorage
          filters={filter}
          handleClear={() => clearFilter()}
          handleDeleteChip={handleFilterChip}
        />
      )}
      <div className="h-[80%]">
        {loading ? (
          <Loader />
        ) : (
          <PokedexContent
            pokemons={pokemons}
            handleLoad={handleLoadMoreBtn}
            maxIndex={maxIndex}
            totalPokemon={totalPokemon}
          />
        )}
      </div>
    </Layout>
  );
}
