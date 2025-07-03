# 🚀 Awwwards Portfolio

A modern, interactive portfolio website inspired by Awwwards design standards, built with React and featuring smooth animations, 3D elements, and responsive design.

![Portfolio Preview](public/images/man.jpg)

## ✨ Features

- **Smooth Animations**: GSAP-powered animations with ScrollTrigger for engaging user interactions
- **3D Elements**: Interactive 3D planet model using Three.js and React Three Fiber
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Modern UI/UX**: Clean, minimalist design with sophisticated typography
- **Smooth Scrolling**: Enhanced scrolling experience with Lenis
- **Interactive Navigation**: Smooth scroll navigation between sections
- **Custom Fonts**: Beautiful Amiamie font family integration
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3 with ScrollTrigger
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Smooth Scrolling**: Lenis
- **Navigation**: React Scroll
- **Responsive Design**: React Responsive
- **Icons**: Iconify
- **Development**: ESLint for code quality

## 📁 Project Structure

```
awwwards-portfolio/
├── public/
│   ├── assets/
│   │   ├── backgrounds/     # Background images
│   │   └── projects/        # Project showcase images
│   ├── fonts/
│   │   └── amiamie/        # Custom font files
│   ├── images/             # General images
│   └── models/             # 3D models (.glb files)
├── src/
│   ├── components/         # Reusable components
│   │   ├── AnimatedHeaderSection.jsx
│   │   ├── AnimatedTextLines.jsx
│   │   ├── Marquee.jsx
│   │   └── Planet.jsx
│   ├── constants/          # Data and configuration
│   ├── sections/           # Main page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactSummary.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceSummary.jsx
│   │   └── Works.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── Configuration files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/awwwards-portfolio.git
   cd awwwards-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding Your Content

1. **Personal Information**: Update the constants in `src/constants/index.js`
2. **Projects**: Replace images in `public/assets/projects/` and update project data
3. **About Section**: Modify the content in `src/sections/About.jsx`
4. **Services**: Update service offerings in `src/sections/Services.jsx`
5. **Contact**: Update contact information in `src/sections/Contact.jsx`

### Styling

- **Colors**: Modify Tailwind CSS configuration for custom color schemes
- **Typography**: Update font preferences in the CSS files
- **Animations**: Adjust GSAP animation parameters in component files

### 3D Models

Replace the Planet.glb file in `public/models/` with your own 3D models. Ensure they're optimized for web performance.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The portfolio uses a mobile-first approach with responsive animations and layouts.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## ⚡ Performance Optimizations

- **Lazy Loading**: Images and 3D models are loaded on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Optimized images and fonts
- **Smooth Animations**: Hardware-accelerated animations with GSAP
- **Mobile Optimizations**: Reduced animation complexity on mobile devices

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Nithesh S K**

- Email: nitheshnithesh56@gmail.com
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Inspired by Awwwards-winning designs
- GSAP for amazing animation capabilities
- Three.js community for 3D graphics resources
- React and Vite teams for excellent development tools

---

**⭐ Star this repository if you found it helpful!**
