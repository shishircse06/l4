<?php namespace acme\Twitter;
 
use Illuminate\Support\Facades\Facade;
 
class Twitter extends Facade {
 
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor() 
    { 
    	return 'Twitter' ; 
    }
 
}