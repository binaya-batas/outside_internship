<?php
    namespace Enapsulation;
    
    echo ("Encapsulation can be defined as a way of hiding the process and just giving accessing to final product. For example, While using a calculator, we just press the desired numbers to add, subtract, multiply and divide. We don't know what is going on inside but we will get the result.");

    class Encapsulation {
        private $first_number;
        private $second_number;

        public function __construct($a, $b)
        {
            $this->first_number = $a;
            $this->second_number = $b;
        }

        public function add() {
            return $this->first_number + $this->second_number;
        }

        public function subtract() {
            return $this->first_number - $this->second_number;
        }

        public function divide() {
            return $this->first_number / $this->second_number;
        }

        public function multiply() {
            return $this->first_number * $this->second_number;
        }

    }

    echo("<br/>");

    $obj1 = new Encapsulation(5, 2);
    echo $obj1->add();
    echo("<br/>");
    echo $obj1->divide();
    echo("<br/>");
    echo $obj1->subtract();
    echo("<br/>");
    echo $obj1->multiply();
?>