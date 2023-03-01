<?php
    namespace Book;

    class Book {
        private $book_id;
        private $book_name;
        private $book_price;

        // construct -> magic function
        function __construct($id, $name, $price)
        {
            $this->book_id = $id;
            $this->book_name = $name;
            $this->book_price = $price;
        }

        // destruct -> magic function
        function __destruct()
        {
            echo("Book class.");
        }

        function print_bookgenre($genre) {
            echo $genre;
        }

        function increase_book_lending_day(&$value) {
            $value += 1;
        }

        // getter methods
        function get_bookname() {
            return $this->book_name;
        }

        function get_bookprice() {
            return $this->book_price;
        }
    }

    $book1 = new Book('1', 'Physics', '2000');
    echo $book1->get_bookname();
    echo("<br/>");
    echo $book1->get_bookprice();
    echo("<br/>");

    // argument by value
    echo $book1->print_bookgenre("study");
    echo("<br/>");

    //argument by reference
    $book_lending_day = 1;
    $book1->increase_book_lending_day($book_lending_day);

    echo $book_lending_day;
    echo("<br/>");

?>