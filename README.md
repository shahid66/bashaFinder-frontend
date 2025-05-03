# 🏠 BasaFinder - Rental Housing Platform

**BasaFinder** is a full-featured rental housing web application built with a user-centric focus to simplify the rental process for tenants, landlords, and administrators. It allows users to find, list, and manage rental properties efficiently with role-based access control and a smooth UI/UX experience.

---

## 🌐 Live Demo

https://basfinder-frontend.vercel.app

---

## 🚀 Features

### ✅ Public Pages

- **Home / Landing Page**
  - Logo and Navigation Bar
  - Hero Section with catchy headline and CTA button
  - Rental house search (location, price, bedrooms)
  - Rental house cards with view details
  - Testimonials and Rental Tips section
  - Footer with contact and legal links

- **About Us**
  - Mission Statement
  - Team Info
  - Contact Information

- **Other Public Pages**
  - FAQ
  - Terms of Use
  - Privacy Policy
  - News

---

## 🔒 Authentication & Authorization

- JWT-based secure login & registration
- Role-based Access Control:
  - **Admin**
  - **Landlord**
  - **Tenant**

---



### 🛠️ Admin

- View, edit, delete any user or rental listing
- Activate/deactivate users
- Full dashboard access for user and listing management

### 🏘️ Landlord

- Add/Edit/Delete rental listings
- View and respond to rental requests
- Approve/reject rental requests
- Provide contact info after approval
- Initiate payment request
##### Creadiential 
  - email: landlord@gmail.com
  - password: 1111

### 👨‍💼 Tenant

- Search rental houses
- Submit rental requests with custom message
- Track request status (Pending/Approved/Rejected)
- Make payments upon approval
- View landlord contact upon approval

---

## 📋 Core Pages & Components

### 🔹 Home Page

- Navigation: Home, About, Listings, Dashboard, Login/Register, My Profile
- Hero section with CTA: "Post Rental House Info"
- Search bar (Location, Price, Bedrooms)
- Cards with property preview
- Testimonials and Tips
- Footer with contact and legal info

### 🔹 Login & Register

- Login: Email/Username, Password
- Register: Username, Email, Password, Confirm Password, Role (Landlord/Tenant)

### 🔹 Dashboard (Private Routes)

- Admin: User & listing management
- Landlord: Manage listings and rental requests
- Tenant: Track rental requests and payment status

### 🔹 Post Rental House (Landlord Only)

- Fields: Location, Description, Rent, Bedrooms, Images, Amenities

### 🔹 Rental House Details

- Show all property info
- Request Rental button (opens modal for tenant to input details)

### 🔹 Rental House Request (Tenant Only)

- Auto-filled contact info
- Custom message field
- Terms & Conditions checkbox
- Submit to notify landlord

### 🔹 Owner Response Workflow

- Landlord approves/rejects requests
- Approved: Tenant sees payment option + contact number
- Rejected: Status updated

### 🔹 Profile Management

- Edit profile info
- Change password (Current, New, Confirm New)

---

## 🧱 Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion, ShadCN UI
- **Authentication**: Custom JWT-based
- **State Management**: Redux Toolkit (optional)
- **Routing**: Public & Protected Routes via Next.js middleware

---

## 📱 UI/UX Design

- Mobile-first, responsive design
- Clean and user-friendly layout
- Intuitive navigation and feedback

---

## 🛡️ Access Control & Route Protection

| Page                         | Access            |
|------------------------------|-------------------|
| Home / About / FAQ           | Public            |
| Login / Register             | Public            |
| Dashboard (Admin)            | Admin Only        |
| Dashboard (Landlord)         | Landlord Only     |
| Dashboard (Tenant)           | Tenant Only       |
| Add Rental House             | Landlord Only     |
| Request Rental Page          | Tenant Only       |
| Rental House Details         | Authenticated Only|

---

## 📧 Contact

For support or inquiries:

- 📧 Email: kk.shahid66@gmail.com
- 📞 Phone: +8801736631284


---

## 📄 License

© 2025 BasaFinder. All rights reserved.



---

