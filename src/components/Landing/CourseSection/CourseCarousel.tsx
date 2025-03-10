import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import CourseCard from "./CourseCard";

import { GiDeliveryDrone } from "react-icons/gi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import {
  MdOutlineLandscape,
  MdOutlineMenuBook,
  MdOutlineVideoCameraBack,
} from "react-icons/md";

const photoCoursesInfo = [
  {
    courseNumber: "01",
    courseName: "Outdoor Photography",
    icon: <MdOutlineVideoCameraBack size={60} color="white" />,
  },
  {
    courseNumber: "02",
    courseName: "Landscape Masterclass",
    icon: <MdOutlineLandscape size={60} color="white" />,
  },

  {
    courseNumber: "03",
    courseName: "Straight From The Sky",
    icon: <GiDeliveryDrone size={60} color="white" />,
  },
  {
    courseNumber: "04",
    courseName: "Indoor Photography",
    icon: <HiMiniVideoCamera size={60} color="white" />,
  },

  {
    courseNumber: "05",
    courseName: "Golden Hour Academy",
    icon: <IoMdPhotos size={60} color="white" />,
  },
  {
    courseNumber: "06",
    courseName: "Personalized Portfolio",
    icon: <MdOutlineMenuBook size={60} color="white" />,
  },
];
const CourseCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2500 }));

  return (
    <Carousel
      height={402}
      type="container"
      slideSize={{ base: "100%", "300px": "50%", "500px": "24%" }}
      slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
      loop
      align="start"
      withControls={false}
      withIndicators={true}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {photoCoursesInfo.map((course) => (
        <Carousel.Slide key={course.courseName}>
          <CourseCard
            courseName={course.courseName}
            courseNumber={course.courseNumber}
            courseIcon={course.icon}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CourseCarousel;
