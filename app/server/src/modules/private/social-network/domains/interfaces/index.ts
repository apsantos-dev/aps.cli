export interface SocialNetworkInterface extends SocialNetworkAdditional {
  name: string;
  url: string;
}

type SocialNetworkAdditional = {
  nameLowerCase?: string;
  info?: string | any;
  title?: string;
};
