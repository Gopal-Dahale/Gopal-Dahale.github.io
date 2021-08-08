import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Gopal Dahale - Full Stack Developer/ Machine Learning Developer',
  keywords: 'Full Stack Development, Machine Learning, Deep Learning, Programming',
  description: 'Software Engineer. Full Stack Developer. Machine Learning.'
};

export default Meta;
