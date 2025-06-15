import React from 'react';
import classNames from 'classnames';
import styles from './Home.less';

interface HomeProps {
  theme?: 'light' | 'dark';
  showHeader?: boolean;
}

const Home: React.FC<HomeProps> = ({ theme = 'light', showHeader = true }) => {
  const containerClasses = classNames(
    styles.home,
    theme === 'dark' && styles['home--dark'],
    theme === 'light' && styles['home--light']
  );

  const headerClasses = classNames(
    styles.home__header,
    !showHeader && styles['home__header--hidden']
  );

  const contentClasses = classNames(
    styles.home__content,
    showHeader && styles['home__content--with-header'],
    !showHeader && styles['home__content--without-header']
  );

  return (
    <div className={containerClasses}>
      {showHeader && (
        <header className={headerClasses}>
          <h1>Welcome to React 17 App</h1>
        </header>
      )}
      <div className={contentClasses}>
        <p>This is a simple React application with Redux Toolkit and React Router.</p>
        <div className={styles.home__features}>
          <div className={classNames(styles.home__feature, styles['home__feature--primary'])}>
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className={classNames(styles.home__feature, styles['home__feature--secondary'])}>
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 