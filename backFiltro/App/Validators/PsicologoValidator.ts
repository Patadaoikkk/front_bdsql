// app/Validators/PsicologoValidator.ts
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PsicologoValidator {
  public static filterBySpecialization = schema.create({
    specialization: schema.string({}, [
      rules.required(),
      rules.maxLength(255), 
    ]),
  })
}
