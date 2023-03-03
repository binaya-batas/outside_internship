<?php

class ProductController
{
    public function __construct(private ProductGateway $gateway)
    {
        
    }

    public function processRequest(string $method, ?string $id): void
    {
        if ($id) {
            $this->processResourceRequest($method, $id);
        } else {
            $this->processCollectionRequest($method);
        }
    }

    private function processResourceRequest(string $method, string $id): void
    {
        $student = $this->gateway->get($id);

        switch ($method) {
            case 'GET':
                echo json_encode($student);
                break;

            case 'PATCH':
                $data = (array) json_decode(file_get_contents("php://input"), true);

                $rows = $this->gateway->update($student, $data);

                echo json_encode([
                    "message" => "Product $id updated",
                    "rows" => $rows
                ]);
                break;
            
            case 'DELETE':
                $rows = $this->gateway->delete($id);
                
                echo json_encode([
                    "message" => "Product $id deleted",
                    "rows" => $rows
                ]);
                break;

            default:
                # code...
                break;
        }
        
    }

    private function processCollectionRequest($method): void
    {
        switch ($method) {
            case 'GET':
                echo json_encode($this->gateway->getAll());
                break;

            case 'POST':
                $data = (array) json_decode(file_get_contents("php://input"), true);

                var_dump($data);

                // $id = $this->gateway->create($data);

                // echo json_encode([
                //     "message" => "Student added.",
                //     "id" => $id
                // ]); 
                break;

            default:
                http_response_code(405);
                header("Allow: GET, POST");
        }
    }
}
