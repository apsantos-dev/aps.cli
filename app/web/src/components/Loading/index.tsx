import React from 'react';

import './styles.scss';

type Props = {
  children?: any;
};

const Loading: React.FC<Props> = () => {
  return (
    <div className='page-loading'>
      <div className='loader'></div>
    </div>
  );
};

Loading.defaultProps = {
  children: null,
};

export default Loading;
