import { Image, Box } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

const images = [
  {
    src: "/images/hero/photo1.jpg",
    title: "The life moments",
    text: "Learn the art of analog photography",
  },
  {
    src: "/images/hero/photo2.jpg",
    title: "Timeless Shots",
    text: "Discover the beauty of film photography",
  },
  {
    src: "/images/hero/photo3.jpg",
    title: "Retro Elegance",
    text: "Master manual settings and composition",
  },
  {
    src: "/images/hero/photo4.jpg",
    title: "Unique Aesthetics",
    text: "Create unique images with real grain",
  },
  {
    src: "/images/hero/photo6.jpg",
    title: "Keep Memories",
    text: "Every photo tells a story",
  },
];

export default function Hero() {
  return (
    <Box h="90vh" display="flex">
      <Carousel withIndicators height="100%" loop>
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              w="100%"
              h="100%"
              radius="lg"
              fit="cover"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
