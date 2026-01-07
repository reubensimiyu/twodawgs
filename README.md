# Two Dawgs DJ 🎧

**Two Dawgs DJ** is a full-stack web application for my personal professional DJ service. It is built to accept booking inquiries, store them securely, and provide a fast, modern user experience.

The site is deployed on **AWS** using a serverless architecture and includes a custom domain, HTTPS, and scalable backend services.

---

## 🚀 Live Site
[👉 Visit Two Dawgs DJ](https://www.twodawgsdj.com/)  
*(Hosted with AWS Amplify)*

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **Bootstrap**
- Hosted on **AWS Amplify**
- **Custom domain + HTTPS (TLS 1.3)**

### Backend
- **AWS API Gateway** (REST API)
- **AWS Lambda** (Node.js)
- **Amazon DynamoDB** (Inquiry storage)

### Media Hosting
- **Amazon S3** (hero video and assets)
- Public read access via bucket policy

### Planned / Optional
- **Amazon SES** – automatic inquiry confirmation emails
- Admin dashboard for managing inquiries

---

## 📋 Features
- 🎶 Responsive marketing site
- 📩 “Book Us” contact form
- 🗃️ Inquiry data stored in **DynamoDB**
- 🔒 Secure REST API
- 🌐 Custom domain with SSL
- 🎥 Video content served from S3

---

## 🧩 Architecture Overview

React (Amplify)  
↓  
POST /inquiries → API Gateway (REST)  
↓  
AWS Lambda (Node.js)  
↓  
DynamoDB (Inquiry Storage)


