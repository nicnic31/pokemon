import Image from "next/image";
import Layout from "@/layout/pageLayout";
import PokemonBanner from "@/assets/image/banner.png";
import Button from "@/components/ui/button";
import PokemonIcon from "@/components/icon/pokemon";

export default function Home() {
  return (
    <Layout>
      <div className=" h-full gap-4 flex flex-col-reverse justify-center items-center sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="w-full sm:w-full md:w-full lg:w-1/2">
          <h5 className="text-2xl text-center font-semibold leading-normal text-slate-800 tracking-wide md:text-center lg:text-left sm:text-3xl md:text-4xl lg:text-6xl xl:7xl">
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </h5>
          <p className="my-7 text-sm text-slate-600 font-light tracking-wide text-center leading-relaxed md:text-center lg:text-left sm:text-sm md:text-lg lg:text-xl">
            You can know the type of Pokemon, its strength, disadvantages and
            abilities
          </p>
          <div className="my-5 w-full text-center md:text-center lg:text-left">
            <Button className="w-[200px] py-2 md:py-3">
              <div className="flex flex-row justify-center items-center gap-1">
                <p>See pokemons</p>
                <PokemonIcon />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center sm:w-full md:w-full lg:w-1/2">
          <Image
            src={PokemonBanner}
            alt="banner"
            height={700}
            width={600}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Layout>
  );
}
