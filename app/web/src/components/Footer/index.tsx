import React from 'react';
import { ConfigSocialNetworkItems } from 'src/shared/domains/interfaces/app.interface';
import * as util from 'src/shared/domains/utils';
import * as CONSTANTS from 'src/shared/domains/constants';

import './styles.scss';

type Props = {
  payload: ConfigSocialNetworkItems[];
};

const Footer: React.FC<Props> = (props: Props) => {
  const { payload } = props;
  const items = payload
    .filter((item: ConfigSocialNetworkItems) => {
      return (
        util.validateFieldNotEmptyNullUndefined(item.name) &&
        util.validateFieldNotEmptyNullUndefined(item.url)
      );
    })
    .map((item: ConfigSocialNetworkItems) => {
      item.nameLowerCase = item.name.toLowerCase();
      return item;
    });

  return (
    <>
      {items.length > 0 && (
        <div className='page-footer'>
          <div className='info'>
            <hr className='custom' />
            <h2>Redes sociais:</h2>

            <div className='fa-standard'>
              {items.map((item: ConfigSocialNetworkItems) => (
                <a
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={item.id}
                >
                  <div
                    className={`fa_square ${item.nameLowerCase}`}
                    title={`${CONSTANTS.GENERIC.titleHref} ${item.name}`}
                  ></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Footer.defaultProps = {
  payload: [],
};

export default Footer;
