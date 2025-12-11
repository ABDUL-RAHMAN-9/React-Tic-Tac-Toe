    
<div align="center">

  <h1>React Tic-Tac-Toe</h1>
  <p>
    <strong>A high-fidelity, minimalist reimagining of the classic game.</strong><br>
    Featuring intelligent AI, glassmorphism UI, and fluid animations.
  </p>

  <br />
</div>

##  Overview

This is not just another Tic-Tac-Toe game. It is a **modern web experience** built with **React 19 & Vite**, designed with a focus on **UI/UX architecture** and **clean code principles**. 

The application features a "Pro" visual style inspired by Vercel and Apple design systems, utilizing **CSS Glassmorphism**, **Ambient Aurora Backgrounds**, and **smooth state transitions**.

##  Key Features

-  Intelligent AI Opponent:** A logic-based computer opponent that blocks player moves and plays strategically.
-  Glassmorphism UI:** Premium aesthetic with frosted glass panels, dynamic lighting, and subtle shadows.
-  Ambient Aurora Background:** A living, breathing background animation that replaces static grids.
-  Real-time Scoreboard:** Persists game state and tracks scores dynamically during the session.
-  Reactive State Management:** Built with React Hooks (`useState`, `useEffect`, `useCallback`) for instant feedback.
-  Fully Responsive:** Optimized for desktop, tablets, and mobile devices.

##  Tech Stack

- **Core:** React 19, JavaScript (ES6+)
- **Build Tool:** Vite (Super fast HMR & Build)
- **Styling:** CSS3 Variables, Keyframe Animations, Flexbox/Grid
- **Deployment:** GitHub Pages (CI/CD Action)

##  Project Architecture

A clean, component-based structure ensuring scalability and readability.

```bash
tic-tac-toe/
│── public/
│── src/
│   │── components/
│   │   │── TicTacToe.jsx    #  Game Engine & AI Logic
│   │   │── StartScreen.jsx  #  User Onboarding & Mode Selection
│   │   │── Board.jsx        #  Grid Renderer
│   │   │── Square.jsx       #  Atomic UI Component
│   │── App.jsx              #  Root Layout Wrapper
│   │── index.jsx            #  Entry Point
│   │── index.css            #  Global Design System & Variables
│── vite.config.js           #  Build Configuration
│── package.json             #  Dependencies
│── README.md                #  Documentation

```
    
###  One final tip for you:


<div align="center">
  <h2> App Preview</h2>
  <img width="1917" height="943" alt="Screenshot 2025-12-11 113718" src="https://github.com/user-attachments/assets/d2d8bc2e-f470-4138-9d7b-3a5839c8a36b" />
</div>
