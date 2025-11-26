import { Banner } from "./banner";
import CreateChange from "./create-change";
import OurValues from "./our-values";
import WhyChooseMirach from "./why-choose";
import Domains from "./domains";
import Products from "./products";
export default function HomePage() {
  return (
    <>
      <Banner />
      <OurValues />
      {/* <Domains /> */}
      <Products />
        {/* <VtolLogistics /> */}
       <WhyChooseMirach />
        <CreateChange/>
    </>
  );
}
