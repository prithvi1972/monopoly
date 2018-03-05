<?php

	/**
	* App Core Class
	* Creates URL & loads core controller
	* URL Format - /controller/method/params
	*/
	class Core
	{
		protected $controller = 'Dashboard';
		protected $method = 'index';
		protected $params = [];

		public function __construct()
		{
			$url = $this->getURL();

			// Decode URL to get get controller
			if(file_exists('../app/controllers/'.ucwords($url[0]).'.php'))
			{
				$this->controller = ucwords($url[0]);
				unset($url[0]);
			}

			// Require and instantiate controller
			require_once '../app/controllers/'.$this->controller.'.php';
			$this->controller = new $this->controller;

			// Decode URL to get get method
			if(isset($url[1]))
			{
				if(method_exists($this->controller, $url[1]))
				{
					$this->method = $url[1];
					unset($url[1]);
				}
			}

			// Decode URL to get params
			$this->params = $url ? array_values($url) : [];

			// Call Method for the Controller
			call_user_func_array([$this->controller,$this->method], $this->params);
		}

		public function getURL()
		{
			if(isset($_GET['url'])) 
			{
				$url = rtrim($_GET['url'],'/');
				$url = filter_var($url, FILTER_SANITIZE_URL);
				$url = explode('/', $url);
				return $url;
			}
		}
	}