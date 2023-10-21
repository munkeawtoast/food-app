import { EventsList } from '@ioc:Adonis/Core/Event'
import FCM from '@ioc:Adonis/Addons/FCM'

export default class NotificationListener {
  public async created(notification: EventsList['notification::created']) {
    const { title, text } = notification.toJSON()

    const recipients = { condition: "'notifications' in topics" } // or { registrationTokens: [...] }
    const response = await FCM.send({ notification: { title, body: text } }, recipients)
  }
}
