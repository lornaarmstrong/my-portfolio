// Importing interfaces
import { Experience } from "../common/types.ts";
import { EdinburghModalContent } from "../components/Experience/EdinburghModalContent.tsx";
import { GoogleAdsModalContent } from "../components/Experience/GoogleAdsModalContent.tsx";
import { GoogleFitbitModalContent } from "../components/Experience/GoogleFitbitModalContent.tsx";
import { MicrosoftModalContent } from "../components/Experience/MicrosoftModalContent.tsx";
// Import images
import uni_of_edi from "../assets/images/university_of_edinburgh.png"
import google_logo from "../assets/images/Google.png";
import microsoft_logo from "../assets/images/Microsoft.png";

// List of Work Experiences
export const experienceData: Experience[] = [
    {
      id: 1,
      imgSrc: uni_of_edi,
      timeframe: "Sept 2018 - July 2022",
      description:
        "Completed a BSc in Computer Science at the University of Edinburgh.",
      modalContent: EdinburghModalContent(),
    },
    {
      id: 2,
      imgSrc: google_logo,
      timeframe: "July - Sept 2020",
      description:
        "Worked as a STEP (Student Technical Engineering Program) Intern at Google, in the Google Ads team.",
      modalContent: GoogleAdsModalContent(),
    },
    {
      id: 3,
      imgSrc: google_logo,
      timeframe: "June - Sept 2021",
      description:
        "Worked as a Software Engineer Intern at Google, in the Security team for Fitbit.",
      modalContent: GoogleFitbitModalContent(),
    },
    {
      id: 4,
      imgSrc: microsoft_logo,
      timeframe: "Sept 2022 - Aug 2024",
      description:
        "Worked as a Software Engineer at Microsoft, within Azure for Operators, on telecommunication products.",
      modalContent: MicrosoftModalContent(),
    },
  ];