?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $fullName = test_input($_POST["fullName"]);
    $email = test_input($_POST["email"]);
    $course = test_input($_POST["course"]);
    $experience = test_input($_POST["experience"]);
    $comments = test_input($_POST["comments"]);

    // Format data for storage
    $formData = "Full Name: $fullName\nEmail: $email\nCourse: $course\nExperience: $experience\nComments: $comments\n\n";

    // Define the path to the text file
    $filePath = "form_submissions.txt";

    // Append form data to the text file
    file_put_contents($filePath, $formData, FILE_APPEND | LOCK_EX);

    // Send a success response
    echo json_encode(array("status" => "success", "message" => "Form submitted successfully."));
} else {
    // Send a failure response for non-POST requests
    echo json_encode(array("status" => "error", "message" => "Invalid request method."));
}

// Function to sanitize form data
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>