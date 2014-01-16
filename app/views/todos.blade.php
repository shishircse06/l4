@extends('layout')

@section('content')
    @foreach($todos as $todo)
        <p>{{ $todo->title }}</p>
    @endforeach
@stop

