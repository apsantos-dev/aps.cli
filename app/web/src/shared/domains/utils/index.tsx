import { toast } from 'react-toastify';
import { FaFacebookF } from 'react-icons/fa';
import { FiCheckCircle, FiXCircle, FiLoader, FiInfo } from 'react-icons/fi';

import {
  ConfigCLIItems,
  ConfigSocialNetworkItems,
} from 'src/shared/domains/interfaces/app.interface';

const apsantos = 'assets/images/logo.png';
const defaultAvatar = 'assets/images/default_avatar.png';
const fedora = 'assets/images/fedora.png';
const node = 'assets/images/node.png';
const vscode = 'assets/images/vscode.png';

export { FaFacebookF, FiCheckCircle, FiXCircle, FiLoader, FiInfo };
export { apsantos, defaultAvatar, fedora, node, vscode };

export * from './data-cli.mock';

export function addIndexWithTypeNameForSorting(data: any): any {
  data.map((item: any) => {
    return (item = item.sortItem = item.name.toLowerCase());
  });
  return data;
}

export function checkDataConfigCLI(data: ConfigCLIItems): boolean {
  if (!data.hasOwnProperty('navbar')) return false;
  if (!data.hasOwnProperty('subtitle')) return false;
  if (!data.hasOwnProperty('title')) return false;
  if (!data.hasOwnProperty('version')) return false;
  return true;
}

export function checkDataConfigSocialNetwork(
  data: ConfigSocialNetworkItems
): boolean {
  if (!data.hasOwnProperty('name') || data.name === '') return false;
  if (!data.hasOwnProperty('url') || data.url === '') return false;
  return true;
}

export function checkResponseArray(data: any): boolean {
  if (Array.isArray(data)) return true;
  return false;
}

export function countTotalItems(data: any, index: any, type: boolean): number {
  const total = data.filter((item: any) => {
    return item[index] === type;
  });
  return total.length;
}

export function itemsASC(vet: any[]): any {
  let newObj: any = [];

  newObj = vet.sort((a, b) => {
    if (a.sortItem > b.sortItem) return 1;
    if (a.sortItem < b.sortItem) return -1;
    return 0;
  });

  return newObj;
}

export function itemsDESC(vet: any[]): any {
  let newObj: any = [];

  newObj = vet.sort((a, b) => {
    if (a.sortItem < b.sortItem) return 1;
    if (a.sortItem > b.sortItem) return -1;
    return 0;
  });

  return newObj;
}

export function throwNewError(message: string): void {
  toast.error(message);
}

export function validateFieldNotEmptyNullUndefined(value: string): boolean {
  if (value === '' || value === null || value === undefined) return false;
  return true;
}
