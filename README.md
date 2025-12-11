# Weather App 🌤️

A modern, responsive weather application that provides real-time weather information and forecasts with an elegant user interface. Built with TypeScript, Tailwind CSS, and powered by Open-Meteo API.

## 🚀 Live Demo

[View Live Site](https://zero-click-0x.github.io/Weather_App_Api/)

## ✨ Features

### 🔍 **Search Functionality**

- **Smart location search** - Enter any city or location name to get instant weather data
- **Autocomplete suggestions** - Get real-time location suggestions powered by OpenStreetMap Nominatim API
- **Quick selection** - Click on any suggested location to instantly view its weather

### 🌡️ **Current Weather Display**

- **Live temperature** readings with accurate weather icons
- **Location details** - Current city name and date display
- **Visual weather indicators** - Dynamic weather icons that change based on conditions

### 📊 **Comprehensive Weather Metrics**

- **Feels Like Temperature** - Apparent temperature for better planning
- **Humidity Percentage** - Current air moisture levels
- **Wind Speed** - Real-time wind conditions
- **Precipitation Amount** - Current rainfall or snowfall measurements

### 📅 **7-Day Weather Forecast**

- **Daily predictions** - View high and low temperatures for the next week
- **Weather icons** - Visual representation of expected conditions
- **Day-by-day breakdown** - Easy-to-read forecast cards with abbreviated day names

### ⏰ **Hourly Forecast**

- **24-hour view** - Temperature changes throughout the day
- **Scrollable timeline** - Navigate through hourly predictions
- **Weather icons** - Visual indicators for each hour
- **Day selector** - Switch between different days of the week to view hourly forecasts

### ⚙️ **Unit Conversion**

- **Imperial/Metric toggle** - Seamlessly switch between measurement systems
- **Temperature units** - Choose between Celsius (°C) and Fahrenheit (°F)
- **Wind speed units** - Toggle between km/h and mph
- **Precipitation units** - Switch between millimeters (mm) and inches (in)

### 📱 **Responsive Design**

- **Mobile-first approach** - Optimized for smartphones and tablets
- **Tablet layout** - Enhanced viewing experience on medium screens
- **Desktop optimization** - Full-featured interface for large screens
- **Adaptive breakpoints** - Smooth transitions between screen sizes

### 🎨 **Interactive UI Elements**

- **Hover effects** - Visual feedback on all clickable elements
- **Focus states** - Keyboard navigation support with clear focus indicators
- **Smooth animations** - Polished user experience with subtle transitions
- **Dropdown menus** - Intuitive expandable sections for units and day selection

## 🛠️ Built With

### **Core Technologies**

- **TypeScript** - Type-safe JavaScript for robust code
- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework for modern styling

### **Build Tools**

- **Vite** - Lightning-fast build tool and dev server

### **APIs**

- **Open-Meteo API** - Free weather data provider (no API key required)
- **Nominatim API** - OpenStreetMap geocoding for location search

### **Custom Fonts**

- **Bricolage Grotesque** - Modern display font
- **DM Sans** - Clean, readable body font

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**

```
Navigate to http://localhost:5173
```

### **Build for Production**

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

## 📦 Project Structure

```
weather-app/
├── src/
│   ├── main.ts              # Core TypeScript logic
│   ├── input.css            # Tailwind CSS configuration
│   └── assets/
│       ├── images/          # Weather icons and UI assets
│       └── fonts/           # Custom font files
├── index.html               # Main HTML file
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS settings
└── vite.config.js           # Vite build configuration
```

## 🎯 Usage Guide

### **Search for a Location**

1. Click on the search input field
2. Type the name of any city or location
3. Select from the dropdown suggestions
4. Click the "Search" button to view weather data

### **Switch Measurement Units**

1. Click the "Units" button in the top-right corner
2. Select "Switch to Imperial" or "Switch to Metric"
3. Choose individual unit preferences:
   - Temperature (°C/°F)
   - Wind Speed (km/h/mph)
   - Precipitation (mm/in)

### **View Hourly Forecast for Different Days**

1. Locate the "Hourly Forecast" section on the right
2. Click the day dropdown (shows "Today" by default)
3. Select any day from the next 6 days
4. Scroll through the 24-hour forecast

### **Default Location**

The app loads with Lucknow, India as the default location. Search for your city to get localized weather data.

## 🌐 API Information

### **Weather Data**

- **Provider**: [Open-Meteo](https://open-meteo.com/)
- **Type**: Free, no authentication required
- **Features**: Current weather, hourly forecasts, 7-day predictions

### **Location Search**

- **Provider**: [Nominatim (OpenStreetMap)](https://nominatim.openstreetmap.org/)
- **Type**: Free geocoding service
- **Rate Limit**: 1 request per second (handled by debouncing)

## 📱 Responsive Breakpoints

```css
Mobile:  < 640px (sm)
Tablet:  640px - 1024px (md, lg)
Desktop: > 1024px (xl)
```

## 🎨 Color Scheme

```css
Primary Background:   hsl(241.42, 95%, 9%)   /* Deep Blue */
Secondary Background: hsl(240, 26%, 20%)     /* Dark Blue-Gray */
Hover State:          hsl(240, 22%, 24%)     /* Lighter Blue-Gray */
Accent:               #1449e6e4              /* Bright Blue */
Text:                 #ffffff                /* White */
```

## 🐛 Known Issues & Future Enhancements

### **Current Limitations**

- Weather icons are static images (not animated)
- No offline functionality
- Limited to locations available in Nominatim database

### **Planned Features**

- [ ] Add weather alerts and warnings
- [ ] Implement geolocation for automatic location detection
- [ ] Add weather maps integration
- [ ] Include UV index and air quality data
- [ ] Save favorite locations
- [ ] Dark/Light theme toggle
- [ ] Progressive Web App (PWA) support

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Open-Meteo** - For providing free weather API
- **OpenStreetMap** - For location geocoding services
- **Tailwind CSS** - For the utility-first CSS framework
- **Frontend Mentor** - For project inspiration

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ and ☕

</div>
