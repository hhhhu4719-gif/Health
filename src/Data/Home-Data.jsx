import { FaCloudRain, FaBrain, FaBolt, FaHeartbeat, FaUserFriends, FaFemale, FaWineBottle, FaSmoking } from "react-icons/fa";
import {
  FaUserDoctor,
  FaCalendarCheck,
  FaTruckMedical,
  FaHeadset,
  FaNotesMedical
} from "react-icons/fa6";
import Style from "../Styles/Home_css/Home_service.module.css";

export const service_Data = [
  {
    logo: <FaUserDoctor className={Style.Icon} />,
    heading: "Consult a Doctor",
    peregraph: "Consult a doctor if you feel sick or notice unusual symptoms. A doctor can give proper advice and treatment. Early care helps you stay healthy.",
  },
  {
    logo: <FaCalendarCheck className={Style.Icon} />,
    heading: "Medical Appointments",
    peregraph: "Book medical appointments easily at your convenience. Schedule visits with experienced doctors without long waiting times. Proper scheduling ensures better healthcare management.",
  },
  {
    logo: <FaTruckMedical className={Style.Icon} />,
    heading: "Emergency Case",
    peregraph: "In case of medical emergencies, immediate support is available. Quick response and professional care can save lives. Always seek urgent help when facing critical situations.",
  },
  {
    logo: <FaHeadset className={Style.Icon} />,
    heading: "24/7 Support",
    peregraph: "Get healthcare assistance anytime, day or night. Our support team is always ready to guide and help you. Continuous care ensures peace of mind for patients.",
  },
  {
    logo: <FaNotesMedical className={Style.Icon} />,
    heading: "Health Checkup",
    peregraph: "Regular health checkups help detect problems early. Preventive care improves overall well-being and lifestyle. Stay proactive about your health with routine medical tests.",
  },
];

export const aboutData = {
  heading: "We Provide Trusted & Advanced Healthcare Services",
  paragraph:
    "We deliver high-quality medical care with experienced doctors and modern facilities. Our goal is to ensure every patient receives safe, effective, and compassionate treatment. Your health and well-being are our top priorities.",
  features: [
    {
      title: "Certified Medical Center",
      description:
        "Our hospital is certified and follows international healthcare standards to ensure safe and reliable treatment for all patients.",
    },
    {
      title: "Award-Winning Healthcare",
      description:
        "Recognized for excellence in patient care, advanced treatments, and medical innovation.",
    },
    {
      title: "Expert Doctors Team",
      description:
        "Our team consists of highly qualified specialists dedicated to providing personalized and effective healthcare solutions.",
    },
  ],
  doctor: {
    name: "Dr. Ahmed Khan",
    designation: "Chief Medical Officer & Founder",
  },
};

export const testimonials = [
  {
    id: 1,
    name: "John T.",
    role: "Satisfied Patient",
    message:
      "I had an amazing experience at this medical center. I received excellent care from the entire staff and I feel so much better now!",
    rating: 5,
    image: "/images/patient1.jpg",
  },
  {
    id: 2,
    name: "Sarah P.",
    role: "Verified Review",
    message:
      "Very knowledgeable doctors and caring staff. Highly recommend!",
    rating: 5,
  },
];

export const features = [
  {
    id: 1,
    title: "Not Just Better Care, But A Better Experience",
    description:
      "Our patient-centered approach ensures you receive personalized and compassionate care tailored to your unique needs.",
  },
  {
    id: 2,
    title: "Serving Patients Through Exemplary Care",
    description:
      "We are dedicated to providing top-notch medical services to ensure the best outcomes and promote overall wellness.",
  },
  {
    id: 3,
    title: "Stay Safe, Maintain Well-Being With Medicine You Can Trust",
    description:
      "Our medical center is equipped with advanced technology and staffed by highly qualified medical professionals.",
  },
];

export const concerns = [
  {
    id: 1,
    title: "Depression",
    description:
      "Does your life feel impossible & hopeless? You don't have to manage it alone.",
    icon: FaCloudRain,
    link:"/conditions"
  },
  {
    id: 2,
    title: "Anxiety",
    description:
      "Chronic worry, mental fatigue, and racing thoughts?",
    icon: FaBrain,
    link:"/conditions"
  },
  {
    id: 3,
    title: "Obsessive Compulsive (OCD)",
    description:
      "Are your thoughts overwhelming and repetitive?",
    icon: FaBolt,
    link:"/conditions"
  },
  {
    id: 4,
    title: "Bipolar Disorder",
    description:
      "Struggling with mood swings between mania and depression?",
    icon: FaHeartbeat,
    link:"/conditions"
  },
  {
    id: 5,
    title: "Adult ADHD",
    description:
      "Difficulty focusing, restlessness or impulsivity?",
    icon: FaBolt,
    link:"/conditions"
  },
  {
    id: 6,
    title: "Social Anxiety",
    description:
      "Fearful in social settings? We can help.",
    icon: FaUserFriends,
    link:"/conditions"
  },
  {
    id: 7,
    title: "Women's Health",
    description:
      "Hormonal or fertility-related mental health concerns?",
    icon: FaFemale,
    link:"/conditions"
  },
  {
    id: 8,
    title: "Alcohol Addiction",
    description:
      "Is alcohol affecting your daily life?",
    icon: FaWineBottle,
    link:"/conditions"
  },
  {
    id: 9,
    title: "Tobacco Addiction",
    description:
      "Struggling to quit tobacco?",
    icon: FaSmoking,
    link:"/conditions"
  },
];
