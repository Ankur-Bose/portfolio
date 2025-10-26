# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a sleek dark theme with glass morphism design and smooth animations.

## 🌟 Features

- **Modern Design**: Glass morphism UI with gradient text effects
- **Responsive Layout**: Optimized for all device sizes
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Contact Form**: Integrated EmailJS for direct messaging
- **Loading Screen**: Custom loading animation
- **Mobile Menu**: Responsive navigation for mobile devices
- **Project Showcase**: Dynamic project cards with technology tags

## 🚀 Live Demo
[https://Ankur-Bose.github.io/Portfolio](https://Ankur-Bose.github.io/Portfolio)

## 🛠️ Built With

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Email Service**: EmailJS
- **Animations**: React Parallax Tilt
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ankur-Bose/Portfolio.git
   cd Portfolio/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SERVICE_ID=your_emailjs_service_id
   VITE_TEMPLATE_ID=your_emailjs_template_id
   VITE_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add these credentials to your `.env` file

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.jsx      # About section with skills & experience
│   │   │   ├── Contact.jsx    # Contact form with EmailJS
│   │   │   ├── Home.jsx       # Hero section
│   │   │   └── Projects.jsx   # Project showcase
│   │   ├── LoadingScreen.jsx  # Loading animation
│   │   ├── MobileMenu.jsx     # Mobile navigation
│   │   ├── Navbar.jsx         # Desktop navigation
│   │   └── ReviewOnScroll.jsx # Scroll animations
│   ├── data/
│   │   └── project.js         # Project data
│   ├── App.jsx               # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── .env                     # Environment variables
├── package.json            # Dependencies & scripts
└── vite.config.js         # Vite configuration
```

## 🎨 Customization

### Adding New Projects

Edit `src/data/project.js`:

```javascript
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description here",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completed",
  },
  // Add more projects...
];
```

### Updating Personal Information

- **Home Section**: Edit `src/components/sections/Home.jsx`
- **About Section**: Edit `src/components/sections/About.jsx`
- **Skills**: Update the `skillsData` object in `About.jsx`

### Styling

Key design elements:
- **Colors**: Blue to cyan gradients (`from-blue-500 to-cyan-400`)
- **Glass Effect**: `bg-white/5` with `backdrop-blur-sm`
- **Borders**: `border-white/10` for subtle borders
- **Hover Effects**: Scale transforms and shadow effects

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ankur Bose**
- GitHub: [@Ankur-Bose](https://github.com/Ankur-Bose)
- Portfolio: [https://Ankur-Bose.github.io/Portfolio](https://Ankur-Bose.github.io/Portfolio)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- EmailJS for the email service integration
- Vite for the fast build tool

---

⭐ Star this repository if you found it helpful!
