# WarmPaws

## About
WarmPaws is a web application designed to provide winter care tips, services, and expert guidance for pets. Users can browse available pet care services, view detailed service information, and manage their profiles. The platform ensures secure authentication and a smooth user experience with modern web technologies.  

Features include:  
- User authentication (Login, Signup, Forgot Password)  
- Browse services and detailed service pages  
- User profile management  
- Winter care tips and expert vet information  
- Responsive design with beautiful UI components  
- Animated hero sections for better visual appeal  

---

## Technologies Used
This project is built with a modern tech stack including:  

- **React 18** – Frontend library for building interactive UIs  
- **Vite** – Build tool for fast development and bundling  
- **Tailwind CSS 3** – Utility-first CSS framework for styling  
- **DaisyUI 3** – Tailwind CSS component library for ready-made components  
- **Firebase** – Backend as a Service for authentication and database  
- **React Router v6** – Client-side routing  
- **React Hot Toast** – Notifications and toast messages  
- **AOS (Animate On Scroll)** – Scroll-based animations  
- **Swiper.js** – Responsive sliders and carousels  

---

## Project Structure
warmpaws/
├─ public/
│ └─ index.html
├─ src/
│ ├─ components/
│ │ ├─ Navbar.jsx
│ │ ├─ Footer.jsx
│ │ └─ ProtectedRoute.jsx
│ ├─ hooks/
│ │ └─ useAuth.js
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Services.jsx
│ │ ├─ ServiceDetails.jsx
│ │ ├─ Login.jsx
│ │ ├─ Signup.jsx
│ │ ├─ Profile.jsx
│ │ ├─ ForgotPassword.jsx
│ │ └─ ErrorPage.jsx
│ ├─ data/
│ │ └─ services.json
│ ├─ firebase.js
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ .env
├─ package.json
└─ README.md