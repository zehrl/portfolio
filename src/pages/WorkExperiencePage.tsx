import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";
import SkillList from "../components/SkillList";
import SweetwaterLogo from '../assets/sweetwater-logo.png';
import IngersollRandLogo from '../assets/ingersoll-rand-logo.png';
import HoneywellLogo from '../assets/honeywell-logo.png';
import Education from "../components/Education";
import UniversityOfWashingtonLogo from '../assets/university-of-washington-logo.png';
import PurdueLogo from '../assets/purdue-logo.png';
import Certification from "../components/Certification";
import AWSCertifiedCloudPractitionerCertification from '../assets/aws-certified-cloud-practitioner-certification-icon.png'
import HoneywellLogoCondensed from '../assets/honeywell-logo-condensed.png'
import NCEESLogo from '../assets/ncees-logo.png'

const WorkExperiencePage = () => {
  return (
    <>
    <Container theme="dark">
      {/* SectionTitle */}
      <SectionTitle name="Work Experience" />

      {/* WorkExperience */}
      <WorkExperience
        companyLogo={SweetwaterLogo}
        positionTitle={"Web Software Engineer"}
        company={"Sweetwater Sound"}
        years={"2021-2023"}
        skills={[
          "Javascript",
          "CSS",
          "HTML",
          "PHP",
          "SQL",
          "ReactJS",
          "Laravel",
          "Redis",
          "Docker",
        ]}
        experience={[
          "Coded frontend (ReactJS) of checkout microservice, translating UX mockup designs and customer criteria, enabling $1M sales in the first 9 months for GearExchange.com",
          "Led the system design and implementation for the fraud detection service of checkout microservice, featuring Paypal and Slack integration (PHP), preventing $30k in fraudulent orders in the first 6 months",
          "Designed and coded the internal facing admin dashboard of checkout microservice, featuring complex queries and data aggregation (SQL), drastically reducing RCA cycle time",
          "Created table schema and models for customer, tax, and fraud data in the backend of the checkout microservice for 100,000s of checkout sessions",
        ]}
      />
      <WorkExperience
        companyLogo={IngersollRandLogo}
        positionTitle={"Manufacturing Engineer (Contract)"}
        company={"Ingersoll Rand"}
        years={"2020-2021"}
        skills={[
          "Project Management",
          "Excel",
          "Six Sigma",
          "Manufacturing",
          "RCCA",
        ]}
        experience={[
          "Managed insourcing project initiative, resulting in increased operations and improved employee retention by 25% during Covid",
        ]}
      />
      <WorkExperience
        companyLogo={HoneywellLogo}
        positionTitle={"Product Manufacturing Engineer"}
        company={"Honeywell Aerospace"}
        years={"2017-2020"}
        skills={[
          "Manufacturing",
          "Design",
          "Six Sigma",
          "Statistics",
          "Technical Writing",
          "Project Management",
          "RCCA",
          "Excel",
          "Training",
        ]}
        experience={[
          "Implemented and led project initiative to upgrade leak testing for aerospace grade laser welds estimating $50k/yr in savings",
          "Improved welding procedure for new project initiative by using cross-sectional root cause and measurement system analysis to reduce scrapped welded sensors by 60%",
          "Trained and certified operators to aerospace processes increasing factory productivity and expertise",
        ]}
      />
    </Container>

        {/* Education */}
      <Container
        theme='light'
      >
        <SectionTitle
          name="Education"
          theme='dark'
        />
        <Education
          logo={UniversityOfWashingtonLogo}
          degreeName={"Full-Stack Web Development Certification"}
          school={"University of Washington"}
          years={"2021"}
          skills={["Javascript", "CSS", "HTML", "ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Git", "Auth"]}
        />
        <Education
          logo={PurdueLogo}
          degreeName={"BS in Mechanical Engineering"}
          school={"Purdue University"}
          years={"2017"}
          skills={["Calculus", "Excel", "Statistics", "Data Analytics", "System Design", "Physics", "Design"]}
        />
      </Container>

      {/* Certifications */}
      <Container
        theme='dark'
      >
        <SectionTitle
          name="Certifications"
          theme='light'
        />
        <Certification
          logo={AWSCertifiedCloudPractitionerCertification}
          certificationName={"AWS Certified Cloud Practitioner"}
          agency={"Amazon Web Services"}
          years={"2024"}
        />
        <Certification
          logo={HoneywellLogoCondensed}
          certificationName={"Six Sigma Green Belt"}
          agency={"Honeywell Aerospace"}
          years={"2017"}
        />
        <Certification
          logo={NCEESLogo}
          certificationName={"Engineer in Training (Mechanical Engineering)"}
          agency={"NCEES"}
          years={"2017"}
        />
      </Container>
    </>);
};

interface WorkExperienceI {
  companyLogo: string;
  positionTitle: string;
  company: string;
  years: string;
  skills: string[];
  experience: string[];
}

const WorkExperience = (props: WorkExperienceI) => {
  return (
    <div className="flex flex-col px-4 pt-7 pb-4 gap-4 items-center text-primary">
      <div className="flex flex-col items-center">
        <img
          className="w-36"
          alt={`${props.company} logo`}
          src={props.companyLogo}
        ></img>
        <p className="font-semibold">{props.positionTitle}</p>
        <p className="font-light">
          {props.company} | {props.years}
        </p>
        <SkillList skills={props.skills} />
      </div>
      <ul className="italic text-xs font-light list-disc list-inside leading-5 space-y-2.5">
        {props.experience.map((bulletPoint) => {
          return <li key={bulletPoint}>{bulletPoint}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkExperiencePage;