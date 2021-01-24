import { getConnection } from 'typeorm';

import Datacli from '../../../../private/datacli/domains/models/Datacli';

export async function checkIfExistsRepoDatabase(
  data: string,
  type: string
): Promise<boolean> {
  return (
    (await getConnection()
      .getRepository(Datacli)
      .createQueryBuilder('datacli')
      .where(`datacli.${type} = :value`, { value: data })
      .getCount()) > 0
  );
}

export async function getRepoDatabase(
  data: string,
  type: string
): Promise<any> {
  return await getConnection()
    .getRepository(Datacli)
    .createQueryBuilder('datacli')
    .where(`datacli.${type} = :value`, { value: data })
    .getOne();
}

export async function updateRepoDatabase(data: any): Promise<any> {
  return await getConnection()
    .createQueryBuilder()
    .update(Datacli)
    .set(data)
    .where('id = :id', { id: data.id })
    .execute();
}
