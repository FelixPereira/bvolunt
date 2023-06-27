'use client';

import { SocialProject } from '@prisma/client';

interface ProvinceItemProps {
  selected: boolean;
  label: string;
  slug: string;
  data: SocialProject[];
  filterProjects: (province: string) => void;
  type?: string;
}

const ProvinceItem: React.FC<ProvinceItemProps> = ({
  selected,
  label,
  slug: province,
  data,
  filterProjects,
  type,
}) => {
  const totalProjects =
    type === 'all'
      ? data?.length
      : data?.filter((data) => data.province === label).length;
  //   const orderby = searchQuery?.get('orderby');
  //   const currentQuery = orderby ? { province, orderby } : { province };

  //   const url = queryString.stringifyUrl({
  //     url: pathName as string,
  //     query: {
  //       ...currentQuery,
  //     },
  //   });

  //   router.push(url);
  // }, [router, province, pathName, searchQuery]);

  return (
    <li
      className={`
        list-none
        border-l-[3px]
        mb-[15px]
        cursor-pointer
        w-fit
        py-[5px]
        pl-[10px]
        pr-[20px]
        rounded
        hover:bg-primary
        hover:text-neutralLight
        hover:transition
        hover:duration-[.3s]
        hover:border-l-secondary
        ${selected ? 'bg-primary' : 'bg-transparent'}
        ${selected ? 'text-neutralLight' : 'text-textBody'}
        ${selected ? 'border-l-secondary' : 'border-l-primary'}
      `}
      onClick={() => filterProjects(province)}
    >
      {label} ({totalProjects})
    </li>
  );
};

export default ProvinceItem;
