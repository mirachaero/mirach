import { Banner } from "./banner";
import CreateChange from "./create-change";
import OurValues from "./our-values";
import WhyChooseMirach from "./why-choose";
import Domains from "./domains";
import Products from "./products";
import VtolLogistics from "./vtol-logistic";
import BannerGrid from "./banner-grid";
import { Test } from "./test";

export default function HomePage() {
  return (
    <main>
      <Test />
      {/* <BannerGrid/> */}
      <div className="home-page-wapper">
        <OurValues />
      </div>
      <Domains />
      <Products />
      <VtolLogistics />
      <WhyChooseMirach />
      <CreateChange />
      <svg
        className="w-full h-full absolute inset-0  "
        // viewBox="0 0 1920 1024"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 L 1 1 L 0.79 1 Q 0.7 0.9277 0.8 0.98 L 0.286 0.98 Q 0 1.25 0.2 1 L 0 1 L 0 0 z" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="w-full h-full absolute inset-0  "
        // viewBox="0 0 1920 1024"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="myClipTop" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 L 1 1 L 1 0 L 0.79 0 Q 0.7 0.0723 0.8 0.02 L 0.286 0.02 Q 0 -0.25 0.2 0 L 0 0 L 0 1 z" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="w-full h-full absolute inset-0  "
        // viewBox="0 0 1920 1024"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="myClipFlip" clipPathUnits="objectBoundingBox">
            <path d="M 1 0 L 0 0 L 0 1 L 0.21 1 Q 0.29 0.9277 0.2 0.98 L 0.714 0.98 Q 1 1.25 0.8 1 L 1 1 L 1 0 z" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
}
