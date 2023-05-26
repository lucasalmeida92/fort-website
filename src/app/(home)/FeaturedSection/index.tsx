import Image from "next/image";
import { Container } from "@/components/Container";
// import featImage from "./beto-matheus.jpeg";
import novaJersey from "./nova-jersey.jpg";
import './styles.css';

export function FeaturedSection() {
  return (
    <Container className="flex items-center min-h-[70vh]">
      <div
        className="card w-full h-96 my-4 bg-base-100 shadow-xl image-full feat-card"
      >
        <figure>
          <Image
            src={novaJersey}
            alt="Featured image"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-3xl drop-shadow-md">Nova Jersey!</h2>
          <p className="text-white font-light">If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Compre agora</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
