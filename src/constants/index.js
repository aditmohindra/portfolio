import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Analysis",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Data Visualizations",
      icon: backend,
    },
    {
      title: "Backend Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "Connected Dealer Services",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2024 - January 2025",
      points: [
        "Led a cross-functional data quality initiative to unify data across Salesforce (CRM), M2M (OMS), Elastic and NetSuite, enhancing data quality/accuracy and creating a unified view of disparate customer data",
        "Developed a predictive churn model to analyze customer data, identifying patterns of churn risk using features derived from Salesforce, M2M transactions, and support tickets.", 
        "Trained and fine-tuned multiple models, deploying a high accuracy model for real time predictions",
      ],
    },
    {
      title: "Web Search Engine Project",
      company_name: "UC Irvine",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "February 2024",
      points: [
        "Led development of a scalable search engine, capable of handling tens of thousands of Web pages under stringent operational constraints, achieving query response time under 300ms",
        "Developed a web crawler in Python that retrieved 90,000+ web pages from the UCI online domain, achieving a 96% crawl success rate",
      ],
    },
    {
      title: "Music Streaming Analysis",
      company_name: "Spotify",
      icon: shopify,
      iconBg: "#383E56",
      date: "November 2023",
      points: [
        "Conducted a comprehensive analysis and visualization of Spotify streaming history data, processing over 1.2 million data points encompassing 5GB of JSON files.", 
        "Provided more in-depth metrics than Spotify Wrapped, the official and annual metric delivery from Spotify.",
        "Developed a data preprocessing pipeline, cleaning and structuring data using Python, reducing data volume by 37%",
        "Conducted trend analysis to uncover listening habits using R, identifying seasonal and long term user preferences",
        "Created detailed visualizations using Matplotlib and PowerBI, highlighting key metrics and patterns in a dashboard",
        "Processed metrics including 134k streams, 378k minutes, 8,84k tracks, 4.07k artists, and 5.55k album"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };