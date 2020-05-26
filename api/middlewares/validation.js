import Joi from '@hapi/joi';

const Schema = Joi.object({
  name: Joi.string().required(),
  doc: Joi.date().required()
});


export default Schema;
