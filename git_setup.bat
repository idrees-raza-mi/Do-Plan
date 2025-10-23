@echo off
echo Initializing git repository...
git init

echo Adding remote repository...
git remote add origin https://github.com/idrees-raza-mi/Do-Plan.git

echo Adding all files...
git add .

echo Committing initial setup...
git commit -m "init: setup project structure and dependencies"

echo Committing core features...
git add src/context/ThemeContext.js src/context/TaskContext.js
git commit -m "feat: add theme and task context providers"

echo Committing UI components...
git add src/components/
git commit -m "feat: add reusable UI components (TaskItem, FloatingActionButton, etc.)"

echo Committing screens...
git add src/screens/
git commit -m "feat: add main app screens (Tasks, Habits, Calendar, Profile)"

echo Committing navigation...
git add App.js
git commit -m "feat: setup navigation with bottom tabs and stack navigator"

echo Committing configuration...
git add package.json app.json babel.config.js
git commit -m "config: setup Expo project configuration"

echo Committing documentation...
git add README.md
git commit -m "docs: add comprehensive README with setup instructions"

echo Committing screenshots...
git add "TO Do ss/"
git commit -m "docs: add app screenshots for documentation"

echo Committing task management features...
git add src/context/TaskContext.js
git commit -m "feat: add task CRUD operations and habit management"

echo Committing calendar functionality...
git add src/screens/CalendarScreen.js
git commit -m "feat: add calendar with real-time date updates and task integration"

echo Committing edit functionality...
git add src/components/TaskItem.js src/components/HabitTaskItem.js
git commit -m "feat: add task edit functionality with modal interface"

echo Committing UI improvements...
git add src/components/FloatingActionButton.js
git commit -m "fix: adjust floating action button position closer to bottom bar"

echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo Done! Repository pushed to GitHub successfully.
pause
