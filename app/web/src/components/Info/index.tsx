import React, { useEffect, useState } from 'react';
import * as CONSTANTS from 'src/shared/domains/constants';
import * as util from 'src/shared/domains/utils';

import './styles.scss';

type Props = {
  children?: any;
  payload: any;
};

const Info: React.FC<Props> = (props: Props) => {
  const [totalTools, setTotalTools] = useState<number>(
    CONSTANTS.GENERIC.startNumber
  );
  const [installedTools, setInstalledTools] = useState<number>(
    CONSTANTS.GENERIC.startNumber
  );
  const [notFoundTools, setNotFoundTools] = useState<number>(
    CONSTANTS.GENERIC.startNumber
  );
  const { payload } = props;
  // FIXME - DELETE
  console.log('payload', payload);

  useEffect(() => {
    if (util.checkResponseArray(payload)) {
      setTotalTools(payload.length);
      setInstalledTools(util.countTotalItems(payload, 'active', true));
      setNotFoundTools(util.countTotalItems(payload, 'active', false));
    }
  }, [payload]);

  return (
    <aside>
      {/* <strong>General tools:</strong> */}
      <ul>
        <li>
          <span>Total analyzed:</span>
          <span>{totalTools}</span>
        </li>
        <li>
          <span>Installed:</span>
          <span>{installedTools}</span>
        </li>
        <li>{/* Status: <span>Analisando</span> */}</li>
        <li>
          <span>Not found: </span>
          <span className='danger'>{notFoundTools}</span>
        </li>
      </ul>
    </aside>
  );
};

Info.defaultProps = {
  children: CONSTANTS.GENERIC.itemNull,
  payload: CONSTANTS.GENERIC.emptyArray,
};

export default Info;
