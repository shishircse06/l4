<?php namespace acme\Twitter;

use Guzzle\Service\Client;
use Guzzle\Plugin\Oauth\OauthPlugin;
use Illuminate\Support\ServiceProvider;
use Config;

class TwitterServiceProvider extends ServiceProvider {


	public function register()
	{

		$this->app->bind('Twitter',function()
		{

			$client = new Client('https://api.twitter.com/{version}',['version'=>'1.1']);
			
			$auth= new OauthPlugin([
				'consumer_key'=>Config::get('twitter.consumer_key'),
				'consumer_secret'=>Config::get('twitter.consumer_secret'),
				'token'=>Config::get('twitter.token'),
				'token_secret'=>Config::get('twitter.token_secret')

			]);

			$client->addSubscriber($auth);
			return new TwitterAPI($client);

		});

}

}

