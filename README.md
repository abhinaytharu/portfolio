# Animated Resume Portfolio

A modern, responsive portfolio website built with React, featuring smooth animations, interactive components, and a beautiful gradient design.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Anime.js for engaging user interactions
- **Modern UI**: Glassmorphism design with gradient backgrounds
- **Interactive Components**: 
  - Animated skill bars
  - Project filtering
  - Contact form with validation
  - Smooth scrolling navigation
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: Proper focus states and keyboard navigation

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Styled Components** - CSS-in-JS styling
- **Anime.js** - Lightweight animation library
- **Font Awesome** - Icon library
- **React Scripts** - Build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd animated-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Hero section with animations
│   ├── Navigation.js      # Navigation bar with mobile menu
│   ├── About.js           # About section with skills
│   ├── Experience.js      # Work experience timeline
│   ├── Skills.js          # Skills and technologies
│   ├── Projects.js        # Portfolio projects with filtering
│   └── Contact.js         # Contact form and information
├── App.js                 # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Header.js**: Name, title, description, and social links
- **About.js**: Personal information and skills
- **Experience.js**: Work experience and timeline
- **Projects.js**: Portfolio projects and links
- **Contact.js**: Contact information and form

### Styling
- Colors are defined using CSS custom properties in styled-components
- Main gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Accent color: `#ffd700` (gold)

### Animations
- Animations are powered by Anime.js
- Scroll-triggered animations use Intersection Observer API
- Custom animation classes: `fadeIn`, `slideInLeft`, `slideInRight`, `scaleIn`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Performance Optimizations

- Lazy loading of components
- Optimized animations with CSS transforms
- Efficient re-renders with React hooks
- Compressed images and assets

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Coding! 🚀**
