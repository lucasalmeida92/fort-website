import Image from "next/image";
import { Container } from "@/components/Container";
import { SponsorsSection } from "@/components/SponsorsSection";
import { TeamsSection } from "@/components/TeamsSection";
import { FortHashtag } from "@/components/FortHashtag";
import peopleImage1 from './geral1.jpeg';
import peopleImage2 from './geral2.jpeg';
import { FaHeart } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <>
      <div
        className="w-screen h-screen absolute z-0 opacity-80  bg-red-900 top-0 left-0 bg-cover"
        style={{ backgroundImage: `url(${peopleImage1.src})` }}
      >
        <div
          className="w-full h-full"
          style={{ backgroundImage: `linear-gradient(160deg, rgba(0,0,0, 0.94) 0%, rgba(0,0,0, 0.72) 50%, rgba(0,0,0, 0.8) 100%)` }}
        ></div>
      </div>
      <Container>
        <div className="relative flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <p className="mt-[-140px] text-5xl font-normal">
            Prazer, somos a<br />
            <span className="font-bold text-7xl">
              Fort eSports! <FaHeart className="text-pink text-6xl inline-block -mt-1" />
            </span>
          </p>
          <p className="mt-9 text-5xl font-normal">
            O maior time do Ceará.
          </p>
        </div>
        <div className="hero min-h-[70vh]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src={peopleImage1} alt="Foto pessoas da Fort" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h2 className="text-3xl font-bold">Nossa história</h2>
              <p className="mt-5 text-white font-light leading-relaxed">Como toda equipe somos um grupo de pessoas que segue o sonho de ser campeão todos os dias. A fort começou em 2019 jogando free fire onde conquistou isso e isso. Com essa experiencia montamos o time de CSGO e de Valorant junto do Lucas KOE e do Matheus DZN. Desde de 2022 conseguimos conquistar todos os títulos que jogamos com o time de valorant e estamos evoluindo cada dia mais nosso time de CS. Mas nosso time não é somente esports mas tbm é pessoas, esse ano estamos com um time de streamers diversos que trazem a alegria da galera no dia dia e ainda ajudam a narrar nossas partidas. (somos a maior org do estado do Ceara)</p>
            </div>
          </div>
        </div>
      </Container>
      <TeamsSection />
      <SponsorsSection />
      <FortHashtag />
    </>
  )
}
