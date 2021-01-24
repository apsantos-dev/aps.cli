export interface DataCLIInterface extends DataToolAdditional {
  navbar: string;
  version: string;
  title: string;
  subtitle: string;
}

export type DataToolAdditional = {
  nameLowerCase?: string;
  id?: number | string;
};
