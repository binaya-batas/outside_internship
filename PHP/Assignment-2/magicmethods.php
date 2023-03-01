<?php
    namespace MagicMethods;

    class MagicMethods {
        private $name;

        function __construct($name)
        {
            $this->name = $name;
            echo "This is construct method. It gets called automatically every time the object of a particular class is created. It is mostly used to initialize values of the class.";
            echo("<br/>");
        }

        function __destruct()
        {
            echo "This is destruct method. This method is called when the object is destroyed and no longer in use.";
            echo("<br/>");
        }

        function __call($name, $arguments)
        {
            print_r($arguments);
            echo("<br/>");
        }

        function __set($name, $value)
        {
            if ($name = 'Binaya') {
                $this->name = $value;
            }
        }

        public function sayHello() {
            echo "Hello, my name is " . $this->name;
            echo("<br/>");
        }

        function __get($name)
        {
            echo "__get() is called automatically when an undefined or inaccessible property is accessed.";
            if ($name == "binaya") {
                return $this->name;
            }
        }
    }

    $object1 = new MagicMethods("Binaya");
    $object1->name = 'Binaya';
    $object1->nofunction("function", "Method");
    $object1->sayHello();

?>