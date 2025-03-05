import { GiPhotoCamera } from "react-icons/gi";
import { BsCamera } from "react-icons/bs";

export const faqQuestions = [
  {
    question: "Why should I shoot on film instead of digital?",
    value: "film-instead-of-digital",
    answer:
      "Shooting on film offers a unique depth, character, and warmth that digital images often lack. The grain, dynamic range, and color rendition create an authentic, timeless feel. Plus, the process of shooting film forces you to slow down and be more intentional with each shot, making photography an experience, not just a result.",
    icon: <GiPhotoCamera size={18} color="orange" stroke="1.5" />,
  },
  {
    question: "What type of film should I use as a beginner?",
    value: "type-of-film-for-beginner",
    answer:
      "If you're just starting, try a 35mm color film like Kodak Gold 200 or Fujifilm Superia 400. They offer vibrant colors, good exposure latitude, and work well in most lighting conditions. If you’re into black & white, Ilford HP5 Plus 400 is a great choice because it’s versatile and forgiving with exposure.",
    icon: <BsCamera size={18} color="orange" stroke="1.5" />,
  },
  {
    question: "How do I store film rolls to keep them from getting damaged?",
    value: "store-film-rolls",
    answer:
      "Film is sensitive to heat and humidity, so keep it in a cool, dry place. Unused rolls should be stored in the fridge (not freezer) to extend their shelf life. If you’ve already shot a roll, develop it as soon as possible to prevent color shifts or loss of detail.",
    icon: <GiPhotoCamera size={18} color="orange" stroke="1.5" />,
  },
  {
    question: "Why do my film photos look underexposed or overexposed?",
    value: "film-photos-exposed",
    answer:
      "The most common cause is incorrect metering. If your photos are too dark (underexposed), you might have used too fast a shutter speed or too low an ISO. If they’re too bright (overexposed), your aperture or shutter speed might have let in too much light. Using a light meter or the Sunny 16 rule can help you achieve balanced exposures.",
    icon: <BsCamera size={18} color="orange" stroke="1.5" />,
  },
  {
    question: "How do I scan my film negatives for the best quality?",
    value: "scan-film-negatives",
    answer:
      "You can either send them to a lab or scan them yourself using a dedicated film scanner (like the Epson V600 or Plustek OpticFilm). If you’re scanning at home, clean the negatives with a soft brush or blower before scanning, and use editing software to adjust contrast, colors, and sharpness while keeping the film’s natural look.",
    icon: <GiPhotoCamera size={18} color="orange" stroke="1.5" />,
  },
];
