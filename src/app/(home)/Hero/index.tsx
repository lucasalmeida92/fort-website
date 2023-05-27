import Image from "next/image";
import { Container } from "@/components/Container";
import coverImage from "./top-cover.png";

export function Hero() {
  return (
    <Container>
      <div className="hero min-h-[70vh]">
        <div className="hero-content flex-col md:flex-row-reverse">
          <Image
            src={coverImage}
            alt="Headline cover image"
            className="max-w-[90%] md:max-w-[50%] max-h-[400px] md:max-h-none object-contain"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-10 md:leading-[3.8rem]">
              <span className="text-4xl md:text-6xl">Fort eSports</span>,<br />o maior time do Ceará!
            </h1>
            <p className="mt-4 font-light">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href="/#keep-up" title="Faça parte" className="btn btn-primary mt-7">Quero fazer parte</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
