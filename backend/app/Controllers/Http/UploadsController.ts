import { extname } from 'path'
import Drive from '@ioc:Adonis/Core/Drive'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Drive from '@ioc:Adonis/Core/Drive'
import UpdateFoodImageValidator from 'App/Validators/UpdateFoodImageValidator'

export default class UploadsController {
  public async updateFoodImage({ request, auth }: HttpContextContract) {
    const { id, image } = await request.validate(UpdateFoodImageValidator)

    console.log(id, image)
    await image.moveToDisk('./menu', {
      name: `${id}.${image.extname}`,
      visibility: 'public',
    })
  }

  public async getFile({ request, response }: HttpContextContract) {
    const location = request.param('*').join('/') as string

    try {
      const { size } = await Drive.getStats(location)
      response.type(extname(location))
      response.header('content-length', size)

      return response.stream(await Drive.getStream(location))
    } catch (error) {
      return response.status(404).send('File not found')
    }
  }
}
