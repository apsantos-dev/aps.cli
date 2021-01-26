import React from 'react';

import './styles.scss';

type Props = {
  children?: any;
};

const Tool: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className='page-tool'>
      <h1>Page Tool</h1>
      {children}
    </div>
  );
};

Tool.defaultProps = {
  children: null,
};

export default Tool;
