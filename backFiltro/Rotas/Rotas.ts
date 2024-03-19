// Rotas/Rotas.ts
import Route from '@ioc:Adonis/Core/Route'

Route.get('/psicologos', 'PsicologoController.index')
Route.get('/psicologos/:specialization', 'PsicologoController.filterBySpecialization')
