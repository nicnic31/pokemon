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

export type Pokemons = {
  id: string;
  image: string;
  name: string;
  number: string;
  types: Array<string>;
};

const convertIntoLowerCase = (word: string) => word.toLowerCase();

export default function Pokedex() {
  const [variables, setVariables] = useState({ first: 10 });
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [name, setName] = useState<string>("");

  const { openModal } = useModal((state) => ({ openModal: state.openModal }));
  const { data }: any = useQueryData("pokemons", GET_POKEMONS, {
    ...variables,
  });

  useEffect(() => {
    if (data) {
      setPokemons(data?.pokemons);
    } else {
      setPokemons([]);
    }
  }, [data]);

  useEffect(() => {
    const storage = [...pokemons];
    if (name !== "") {
      const filteredPokemons = storage.filter((pokemon) => {
        const lowerCaseName = convertIntoLowerCase(pokemon.name);
        const lowerCaseSearch = convertIntoLowerCase(name);
        return lowerCaseName.includes(lowerCaseSearch);
      });

      setPokemons(filteredPokemons);
    } else {
      setPokemons(data?.pokemons);
    }
  }, [name]);

  console.log("data", data?.pokemons);
  console.log("data pokemons", pokemons);
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
      <div className="grid grid-cols-2 gap-5 pb-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons &&
          pokemons?.map((pokemon, idx) => <Card pokemon={pokemon} key={idx} />)}
      </div>
    </Layout>
  );
}
