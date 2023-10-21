import Event from '@ioc:Adonis/Core/Event'
Event.on('notification::created', 'Notification.created')
