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
Route.put('/food/image', 'UploadsController.updateFoodImage')

Route.get('/merchant/histories', 'HistoriesController.merchantGetHistories')
Route.get('/customer/histories', 'HistoriesController.customerGetHistories')

Route.post('/merchant/orders', 'QueuesController.merchantGetQueue')
Route.post('/customer/orders', 'QueuesController.customerCreateQueue')
Route.get('/customer/orders', 'QueuesController.customerGetQueue')
Route.post('/confirmQueue', 'QueuesController.merchantConfirmQueue')

Route.get('/food', 'FoodSController.getFood')
Route.post('/food', 'FoodSController.createFood')
Route.put('/food', 'FoodSController.updateFood')
Route.delete('/food', 'FoodSController.deleteFood')

Route.post('/auth/customer/login', 'AuthController.getCustomer')
Route.post('/auth/customer/register', 'AuthController.createCustomer')
Route.post('/auth/merchant/login', 'AuthController.getMerchant')

Route.get('/customer/shop', 'ShopsController.getShop')

// .middleware('checkMerchant')
// .middleware('checkCustomer')
