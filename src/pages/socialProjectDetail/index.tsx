import { useParams } from 'react-router-dom';
import { Container, CoverImage } from './style';
import { useEffect, useState } from 'react';
import { SocialProjectType } from '../../components/socialProject/type';
import { Spinner } from '../../components/common/spinner';

type ParcialSocialProject = Pick<
  SocialProjectType,
  'organizationOwner' | 'registeredVolunteers' | 'province'
>;

const socialProjectDetails = [
  {
    label: 'Organização responsável',
    description: 'organizationOwner',
  },
  {
    label: 'Voluntários participantes',
    description: 'registeredVolunteers',
  },
  {
    label: 'Organização promotora',
    description: 'organizationOwner',
  },
  {
    label: 'E-mail de contacto',
    description: 'contactEmail',
  },
  {
    label: 'Província',
    description: 'province',
  },
];

export function SocialProjectDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [socialProject, setSocialProject] = useState<SocialProjectType>(
    {} as SocialProjectType
  );

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/social-projects/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSocialProject(data.socialProject);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <article className='left__panel'>
        <CoverImage coverimage={socialProject?.coverImage} />

        {socialProjectDetails.map((detail) => (
          <div key={detail.description} className='project_detail'>
            <strong>{detail.label}:</strong>
            <p>
              {socialProject[detail.description as keyof ParcialSocialProject]}
            </p>
          </div>
        ))}
        <div className='project_detail'>
          <strong>Patrocínio:</strong>
          {socialProject.sponsors?.map((logo) => (
            <img key={logo._id} src={logo.logo} alt={logo.name} />
          ))}
        </div>
      </article>
      <article className='right__panel'>
        <h2>{socialProject?.name}</h2>
        <p>{socialProject?.description}</p>
      </article>
    </Container>
  );
}
