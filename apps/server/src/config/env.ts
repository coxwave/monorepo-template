import { config } from 'dotenv';
import Joi from 'joi';

config();

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(8080),
  })
  .unknown();

const { value, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env) as {
  value: {
    NODE_ENV: 'production' | 'development' | 'test';
    PORT: number;
  };
  error: any;
};

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const ENV = value;
