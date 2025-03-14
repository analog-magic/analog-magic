import { useState, useEffect } from "react";
import {
  Container,
  Title,
  useMantineTheme,
  BackgroundImage,
  Image,
  Box,
  Button,
} from "@mantine/core";
import styles from "./Hero.module.css";

import photo1 from "../../../assets/images/hero/photo1.jpg";
import photo2 from "../../../assets/images/hero/photo2.jpg";
import photo3 from "../../../assets/images/hero/photo3.jpg";
import photo4 from "../../../assets/images/hero/photo4.jpg";
import photo5 from "../../../assets/images/hero/photo5.jpg";
const images = [
  {
    src: photo1,
    title: "The life moments",
    text: "Learn the art of analog photography",
  },
  {
    src: photo2,
    title: "Timeless Shots",
    text: "Discover the beauty of film photography",
  },
  {
    src: photo3,
    title: "Retro Elegance",
    text: "Master manual settings and composition",
  },
  {
    src: photo4,
    title: "Unique Aesthetics",
    text: "Create unique images with real grain",
  },
  {
    src: photo5,
    title: "Keep Memories",
    text: "Every photo tells a story",
  },
];

export default function Hero() {
  const theme = useMantineTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      );
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <Box className={styles.hero}>
      <Box className={styles.controls}>
        <Button className={styles.controlButton} onClick={handlePrev}>
          ◀
        </Button>
        <Button className={styles.controlButton} onClick={handleNext}>
          ▶
        </Button>
      </Box>

      <Box className={styles.imageWrapper}>
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            src={image.src}
            className={styles.image}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
            radius={theme.radius.lg}
          />
        ))}
      </Box>

      <Container>
        <Box
          className={styles.content}
          sx={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Box>
            <Title size={200} className={styles.outlinedText}>
              ANAL
            </Title>
          </Box>
          <Title size={80} order={1}>
            {images[currentIndex].title}
          </Title>
        </Box>
      </Container>

      <Image
        src="https://demo.bravisthemes.com/kimono/wp-content/themes/kimono/assets/img/layer-2.png"
        bottom={0}
        right={0}
        pos="absolute"
        className={styles.floatingImage}
        w={900}
      />
    </Box>
  );
}
