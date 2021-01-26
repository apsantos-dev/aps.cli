import React, { useEffect, useState } from 'react';
import * as CONSTANTS from 'src/shared/domains/constants';
import * as util from 'src/shared/domains/utils';
import api from 'src/services/api';
import {
  ConfigCLIItems,
  DataTool,
} from 'src/shared/domains/interfaces/app.interface';
import { ConfigSocialNetworkItems } from 'src/shared/domains/interfaces/app.interface';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Info from 'src/components/Info';
import Loading from 'src/components/Loading';
import Navbar from 'src/components/Navbar';
import Tools from 'src/components/Tools';

import './styles.scss';

type Props = {
  children?: any;
};

const dataCliMock = util.dataCliMock;

const Landing: React.FC<Props> = () => {
  const [dataCLI, setDataCLI] = useState<ConfigCLIItems>(dataCliMock);
  const [loading, setLoading] = useState<boolean>(true);
  const [socialNetworks, setSocialNetworks] = useState<
    ConfigSocialNetworkItems[]
  >([]);
  const [tools, setTools] = useState<DataTool[]>([]);

  useEffect(() => {
    getSocialNetwork();
    const interval = setInterval(() => {
      getSocialNetwork();
      getDataCLI();
      getTools();
    }, CONSTANTS.GENERIC.interval);
    return () => clearInterval(interval);
  }, []);

  async function getDataCLI() {
    try {
      const response = await api.get(`${CONSTANTS.ENDPOINTS.dataCLI}/1`);
      if (!util.checkDataConfigCLI(response.data.info)) {
        return util.throwNewError(CONSTANTS.GENERIC.itemsAreNotDataCLI);
      }
      setDataCLI(response.data.info);
    } catch (error) {
      // util.throwNewError(error.message);
    }
  }

  async function getSocialNetwork() {
    try {
      const response = await api.get(`${CONSTANTS.ENDPOINTS.socialNetwork}`);
      if (util.checkResponseArray(response.data.info)) {
        setSocialNetworks(response.data.info);
      }
    } catch (error) {
      // util.throwNewError(error.message);
    }
  }

  async function getTools() {
    try {
      const response = await api.get(`${CONSTANTS.ENDPOINTS.tools}`);
      if (util.checkResponseArray(response.data.info)) {
        setTools(response.data.info);
        setLoading(false);
      }
    } catch (error) {
      setTools([]);
      util.throwNewError(error.message);
    }
  }

  return (
    <>
      <Navbar title={dataCLI.navbar} subtitle={dataCLI.version} />
      <div className='page'>
        <Header title={dataCLI.title} subtitle={dataCLI.subtitle} />
        <Info payload={tools} />
        <div className='container'>
          {loading && <Loading />}
          {!loading && <Tools payload={tools} />}
          {socialNetworks.length > 0 && <Footer payload={socialNetworks} />}
        </div>
      </div>
    </>
  );
};

export default Landing;
