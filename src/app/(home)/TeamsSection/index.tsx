import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import csGoLogo from "./csgo-logo.png";
import valorantLogo from "./valorant-logo.png";
import twitchLogo from "./twitch-logo.svg";
import valorantMale from "./gekko.jpeg";
import valorantFemale from "./raze.jpeg";
import csgoMale from "./csgo.jpeg";
import streamersImage from "./streamers.jpeg";
import './styles.scss';

export function TeamsSection() {
  return (
    <Container className="flex flex-col min-h-[70vh] py-8 items-center justify-center">
      <SectionTitle>Nossos times</SectionTitle>
      <ul className="flex gap-6 flex-wrap justify-center">
        <li>
          <Link
            href="/teams/valorant-male"
            title="Valorant Masculino"
            className="hover:shadow-2xl hover:-translate-y-1 team"
          >
            <Image src={valorantMale} alt="Valorant team image" className="team-image" />
            <span className="team-content">
              <h3 className="text-lg drop-shadow-md">Valorant Masculino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={valorantLogo} alt="Logo Valorant" className="game-logo" />
              </figure>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/teams/valorant-male"
            title="Valorant Feminino"
            className="hover:shadow-2xl hover:-translate-y-1 team"
          >
            <Image src={valorantFemale} alt="Valorant team image" className="team-image" />
            <span className="team-content">
              <h3 className="text-lg drop-shadow-md">Valorant Feminino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={valorantLogo} alt="Logo Valorant" className="game-logo" />
              </figure>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/teams/valorant-male"
            title="CS:GO Masculino"
            className="hover:shadow-2xl hover:-translate-y-1 team"
          >
            <Image src={csgoMale} alt="Valorant team image" className="team-image" />
            <span className="team-content">
              <h3 className="text-lg drop-shadow-md">CS:GO Masculino</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={csGoLogo} alt="Logo CS:GO" className="game-logo" />
              </figure>
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/teams/streamers"
            title="Streamers"
            className="hover:shadow-2xl hover:-translate-y-1 team"
          >
            <Image src={streamersImage} alt="Valorant team image" className="team-image" />
            <span className="team-content">
              <h3 className="text-lg drop-shadow-md">Streamers</h3>
              <figure className="bg-white p-2 rounded-xl">
                <Image src={twitchLogo} alt="Logo Streamers" className="game-logo" />
              </figure>
            </span>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
