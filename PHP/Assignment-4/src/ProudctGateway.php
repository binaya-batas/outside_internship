<?php

class ProductGateway
{
    private PDO $conn;

    public function __construct(private Database $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array 
    {
        $sql = "SELECT * FROM `Student`;";
        $stmt = $this->conn->query($sql);
        $data = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            array_push($data, $row);
        }

        return $data;
    }

    public function create(array $data)
    {
        $sql = "INSERT INTO Student(name, age, password) 
                VALUES(:name, :age, :password)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":name", $data["name"]);
        $stmt->bindValue(":age", $data["age"]);
        $stmt->bindValue(":password", $data["password"]);

        $stmt->execute();

        return $this->conn->lastInsertId();

    }

    public function get(string $id): array | false
    {
        $sql = "SELECT *
                FROM `Student`
                WHERE id = :id";
                
        $stmt = $this->conn->prepare($sql);
        
        $stmt->bindValue(":id", $id);
        
        $stmt->execute();
        
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $data;
    }

    public function update()
    {
        $sql = "UPDATE Student SET name=:name, age=:age, password=:password WHERE id=:id";

    }

    public function delete(string $id): int
    {
        $sql = "DELETE FROM `Student`
                WHERE id ='$id'";
                
        $stmt = $this->conn->prepare($sql);
        
        // $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        
        $stmt->execute();
        
        return $stmt->rowCount();
    }
}