import { SOCIALPROJECTS } from '../../store/socialProjects';
import { SocialProject } from '../socialProject';
import { SocialProjectType } from '../socialProject/type';
import { Container } from './style';

export function SocialProjectsContainer() {
  return (
    <Container>
      {SOCIALPROJECTS.map((socialProject: SocialProjectType) => (
        <SocialProject key={socialProject._id} socialProject={socialProject} />
      ))}
    </Container>
  );
}
