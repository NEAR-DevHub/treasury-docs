import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageContent from '@site/src/components/HomepageContent';

import SVGLine from '@site/static/img/ic_line.svg';
import SVGLine2 from '@site/static/img/ic_line_2.svg';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome! This is the starting point for all the documentation in NEAR Treasury."
    >
      <HomepageHeader />
      <SVGLine className='background-line-svg' />
      <SVGLine2 className='background-line-svg-2' />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}
