import { Banner } from "./banner";
import CreateChange from "./create-change";
import OurValues from "./our-values";
import WhyChooseMirach from "./why-choose";
import Domains from "./domains";
import Products from "./products";
import VtolLogistics from "./vtol-logistic";
 
export default function HomePage() {
  return (
    <main> 
    {/* <Test/> */}
      <Banner />
      <div className="home-page-wapper">
        
      <OurValues />
      </div>
      <Domains />
      <Products />
      <VtolLogistics />
      <WhyChooseMirach />
      <CreateChange />
     
    </main>
  );
}
