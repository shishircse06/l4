<?php

class TodoController extends BaseController {

	public $restful = true;

	// GET TODOS INDEX
  public function get_index($id = null) {
    $todos = Todo::all();
    return $todos;
  }

  // GET TODO WITH ID
  public function show($id) {
  	$todo = Todo::find($id);
  	if(is_null($todo)){
  		return "Error: Todo with id=".$id." does not exist.";
  	}
  	else {
  		return $todo;
  	}
  }

  // POST REQUESTS
  public function post_index() {
		$new_todo = Input::all();

		$todo = new Todo();
		$todo->title = $new_todo['title'];
		$todo->done = $new_todo['done'];
		$todo->save();

		return json_encode($todo);
  }

  // PUT REQUESTS
	public function put_index($id) {
		$update_todo = Input::all();

		$todo = Todo::find($id);
		if(is_null($todo)) {
	    return Response::json('To-do not found!', 404);
		}
		$todo->title = $update_todo['title'];
		$todo->done = $update_todo['done'];
		$todo->save();

		return $todo;
	}

	// DELETE REQUESTS
  public function delete_index($id) {
	  $todo = Todo::find($id);

	  if(is_null($todo)) {
	  	return Response::json('To-do not found', 404);
	  }
	  $deleted_todo = $todo;
	  $todo->delete();
	  return $todo;
  }
}
?>
