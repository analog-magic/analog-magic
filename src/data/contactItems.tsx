import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
};
export const contactItems: ContactProps[] = [
  {
    icon: <IconMail size={32} color="orange" />,
    title: "Write us an email",
    description:
      "Speak to our friendly team, we will get back to you in less than 24 hours.",
    details: "analog@magic.com",
  },
  {
    icon: <IconMapPin size={32} color="orange" />,
    title: "Visit us",
    description: "You can come check our studio every work day from 9 to 5pm.",
    details: "Analog magic studio\nFilm road, 355\n058 01 Bratislava",
  },
  {
    icon: <IconPhone size={32} color="orange" />,
    title: "Call us",
    description: "We will pick-up every work day between 9 to 5.",
    details: "+421 977 879 030",
  },
];
