import React from 'react';
import * as util from 'src/shared/domains/utils';

import './styles.scss';

type Props = {
  children?: any;
  title?: string;
  subtitle?: string;
};

const Navbar: React.FC<Props> = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div className='navbar navbar-fixed'>
      <img src={util.apsantos} alt='' />
      <div className='info'>
        <span>{title}</span> <br />
        <small>{subtitle}</small>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'CLI',
  subtitle: '',
};

export default Navbar;
