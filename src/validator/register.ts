import Joi from "joi";

export const register_validator = Joi.object().keys({

  query: {
    id: Joi.string().required(),

  },
  params: null,
  body: {
    name: Joi.string().required()
  }
}); 