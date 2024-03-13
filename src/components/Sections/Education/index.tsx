import {FC, memo} from 'react';

import {education, experience, SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import EducationSection from './EducationSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Education: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Education}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <EducationSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </EducationSection>
        <EducationSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </EducationSection>
        <EducationSection title="Skills">
          <p className="pb-8">Here you can show a my skills</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </EducationSection>
      </div>
    </Section>
  );
});

Education.displayName = 'Education';
export default Education;
