import { useState, useEffect } from "react";
import { WorksWrapper } from "./index.style";
import WorkCollection from "./WorkCollection";
import Tabs from "./Tabs";

function Works({ worksData }) {
  const [active, setActive] = useState("all");
  const [activeWorksData, setActiveWorksData] = useState(worksData);

  useEffect(() => {
    if (active === "all") setActiveWorksData(worksData);
    if (active === "development") {
      const filteredWorksData = worksData.filter(workData => {
        const workTypes = workData.attributes.types.data.map(type => type.attributes.Title);
        return workTypes.includes("Develop");
      });
      setActiveWorksData(filteredWorksData);
    }
    if (active === "design") {
      const filteredWorksData = worksData.filter(workData => {
        const workTypes = workData.attributes.types.data.map(type => type.attributes.Title);
        return workTypes.includes("Design");
      });
      setActiveWorksData(filteredWorksData);
    }
    if (active === "craft") {
      const filteredWorksData = worksData.filter(workData => {
        const workTypes = workData.attributes.types.data.map(type => type.attributes.Title);
        return workTypes.includes("Art");
      });
      setActiveWorksData(filteredWorksData);
    }
  }, [active]);

  return (
    <WorksWrapper>
      <Tabs active={active} setActive={setActive} />
      <WorkCollection activeWorksData={activeWorksData} />
    </WorksWrapper>
  );
}

export default Works;
