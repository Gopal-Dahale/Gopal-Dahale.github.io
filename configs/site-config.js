/* ------------------------ Imports ------------------------ */
import React from 'react'

// Icons
import { FaGithub, FaLinkedin, FaMedium, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import { SiCodechef, SiHackerrank, SiLeetcode } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'

/* ------------------------ Config ------------------------ */
const siteConfig = {
  author: {
    accounts: [
      {
        url: 'https://github.com/Gopal-Dahale/',
        label: 'GitHub Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://www.linkedin.com/in/gopald27/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://twitter.com/gopald27',
        label: 'Twitter Account',
        type: 'blue',
        icon: <FaTwitter />
      },
      {
        url: 'https://dahalegopal27.medium.com/',
        label: 'Medium Account',
        type: 'gray',
        icon: <FaMedium />
      },
      {
        url: 'https://stackoverflow.com/users/16026443/gopal-dahale',
        label: 'Stackoverflow Account',
        type: 'orange',
        icon: <FaStackOverflow />
      },
      // {
      //   url: 'https://www.codechef.com/users/gopald27',
      //   label: 'Codechef Profile',
      //   type: 'gray',
      //   icon: <SiCodechef />
      // },
      // {
      //   url: 'https://www.hackerrank.com/dahalegopal27',
      //   label: 'Hackerrank Profile',
      //   type: 'green',
      //   icon: <SiHackerrank />
      // },
      // {
      //   url: 'https://leetcode.com/dahalegopal27/',
      //   label: 'LeetCode Profile',
      //   type: 'orange',
      //   icon: <SiLeetcode />
      // },
      {
        url: 'mailto:dahalegopal27@gmail.com',
        label: 'Gopal Dahale',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
}

export default siteConfig
