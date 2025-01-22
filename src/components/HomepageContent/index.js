import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './index.module.scss';

function Card({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg', styles.heroCard)}>
      <Link to={to} className='card padding--lg'>
        <div className={styles.svgWrapper}>
          <Svg className={styles.cardSvg} role="img" />
        </div>
        <h4 className='text--truncate'>{title}</h4>
        <p className='text--truncate'>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageContent() {
  return (
    <div className="container">
      <section className="row">
        <Card
          Svg={require('@site/static/img/multisig.svg').default}
          title="Table of Contents"
          description="Welcome to the Near Treasury documentation."
          to="/intro"
        />
        <Card
          Svg={require('@site/static/img/transparency.svg').default}
          title="Getting Started"
          description="Create your Treasury in a few simple steps."
          to="/quickstart"
        />
        <Card
          Svg={require('@site/static/img/operations.svg').default}
          title="Payments"
          description="Core features for managing your funds."
          to="/payments"
        />
      </section>
    </div>
  );
}
