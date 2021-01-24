import Datacli from '../models/Datacli';

export default {
  render(datacli: Datacli) {
    return {
      id: datacli.id,
      navbar: datacli.navbar,
      version: datacli.version,
      title: datacli.title,
      subtitle: datacli.subtitle,
    };
  },
};
