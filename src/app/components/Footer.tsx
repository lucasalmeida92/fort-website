import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { Container } from "@/components/Container";
import fortLogoSolid from "./logo-fort-solid.png";

const socialLinkClasses = 'mx-2 text-2xl hover:text-pink';

export function Footer() {
  return (
    <Container>
      <footer className="footer footer-center p-10 text-primary-content">
        <div>
          <Image
            src={fortLogoSolid}
            alt="Logo Fort eSports"
            className="w-10 transition-all hover:scale-[1.08]"
          />
          <p className="font-bold text-lg">Fort eSports</p>
          <p>Organização profissional de esportes eletrônicos</p>
          <p className="font-light text-xs">Copyright © 2023 - Todos os direitos reservados</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.instagram.com/fort_ofc"
              target="_blank"
              title="Fort Instagram"
              className={socialLinkClasses}
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.twitter.com/FortEsportsGG"
              target="_blank"
              title="Fort Twitter"
              className={socialLinkClasses}
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.tiktok.com/@FortEsportsGG"
              target="_blank"
              title="Fort TikTok"
              className={socialLinkClasses}
            >
              <FaTiktok />
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
}
