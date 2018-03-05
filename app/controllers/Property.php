<?php

	/**
	* Property Controller
	*/
	class Property extends Controller
	{
		
		public function __construct()
		{
			// Property Controller Instantiated
		}

		public function index()
		{
			$this->view('property/index');
		}

	}