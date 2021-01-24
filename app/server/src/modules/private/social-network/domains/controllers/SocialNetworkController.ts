import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import * as Yup from 'yup';

import { CONSTANTS } from '../../../../../shared/domains/constants';

import { message } from '../constants/';
import { DataResponse } from '../../../../../shared/domains/interfaces';
import SocialNetwork from '../models/SocialNetwork';
import * as validate from '../../services/validate';

import {
  checkIfExistsRepoDatabase,
  getRepoDatabase,
  updateRepoDatabase,
} from '../../services/database';

let dataResponse: DataResponse;

export default {
  async index(request: Request, response: Response) {
    const result = await getConnection().getRepository(SocialNetwork).find();
    dataResponse = validate.checksIfSocialNetworkExists(
      result,
      CONSTANTS.taskCompleted
    );
    return response.status(dataResponse.code).send(dataResponse);
  },

  async show(request: Request, response: Response) {
    const result = await getConnection()
      .getRepository(SocialNetwork)
      .findOne(request.params.id);
    dataResponse = validate.checksIfSocialNetworkExists(
      result,
      CONSTANTS.taskCompleted,
      request.params.id
    );
    return response.status(dataResponse.code).send(dataResponse);
  },

  async create(request: Request, response: Response) {
    const { name, url } = request.query;
    const data = {
      name,
      url,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(message.fields.required.name).max(50),
      url: Yup.string().required(message.fields.required.url),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const result = await checkIfExistsRepoDatabase(name as string, 'name');

    if (result) {
      const dataRepo = await getRepoDatabase(name as string, 'name');
      const newRepoData = { id: dataRepo.id, ...data };
      await updateRepoDatabase(newRepoData);
      dataResponse = validate.checksIfSocialNetworkExists(
        newRepoData,
        message.update.success
      );
    } else {
      const repo = getConnection().getRepository(SocialNetwork);
      const newRepoData = repo.create(data as {});
      await repo.save(newRepoData);
      dataResponse = validate.checksIfSocialNetworkExists(
        newRepoData,
        message.create.success
      );
    }

    return response.status(dataResponse.code).send(dataResponse);
  },
};
