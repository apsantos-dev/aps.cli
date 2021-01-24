import React from 'react';

import './styles.scss';

type Props = {
  children?: any;
};

const Tools: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className='page-tools'>
      <h1>Page Tools</h1>
      {children}
    </div>
  );
};

Tools.defaultProps = {
  children: null,
};

export default Tools;
