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
            className="max-w-[80%] md:max-w-[50%]"
          />
          <div>
            <h1 className="text-5xl font-bold">Fort eSports,<br />o maior time do Ceará!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <a href="/#keep-up" title="Faça parte" className="btn btn-primary">Faça Parte</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
