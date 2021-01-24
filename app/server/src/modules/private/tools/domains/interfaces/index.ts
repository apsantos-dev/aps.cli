export type DataResponse = {
  code: number;
  info: string | {};
  message: string;
};

export interface DataTool extends DataToolAdditional {
  active: boolean;
  avatarURL: string;
  name: string;
  site?: string;
  status?: string;
  version?: string;
}

export type DataToolAdditional = {
  nameLowerCase?: string;
  info?: string;
};
