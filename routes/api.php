<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('get-user-names','backend@getUserNames');

Route::post('delete-user','backend@deleteUser');

Route::get('add-user','backend@addUser');

Route::get('/','backend@index');

Route::get('login','backend@login');

Route::get('logout','backend@logout');

Route::get('change-password','backend@changePassword');

Route::get('load-user','backend@loadUser');