import Image from 'next/image'
import PokemonLogo from "@/assets/image/logo.png"

export default function Home() {
  return (
    <Image src={PokemonLogo} alt="logo" />
  )
}
