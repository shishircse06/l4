<?php

use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
	  Schema::create('todos', function($table)
	  {
      $table->increments('id');
      $table->string('title')->unique();
      $table->boolean('done');
      $table->timestamps();
	  });
	}
	public function down()
	{
	  Schema::drop('users');
	}
}
