export interface contactLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  txt: string;
  paragraph: string;
}

export const contactLinks: contactLink[] = [
  {
    id: 1,
    name: "Mail",
    url: "mailto:thebrotherscut@exampel.com",
    icon: "CiMail",
    txt: "thebrotherscut@exampel.com",
    paragraph: "Our friendly team is here to help."
  },
  {
    id: 2,
    name: "Phone",
    url: "tel:+61 469 874 644",
    icon: "FiPhone",
    txt: "+61 469 874 644",
    paragraph: "Call us about your appoitment."
  },
  {
    id: 3,
    name: "Location",
    url: "6/57 Smart St, Fairfield NSW 2165, Australia",
    icon: "CiLocationArrow1",
    txt: "6/57 Smart St, Fairfield NSW 2165, Australia",
    paragraph: "Where you can fins us."
  },
];
