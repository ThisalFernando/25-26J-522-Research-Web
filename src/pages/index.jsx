import { useState, useEffect } from "react";
import methodologyImg from "../images/methodology.png";
import nodejs from "../images/nodejs.webp";
import postman from "../images/postman.png";
import python from "../images/python.png";
import react from "../images/react.png";
import reactnative from "../images/reactnative.png";
import tailwind from "../images/tailwindcss.png";
import vite from "../images/vite.png";
import mongodb from "../images/mongodb.png";
import supervisor from "../images/ThiliniJayalath.jpg";
import cosupervisor from "../images/HansiDeSilva.jpg";
import external from "../images/RohanGunawardhana.jpg";
import groupleader from "../images/GroupLeader.png";
import member1 from "../images/Member1.png";
import member2 from "../images/Member2.png";
import member3 from "../images/Member3.png";
import scholarIcon from "../icons/gscholar.png";
import linkedinIcon from "../icons/linkdin.png";
import researchgateIcon from "../icons/reseachgte.png";
import {
  Search,
  Settings,
  ShieldCheck,
  Zap,
  ArrowUp,
  Car,
  CalendarDays,
  Award,
  CheckCircle,
  Clock,
  Target,
  Trophy,
  BookOpen,
  FileText,
  Download,
  Presentation,
  Users,
  Mail,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = [
    { src: nodejs, alt: "Node.js" },
    { src: react, alt: "React" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: reactnative, alt: "React Native" },
    { src: vite, alt: "Vite" },
    { src: python, alt: "Python" },
    { src: mongodb, alt: "MongoDB" },
    { src: postman, alt: "Postman" }
  ];

  const milestones = [
    {
        id: "TAF",
        title: "TAF",
        date: "July 1, 2025",
        description: "Initial project proposal with research objectives and methodology",
        marksAllocated: "Completed",
        status: "Completed",
    },
    {
        id: "proposal",
        title: "Project Proposal Report",
        date: "August 29, 2025",
        description: "Initial project proposal with research objectives and methodology",
        marksAllocated: "Completed",
        status: "Completed",
    },
    {
        id: "progress1",
        title: "Progress Presentation-1",
        date: "January 8, 2026",
        description: "First progress presentation covering literature review and initial development",
        marksAllocated: "Completed",
        status: "Completed",
    },
    {
        id: "progress2",
        title: "Progress Presentation-2",
        date: "March 10, 2026",
        description: "Second progress presentation with system implementation and testing results",
        marksAllocated: "Pending",
        status: "Completed",
    },
    {
        id: "final",
        title: "Final Report Submission",
        date: "April 26, 2026",
        description: "Comprehensive project report including system design, implementation, and evaluation",
        marksAllocated: "Pending",
        status: "Pending",
    },
    {
        id: "viva",
        title: "Final Presentation & Viva",
        date: "April 27, 2026",
        description: "Final presentation summarizing project outcomes, challenges, and future work",
        marksAllocated: "Pending",
        status: "Pending",
    },
    {
        id: "web",
        title: "Website Assessment",
        date: "April 26, 2026",
        description: "Evaluation of project website and documentation for completeness and clarity",
        marksAllocated: "Pending",
        status: "Pending",
    },
    {
        id: "paper",
        title: "Research Paper Submission",
        date: "May 8, 2026",
        description: "Submission of research paper summarizing findings and contributions",
        marksAllocated: "Pending",
        status: "Pending",
    },
    {
        id: "logbook",
        title: "Logbook Submission",
        date: "May 6, 2026",
        description: "Submission of logbook documenting project progress, challenges, and solutions",
        marksAllocated: "Pending",
        status: "Pending",
    },
  ];

  const [selected, setSelected] = useState(milestones[0]);

  const documents = [
    {
        title: "Topic Assessment",
        date: "Uploaded on 2026/04/14",
        type: "Group",
        link: "https://drive.google.com/drive/folders/1puKRA3ufKEHeUr4PfwXJlt4ltwFeCRV4?usp=sharing",
        status: "available",
    },
    {
        title: "Project Proposal",
        date: "Uploaded on 2026/04/14",
        type: "Individual",
        link: "https://drive.google.com/drive/folders/1jfZkoJKe_VrNeas3wM8Ximiyfpoid-hZ?usp=sharing",
        status: "available",
    },
    {
        title: "Checklist Documents",
        date: "Uploaded on 2026/04/14",
        type: "Individual",
        link: "https://drive.google.com/drive/folders/1iBBMNuYamoTA1XWp1hSZ_JWIjxsFdeaT?usp=sharing",
        status: "available",
    },
    {
        title: "Research Paper",
        date: "Yet to be submitted, link will be updated soon.",
        type: "Group",
        status: "pending",
    },
    {
        title: "Final Report",
        date: "Yet to be submitted, link will be updated soon.",
        type: "Group",
        status: "pending",
    },
    {
        title: "Poster",
        date: "Yet to be submitted, link will be updated soon.",
        type: "Group",
        status: "pending",
    },
  ];

  const presentations = [
    {
        title: "Proposal Presentation",
        date: "August 29, 2025",
        slides: "36 slides",
        description:
        "Initial project proposal presentation outlining research objectives and methodology",
        status: "completed",
        driveLink: "https://drive.google.com/drive/folders/1FG3uz2moJ7n4WgCtDJAjb3w0hPY32cnp?usp=sharing"
    },
    {
        title: "Progress Presentation-1",
        date: "January 8, 2026",
        slides: "17 slides",
        description:
        "First progress presentation covering literature review and initial system design",
        status: "completed",
        driveLink: "https://drive.google.com/drive/folders/18niLSa_R1PskmuzcgbwX5jrEz9AyQJbC?usp=sharing"
    },
    {
        title: "Progress Presentation-2",
        date: "March 10, 2026",
        slides: "14 slides",
        description:
        "Second progress presentation with implementation details and preliminary results",
        status: "completed",
        driveLink: "https://drive.google.com/drive/folders/18eQuixNpudp4xhN5z08HwX4mSbElNYD1?usp=sharing"
    },
    {
        title: "Final Presentation",
        date: "April 26, 2026",
        slides: "Not yet created",
        description:
        "Comprehensive final presentation with complete system demonstration and results",
        status: "upcoming",
    },
  ];

  const team = [
    {
        name: "Ms. Thilini Jayalath",
        role: "Supervisor",
        desc: "Machine Learning | Software Engineering Complexity Metrics | HCI | ICT for Development",
        email: "thilini.j@sliit.lk",
        img: supervisor,
        linkedin: "https://www.linkedin.com/in/thilini-jayalath-2815b4b0/",
        scholar: "https://scholar.google.com/citations?hl=en&user=7xdb5PAAAAAJ",
        researchgate: "https://www.researchgate.net/profile/Thilini_Jayalath2",
    },
    {
        name: "Ms. Hansi De Silva",
        role: "Co-Supervisor",
        desc: "Machine Learning | Natural Language Processing | Cloud Computing",
        email: "hansi.d@sliit.lk",
        img: cosupervisor,
        linkedin: "https://www.linkedin.com/in/hansi-de-silva-03629b79/",
        scholar: "https://scholar.google.com/citations?hl=en&user=iwbzstMAAAAJ",
        researchgate: "https://www.researchgate.net/profile/Hansi_De_Silva2",
    },
    {
        name: "Dr. Rohan Gunawardena",
        role: "External Supervisor",
        desc: "Cardiac Electrophysiologist | Clinical Research | Digital Health",
        email: "rohan.g@gmail.com",
        img: external,
    },
    
  ];

  const teamMembers = [
    {
        name: "Ching V. M. L",
        status: "SE Undergraduate",
        role: "Group Leader",
        desc: "Detection of Arrhythmia",
        email: "it22246714@my.sliit.lk",
        img: groupleader,
    },
    {
        name: "Fernando P. T. V. A",
        status: "SE Undergraduate",
        role: "Group Member",
        desc: "Coronary Artery Disease (CAD) Detection (ISCHEMIA)",
        email: "it22244802@my.sliit.lk",
        img: member1,
    },
    {
        name: "Shrinath D. V. A",
        status: "SE Undergraduate",
        role: "Group Member",
        desc: "Detection of Supra-ventricular Tachycardia (SVT)",
        email: "it22627728@my.sliit.lk",
        img: member2,
    },
    {
        name: "Karunarathne R. R.",
        status: "SE Undergraduate",
        role: "Group Member",
        desc: "Detection of Myocardial Infarction (MI)",
        email: "it22284198@my.sliit.lk",
        img: member3,
    },
  ];

  return (
    <>
        <Navbar />
        <div className="text-white transition duration-300">

            {/* ======================= */}
            {/* 🔷 HERO SECTION */}
            {/* ======================= */}
            <div id="hero" className="relative min-h-screen overflow-hidden pt-24">

                <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c5c] via-[#2c7a7b] to-[#0b3c49] animate-gradient"></div>

                <div className="absolute inset-0 opacity-50">
                <svg
                    className="w-[200%] h-full animate-ecg"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                >
                    <polyline
                    className="ecg-line"
                    fill="none"
                    stroke="#9ad9db"
                    strokeWidth="2"
                    points="
                        0,100 100,100 120,80 140,120 160,60 180,140 200,100
                        300,100 320,90 340,130 360,70 380,150 400,100
                        500,100 520,85 540,120 560,60 580,140 600,100
                        700,100 720,90 740,130 760,70 780,150 800,100
                        900,100 920,80 940,120 960,60 980,140 1000,100
                        1100,100 1200,100
                    "
                    />
                </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 animate-fadeIn">

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    DEEP LEARNING ECG ANALYSIS <br/>FOR CARDIAC HEALTH ASSESSMENT
                </h1>

                <h1 className="text-xl md:text-3xl mt-4 text-gray-200">
                    IN PRIMARY CARE APPROACH
                </h1>

                <div className="mt-10 max-w-3xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-xl font-semibold mb-3">Project Abstract</h3>
                    <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                    This research focuses on developing a deep learning–based ECG analysis system
                    to support early detection of cardiac diseases in primary care settings.
                    Cardiovascular diseases remain the leading cause of death globally, and
                    limited access to cardiologists often leads to delayed or inaccurate diagnosis.
                    <br /><br />
                    The proposed system utilizes advanced deep learning techniques to automatically
                    analyze ECG signals and detect multiple cardiac conditions including Coronary
                    Artery Disease (CAD), Myocardial Infarction, Arrhythmia, and Supraventricular
                    Tachycardia.
                    <br /><br />
                    Designed as a lightweight and scalable solution, the platform supports ECG signal
                    and image inputs, provides interpretable results, and aligns with real-world
                    clinical workflows.
                    </p>
                </div>

                <div className="flex gap-4 mt-8">
                    <button onClick={() => scrollToSection("domain")} className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-110 hover:bg-gray-200 hover:shadow-lg flex items-center gap-2">
                    <BookOpen size={18} strokeWidth={3} />Explore Domain
                    </button>

                    <button onClick={() => scrollToSection("milestones")} className="border border-white px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-110 hover:bg-white hover:text-black hover:shadow-lg flex items-center gap-2">
                    <Clock size={18} strokeWidth={3} />View Progress
                    </button>
                </div>
                </div>
            </div>

            {/* ======================= */}
            {/* 🔬 RESEARCH GAP SECTION */}
            {/* ======================= */}

            <div id="domain" className="bg-[#f8fafc] text-gray-800 px-6 py-20">

                <div className="flex flex-col items-center mb-12">

                    {/* ICON BOX */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 mb-4">
                        <BookOpen size={28} className="text-blue-700" />
                    </div>

                    {/* HEADING */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c5c]">
                        Domain
                    </h2>

                    {/* SUBTEXT */}
                    <p className="text-gray-500 mt-2 text-center max-w-2xl">
                        Comprehensive domain analysis and research foundation
                    </p>

                </div>

                <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-[#0f4c5c]">
                Research Gap
                </h2>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 shadow-lg">

                <div className="grid md:grid-cols-3 gap-8 text-center">

                    <div className="p-4">
                    <span className="inline-block bg-[#2c7a7b] text-white text-md px-4 py-1 rounded-full mb-4 font-semibold">
                        Limited Ischemia Detection
                    </span>
                    <p className="text-md leading-relaxed text-justify">
                        Most existing ECG-based deep learning models primarily focus on arrhythmia
                        and myocardial infarction detection, while failing to accurately identify
                        early ischemic ST-T abnormalities, limiting effective CAD risk prediction.
                    </p>
                    </div>

                    <div className="p-4">
                    <span className="inline-block bg-[#2c7a7b] text-white text-md px-4 py-1 rounded-full mb-4 font-semibold">
                        Lack of Multimodal Integration
                    </span>
                    <p className="text-md leading-relaxed text-justify">
                        Existing approaches rely heavily on ECG signals alone without integrating
                        clinical features or hybrid representations, reducing diagnostic performance
                        and limiting real-world clinical applicability.
                    </p>
                    </div>

                    <div className="p-4">
                    <span className="inline-block bg-[#2c7a7b] text-white text-md px-4 py-1 rounded-full mb-4 font-semibold">
                        Limited Primary Care Applicability
                    </span>
                    <p className="text-md leading-relaxed text-justify">
                        Current systems are not optimized for primary care environments, lacking
                        lightweight deployment, interpretability, and usability for non-specialists,
                        creating a gap in accessible cardiac screening solutions.
                    </p>
                    </div>

                </div>
                </div>
            </div>

            {/* ======================= */}
            {/* ⚠️ RESEARCH PROBLEM SECTION */}
            {/* ======================= */}

            <div className="bg-gradient-to-br from-[#0f4c5c] via-[#2c7a7b] to-[#0b3c49] px-6 py-20 text-center">

                <h2 className="text-xl md:text-2xl font-bold mb-10">
                Research Problem
                </h2>

                <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
                <p className="text-lg leading-relaxed text-gray-100 text-justify">
                    Cardiovascular diseases (CVDs) are the leading global cause of death, with early diagnosis 
                    critical in primary care settings where clinicians often lack ECG expertise. Traditional ECG 
                    analysis struggles with complex cardiac conditions, noise, and limited interpretability, creating 
                    risks of misdiagnosis. Multi-modal deep learning addresses these gaps by integrating ECG signals 
                    with clinical data, enabling accurate, automated decision support. This research aims to develop 
                    an integrated, clinician-friendly system for primary care use, enhancing diagnostic accuracy and 
                    reducing reliance on specialist referrals. By combining robustness to noisy data with interpretability, 
                    the framework seeks to empower non-specialists in low-resource settings, ultimately improving cardiac 
                    care accessibility.
                </p>
                </div>
            </div>

            {/* ======================= */}
            {/* 🎯 RESEARCH OBJECTIVES */}
            {/* ======================= */}

            <div className="bg-[#f8fafc] text-gray-800 px-6 py-20">

                <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-[#0f4c5c]">
                Research Objectives
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

                {/* Objective 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2c7a7b] transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)] text-center">
                    {/* Number */}
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#2c7a7b] text-white font-bold text-lg mb-4">
                        1
                    </div>
                    {/* Text */}
                    <p className="text-md leading-relaxed">
                        To develop deep learning-based diagnostic tools that assist non-specialist
                        medical practitioners in interpreting ECG signals for early detection of
                        cardiac diseases.
                    </p>
                </div>

                {/* Objective 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2c7a7b] transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)] text-center">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#2c7a7b] text-white font-bold text-lg mb-4">
                        2
                    </div>
                    <p className="text-md leading-relaxed">
                        Apply deep learning techniques such as CNN, LSTM, and Transformer models
                        to analyze ECG data and identify multiple cardiac abnormalities.
                    </p>
                </div>

                {/* Objective 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2c7a7b] transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)] text-center">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#2c7a7b] text-white font-bold text-lg mb-4">
                        3
                    </div>
                    <p className="text-md leading-relaxed">
                        Ensure the system is clinically relevant, interpretable, and user-friendly,
                        providing clear outputs and explanations suitable for primary care settings.
                    </p>
                </div>

                {/* Objective 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#2c7a7b] transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)] text-center">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#2c7a7b] text-white font-bold text-lg mb-4">
                        4
                    </div>
                    <p className="text-md leading-relaxed">
                        Design and optimize the models to be lightweight and efficient, enabling
                        real-time deployment on resource-constrained environments such as rural
                        clinics and dispensaries.
                    </p>
                </div>

                </div>
            </div>

            {/* ======================= */}
            {/* 🧠 METHODOLOGY SECTION */}
            {/* ======================= */}

            <div className="bg-[#f8fafc] text-gray-800 px-6 py-6">

            <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-[#0f4c5c]">
                Methodology
            </h2>

            <div className="max-w-6xl mx-auto">

                {/* 🔷 Top Description Box */}
                <div className="bg-white rounded-2xl p-8 shadow-md mb-12 grid md:grid-cols-2 gap-8">

                {/* 🔷 Image */}
                <div className="md:col-span-2 flex justify-center mb-12">
                <img
                    src={methodologyImg}
                    alt="Methodology Diagram"
                    className="rounded-xl shadow-md max-h-[500px] object-contain transition duration-300 hover:scale-105"
                />
                </div>

                <h2 className="md:col-span-2 text-md md:text-xl font-bold text-center text-[#0f4c5c]">
                    The research methodology involves a systematic approach to developing the QCardio system, including:
                </h2>

                {/* Left */}
                <div className="bg-[#2c7a7b]/10 p-6 rounded-xl">
                <ul className="list-disc pl-6 space-y-3 text-md">
                    <li className="font-semibold text-[#0f4c5c]">
                    ECG Signal Preprocessing & Feature Extraction
                    </li>
                    <li className="font-semibold text-[#0f4c5c]">
                    CNN-LSTM Hybrid Model for CAD Detection
                    </li>
                    <li className="font-semibold text-[#0f4c5c]">
                    Multi-disease Prediction (CAD, MI, Arrhythmia, SVT)
                    </li>
                    <li className="font-semibold text-[#0f4c5c]">
                    Clinical Feature Integration for Improved Accuracy
                    </li>
                </ul>
                </div>

                {/* Right */}
                <div className="bg-[#2c7a7b]/10 p-6 rounded-xl text-gray-700 text-md leading-relaxed text-justify">
                    The system is developed using a modular deep learning architecture that integrates ECG signal
                    processing with advanced machine learning models. Each component is designed to enhance diagnostic
                    accuracy, robustness to noise, and real-time performance. The system is validated using real-world
                    datasets to ensure reliability and effectiveness in primary care environments.
                </div>

                </div>

                {/* 🔷 Cards */}
                <div className="grid md:grid-cols-4 gap-6">

                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 text-[#2c7a7b] text-2xl mb-4">
                    <Search />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">
                    Analysis & Design
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-600 list-disc pl-5">
                    <li>Requirements Analysis</li>
                    <li>System Architecture</li>
                    <li>Model Design Patterns</li>
                    </ul>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 text-[#2c7a7b] text-2xl mb-4">
                    <Settings />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">
                    Development
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-600 list-disc pl-5">
                    <li>CNN-LSTM Model</li>
                    <li>Data Processing Pipeline</li>
                    <li>API Development</li>
                    </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 text-[#2c7a7b] text-2xl mb-4">
                    <ShieldCheck />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">
                    Testing & Validation
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-600 list-disc pl-5">
                    <li>Unit Testing</li>
                    <li>Integration Testing</li>
                    <li>Performance Evaluation</li>
                    </ul>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 text-[#2c7a7b] text-2xl mb-4">
                    <Zap />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f4c5c] mb-3">
                    Deployment
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-600 list-disc pl-5">
                    <li>Production Setup</li>
                    <li>Monitoring</li>
                    <li>Documentation</li>
                    </ul>
                </div>

                </div>

            </div>
            </div>

            {/* ======================= */}
            {/* 🛠️ TECHNOLOGIES USED */}
            {/* ======================= */}

            <div className="bg-[#f8fafc] text-gray-800 px-6 py-20 overflow-hidden">

            <h2 className="text-xl md:text-2xl font-bold text-center mb-12 text-[#0f4c5c]">
                Technologies Used
            </h2>

            {/* 🔷 SCROLLING ICON ROW */}
            <div className="max-w-6xl mx-auto mb-16 overflow-hidden">

            <div className="flex animate-step-scroll gap-16 items-center">
                {[...techIcons, ...techIcons].map((tech, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-28 h-20 flex items-center justify-center"
                        >
                        <img
                            src={tech.src}
                            alt={tech.alt}
                            className="h-14 object-contain"
                        />
                    </div>
                ))}
            </div>
            </div>

            {/* 🔷 CARDS */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 mb-4">
                    <Zap className="text-[#2c7a7b]" size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-4">
                    Frontend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                    {["React", "Vite", "Tailwind CSS", "React Native"].map((item, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {item}
                    </span>
                    ))}
                </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 mb-4">
                    <Settings className="text-[#2c7a7b]" size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-4">
                    Backend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "MongoDB"].map((item, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {item}
                    </span>
                    ))}
                </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2c7a7b]/20 mb-4">
                    <Car className="text-[#2c7a7b]" size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-4">
                    Insurance Integration
                </h3>
                <div className="flex flex-wrap gap-2">
                    {["Postman", "REST APIs"].map((item, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {item}
                    </span>
                    ))}
                </div>
                </div>

            </div>
            </div>

            {/* ======================= */}
            {/* 🏁 MILESTONES */}
            {/* ======================= */}

            <div id="milestones" className="bg-white text-gray-800 px-6 py-20">

            <div className="flex flex-col items-center mb-12">

                {/* ICON BOX */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#f3e8d9] mb-4">
                    <Trophy size={28} className="text-[#e35d0b]" />
                </div>

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c5c]">
                    Milestones
                </h2>

                {/* SUBTEXT */}
                <p className="text-gray-500 mt-2">
                    Project assessments and key deliverables
                </p>

            </div>

            {/* 🔷 TABS */}
            <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center mb-10">
                {milestones.map((m) => (
                <button
                    key={m.id}
                    onClick={() => setSelected(m)}
                    className={`px-4 py-2 rounded-lg text-sm border transition
                    ${
                    selected.id === m.id
                        ? "bg-[#2c7a7b] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#2c7a7b]/10"
                    }`}
                >
                    {m.title}
                </button>
                ))}
            </div>

            {/* 🔷 SECOND ROW (DETAIL CARD) */}
            <div className="max-w-6xl mx-auto bg-[#f9fafb] border rounded-xl p-6 mb-10">

                <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    {selected.status === "Completed" ? (
                    <CheckCircle size={28} className="text-green-500" />
                    ) : (
                    <Clock size={28} className="text-blue-500" />
                    )}
                    <h3 className="text-2xl font-bold text-[#0f4c5c]">
                    {selected.title}
                    </h3>
                </div>

                <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {selected.marksAllocated}
                </span>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                {/* LEFT */}
                <div>
                    <h4 className="font-semibold mb-4">Assessment Details</h4>

                    <p className="flex items-center gap-2 mb-2 text-gray-700">
                    <CalendarDays size={18} className="text-[#2c7a7b]" />
                    <span>Due Date: {selected.date}</span>
                    </p>

                    <p className="flex items-center gap-2 mb-2 text-gray-700">
                    <Award size={18} className="text-[#2c7a7b]" />
                    <span>Marks Allocated: <span className="font-bold">{selected.marksAllocated}</span></span>
                    </p>

                    <p className="flex items-center gap-2 text-gray-700">
                    <Target size={18} className="text-[#2c7a7b]" />
                    <span>Status: <span className={`font-bold
                        ${
                            selected.status === "Completed"
                            ? "text-green-600"
                            : "text-gray-700"
                        }`}
                    >
                        {selected.status}
                    </span></span>
                    </p>
                </div>

                {/* RIGHT */}
                <div>
                    <h4 className="font-semibold mb-4">Description</h4>
                    <p className="text-gray-600">
                    {selected.description}
                    </p>
                </div>

                </div>
            </div>

            {/* 🔷 THIRD ROW (GRID CARDS) */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                {milestones.map((m) => (
                <div
                    key={m.id}
                    onClick={() => setSelected(m)}
                    className={`cursor-pointer bg-[#f9fafb] border p-5 rounded-xl transition-all duration-300
                    hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(44,122,123,0.3)]
                    ${selected.id === m.id ? "border-2 border-[#2c7a7b]" : ""}
                    `}
                >

                    {/* TOP */}
                    <div className="flex justify-between items-center mb-3">
                    {m.status === "Completed" ? (
                    <CheckCircle size={28} className="text-green-500" />
                    ) : (
                    <Clock size={28} className="text-blue-500" />
                    )}

                    <span className={`text-xs border px-2 py-1 rounded-full ${
                        m.marksAllocated === "Completed"
                        ? "border-green-600 text-green-600"
                        : "border-gray-300 text-gray-500"
                    }`}>
                        {m.marksAllocated}
                    </span>
                    </div>

                    {/* TITLE */}
                    <h4 className="text-[#0f4c5c] font-semibold mb-1">
                    {m.title}
                    </h4>

                    {/* DATE */}
                    <p className="text-sm text-gray-500 mb-3">
                    {m.date}
                    </p>

                    {/* STATUS */}
                    <span
                    className={`text-xs px-3 py-1 rounded-full
                    ${
                        m.status === "Completed"
                        ? "bg-green-600 font-bold text-white"
                        : "bg-gray-200 font-bold text-gray-700"
                    }`}
                    >
                    {m.status.toLowerCase()}
                    </span>

                </div>
                ))}

            </div>

            </div>

            {/* ======================= */}
            {/* 📄 DOCUMENTS SECTION */}
            {/* ======================= */}

            <div id="documents" className="bg-[#f8fafc] text-gray-800 px-6 py-20">

            {/* HEADER */}
            <div className="flex flex-col items-center mb-12">

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 mb-4">
                <FileText size={28} className="text-green-600" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c5c]">
                Documents
                </h2>

                <p className="text-gray-500 mt-2">
                Project documentation and deliverables
                </p>

            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

                {documents.map((doc, index) => (
                <div
                    key={index}
                    className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
                >

                    {/* TOP */}
                    <div className="flex items-center gap-3 mb-3">
                    <FileText className="text-red-500" size={22} />
                    <h3 className="font-semibold text-[#0f4c5c]">
                        {doc.title}
                    </h3>
                    </div>

                    {/* DATE */}
                    <p className="text-sm text-gray-500 mb-3">
                    {doc.date}
                    </p>

                    <hr className="mb-3" />

                    {/* BOTTOM */}
                    <div className="flex justify-between items-center text-sm">

                    <span className="text-gray-600">
                        {doc.type}
                    </span>

                    {doc.status === "available" ? (
                        <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[#2c7a7b] hover:underline"
                        >
                        <Download size={16} />
                        Download
                        </a>
                    ) : (
                        <span className="flex items-center gap-1 text-gray-400">
                        <Clock size={16} />
                        Pending
                        </span>
                    )}

                    </div>

                </div>
                ))}

            </div>

            </div>

            {/* ======================= */}
            {/* 📊 PRESENTATIONS SECTION */}
            {/* ======================= */}

            <div id="presentations" className="bg-[#f8fafc] text-gray-800 px-6 py-6">

            {/* HEADER */}
            <div className="flex flex-col items-center mb-12">

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 mb-4">
                <Presentation size={28} className="text-purple-600" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c5c]">
                Presentations
                </h2>

                <p className="text-gray-500 mt-2">
                Slides from past and upcoming presentations
                </p>

            </div>

            {/* LIST */}
            <div className="max-w-6xl mx-auto space-y-6">

                {presentations.map((p, index) => (
                <div
                    key={index}
                    className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
                >

                    {/* TOP */}
                    <div className="flex justify-between items-start">

                    <div>
                        <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-[#0f4c5c]">
                            {p.title}
                        </h3>

                        <span
                            className={`text-xs px-2 py-1 rounded-full font-semibold
                            ${
                            p.status === "completed"
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            {p.status}
                        </span>
                        </div>

                        {/* META */}
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-2">

                        <span className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {p.date}
                        </span>

                        <span className="flex items-center gap-1">
                            <Presentation size={14} />
                            {p.slides}
                        </span>

                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-sm text-gray-600 mb-4">
                        {p.description}
                        </p>

                        {/* BUTTONS */}
                        {p.status === "completed" ? (
                        <div className="flex gap-3">

                            <a
                            href={p.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#2c7a7b] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
                            >
                            <Download size={16} />
                            Download Slides
                            </a>
                        </div>
                        ) : (
                        <button className="flex items-center gap-2 bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                            <Clock size={16} />
                            Upcoming
                        </button>
                        )}

                    </div>

                    {/* RIGHT ICON */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100">
                        <Presentation className="text-purple-600" />
                    </div>

                    </div>

                </div>
                ))}

            </div>

            </div>

            {/* ======================= */}
            {/* 👥 ABOUT US SECTION */}
            {/* ======================= */}

            <div id="about" className="bg-gradient-to-br from-[#0f4c5c] via-[#2c7a7b] to-[#0b3c49] px-6 py-20">

            {/* HEADER */}
            <div className="flex flex-col items-center mb-16 text-center">

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 mb-4">
                <Users size={28} className="text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Us
                </h2>

                <p className="text-gray-200 mt-2">
                Meet the research team behind this innovative project
                </p>

            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {team.map((member, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center
                    transition duration-500 transform hover:-translate-y-2 hover:scale-105
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
                >

                    {/* IMAGE */}
                    <div className="flex justify-center mb-4">
                    <img
                        src={member.img}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/30
                        group-hover:scale-110 transition duration-300"
                    />
                    </div>

                    {/* NAME */}
                    <h3 className="text-lg font-semibold text-white">
                    {member.name}
                    </h3>

                    {/* ROLE */}
                    <span className="inline-block bg-[#2c7a7b] text-white text-xs px-3 py-1 rounded-full mt-2">
                    {member.role}
                    </span>

                    {/* DESC */}
                    <p className="text-sm text-gray-200 mt-3">
                    {member.desc}
                    </p>

                    {/* EMAIL */}
                    <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-300">
                    <Mail size={14} />
                    {member.email}
                    </div>

                    {/* SOCIAL ICONS */}
                    {(member.linkedin || member.github || member.website) && (
                    <div className="flex justify-center gap-3 mt-4">

                        {member.scholar && (
                            <a href={member.scholar} target="_blank" rel="noopener noreferrer">
                            <img
                                src={scholarIcon}
                                alt="Google Scholar"
                                className="w-7 h-7 rounded-full hover:scale-110 transition"
                            />
                            </a>
                        )}

                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <img
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="w-7 h-7 rounded-full hover:scale-110 transition"
                            />
                            </a>
                        )}

                        {member.researchgate && (
                            <a href={member.researchgate} target="_blank" rel="noopener noreferrer">
                            <img
                                src={researchgateIcon}
                                alt="ResearchGate"
                                className="w-7 h-7 rounded-full hover:scale-110 transition"
                            />
                            </a>
                        )}

                    </div>
                    )}

                </div>
                ))}

            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 md:mt-8">

                {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center
                    transition duration-500 transform hover:-translate-y-2 hover:scale-105
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
                >

                    {/* IMAGE */}
                    <div className="flex justify-center mb-4">
                    <img
                        src={member.img}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/30
                        group-hover:scale-110 transition duration-300"
                    />
                    </div>

                    {/* NAME */}
                    <h3 className="text-lg font-semibold text-white">
                    {member.name}
                    </h3>

                    {/* STATUS */}
                    <p className="text-sm text-gray-200 mt-4">
                    {member.status}
                    </p>

                    {/* ROLE */}
                    <span className="inline-block bg-[#2c7a7b] text-white text-xs px-3 py-1 rounded-full mt-2">
                    {member.role}
                    </span>

                    {/* DESC */}
                    <p className="text-sm text-gray-200 mt-6 font-bold">
                    {member.desc}
                    </p>

                    {/* EMAIL */}
                    <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-300">
                    <Mail size={14} />
                    {member.email}
                    </div>

                </div>
                ))}

            </div>

            </div>

            {/* ======================= */}
            {/* 📞 CONTACT US SECTION */}
            {/* ======================= */}

            <div id="contact" className="bg-[#f8fafc] text-gray-800 px-6 py-20">

            {/* HEADER */}
            <div className="flex flex-col items-center mb-12 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 mb-4">
                <Mail size={28} className="text-blue-600" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c5c]">
                Contact Us
                </h2>

                <p className="text-gray-500 mt-2">
                Get in touch with our research team
                </p>
            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {/* ================= LEFT ================= */}
                <div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-6">
                    General Contact Information
                </h3>

                <div className="bg-white rounded-xl p-6 shadow-md space-y-4">

                    {teamMembers.map((member, index) => (
                    <a
                        key={index}
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        <img
                        src={member.img}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                        <p className="font-semibold text-[#0f4c5c]">
                            {member.name}
                        </p>
                        <p className="text-sm text-gray-600">
                            {member.email}
                        </p>
                        </div>
                    </a>
                    ))}

                </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div>
                <h3 className="text-xl font-bold text-[#0f4c5c] mb-6">
                    Send us a Message
                </h3>

                <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setLoading(true);

                    const form = e.target;

                    const templateParams = {
                    first_name: form.firstName.value,
                    last_name: form.lastName.value,
                    email: form.email.value,
                    subject: form.subject.value,
                    message: form.message.value,
                    };

                    // emailjs.send(
                    //     "service_mwjxfzo",
                    //     "template_yh834pk",
                    //     templateParams,
                    //     "bhkwgA4JG6gxM8USu"
                    // )
                    emailjs.send(
                        process.env.REACT_APP_SERVICE_ID,
                        process.env.REACT_APP_TEMPLATE_ID,
                        templateParams,
                        process.env.REACT_APP_PUBLIC_KEY
                    )
                    .then(
                        () => {
                        toast.success("Message sent successfully!");
                        form.reset();
                        },
                        (error) => {
                        console.error(error);
                        toast.error("Failed to send message.");
                        }
                    ).finally(() => {
                        setLoading(false);
                    });
                }}
                className="bg-white rounded-xl p-6 shadow-md space-y-4"
                >

                    {/* NAME */}
                    <div className="grid grid-cols-2 gap-4">
                    <input
                        name="firstName"
                        placeholder="Enter your first name"
                        required
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                    />
                    <input
                        name="lastName"
                        placeholder="Enter your last name"
                        required
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                    />
                    </div>

                    {/* EMAIL */}
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                    />

                    {/* SUBJECT */}
                    <input
                    name="subject"
                    placeholder="Enter message subject"
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                    />

                    {/* MESSAGE */}
                    <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter your message here..."
                    required
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c7a7b]"
                    ></textarea>

                    {/* BUTTON */}
                    <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#2c7a7b] text-white py-3 rounded-lg hover:bg-[#0f4c5c] transition font-semibold"
                    disabled={loading}
                    >
                    <Mail size={16} strokeWidth={3}/>
                    {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>
                </div>

            </div>
            </div>
        
            {/* 🔝 Scroll To Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#2c7a7b] text-white shadow-lg hover:scale-110 hover:bg-[#0f4c5c] transition duration-300"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* 🔥 Animations */}
            <style jsx>{`
                @keyframes ecgMove {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }

                .animate-ecg {
                animation: ecgMove 6s linear infinite;
                }

                @keyframes pulseGlow {
                0%, 100% { filter: drop-shadow(0 0 2px #9ad9db); }
                50% { filter: drop-shadow(0 0 10px #9ad9db); }
                }

                .ecg-line {
                animation: pulseGlow 1.5s ease-in-out infinite;
                }

                @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
                }

                .animate-fadeIn {
                animation: fadeIn 1.2s ease-out;
                }

                @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
                }

                .animate-gradient {
                background-size: 200% 200%;
                animation: gradientMove 10s ease infinite;
                }

                @keyframes stepScroll {
                0%, 12% { transform: translateX(0); }

                16%, 28% { transform: translateX(-160px); }
                32%, 44% { transform: translateX(-320px); }
                48%, 60% { transform: translateX(-480px); }
                64%, 76% { transform: translateX(-640px); }
                80%, 92% { transform: translateX(-800px); }

                100% { transform: translateX(0); }
                }

                .animate-step-scroll {
                animation: stepScroll 18s infinite ease-in-out;
                }

                .animate-step-scroll:hover {
                animation-play-state: paused;
                }
            `}</style>
        <Footer />
        </div>
    </>
  );
}