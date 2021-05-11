<?php

Class Routes
{

    private $uri;

    public function __construct($uri)
    {
        $this->uri = $uri;
    }

    public function loadPage()
    {
        if($this->uri === "/")
        {
            return include 'view/main.php';
        }elseif ($this->uri === "/about")
        {
            return include 'view/about.php';
        }
        else
            {
                return include 'view/error_page.php';
            }
    }
}
