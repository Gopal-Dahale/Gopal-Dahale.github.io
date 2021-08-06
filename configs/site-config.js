import { FaGithub, FaLinkedin, FaQuora } from 'react-icons/fa';
import { SiCodechef, SiHackerrank, SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/Gopal-Dahale/',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://linkedin.com/in/muhammad-ahmad20',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://www.codechef.com/users/gopald27',
        label: 'Codechef Profile',
        type: 'gray',
        icon: <SiCodechef />
      },
      {
        url: 'https://www.hackerrank.com/dahalegopal27',
        label: 'Hackerrank Profile',
        type: 'green',
        icon: <SiHackerrank />
      },
      {
        url: 'https://leetcode.com/dahalegopal27/',
        label: 'LeetCode Profile',
        type: 'orange',
        icon: <SiLeetcode />
      },
      {
        url: 'mailto:dahalegopal27@gmail.com',
        label: 'Gopal Dahale',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
