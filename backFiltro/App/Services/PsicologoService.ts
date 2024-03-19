// app/Services/PsicologoService.ts
import Psicologo from "../Models/Psicologo"

export default class PsicologoService {
  public async findBySpecialization(specialization: string) {
    return await Psicologo.query()
      .where('specialization', 'LIKE', `%${specialization}%`)
      .fetch()
  }
}
