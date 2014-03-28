<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get(
	'/image/{size}/{file}',
	'ImageController@getImage'
);

Route::get('twitter/search/{query}', function($query) {
	//return $query;
 //dd(Config::get('database.default'));
	//return $username;
$client = new \Guzzle\Service\Client('https://api.twitter.com/{version}',['version'=>'1.1']);
$auth= new \Guzzle\Plugin\Oauth\OauthPlugin([
	'consumer_key'=>'0MiD8yU2TcX9rYoxMMt3cg',
	'consumer_secret'=>'EPVDwcbKI5VSifxJuEFyf3bOhOMOAMv4jIGOdFecEFg',
	'token'=>'244868291-8sNTNf9HYVFmnvMknT5VMVQgGFV31aLxZPOPVDpu',
	'token_secret'=>'BM2EswCX02Sf2EWUTaWHtsMT3vHTc2Wme7yssvMRdBIPo'

	]);

$client->addSubscriber($auth);

$response=$client->get("search/tweets.json?q=".urldecode($query))->send();
$tweets=array_fetch($response->json()['statuses'],'text');
dd($tweets);


});

// Route::get('/', function() {
//   $todos = Todo::all();
//   return View::make('todos')->with('todos', $todos);
// });

Route::get('todos', array('as' => 'todos', 'uses' => 'TodoController@get_index'));
Route::get('todos/{id}', array('as' => 'todo', 'uses' => 'TodoController@show'));
Route::post('todos', 'TodoController@post_index');
Route::put('todos/{id}', 'TodoController@put_index');
Route::delete('todos/{id}', 'TodoController@delete_index');

// Route::get('todos', function()
// {
//   $todos = Todo::all();
//   return View::make('todos')->with('todos', $todos);
// });

?>
