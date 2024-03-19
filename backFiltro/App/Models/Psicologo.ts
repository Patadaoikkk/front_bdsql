// app/Models/Psicologo.ts
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Psicologo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public specialization: string
}
