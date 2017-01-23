<?php 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "sentinel";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$value = $_POST['emailIn'];

$sql = "INSERT INTO form (email)
VALUES ('$value')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>