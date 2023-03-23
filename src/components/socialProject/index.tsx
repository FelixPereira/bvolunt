import { Link } from 'react-router-dom';
import { Card, HeaderImage } from './style';
import { SocialProjectType } from './type';

type PartialSocialProjectType = Pick<
  SocialProjectType,
  'organizationOwner' | 'province'
>;

interface SocialProjectProps {
  socialProject: SocialProjectType;
}

const footerContent = [
  {
    label: 'Organização promotora',
    description: 'organizationOwner',
  },
  {
    label: 'Província',
    description: 'province',
  },
];

export function SocialProject({ socialProject }: SocialProjectProps) {
  return (
    <Card>
      <Link to={`/projectos-sociais/${socialProject._id}`}>
        <HeaderImage backgroundImage={socialProject.coverImage} />
      </Link>
      <div className='card_body'>
        <div className='logos-container'>
          {socialProject.sponsors.map((sponsor) => (
            <img key={sponsor._id} src={sponsor.logo} alt={sponsor.name} />
          ))}
        </div>
        <Link to={`/projectos-sociais/${socialProject._id}`}>
          <h3>{socialProject.name}</h3>
        </Link>
      </div>
      <footer className='card_footer'>
        {footerContent.map((content) => (
          <div key={content.description} className='footer_content'>
            <p className='label'>{content.label}</p>
            <p className='description'>
              {
                socialProject[
                  content.description as keyof PartialSocialProjectType
                ]
              }
            </p>
          </div>
        ))}
      </footer>
    </Card>
  );
}
