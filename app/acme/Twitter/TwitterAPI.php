<?php namespace Acme\Twitter;
use Guzzle\Service\Client;

class TwitterAPI{
	protected $client;

	public function __construct(Client $client){
		$this->client=$client;
	}

	public function search($query){
		$response=$this->client->get("search/tweets.json?q=".urldecode($query))->send();
		return $response->json();

	}

}