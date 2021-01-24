import SocialNetwork from '../models/SocialNetwork';

export default {
  render(socialNetwork: SocialNetwork) {
    return {
      id: socialNetwork.id,
      name: socialNetwork.name,
      url: socialNetwork.url,
    };
  },
};
