"use client";
import { useState } from "react";
import Layout from "@/layout";
import { GET_POKEMONS } from "@/queries/pokemons";
import { useQueryData } from "@/hooks/useQueryData";
import Search from "@/components/search";

export default function Pokedex() {
  const [variables, setVariables] = useState({ first: 20 });
  const [name, setName] = useState<string>("")
  const { data } = useQueryData("pokemons", GET_POKEMONS, { ...variables });

  console.log("data", data);
  return (
    <Layout>
      <div className="flex flex-row">
        <Search
          placeholder="Search by name..."
          value={name}
          handleSearch={(search: string) => setName(search)}
        />
      </div>
    </Layout>
  );
}