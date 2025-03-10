export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { id: 1, name: "Facebook", url: "https://facebook.com", icon: "FaFacebook" },
  {
    id: 2,
    name: "Instagram",
    url: "https://instagram.com",
    icon: "FaInstagram",
  },
  { id: 3, name: "Twitter", url: "https://twitter.com", icon: "FaTwitter" },
];



// About contect

export const ABOUT = [
  {
    ESTABLISHED: `ESTABLISHED 2015`,
    TEXT: `Old school barbering. Our barbershop is more than just a hair salon. You come here for a moment of relaxation, a good cup of coffee, a chat & when the session is over – a new haircut, a clean shave, or maybe just a refresher! With care, precision, and with love for the manual labor that the profession requires, we work hard to fulfill your requirements & wishes.`,
    openingHours: [
      "Monday – Friday: 10:00 AM – 7:00 PM",
      "Saturday: 9:00 AM – 5:00 PM",
      "Sunday: Closed",
    ],
  },
];

//Team content

export const TEAM_PARAGRAPH = `At The Brothers Cut, we take pride in our craftsmanship and attention to detail. Our team of skilled barbers brings years of experience, creativity, and passion for men’s grooming. Whether you’re looking for a classic haircut, a modern style, or a perfectly shaped beard, our barbers are here to deliver top-notch service tailored to you.`;
export const TEAM_H2 = `Our People Make Us Great`;

import img1 from "../assets/members/Ashur.jpeg";
import img2 from "../assets/members/Gilgamesh.jpeg";

export const MEMBERS = [
  {
    IMG: img1,
    NAME: `Gilgamesh`,
    EXPERIENCE: `4 Years`,
    BIO: `With over 4 years in the industry, Alexander specializes in precision cuts and classic styles. His expertise ensures that every client leaves the chair feeling fresh and confident.`,
  },
  {
    IMG: img2,
    NAME: `Ashur`,
    EXPERIENCE: `6 Years`,
    BIO: `A perfectionist when it comes to fades and modern styles, Ashur is dedicated to giving you the perfect sharp and clean look.`,
  },
];

//Services content

export const SERVICES_PARAGRAPH = `At Brothers Barber, we offer expert grooming services designed to keep you looking sharp and confident. Whether you're after a classic cut, a modern fade, or a perfectly groomed beard, our skilled barbers are here to provide top-quality service with attention to detail.`;

export const SERVICES = [
  {
    name: "Men's Haircut",
    description: "Classic haircut and styling tailored to your style.",
    price: "35 $",
    duration: "30 min",
    icon: "✂️",
  },
  {
    name: "Beard Trimming",
    description: "Shaping and trimming of the beard for a sharp look.",
    price: "25 $",
    duration: "20 min",
    icon: "🪒",
  },
  {
    name: "Hair Coloring",
    description: "Professional hair coloring in your desired shade.",
    price: "80 $",
    duration: "1-2 hours",
    icon: "🎨",
  },
  {
    name: "Luxury Package",
    description: "Complete experience with haircut, beard trim, and hair wash.",
    price: "99 $",
    duration: "60 min",
    icon: "💈",
  },
];

// Booking content

export const BOOKING_PARAGRAPH = `Looking for a fresh haircut or a perfectly groomed beard? Book your appointment at The Brothers Cut today! Simply fill out the form, and we’ll take care of the rest.`;

export const BOOKING_STEPS = [
  "Select your service (Haircut, Beard Trim).",
  "Choose a date and time that suits you.",
  "Provide your contact details so we can confirm your booking.",
  "Arrive at Ther Brothers Cut and enjoy your premium grooming experience!.",
];

// Contact us contect

export const contactUsHeading = `Get In Touch`
export const contactUsParagraph = `Have a question or want to book an appointment? We’re here to help! Contact us using the details below or visit our barbershop for a top-quality grooming experience.`

export const contactUsInfo = [
  {
    address: "6/57 Smart St, Fairfield NSW 2165, Australia",
    number: "+61 469 874 644",
    email: "Thebrotherscut@gmail.com",
  },
];
