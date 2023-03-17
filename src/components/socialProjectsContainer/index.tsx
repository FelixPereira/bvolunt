import { useState, useEffect } from 'react';
import { SocialProject } from '../socialProject';
import { SocialProjectType } from '../socialProject/type';
import { Container } from './style';

export function SocialProjectsContainer() {
  const [socialProjects, setSocialProjects] = useState<SocialProjectType[]>(
    [] as SocialProjectType[]
  );

  useEffect(() => {
    fetch('/api/social-projects')
      .then((response) => response.json())
      .then((data) => setSocialProjects(data.socialProjects))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {socialProjects?.map((socialProject: SocialProjectType) => (
        <SocialProject key={socialProject._id} socialProject={socialProject} />
      ))}
    </Container>
  );
}
