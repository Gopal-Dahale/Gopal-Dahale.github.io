/* ------------------------ Imports ------------------------ */
import React from 'react'

// Icons
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { SiCodechef, SiHackerrank, SiLeetcode } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'

/* ------------------------ Config ------------------------ */
const siteConfig = {
  author: {
    accounts: [
      {
        url: 'https://github.com/Gopal-Dahale/',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://www.linkedin.com/in/gopal-ramesh-dahale-7a3087198/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'https://stackoverflow.com/users/16026443/gopal-dahale?tab=profile',
        label: 'Stackoverflow Account',
        type: 'orange',
        icon: <FaStackOverflow />
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
}

export default siteConfig
