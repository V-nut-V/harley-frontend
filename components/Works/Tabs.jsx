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
      <div className="container" id="category_tabs">
        <button
          className={active === "all" ? "active" : undefined}
          onClick={() => setActive("all")}
        >
          <FaThLarge /> All
        </button>
        <button
          className={active === "development" ? "active" : undefined}
          onClick={() => setActive("development")}
        >
          <FaHammer /> Develop
        </button>
        <button
          className={active === "design" ? "active" : undefined}
          onClick={() => setActive("design")}
        >
          <FaPencilRuler /> Design
        </button>
        <button
          className={active === "craft" ? "active" : undefined}
          onClick={() => setActive("craft")}
        >
          <FaPaintBrush /> Craft
        </button>
      </div>
    </TabsWrapper>
  );
};

export default Tabs;
