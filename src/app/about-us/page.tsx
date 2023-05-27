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
        style={{
          backgroundImage: `url(${peopleImage1.src})`,
          backgroundPosition: '30% center',
        }}
      >
        <div
          className="w-full h-full"
          style={{ backgroundImage: `linear-gradient(160deg, rgba(0,0,0, 0.94) 0%, rgba(0,0,0, 0.72) 50%, rgba(0,0,0, 0.8) 100%)` }}
        ></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <p className="mt-[-140px] text-3xl md:text-5xl font-normal">
          Prazer, somos a<br />
          <span className="font-bold text-5xl md:text-7xl">
            Fort eSports! <FaHeart className="text-pink text-4xl md:text-6xl inline-block -mt-1" />
          </span>
        </p>
        <p className="mt-9 text-3xl md:text-5xl font-normal">
          O maior time do Ceará.
        </p>
      </div>
      <Container>
        <div className="relative bg-purple1 p-7 -mt-10 mb-10 rounded-2xl shadow-md">
          {/* Our History */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="lg:max-w-[50%]">
              <h2 className="text-4xl font-bold">Nossa história</h2>
              <p className="mt-7 text-white font-light leading-relaxed">
                Como toda equipe somos um grupo de pessoas que segue o sonho de ser campeão todos os dias.<br />
                A fort começou em 2019 jogando free fire onde conquistou isso e isso.<br /><br />
                Com essa experiencia montamos o time de CSGO e de Valorant junto do Lucas KOE e do Matheus DZN. <br />
                Desde de 2022 conseguimos conquistar todos os títulos que jogamos com o time de valorant e estamos evoluindo cada dia mais nosso time de CS.<br /><br />
                Mas nosso time não é somente esports mas tbm é pessoas, esse ano estamos com um time de streamers diversos que trazem a alegria da galera no dia dia e ainda ajudam a narrar nossas partidas. (somos a maior org do estado do Ceara)
              </p>
            </div>
            <div className="flex items-center">
              <Image src={peopleImage2} alt="Foto pessoas da Fort" className="w-full max-w-[500px] mt-2 lg:mt-0 rounded-lg shadow-2xl" />
            </div>
          </div>
          {/* Vision, Mission and Values */}
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 shrink-0 min-w-[200px]">
              <h2 className="text-4xl font-bold">Nossa visão</h2>
              <p className="mt-7 text-white font-light leading-relaxed">
                Ser uma das maiores organizações de eSports do Brasil.
              </p>
            </div>
            <div className="flex-1 shrink-0 min-w-[200px]">
              <h2 className="text-4xl font-bold">Nossa missão</h2>
              <p className="mt-7 text-white font-light leading-relaxed">
                Ser uma organização que cria oportunidades para a comunidade crescer no cenário de eSports.
              </p>
            </div>
            <div className="flex-1 shrink-0 min-w-[200px]">
              <h2 className="text-4xl font-bold">Nossos valores</h2>
              <p className="mt-7 text-white font-light leading-relaxed">
                Transparência, respeito, empatia, ética e honestidade.
              </p>
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
