# TalkTutor

## 🌐 Live URL

[Visit the Live Website](https://talk-tutor-auth.web.app/)

## 🎯 Project Purpose

This web application is a seamless online tutor booking platform that allows users to browse, find, and book tutors based on languages. It provides a personalized learning experience through detailed tutor profiles, reviews, and user-specific dashboards.

## 🧩 Key Features

### 🏠 Home Page

- **Navigation Bar**: Quick links to key sections.
- **Hero Section**: Eye-catching introduction to the platform.
- **Stats Section**: Displays total tutors, reviews, languages, and users.
- **Language Grid**: Showcases 9 different languages; clicking a language filters tutors accordingly.
- **Tutor Cards**: Each tutor has a "Details" button; only logged-in users can view and book.
- **Promotional Sections**: Highlight the platform’s benefits.
- **Customer Testimonials**: Builds trust.
- **Newsletter Subscription**: Keeps users updated.

### 🔍 Find Tutor Page

- Displays all tutors.
- Each tutor has a details button for further info.

### ➕ Add Tutor Page (Private Route)

- Allows users to add new tutors.

### 📋 My Tutors Page (Private Route)

- Shows tutors added by the user.
- Allows editing or deleting of tutor listings.

### 📅 Booked Tutors Page (Private Route)

- Lists all tutors booked by the user.
- Allows the user to leave reviews.

## 🧱 Tech Stack

- **React** for frontend UI
- **Firebase** for auth and backend integrations
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Router** for navigation

## 📦 Dependencies

### Core Libraries

- `react`
- `react-dom`
- `react-router`
- `axios`

### Firebase & Auth

- `firebase`

### Styling

- `tailwindcss`
- `@tailwindcss/vite`

### UI & Icons

- `react-icons`
- `lucide`
- `lucide-react`
- `react-awesome-reveal`

### Notifications & Alerts

- `react-toastify`
- `sweetalert2`

## 🔐 Private Routes

Some pages like `Add Tutor`, `My Tutors`, and `Booked Tutors` are protected and require the user to be logged in.
