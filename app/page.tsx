"use client";
import DiscountBanner from "../sections/DiscountBanner/DiscountBanner";
import AboutUs from "../sections/home/AboutUs/AboutUs";
import ContactUs from "../sections/home/ContactUs/ContactUs";
import ReviewList from "../sections/home/ReviewSection/ReviewList";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/home/Hero/Hero";
import Header from "../sections/header/header";
import Quiz from "../sections/home/Quiz/Quiz";
import { Box } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
interface HomeProps {
  session: Session | null; 
}
export default function Home({ session }: HomeProps) {
  const startDate = "2024-10-20T10:00:00";
  const endDate = "2024-11-25T23:59:59";

  return (
    <>
        <SessionProvider session={session}>
      <Box dir={"rtl"}>
        <DiscountBanner
          startDate={startDate}
          endDate={endDate}
          promotionMessage="خصومات بنسبة 20% على الكورسات"
        />
      </Box>
      <Header/>

    
      <Hero/>
      <Quiz/>
      <AboutUs/>
      <ContactUs/>
      <ReviewList/>
      <Footer/>
      </SessionProvider>
    </>
  );
}
