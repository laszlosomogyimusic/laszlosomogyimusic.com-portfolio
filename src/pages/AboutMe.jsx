import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';

import "styles/AboutMe.css";
import { experiences } from "../constants/aboutme"; 

const ElementCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'var(--tetriary-color)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  var(--tetriary-color)' }}
      date={ experience.date }
      iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">{ experience.title }</h3>
      <h4 className="vertical-timeline-element-subtitle">{ experience.company_name }</h4>
      <p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.description.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </p>
    </VerticalTimelineElement> 
  );
}

const AboutMe = () => {
  return ( 
<VerticalTimeline className="AboutMe">
  {experiences.map((experience, index) => (
    <ElementCard
      key={`experience-${index}`}
      experience={experience}
    />
  ))}
   
</VerticalTimeline>
   );
}
 
export default AboutMe;