import { useState, useEffect } from "react";
import { WorkCollectionWrapper } from "./WorkCollectionWrapper";
import { Button, Modal } from "antd";

function WorkCollection({ activeWorksData }) {
  const [workDetail, setWorkDetail] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              setIsModalOpen(true);
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
      <Modal
        title={workDetail.attributes.Title}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default WorkCollection;