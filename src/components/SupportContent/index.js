import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Gleap from "gleap";
import styles from './index.module.scss';


function Card({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg', styles.heroCard)}>
      <Link onClick={to} to='#' className='card padding--lg'>
        <div className={styles.svgWrapper}>
          <Svg className={styles.cardSvg} role="img" />
        </div>
        <h4 className='text--truncate'>{title}</h4>
        <p className='text--truncate'>{description}</p>
      </Link>
    </div>
  );
}

export default function SupportContent() {
  const runGleapConversations = () => {
    Gleap.openConversations();
  };

  const runGleapFeatureRequests = () => {
    Gleap.openFeatureRequests(false);
  };

  const runGleapNews = () => {
    Gleap.openNews(false);
  };

  return (
    <div className="container">
      <section className="row">
        <Card
          Svg={require('@site/static/img/operations.svg').default}
          title="Messages"
          description="Send us a message"
          to={runGleapConversations}
        />
        <Card
          Svg={require('@site/static/img/transparency.svg').default}
          title="News"
          description="Latest News"
          to={runGleapNews}
        />
        <Card
          Svg={require('@site/static/img/multisig.svg').default}
          title="Feature Requests"
          description="Ask for a feature"
          to={runGleapFeatureRequests}
        />
      </section>
    </div>
  );
}
