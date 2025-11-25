import { Banner } from "./banner";
import Domains from "./domains";
import OurValues from "./our-values";
import OurValuesPartTwo from "./our-values-part-two";
import Products from "./products";

export default function HomePage() {
  return (
    <>
      <Banner />
      <OurValues />
      <Domains />
      <Products />
    </>
  );
}
