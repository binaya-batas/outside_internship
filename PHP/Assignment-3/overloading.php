<?php
    namespace IntDecrementer;

    class IntDecrementer {
        private $int = 10;
        
        public void decrementor() {
            echo $this->int = $this->int - 1;
        }

        public void decrementor($decrementValue) {
            return $this->int = $this->int - $decrementValue;
        }
    }
?>