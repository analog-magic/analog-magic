import { GiDeliveryDrone } from "react-icons/gi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { IoMdPhotos } from "react-icons/io";
import {
  MdOutlineLandscape,
  MdOutlineMenuBook,
  MdOutlineVideoCameraBack,
} from "react-icons/md";

export const photoCoursesInfo = [
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
