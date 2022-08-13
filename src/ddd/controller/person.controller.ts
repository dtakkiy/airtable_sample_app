import express from 'express';
import { CreatePersonUseCase } from '../app/create-person-usecase';
import { GetPersonsUseCase } from '../app/get-persons-usecase';
import { PersonQueryService } from '../infra/db/air-table/query-service/person-query-service';
import { PersonRepository } from '../infra/db/air-table/repository/person-repository';
const table = require('../utils/airtable');
const router = require('express').Router();

router.get('/', (request: express.Request, response: express.Response) => {
  const qs = new PersonQueryService(table);
  const getPersonUseCase = new GetPersonsUseCase(qs);
  const persons = getPersonUseCase.execute();
  response.status(200).send(persons);
});

router.post(
  '/',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { name, age } = req.body;

    const repository = new PersonRepository(table);
    const createPersonUseCase = new CreatePersonUseCase(repository);
    createPersonUseCase.execute({ name, age });
    res.send('success create record.');
  }
);
