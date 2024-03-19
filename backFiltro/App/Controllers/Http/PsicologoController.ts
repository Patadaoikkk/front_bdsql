// app/Controllers/Http/ProfessionalController.ts
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Psicologo from '../Models/Psicologo'
import PsicologoValidator from '../Validators/PsicologoValidator'

export default class PsicologoController {
  public async filterBySpecialization({ params, response }: HttpContextContract) {
    try {
      await request.validate(PsicologoValidator.filterBySpecialization)
      const { specialization } = params
      const filteredPsicologos = await Psicologo.query()
        .where('specialization', 'LIKE', `%${specialization}%`)
        .fetch()

      return response.ok(filteredPsicologos)
    } catch (error) {
      return response.badRequest(error.messages)
    }
  }
}
