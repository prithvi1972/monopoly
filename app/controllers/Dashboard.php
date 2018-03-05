<?php

	/**
	* Dashboard Controller
	*/
	class Dashboard extends Controller
	{
		
		public function __construct()
		{
			// Dashboard Controller Instantiated
		}

		public function index()
		{
			$this->view('Dashboard/index');
		}

	}