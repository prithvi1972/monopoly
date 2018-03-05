<?php

	/**
	* Happenings Controller
	*/
	class Happenings extends Controller
	{
		
		public function __construct()
		{
			// Happenings Controller Instantiated
		}

		public function index()
		{
			$this->view('happenings/index');
		}

		public function browseAll()
		{
			echo "  [ Happenings History ]  ";
		}

		public function browse($id)
		{
			echo "  [ Happening-".$id." History ]  ";
		}

		public function new()
		{
			echo "  [ New Happening ]  ";
		}
	}