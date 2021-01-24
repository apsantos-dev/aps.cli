import React from 'react';
import * as CONSTANTS from 'src/shared/domains/constants';

import './styles.scss';

type Props = {
  children?: any;
  title: string;
  subtitle: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const { title, subtitle} = props;

  return (
    <div className='header'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

Header.defaultProps = {
  title: CONSTANTS.GENERIC.ellipsis,
  subtitle: CONSTANTS.GENERIC.ellipsis,
};

export default Header;
