import { getConnection } from 'typeorm';

import Tool from '../../../../private/tools/domains/models/Tool';

export async function checkIfExistsRepoDatabase(
  data: string,
  type: string
): Promise<boolean> {
  return (
    (await getConnection()
      .getRepository(Tool)
      .createQueryBuilder('tools')
      .where(`tools.${type} = :value`, { value: data })
      .getCount()) > 0
  );
}

export async function getRepoDatabase(
  data: string,
  type: string
): Promise<any> {
  return await getConnection()
    .getRepository(Tool)
    .createQueryBuilder('tools')
    .where(`tools.${type} = :value`, { value: data })
    .getOne();
}

export async function deleteRepoDatabase(id: any): Promise<any> {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Tool)
    .where('id = :id', { id })
    .execute();
}

export async function updateRepoDatabase(data: any): Promise<any> {
  return await getConnection()
    .createQueryBuilder()
    .update(Tool)
    .set(data)
    .where('id = :id', { id: data.id })
    .execute();
}
