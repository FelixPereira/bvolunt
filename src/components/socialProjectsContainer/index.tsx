import { useState, useEffect } from 'react';
import { SocialProject } from '../socialProject';
import { SocialProjectType } from '../socialProject/type';
import { Container } from './style';

export function SocialProjectsContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [socialProjects, setSocialProjects] = useState<SocialProjectType[]>(
    [] as SocialProjectType[]
  );

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/social-projects')
      .then((response) => response.json())
      .then((data) => {
        setSocialProjects(data.socialProjects);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div style={{ width: '100%' }}>Loading...</div>;
  
  return (
    <Container>
      {socialProjects?.map((socialProject: SocialProjectType) => (
        <SocialProject key={socialProject._id} socialProject={socialProject} />
      ))}
    </Container>
  );
}
