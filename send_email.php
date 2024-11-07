error_reporting(E_ALL);
ini_set('display_errors', 1);

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form inputs
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email details
    $to = "fadiwade0@gmail.com"; // Your email address
    $subject = "New Contact Form Message from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Email body
    $body = "<h2>Contact Form Message</h2>";
    $body .= "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Message:</strong><br>$message</p>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again later.'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('Invalid request.'); window.location.href = 'index.html';</script>";
}
?>
