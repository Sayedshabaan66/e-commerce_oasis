E-Commerce Oasis

Overview

E-Commerce Oasis is an advanced, feature-rich e-commerce web application developed as a collaborative college project. Designed with a focus on scalability, performance, and user experience, the platform simulates a real-world online shopping environment, enabling users to browse products, add them to their cart, and make purchases. The system also includes admin functionalities for managing products, users, and orders.

Features

User Authentication: Secure login and registration system.

Product Catalog: Dynamic listing of products with filtering and search capabilities.

Shopping Cart: Add, update, or remove items in the cart.

Checkout System: Order placement with confirmation.

Admin Dashboard: Manage products, users, and orders.

Responsive UI: Mobile-friendly interface with modern design.

Role-Based Access Control: Separate interfaces for users and admins.

Order History: View past orders and details.


Tech Stack

Frontend: HTML, CSS, JavaScript, Bootstrap

Backend: PHP

Database: MySQL

Server: XAMPP


Installation

Prerequisites

PHP 7.x or above

MySQL or XAMPP/WAMP/LAMP stack

Web browser


Setup Steps

1. Clone the Repository:

git clone https://github.com/Sayedshabaan66/e-commerce_oasis.git


2. Database Setup:

Open phpMyAdmin.

Create a new database (e.g., ecommerce_oasis).

Import the SQL file located in the project (e.g., db/ecommerce_oasis.sql).



3. Configure the Project:

Update database credentials in config.php or the relevant configuration file.



4. Run the Project:

Place the project folder in your htdocs (XAMPP) or www (WAMP) directory.

Start Apache and MySQL from the XAMPP/WAMP control panel.

Navigate to http://localhost/e-commerce_oasis in your browser.




Folder Structure

e-commerce_oasis/
│── admin/                 # Admin panel files
│── includes/              # Common includes like header, footer, DB config
│── assets/                # CSS, JS, images
│── db/                    # Database scripts
│── user/                  # User interface and features
│── index.php              # Landing page
│── login.php              # Login page
│── register.php           # Registration page
│── cart.php               # Shopping cart
│── checkout.php           # Checkout process

Future Enhancements

Integration with payment gateways like Stripe or Razorpay.

Add product reviews and ratings.

Email notifications for order confirmations.

Real-time inventory management.

AI-based product recommendations.


Contributors

Mohammed Ishaque Inamdar (GitHub)

Sayed Shabaan (GitHub)

Ansari Suzanne (GitHub)

License

This project is open-source and available under the MIT License.
