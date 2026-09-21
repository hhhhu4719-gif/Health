import { FaUserDoctor, FaBrain, FaChild, FaHospital } from "react-icons/fa6";
import { MdSelfImprovement, MdArticle, MdVideoLibrary, MdAssessment } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { BsHeartPulse } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export const Experts = [
    {
        icon: <FaUserDoctor />,
        lebel: "Therapists",
        link: "/experts",
        peragraph: true,
        info: "Licensed therapists who provide talk therapy to help manage stress, relationships, trauma, and emotional challenges.",
        type: "Therapists"
    },
    {
        icon: <FaBrain />,
        lebel: "Psychiatrists",
        link: "/experts",
        peragraph: true,
        info: "Medical doctors specializing in mental health who can diagnose conditions and prescribe medication when needed.",
        type: "Psychiatrists"
    },
    {
        icon: <FaChild />,
        lebel: "Child and Youth Experts",
        link: "/experts",
        peragraph: true,
        info: "Specialists trained to support children and teenagers dealing with behavioral, emotional, and developmental concerns.",
        type: "Child"
    },
];

export const Clinick = [
    {
        icon: <IoLocationSharp />,
        lebel: "Indore",
        link: "/clinics",
        peragraph: true,
        info: "Our Indore clinic offers in-person consultations and therapy sessions in a safe and welcoming environment.",
        type: "Indore"
    },
    {
        icon: <IoLocationSharp />,
        lebel: "Mumbai",
        link: "/clinics",
        peragraph: true,
        info: "Located in Mumbai, our clinic provides comprehensive mental health care with experienced professionals.",
        type: "Mumbai"
    },
    {
        icon: <IoLocationSharp />,
        lebel: "New Delhi",
        link: "/clinics",
        peragraph: true,
        info: "Our New Delhi center delivers personalized therapy and psychiatric services tailored to individual needs.",
        type: "New Delhi"
    },
];

export const Service = [
   {
        icon: <FaUserDoctor />,
        lebel: "Adult Therapy",
        link: "/service",
        peragraph: false,
        info: "Confidential one-on-one therapy sessions designed to help adults cope with emotional and psychological challenges.",
        type: "Adult Therapy"
    },
   {
        icon: <FaBrain />,
        lebel: "Adult Psychiatry",
        link: "/service",
        peragraph: false,
        info: "Comprehensive psychiatric evaluations and medication management for adults with mental health conditions.",
        type: "Adult Psychiatry"
    },
   {
        icon: <MdSelfImprovement />,
        lebel: "Self-Care",
        link: "/service",
        peragraph: false,
        info: "Guided self-care programs and wellness strategies to improve mental resilience and daily well-being.",
        type: "Self-Care"
    },
];

export const Conditions = [
    {
        icon: <BsHeartPulse />,
        lebel: "Depression",
        link: "/conditions",
        peragraph: false,
        info: "Persistent feelings of sadness, low energy, or loss of interest that affect daily functioning and quality of life.",
        type: "Depression"
    },
    {
        icon: <GiHealthNormal />,
        lebel: "Anxiety",
        link: "/conditions",
        peragraph: false,
        info: "Excessive worry, fear, or nervousness that can interfere with work, relationships, and daily activities.",
        type: "Anxiety"
    },
    {
        icon: <FaChild />,
        lebel: "Womens Health",
        link: "/conditions",
        peragraph: false,
        info: "Specialized mental health support addressing hormonal, emotional, and life-stage challenges faced by women.",
        type: "Womens Health"
    },
];

export const Resources = [
    {
        icon: <MdArticle />,
        lebel: "Articles",
        link: "/resources",
        peragraph: false,
        info: "Expert-written articles covering mental health topics, coping strategies, and wellness insights.",
        type: "Articles"
    },
    {
        icon: <MdVideoLibrary />,
        lebel: "Videos",
        link: "/resources",
        peragraph: false,
        info: "Educational videos and guided sessions created by professionals to support mental well-being.",
        type: "Videos"
    },
    {
        icon: <MdAssessment />,
        lebel: "Assessments",
        link: "/resources",
        peragraph: false,
        info: "Self-assessment tools to help identify symptoms and understand your mental health needs.",
        type: "Assessments"
    },
    {
        icon: <GiHealthNormal />,
        lebel: "Support Kits",
        link: "/resources",
        peragraph: false,
        info: "Downloadable guides and support materials designed to help individuals and families manage mental health.",
        type: "Support Kits"
    },
];
