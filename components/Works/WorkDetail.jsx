import { useEffect, useRef } from "react";
import Markdown from "markdown-to-jsx";
import { IoClose } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { MdOutlineEditNote } from "react-icons/md";
import { Carousel } from "antd";
import OutSideLink from "./OutSideLink";
import { WorkDetailWrapper } from "./WorkDetail.style";

function WorkDetail({ workDetail, setOpenWorkDetail, onClickOutside }) {
  const ref = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <WorkDetailWrapper className="glass" ref={ref}>
      <button
        className="close-btn glass"
        onClick={() => setOpenWorkDetail(false)}
      >
        <IoClose fontSize={28} />
      </button>
      <div className="top-bar">
        <img
          src={workDetail.attributes.Icon.data.attributes.url}
          alt={workDetail.attributes.Icon.data.attributes.name}
        />
        <h3>{workDetail.attributes.Title}</h3>
      </div>
      <div className="carousel-slider">
        <button className="glass prev" onClick={() => slider.current.prev()}>
          <BsCaretLeftFill />
        </button>
        <button className="glass next" onClick={() => slider.current.next()}>
          <BsFillCaretRightFill />
        </button>
        <Carousel autoplay ref={slider}>
          {workDetail.attributes.Gallery.data.map((image, index) => (
            <div key={index} className="img-wrapper">
              <img src={image.attributes.url} alt={image.attributes.name} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="content">
        <div className="tags-wrapper">
          <div className="icon-wrapper glass">
            <IoMdPricetags />
          </div>
          <div className="tags">
            {workDetail.attributes.Tags.map((tag) => (
              <span className="tag glass" key={tag.id}>
                {tag?.Tag}
              </span>
            ))}
          </div>
        </div>
        <div className="description-wrapper">
          <div className="icon-wrapper glass">
            <MdOutlineEditNote />
          </div>
          <div className="note glass">
            {workDetail.attributes.Description ? (
              <Markdown
                options={{
                  overrides: {
                    a: {
                      component: OutSideLink,
                      props: {
                        className: "custom-link",
                      },
                    },
                  },
                }}
              >
                {workDetail.attributes.Description}
              </Markdown>
            ) : (
              "/"
            )}
          </div>
        </div>
      </div>
    </WorkDetailWrapper>
  );
}

export default WorkDetail;
