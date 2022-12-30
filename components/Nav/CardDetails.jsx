import { useEffect, useRef } from "react";
import Image from "next/image";

function CardDetails({ cardWidth, navData, onClickOutside }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    }

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    }
  }, [onClickOutside]);

  return (
    <div ref={ref} className="card-detail glass" style={{ width: cardWidth + "px" }}>
      <Image
        src={navData.Profile.data.attributes.url}
        width={cardWidth - 30}
        height={cardWidth - 30}
        priority
        alt={navData.Profile.data.attributes.name}
      />
      <h3>{navData.Name}</h3>
      <h4>{navData.Email}</h4>
    </div>
  );
}

export default CardDetails