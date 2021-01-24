import React from 'react';
import { DataTool } from 'src/shared/domains/interfaces/app.interface';
import { FiCheckCircle, FiLoader, FiXCircle } from 'src/shared/domains/utils';
import * as CONSTANTS from 'src/shared/domains/constants';
import * as util from 'src/shared/domains/utils';

import './styles.scss';

type Props = {
  children?: any;
  payload: DataTool[];
};

const Tools: React.FC<Props> = (props: Props) => {
  const { payload } = props;
  util.addIndexWithTypeNameForSorting(payload);
  util.itemsASC(payload);

  return (
    <main>
      {payload.length > 0 ? (
        <ul>
          {payload.map((tool: DataTool) => (
            <li className='tool-item' key={tool.id}>
              <header>
                <div className='tool-info'>
                  <img
                    src={`assets/images/${tool.avatarURL}.png`}
                    alt={tool.name}
                  />
                  <div className='title-status'>
                    <strong>{tool.name}</strong>
                    <span
                      className={tool.active ? 'success' : 'danger'}
                      title={tool.info}
                    >
                      {tool.info
                        ? tool.info
                        : tool.active
                        ? 'Installed'
                        : 'Not found'}
                    </span>
                  </div>
                  <div
                    className={
                      tool.active ? 'check-icon success' : 'check-icon danger'
                    }
                  >
                    {tool.status === CONSTANTS.GENERIC.installing ? (
                      <FiLoader className='install' title={CONSTANTS.GENERIC.installing} />
                    ) : tool.active ? (
                      <FiCheckCircle title={tool.status} />
                    ) : (
                      <FiXCircle title={tool.status} />
                    )}
                  </div>
                </div>
                <hr />
                <div className='footer'>
                  {tool.status === CONSTANTS.GENERIC.installing ? (
                    CONSTANTS.GENERIC.waitForInstallation
                  ) : (
                    <>
                      {tool.site ? (
                        <a
                          href={tool.site}
                          target='_blank'
                          rel='noopener noreferrer'
                          title='Open web page in a new tab'
                        >
                          <span>Visit website</span>
                        </a>
                      ) : (
                        <span>{CONSTANTS.GENERIC.noSitesToDisplay}</span>
                      )}
                      <span className='version'>
                        {tool.version ? `Version: ${tool.version}` : ''}
                      </span>
                    </>
                  )}
                </div>
              </header>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className='tool-item'>
            <header>
              <div className='tool-info'>
                <div className='title-status'>
                  <span className='danger'>System information</span>
                </div>
                <div className='check-icon danger'>
                  <util.FiInfo />
                </div>
              </div>
              <hr />
              <div className='footer'>No tools installed</div>
            </header>
          </li>
        </ul>
      )}
    </main>
  );
};

export default Tools;
