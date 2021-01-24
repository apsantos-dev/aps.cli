import { getConnection } from 'typeorm';

import SocialNetwork from '../../../../private/social-network/domains/models/SocialNetwork';

export async function checkIfExistsRepoDatabase(
  data: string,
  type: string
): Promise<boolean> {
  return (
    (await getConnection()
      .getRepository(SocialNetwork)
      .createQueryBuilder('socialNetwork')
      .where(`socialNetwork.${type} = :value`, { value: data })
      .getCount()) > 0
  );
}

export async function getRepoDatabase(
  data: string,
  type: string
): Promise<any> {
  return await getConnection()
    .getRepository(SocialNetwork)
    .createQueryBuilder('socialNetwork')
    .where(`socialNetwork.${type} = :value`, { value: data })
    .getOne();
}

export async function updateRepoDatabase(data: any): Promise<any> {
  return await getConnection()
    .createQueryBuilder()
    .update(SocialNetwork)
    .set(data)
    .where('id = :id', { id: data.id })
    .execute();
}
