import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedSVGBlob from "./AnimatedSVGBlob";
import { ReactSVG } from "react-svg";
import MusicPlayer from "./MusicPlayer";
import { NavWrapper, SocialLink, BlobWrapper } from "./index.style";
import CardDetails from "./CardDetails";

function Nav({ navData }) {
  const card = useRef();
  const [showCard, setShowCard] = useState(false);
  const [cardWidth, setCardWidth] = useState(238);

  useEffect(() => {
    window.setTimeout(() => {
      setCardWidth(card.current.offsetWidth);
    }, 300);
  }, []);

  return (
    <>
      <BlobWrapper>
        <div className="container">
          <AnimatedSVGBlob />
        </div>
      </BlobWrapper>
      <NavWrapper>
        <div className="container">
          <div className="card glass" ref={card}>
            <Image
              src={navData.Profile.data.attributes.url}
              width={70}
              height={70}
              priority
              alt={navData.Profile.data.attributes.name}
              onClick={() => setShowCard((prev) => !prev)}
            />
            <div className="social-links">
              {navData.SocialLinks.map((socialLink) => (
                <Link
                  key={socialLink.id}
                  href={socialLink.Link}
                  target="_blank"
                >
                  <SocialLink color={socialLink.Color}>
                    <ReactSVG src={socialLink.Icon.data.attributes.url} />
                  </SocialLink>
                </Link>
              ))}
            </div>
          </div>

          {showCard && (
            <CardDetails
              cardWidth={cardWidth}
              navData={navData}
              onClickOutside={() =>
                window.setTimeout(() => {
                  setShowCard(false);
                }, 100)
              }
            />
          )}

          <MusicPlayer musicUrl={navData.Music.data.attributes.url} />
        </div>
      </NavWrapper>
    </>
  );
}

export default Nav;
