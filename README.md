Two Dawgs DJ 🎧

A full-stack web application for my professional DJ service that accepts booking inquiries, stores them securely, and delivers a smooth, responsive user experience.

Deployed on AWS with a serverless architecture, the site features a custom domain, HTTPS, and scalable backend services.

🚀 Live Site

https://your-custom-domain.com

(Hosted with AWS Amplify)

🛠️ Tech Stack

Frontend

React + Bootstrap

Hosted on AWS Amplify

Custom domain + HTTPS (TLS 1.3)

Backend

AWS API Gateway (REST API)

AWS Lambda (Node.js)

Amazon DynamoDB (Inquiry storage)

Media Hosting

Amazon S3 (hero video & assets)

Optional / Planned

Amazon SES – automated inquiry confirmation emails

Admin dashboard for managing inquiries

📋 Key Features

Responsive marketing site optimized for desktop & mobile

Contact form for booking inquiries

Secure REST API storing data in DynamoDB

Hero video and assets served from S3

Full SSL + custom domain for professional branding

🧩 Architecture Overview
React (Amplify)
      |
      | POST /inquiries
      v
API Gateway (REST API)
      |
      v
AWS Lambda
      |
      v
DynamoDB

