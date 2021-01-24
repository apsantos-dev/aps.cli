export type AppState = {
  configDataCli?: ConfigCLI;
  configSocialNetwork?: ConfigSocialNetwork;
  tools?: ToolsState;
}

export type ConfigCLI = {
  payload: ConfigCLIItems;
}
export type ConfigSocialNetwork = {
  payload: ConfigSocialNetworkItems;
}

export interface ConfigCLIItems extends AdditionalItem {
  navbar: string;
  subtitle: string;
  title: string;
  version: string;
}

export interface ConfigSocialNetworkItems extends AdditionalItem {
  name: string;
  url: string;
  title?: string;
}

export type ToolsState = {
  payload: DataTool[];
}

export interface DataTool extends AdditionalItem {
  active: boolean;
  avatarURL: string;
  installed: boolean;
  name: string;
  info?: string;
  site?: string;
  status?: string;
  version?: string;
}

export type AdditionalItem = {
  nameLowerCase?: string;
  id?: number | string;
}
