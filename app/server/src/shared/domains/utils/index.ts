import { CONSTANTS } from '../../domains/constants';

export function configVersion(text: any) {
  const newText = text.replace(/_/g, ' ').replace(/\s\s+/g, ' ').split(/[\s]+/);
  return newText[newText.length - 1];
}

export function getLocalhostURL(avatar: string) {
  if (!validateFieldNotEmptyNullUndefined(avatar)) {
    return CONSTANTS.defaultAvatar;
  }
  return removeWhiteSpace(removeSnackCase(avatar.toLowerCase()));
}

export function removeSnackCase(text: any) {
  if (CONSTANTS.snakeCaseRegex.test(text)) {
    return text.replace(/_/g, ' ').replace(/\s\s+/g, ' ');
  }
  return text;
}

export function removeWhiteSpace(text: any) {
  return text.replace(/_/g, ' ').replace(/\s+/g, '-');
}

export function validateFieldNotEmptyNullUndefined(value: string): boolean {
  if (value === '' || value === null || value === undefined) return false;
  return true;
}
