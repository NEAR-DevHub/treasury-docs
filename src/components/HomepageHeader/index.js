import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.scss';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroColumns}>
          <div className={styles.heroColumn}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          </div>
          <div className={styles.heroColumn}>
            <img src={require('@site/static/img/header-image.png').default} />
          </div>
        </div>
      </div>
    </header>
  );
}
