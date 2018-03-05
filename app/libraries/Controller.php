<?php

	/**
	* Base Controller
	* Loads Models & Views
	*/
	class Controller
	{
		
		public function model($model)
		{
			require_once '../app/models/'.$model.'.php';
			return new $model();
		}

		public function view($view,$data = [])
		{
			if(file_exists('../app/views/'.$view.'.php')) require_once '../app/views/'.$view.'.php';
			else die("404 Page Not Found");
		}

		function __construct()
		{
			# code...
		}
	}