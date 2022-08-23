import express from 'express';
import { CreatePersonUseCase } from '../app/create-person-usecase';
import { GetPersonsUseCase } from '../app/get-persons-usecase';
import { PersonQueryService } from '../infra/db/air-table/query-service/person-query-service';
import { PersonRepository } from '../infra/db/air-table/repository/person-repository';

const table = require('../utils/airtable');
const router = require('express').Router();

router.get(
  '/',
  async (request: express.Request, response: express.Response) => {
    const qs = new PersonQueryService(table);
    const getPersonUseCase = new GetPersonsUseCase(qs);
    const result = await getPersonUseCase.execute();
    if (result.isFailure) {
      response.status(200).send([]);
    }
    response.status(200).send(result);
  }
);

router.post(
  '/',
  async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const { name, age } = request.body;

    const repository = new PersonRepository(table);
    const createPersonUseCase = new CreatePersonUseCase(repository);
    const result = await createPersonUseCase.execute({ name, age });
    if (result.isFailure) {
      response.send('failed create record');
    }
    response.send('success create record.');
  }
);
