import {
  iaeng,
  nse,
  infomanagement,
  dataAnalysis,
  digital,
  jobberman,
  personal,
  password,
  project,
  proposal,
  qualitative,
  hr,
  digitalTraining,
  effectiveComs,
} from "@public/sources";

export const memberships = [
    {
      id: 0,
      img: nse,
      membershipTitle: "Member - Nigerian Society of Engineers (GMNSE)",
      membershipBody: "Nigerian Society of Engineers - NSE",
      date: "December 2022",
      membershipID: "G70981",
      doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/NSE%20Membership_1.png?alt=media&token=a6c15560-eba1-4dd8-8353-82230087a533",
    },
    {
      id: 1,
      img: iaeng,
      membershipTitle: "Member - International Association of Engineers (MIAENG)",
      membershipBody: "International Association of Engineers - IAENG",
      date: "June 2021",
      membershipID: "286769",
      doc: "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/IAENG_membership_286769_1.jpg?alt=media&token=6316106a-8aed-42d7-a54b-f6d617ad6b59",
    },
  
  ] as const;

export const certificates = [
  
    {
      id: 0,
      title: "Data Analysis and Action planning",
      date: "2020",
      issuingBody: "International Rescue Commitee",
      image: dataAnalysis,
      liveDemo :"https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Data%20Analysis%20and%20Action%20Planning_1.jpg?alt=media&token=7c826a07-1429-4d90-89f6-166783e4115a",
    },
      {
      id: 1,
      title: "Digital Etiquette Fundermentals",
      date: "2021",
      issuingBody: "Grovo",
      image: digital,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Digital%20etiquette%20fundermentals_1.jpg?alt=media&token=9f7cca8c-c887-44cb-93de-07f8c7be09a2",
    },  {
      id: 2,
      title: "Jobberman soft skills training",
      date: "2020",
      issuingBody: "Jobberman",
      image: jobberman,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/JOBBERMAN%20CERTIFICATE_1.jpg?alt=media&token=1daa9b70-0c69-4648-98ea-0827287b6841",
    },  {
      id: 3,
      title: "Personal Safety and Security certificate",
      date: "2020",
      issuingBody: "Save the Children",
      image: personal,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Personal%20Safety%20and%20Security%20Certificate_1.jpg?alt=media&token=c2900c63-a517-4461-8a7b-2ce20e56afb2",
    },  {
      id: 4,
      title: "Proposal writing",
      date: "2020",
      issuingBody: "Conerstone OnDemand Foundation",
      image: proposal,
      liveDemo :"https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Proposal%20Writing_1.jpg?alt=media&token=3cebbca1-1cad-4062-8b52-7ca53d1e0a47",
    },  {
      id: 5,
      title: "Project Management Essentials",
      date: "2022",
      issuingBody: "Conerstone OnDemand Foundation",
      image: project,
      liveDemo :"https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/PROJECT%20MANAGEMENT%20ESSENTIALS%20CERTIFICATE_1.png?alt=media&token=5f3c37e4-b43e-4c0d-9908-6f2cb7fceab9",
    },  {
      id: 6,
      title: "Qualitative Data Analysis",
      date: "2020",
      issuingBody: "Conerstone OnDemand Foundation",
      image: qualitative,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Qualitative%20Data%20Analysis_1.jpg?alt=media&token=94ff88f4-d305-4d7a-ae87-028a3b780ec6",
    },  {
      id: 7,
      title: "Training in Digital Marketing",
      date: "2023",
      issuingBody: "GaoTek.Inc",
      image: digitalTraining,
      liveDemo :"https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/CERTIFICATE%20OF%20TRAINING%20ON%20DIGITAL%20MARKETING-1_1.png?alt=media&token=43be7908-3fbe-4673-aa9f-52b1d785bc7a", 
    },  {
      id: 8,
      title: "Training in Human Resources",
      date: "2023",
      issuingBody: "GaoTek.Inc",
      image: hr,
      liveDemo :"https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/CERTIFICATE%20OF%20TRAINING%20ON%20HUMAN%20RESOURCES-1_1.png?alt=media&token=f0dfe0e2-f2d8-4b9b-aa40-b42ee3030ea6", 
    },
    {
      id: 9,
      title: "Humanitarian Information Management, Communications & Media",
      date: "2021",
      issuingBody: "Save the Children",
      image: infomanagement,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Humanitarian%20information%20management_1.jpg?alt=media&token=f8da1edb-c669-4064-8652-aa984949ea28"
    },
    {
      id: 10,
      title: "Passsword Habits That Protects You",
      date: "2021",
      issuingBody: "GROVO",
      image: password,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/Password%20habit%20that%20protects%20you_1.jpg?alt=media&token=e7441a43-36ff-4edd-b2f5-a97da7aa8f56"
    },
    {
      id: 11,
      title: "Effective Communications for Remote Teams",
      date: "2021",
      issuingBody: "Conerstone OnDemand Foundation",
      image: effectiveComs,
      liveDemo : "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-cdfc1.appspot.com/o/EFFECTIVE%20COMMUNICATION%20FOR%20REMOTE%20TEAMS_1.jpg?alt=media&token=d8095213-31a9-4467-a52f-5ca47eff67b2"
    },
  
  ];
