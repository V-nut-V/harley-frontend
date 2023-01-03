import { useState, useEffect } from "react";
import { WorkCollectionWrapper } from "./WorkCollectionWrapper";
import WorkDetail from "./WorkDetail";

function WorkCollection({ activeWorksData }) {
  const [workDetail, setWorkDetail] = useState();
  const [openWorkDetail, setOpenWorkDetail] = useState(false);

  useEffect(() => {
    console.log("workDetail", workDetail);
  }, [workDetail]);

  return (
    <>
      <WorkCollectionWrapper>
        {activeWorksData.map((work) => (
          <div
            key={work.id}
            className="glass"
            onClick={() => {
              setWorkDetail(work);
              setOpenWorkDetail(true);
            }}
          >
            <div className="image-wrapper">
              <img
                src={work.attributes.Gallery.data[0].attributes.url}
                alt={work.attributes.Gallery.data[0].attributes.name}
              />
            </div>
            <div className="bottom-info">
              <img
                src={work.attributes.Icon.data.attributes.url}
                alt={work.attributes.Icon.data.attributes.name}
              />
              <h4>{work.attributes.Title}</h4>
              <h6>
                {work.attributes.Date.split("-").slice(0, -1).join(" / ")}
              </h6>
            </div>
          </div>
        ))}
      </WorkCollectionWrapper>
      {openWorkDetail && (
        <WorkDetail
          workDetail={workDetail}
          setOpenWorkDetail={setOpenWorkDetail}
          onClickOutside={() => setOpenWorkDetail(false)}
        />
      )}
    </>
  );
}

export default WorkCollection;
