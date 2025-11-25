import { Banner } from "./banner";
import CreateChange from "./create-change";
import OurValues from "./our-values";
import OurValuesPartTwo from "./our-values-part-two";
import VtolLogistics from "./vtol-logistic";
import WhyChooseMirach from "./why-choose";
import Domains from "./domains";
import Products from "./products";

export default function HomePage() {
  return (
    <>
      <Banner />
      <OurValues />
      <OurValuesPartTwo />
    
        {/* <VtolLogistics /> */}
        <WhyChooseMirach />
        <CreateChange/>

      <Domains />
      <Products />
    </>
  );
}
