<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('TodoTableSeeder');
	}

}

class TodoTableSeeder extends Seeder {

    public function run()
    {
        DB::table('todos')->delete();

        Todo::create(array(
	        'title' => 'Learn backbone.js',
	        'done' => '0'
        ));
        Todo::create(array(
	        'title' => 'Walk dog',
	        'done' => '0'
        ));
        Todo::create(array(
	        'title' => 'Pick up milk',
	        'done' => '0'
        ));
    }

}
