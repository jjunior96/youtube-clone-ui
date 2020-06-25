import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <title>YouTube</title>
    </Helmet>
  </Layout>
);

export default IndexPage;
