import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { testimonials } from "../../../data/testimonials";
import SectionWrapper from "../../Shared/SectionWrapper";
import TestimonialSlide from "./TestimonialSlide";
const TestimonialSection = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <SectionWrapper
      sectionTitle="Testimonials"
      sectionName="What our customers say"
      sectionNumber="4"
    >
      <Carousel
        height={220}
        type="container"
        slideSize={{ base: "70%", "300px": "80%", "500px": "20%" }}
        slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
        loop
        align="start"
        plugins={[autoplay.current]}
        withControls={false}
      >
        {testimonials.map((t) => (
          <TestimonialSlide key={t.review} {...t} />
        ))}
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialSection;
