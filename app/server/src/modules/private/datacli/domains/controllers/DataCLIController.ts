import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import * as Yup from 'yup';

import { CONSTANTS } from '../../../../../shared/domains/constants';
import { DataResponse } from '../../../../../shared/domains/interfaces';

import { message } from '../constants';
import Datacli from '../models/Datacli';
import * as validate from '../../services/validate';

import {
  checkIfExistsRepoDatabase,
  getRepoDatabase,
  updateRepoDatabase,
} from '../../services/database';

let dataResponse: DataResponse;

export default {
  async index(request: Request, response: Response) {
    const result = await getConnection().getRepository(Datacli).find();
    dataResponse = validate.checksIfDataCLIExists(
      result,
      CONSTANTS.taskCompleted
    );
    return response.status(dataResponse.code).send(dataResponse);
  },

  async show(request: Request, response: Response) {
    const result = await getConnection()
      .getRepository(Datacli)
      .findOne(request.params.id);
    dataResponse = validate.checksIfDataCLIExists(
      result,
      CONSTANTS.taskCompleted,
      request.params.id
    );
    return response.status(dataResponse.code).send(dataResponse);
  },

  async create(request: Request, response: Response) {
    const { navbar, version, title, subtitle } = request.body;

    const data = {
      navbar,
      version,
      title,
      subtitle,
    };

    const schema = Yup.object().shape({
      navbar: Yup.string().required(message.fields.required.navbar),
      version: Yup.string().required(message.fields.required.version),
      title: Yup.string().required(message.fields.required.title).max(50),
      subtitle: Yup.string()
        .required(message.fields.required.subtitle)
        .max(255),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const result = await checkIfExistsRepoDatabase(title, 'title');

    if (result) {
      const dataRepo = await getRepoDatabase(title, 'title');
      const newRepoData = { id: dataRepo.id, ...data };
      await updateRepoDatabase(newRepoData);
      dataResponse = validate.checksIfDataCLIExists(
        newRepoData,
        message.update.success
      );
    } else {
      const repo = getConnection().getRepository(Datacli);
      const newRepoData = repo.create(data);
      await repo.save(newRepoData);
      dataResponse = validate.checksIfDataCLIExists(
        newRepoData,
        message.create.success
      );
    }

    return response.status(dataResponse.code).send(dataResponse);
  },
};
