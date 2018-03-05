<?php

	/**
	* Users Controller
	*/
	class Users extends Controller
	{
		
		public function __construct()
		{
			// Users Controller Instantiated
		}

		public function index()
		{
			$this->view('users/index');
		}

		public function browseUser($id)
		{
			echo "  [ User-".$id." Details ]  ";
		}

		public function browseAllUsers()
		{
			echo "  [ All User Details ]  ";
		}

		public function browse($id)
		{
			if($id==='all')	$this->browseAllUsers();
			else			$this->browseUser($id);
		}

		public function new()
		{
			echo "  [ New User ]  ";
		}
	}