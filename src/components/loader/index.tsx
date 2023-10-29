import Image from "next/image";
import LoaderGif from "@/assets/image/pokemonLoader.gif";
import BannerImg from "@/assets/image/banner.png";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-[80%]">
      <Image src={LoaderGif} alt="Loader" width={100} height={100} />
      <p className="font-semibold tracking-wide text-sm text-slate-700 sm:text-sm md:text-base">
        Please wait while we gathering pokemons...
      </p>
    </div>
  );
}
