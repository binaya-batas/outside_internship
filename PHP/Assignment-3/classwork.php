<?php

    abstract class Book {
        public $name;

        public function __construct($name)
        {
            $this->name = $name;
        }

        abstract public function description() : string;
    }

    class HarryPotter extends Book {
        public function description() : string {
            return "I have sold the most number of copies $this->name.";
        }
    }

    class GOT extends Book {
        public function description(): string
        {
            return "I have a series based on my story $this->name.";
        }
    }

    $book1 = new HarryPotter("Harry potter.");
    echo $book1->description();

    echo("<br/>");

    $book2 = new GOT("Games of thrones.");
    echo $book2->description();
    echo("<br/>");

    interface Car {
        public function carName();
    }

    class Audi implements Car {
        public function carName() {
            return "My name is Audi.";
        }
    }

    class Koenigsegg implements Car {
        public function carName() {
            return "My name is Koenigsegg.";
        }
    }

    $car1 = new Audi();
    echo $car1->carName();

    echo("<br/>");

    $car2 = new Koenigsegg();
    echo $car2->carName();

?>