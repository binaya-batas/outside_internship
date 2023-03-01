<?php
    namespace Student;

    class Student {
        private $name;
        private $age;
        private $section;

        function __construct($name, $age, $section)
        {
            $this->name = $name;
            $this->age = $age;
            $this->section = $section;
        }

        function print_student_info() {
            echo "$this->name from section $this->section is $this->age years old";
        }

        function print_average(...$marks) {
            $sum = 0;
            foreach ($marks as $m) {  
                $sum += $m;  
            }
            return $sum/3;
        }

        // getter methods
        function get_name() {
            return $this->name;
        }

        function get_age() {
            return $this->age;
        }

        function get_section() {
            return $this->section;
        }

    }

    class ComputerScience extends Student {
        public $math;
        public $science;
        public $computer;

        
        function __construct($name, $age, $section, $math, $science, $computer)
        {
            parent::__construct($name, $age, $section);
            $this->math = $math;
            $this->science = $science;
            $this->computer = $computer;
        }

        function average_mark() {
            return parent::print_average($this->math, $this->science, $this->computer);
        }

    }

    class Mathematics extends Student {
        public $algebra;
        public $geometrics;
        public $trigonometry;

        
        function __construct($name, $age, $section, $algebra, $geometrics, $trigonometry)
        {
            parent::__construct($name, $age, $section);
            $this->algebra = $algebra;
            $this->geometrics = $geometrics;
            $this->trigonometry = $trigonometry;
        }

        function average_mark() {
            return parent::print_average($this->algebra, $this->geometrics, $this->trigonometry);
        }
    }
    
    function main() {
        $binaya = new ComputerScience('Binaya', 21, 'D', 80, 70, 60);
        echo("<br/>");
        echo $binaya->average_mark();
        echo("<br/>");
        $binaya->print_student_info();
    
        $kenish = new Mathematics('Kenish', 21, 'C', 50, 90, 45);
        echo("<br/>");
        echo("<br/>");
        echo $kenish->average_mark();
        echo("<br/>");
        $kenish->print_student_info();
    }

    main();
?>