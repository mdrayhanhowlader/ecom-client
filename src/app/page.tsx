"use client";

import Sidebar from "@/components/Sidebar";
import Slider from "@/components/Slider";
import RightSideComponent from "@/components/RightSideComponent";
import ProductList from "@/components/ProductList";
import Header from "@/components/layout/Header";
import Banner from "@/components/common/Banner";

export default function Home() {
  return (
    <div>
      {/* <div className="container mx-auto flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full md:w-4/5">
          <div className="flex flex-col md:flex-row">
            <Slider />
            <RightSideComponent />
          </div>
        </div>
      </div> */}
      <Banner />
      <ProductList />
    </div>
  );
}
