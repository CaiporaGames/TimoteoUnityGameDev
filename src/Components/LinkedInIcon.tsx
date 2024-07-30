import React from 'react';
import globalStyles from '../Styles/Global.module.scss';

const LinkedInIcon: React.FC = () => {
  return (
    <a className={globalStyles.iconLink} href="https://www.linkedin.com/in/timoteo-alves-cruz/" target="_blank" rel="noopener noreferrer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#ffffff" d="M21.005 0H2.995C1.345 0 0 1.343 0 2.99v18.02C0 22.657 1.345 24 2.995 24h18.01C22.657 24 24 22.657 24 20.01V2.99C24 1.343 22.657 0 21.005 0zM7.21 20.993H3.646V9.08h3.564v11.913h-.001zM5.428 7.823c-1.31 0-2.333-1.04-2.333-2.342 0-1.31 1.04-2.333 2.333-2.333 1.303 0 2.333 1.023 2.333 2.333 0 1.303-1.03 2.342-2.333 2.342zM20.94 20.993h-3.564v-5.951c0-1.413-.508-2.376-1.774-2.376-1.346 0-2.143 1.001-2.494 1.973-.128.308-.16.738-.16 1.173v5.181h-3.562V9.08h3.404v1.045c.45-.683 1.268-1.32 2.605-1.32 1.91 0 3.353 1.25 3.353 3.939v7.25h-.001z"/>
      </svg>
    </a>
  );
};

export default LinkedInIcon;
