import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Gleap from "gleap";
import styles from './index.module.scss';


function Card({ Svg, title, description, to }) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg', styles.heroCard)}>
      <Link onClick={to} to='#' className='card padding--lg'>
        <h3><Svg className={styles.cardSvg} role="img" /> <b>{title}</b></h3>
        <p>{description}</p>
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

  return (
    <div className="container">
      <section className="row">
        <Card
          Svg={require('@site/static/img/questioncol.svg').default}
          title="Ask a question"
          description="We are here to help."
          to={runGleapConversations}
        />
        <Card
          Svg={require('@site/static/img/ideacol.svg').default}
          title="Request a feature"
          description="What would you like to see?"
          to={runGleapFeatureRequests}
        />
      </section>
    </div>
  );
}
