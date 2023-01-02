import { TabsWrapper } from "./Tabs.style";
import {
  FaThLarge,
  FaHammer,
  FaPencilRuler,
  FaPaintBrush,
} from "react-icons/fa";

const Tabs = ({ active, setActive }) => {
  return (
    <TabsWrapper>
      <button
        className={active === "all" ? "active" : undefined}
        onClick={() => setActive("all")}
      >
        <FaThLarge fontSize={13} /> All
      </button>
      <button
        className={active === "development" ? "active" : undefined}
        onClick={() => setActive("development")}
      >
        <FaHammer fontSize={13} /> Develop
      </button>
      <button
        className={active === "design" ? "active" : undefined}
        onClick={() => setActive("design")}
      >
        <FaPencilRuler fontSize={13} /> Design
      </button>
      <button
        className={active === "craft" ? "active" : undefined}
        onClick={() => setActive("craft")}
      >
        <FaPaintBrush fontSize={13} /> Craft
      </button>
    </TabsWrapper>
  );
};

export default Tabs;
