import { data as headerData, Header as HeaderType } from '../../_content/Header';
import { data as otherExperienceDate, OtherExperience } from '../../_content/Other-Experience';
import { data as skillsData, Skills } from '../../_content/Skills';
import { data as workExperienceData, WorkExperience } from '../../_content/Work-Experience';
import { data as educationExperienceData, EducationExperience } from '../../_content/Education-Experience';
import { data as besidesData, BesidesData } from '../../_content/Besides';
import Header from '../components/Header';
import OtherExperienceSection from '../components/OtherExperienceSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import BesidesSection from '../components/Besides/Besides';

interface Props {
  header: HeaderType;
  workExperience: WorkExperience;
  otherExperience: OtherExperience;
  skills: Skills;
  besidesData: BesidesData;
}

function Resume({ header, workExperience, otherExperience, skills, besidesData }: Props) {
  console.log(besidesData);
  return (
    <main>
      <Header {...header} />
      <OtherExperienceSection {...educationExperienceData} />
      <WorkExperienceSection {...workExperience} />
      <SkillsSection {...skills} />
      <OtherExperienceSection {...otherExperience} />
      <BesidesSection links={besidesData} />
    </main>
  );
}

export default Resume;

export async function getStaticProps() {
  return {
    props: {
      header: headerData,
      workExperience: workExperienceData,
      otherExperience: otherExperienceDate,
      skills: skillsData,
      besidesData: besidesData,
    },
  };
}
