import { AsideSection } from "./AsideSection";
import Container from "./Container";
import HeaderSection from "./HeaderSection";
import TableSection from "./TableSection";

const MainSection = () => {
  return (
    <Container
      padding={true}
      className="container mx-auto border border-gray-design p-3 rounded-lg -translate-y-16 bg-black-design"
    >
      <HeaderSection />
      <div className="flex flex-col lg:flex-row gap-8">
        <AsideSection />
        <TableSection />
      </div>
    </Container>
  );
};
export default MainSection;
