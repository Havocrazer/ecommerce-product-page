import Navbar from "../components/Navbar";
import ProductContent from "../components/ProductContent";

function LandingPage() {
  return (
    <div className="w-full max-md:w-[400px] flex flex-col justify-start items-center md:gap-[40px] relative">
      <Navbar />
      <ProductContent />
    </div>
  );
}

export default LandingPage;
