import React, { Fragment, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Meta from './meta';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

const PageLayout = ({ children, title, description, keywords }) => (
  <Fragment>
    <Meta title={title} description={description} keywords={keywords} />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}>
      {children}
    </motion.main>
  </Fragment>
);

export default PageLayout;