# Flashcard Quiz App

A React application for creating and studying flashcard quizzes. Built with React, Redux, and Redux Persist for local storage.

## Features

- **Topics Management**
  - Create topics with custom names and icons
  - Organize quizzes by topics
  - View all topics and their associated quizzes

- **Quiz Creation**
  - Create quizzes under specific topics
  - Add multiple flashcards to each quiz
  - Each card has a front (question) and back (answer)

- **Study Mode**
  - Study quizzes with interactive flashcards
  - Click cards to flip between question and answer
  - Random card order on each quiz attempt
  - Progress tracking for each quiz

- **Data Persistence**
  - All topics, quizzes, and cards are saved locally
  - Data persists across page refreshes and browser sessions

## Getting Started

1. Clone the repository
2. Install dependencies:
3. Start the development server:
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Technologies Used

- React
- Redux Toolkit for state management
- Redux Persist for local storage
- React Router for navigation
- UUID for unique identifiers

## Usage

1. **Creating Topics**
   - Click "Create New Topic"
   - Enter topic name and select an icon
   - Submit to create a new topic

2. **Creating Quizzes**
   - Click "Create New Quiz"
   - Select a topic
   - Enter quiz name
   - Add cards to the quiz
   - Submit to create a new quiz

3. **Studying**
   - Navigate to a topic or quizzes
   - Select a quiz to study
   - Click cards to flip between question and answer
   - Cards are randomly ordered each time you start the quiz

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production