import React from "react";
import Option from "../components/options/Option";
import Booking from "./booking/Booking";
import Listing from "../components/listings/Listing";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
      <Option />
      <Booking />
      <Listing />
      <Footer />
    </>
  );
}
