"use client";
import { useState } from "react";
import Layout from "@/layout/pageLayout";
import { GET_POKEMONS } from "@/queries/pokemons";
import { useQueryData } from "@/hooks/useQueryData";
import Search from "@/components/search";
import Button from "@/components/ui/button";
import FilterIcon from "@/components/icon/filter";
import Modal from "@/components/modal.tsx";
import useModal from "@/components/modal.tsx/context";

export default function Pokedex() {
  const [variables, setVariables] = useState({ first: 20 });
  const [name, setName] = useState<string>("");

  const { openModal } = useModal((state) => ({ openModal: state.openModal }));
  const { data } = useQueryData("pokemons", GET_POKEMONS, { ...variables });

  console.log("data", data);
  return (
    <Layout>
      <div className="flex flex-row align-items gap-2">
        <div className="w-full">
          <Search
            placeholder="Search by name..."
            value={name}
            handleSearch={(search: string) => setName(search)}
          />
        </div>

        <div className="">
          <Button className="h-full px-3" onClick={() => openModal("FILTER_MODAL", "jjjj")}>
            <FilterIcon />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
