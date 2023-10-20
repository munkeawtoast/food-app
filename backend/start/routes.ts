/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/uploads/*', 'UploadsController.getFile')
Route.put('/food/putImage', 'UploadsController.updateFoodImage')

Route.get('/queue', 'QueuesController.GetQueue')
Route.post('/confirmQueue', 'QueuesController.merchantConfirmQueue')

Route.get('/food', 'FoodSController.getFood')
Route.post('/food', 'FoodSController.createFood')
Route.put('/food', 'FoodSController.updateFood')
Route.delete('/food', 'FoodSController.deleteFood')

Route.post('/customer', 'LoginController.getCustomer')
Route.post('/merchant', 'LoginController.getMerchant')

// .middleware('checkMerchant')
// .middleware('checkCustomer')
