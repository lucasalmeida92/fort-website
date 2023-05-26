import Image from "next/image";
import { Container } from "@/components/Container";
import { Hero } from "./Hero";
import { FeaturedSection } from "./FeaturedSection";
import { TeamsSection } from "./TeamsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <TeamsSection />
      <Container className="flex flex-col items-center justify-center min-h-[50vh] py-8">
        {/* <h2 className="text-4xl mb-12 uppercase font-bold">Quem acredita na fort</h2> */}
        <div className="carousel rounded-box h-[240px] bg-black bg-opacity-5">
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
          <div className="carousel-item mx-4">
            <Image src="https://www.exitlag.com/img/exitlag.svg" alt="Exitlag" width={220} height={200}  />
          </div>
        </div>
      </Container>
      <Container className="flex items-center justify-center min-h-[25vh]">
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-xl">
          <em className="text-pink">#</em>JuntosSomosMaisFort
        </span>
      </Container>
    </>
  )
}
