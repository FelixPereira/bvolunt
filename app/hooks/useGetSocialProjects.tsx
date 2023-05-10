// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { SocialProjectType } from '../components/socialProject/type';

// export const useGetSocialProjects = () => {
//   const [socialProjects, setSocialProjects] = useState<SocialProjectType[]>([]);
//   const [isFetching, setIsFetching] = useState(false);

//   useEffect(() => {
//     const getSocialProject = async () => {
//       setIsFetching(true);
//       try {
//         const response = await axios.get('/socialProjects');
//         const data = await response.json();
//         if (data) {
//           setSocialProjects(data);
//           setIsFetching(false);
//         }
//       } catch (err) {
//         console.log(err);
//         setIsFetching(false);
//       }
//     };
//     getSocialProject();
//   }, []);
//   return {
//     socialProjects,
//     isFetching,
//   };
// };
