// tslint:disable: radix
import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import * as Yup from 'yup';
import * as util from '../../../../../shared/domains/utils';

import { CONSTANTS } from '../../../../../shared/domains/constants';

import { message } from '../.././../../private/tools/domains/constants';
import { DataResponse } from '../.././../../private/tools/domains/interfaces';
import Tool from '../.././../../private/tools/domains/models/Tool';
import * as validate from '../.././../../private/tools/services/validate';

import {
  checkIfExistsRepoDatabase,
  deleteRepoDatabase,
  getRepoDatabase,
  updateRepoDatabase,
} from '../../services/database';

let dataResponse: DataResponse;

export default {
  async index(request: Request, response: Response) {
    const result = await getConnection().getRepository(Tool).find();
    dataResponse = validate.checksIfToolExists(result, CONSTANTS.taskCompleted);
    return response.status(dataResponse.code).send(dataResponse);
  },

  async show(request: Request, response: Response) {
    const result = await getConnection()
      .getRepository(Tool)
      .findOne(request.params.id);
    dataResponse = validate.checksIfToolExists(
      result,
      CONSTANTS.taskCompleted,
      request.params.id
    );
    return response.status(dataResponse.code).send(dataResponse);
  },

  async create(request: Request, response: Response) {
    const { avatarURL, name, site, status, version, info } = request.query;
    const data = {
      active: request.query.active === 'true' ? true : false,
      avatarURL: util.getLocalhostURL(avatarURL as string),
      name: util.removeSnackCase(name),
      site: util.removeSnackCase(site),
      status: util.removeSnackCase(status),
      version: util.configVersion(version),
      info: util.removeSnackCase(info),
    };
    // FIXME - DELETE
    console.log('data', data);

    const schema = Yup.object().shape({
      name: Yup.string().required(message.fields.required.name).max(50),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const result = await checkIfExistsRepoDatabase(data.name, 'name');

    if (result) {
      const dataRepo = await getRepoDatabase(data.name, 'name');
      const newRepoData = { id: dataRepo.id, ...data };
      await updateRepoDatabase(newRepoData);
      dataResponse = validate.checksIfToolExists(
        newRepoData,
        message.update.success
      );
    } else {
      const repo = getConnection().getRepository(Tool);
      const newRepoData = repo.create(data);
      await repo.save(newRepoData);
      dataResponse = validate.checksIfToolExists(
        newRepoData,
        message.create.success
      );
    }

    return response.status(dataResponse.code).send(dataResponse);
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const schema = Yup.object().shape({
      id: Yup.string().required(message.fields.required.id),
    });

    await schema.validate(
      { id },
      {
        abortEarly: false,
      }
    );

    const result = await checkIfExistsRepoDatabase(id, 'id');

    if (result) {
      /**
       * @description delete a record in the database.
       *
       * #INFO: Another way to delete the record from the database
       * const repo = getConnection().getRepository(Tool);
       * await repo.delete(id);
       */
      await deleteRepoDatabase(id);
      dataResponse = {
        code: CONSTANTS.httpCode200,
        info: `Record deleted successfully: ID - ${id}`,
        message: CONSTANTS.taskCompleted,
      };
    } else {
      dataResponse = {
        code: CONSTANTS.httpCode404,
        info: 'The informed record is not registered in the database',
        message: 'ID not found',
      };
    }

    return response.status(dataResponse.code).send(dataResponse);
  },
};
