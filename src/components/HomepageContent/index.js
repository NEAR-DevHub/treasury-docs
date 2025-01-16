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
          title="Multi-Signature Security"
          description="Launch your treasury quickly with multi-signature approvals. Customize voting policies for your team’s needs."
          to="/intro"
        />
        <Card
          Svg={require('@site/static/img/transparency.svg').default}
          title="Full Transparency"
          description="Gain complete visibility into your treasury’s activity. Easily track balances, transactions, and history."
          to="/intro"
        />
        <Card
          Svg={require('@site/static/img/operations.svg').default}
          title="Streamlined Operations"
          description="Jointly manage payments, staking, and token swaps. Handle all assets, including funds held in a lock up account."
          to="/intro"
        />
      </section>
    </div>
  );
}
