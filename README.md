# To-Do List App

**Developer:** Muhammad Idrees Raza

## 📱 Project Description

A sleek and modern React Native To-Do List application built with Expo, featuring a beautiful dark/light theme design. The app includes comprehensive task management, habit tracking, calendar integration, and progress visualization with smooth animations.

## 📸 Screenshots

### Home Page
![Home Page](https://github.com/idrees-raza-mi/Do-Plan/blob/main/To%20Do%20ss/homepage.png)
*Main tasks screen with progress indicators and task list*

### Habits Page
![Habits Page](TO%20Do%20ss/habit.png)
*Habit categories with progress rings and weekly calendar*

### Habit Detail Page
![Habit Detail](TO%20Do%20ss/habitdetail.png)
*Individual habit view with specific tasks and progress tracking*

### Calendar Page
![Calendar](TO%20Do%20ss/calender.png)
*Monthly calendar with task completion indicators*

### Profile Page
![Profile](TO%20Do%20ss/profile.png)
*User profile with settings and dark mode toggle*

### ✨ Key Features

- **🏠 Home Screen**: Display tasks with categories, completion status, and progress tracking
- **➕ Add Task**: Floating action button with modal for creating new tasks
- **✅ Mark Complete**: Tap to toggle task completion with smooth animations
- **🗑️ Delete Task**: 3-dot menu for edit and delete functionality
- **🌙 Dark Mode**: Toggle between light and dark themes
- **🎞️ Animations**: Smooth animations for task operations
- **📅 Calendar**: Monthly calendar view with task integration
- **🏃‍♂️ Habits**: Habit tracking with categories and progress rings
- **📊 Insights**: Progress bars and completion statistics
- **💾 Persistence**: Local storage with AsyncStorage

### 🛠️ Technical Stack

- **Framework**: React Native (Expo)
- **State Management**: Context API with useReducer and useState
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **Storage**: AsyncStorage for data persistence
- **UI Components**: Custom components with theming
- **Animations**: React Native Animated API
- **Icons**: Expo Vector Icons

## 🚀 Steps to Run the App

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device (for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "To Do"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on device/emulator**
   - **Mobile Device**: Scan the QR code with Expo Go app
   - **Android Emulator**: Press `a` in the terminal
   - **iOS Simulator**: Press `i` in the terminal

### 📱 App Structure

```
src/
├── components/          # Reusable UI components
│   ├── TaskItem.js     # Individual task component
│   ├── HabitCard.js    # Habit display card
│   ├── FloatingActionButton.js
│   ├── AddTaskModal.js
│   └── ...
├── screens/            # Main app screens
│   ├── TasksScreen.js  # Home screen with tasks
│   ├── HabitsScreen.js # Habits overview
│   ├── CalendarScreen.js
│   └── ProfileScreen.js
├── context/            # State management
│   ├── ThemeContext.js # Theme provider
│   └── TaskContext.js  # Task and habit state
└── ...
```


## 🎯 Features in Detail

### Task Management
- Create, edit, and delete tasks
- Categorize tasks (Personal, Work, Education, Sport, Health)
- Set priorities and time schedules
- Mark tasks as complete with visual feedback

### Habit Tracking
- Create habits with categories
- Track daily progress with visual rings
- View habit-specific tasks
- Monitor completion streaks

### Progress Visualization
- Circular progress indicators
- Completion percentage bars
- Weekly calendar with completion dots
- Task insights and statistics

### Theme System
- Light and dark mode support
- Consistent color scheme
- Smooth theme transitions
- User preference persistence

## 🔧 Development

### Available Scripts

- `npx expo start` - Start development server
- `npx expo start --clear` - Start with cleared cache
- `npx expo build` - Build for production

### State Management

The app uses React Context for state management:
- **ThemeContext**: Manages light/dark theme
- **TaskContext**: Handles tasks, habits, and data persistence

### Data Persistence

All data is stored locally using AsyncStorage:
- Tasks and habits persist between app sessions
- Theme preferences are saved
- Progress tracking maintains history

## 📝 License

This project is developed by Muhammad Idrees Raza for educational and portfolio purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Developed with ❤️ by Muhammad Idrees Raza**
