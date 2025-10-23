import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useTasks } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';
import CategoryFilter from '../components/CategoryFilter';
import TaskInsights from '../components/TaskInsights';
import AddTaskModal from '../components/AddTaskModal';
import FloatingActionButton from '../components/FloatingActionButton';

const TasksScreen = () => {
  const { theme } = useTheme();
  const { getTodayTasks, getCompletedTasks, getTaskInsights } = useTasks();
  const [showAddModal, setShowAddModal] = useState(false);

  const todayTasks = getTodayTasks();
  const completedTasks = getCompletedTasks();
  const insights = getTaskInsights();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      paddingHorizontal: theme.spacing.md,
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.md,
    },
    dateText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    searchIcon: {
      position: 'absolute',
      right: theme.spacing.md,
      top: theme.spacing.lg,
    },
    section: {
      marginBottom: theme.spacing.lg,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
      paddingHorizontal: theme.spacing.md,
    },
    taskList: {
      paddingHorizontal: theme.spacing.md,
    },
    emptyState: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing.xl,
    },
    emptyText: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.dateText}>
            {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric' 
            })}
          </Text>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons 
              name="search-outline" 
              size={24} 
              color={theme.colors.textSecondary} 
            />
          </TouchableOpacity>
        </View>

        {/* Task Insights */}
        <TaskInsights insights={insights} />

        {/* Category Filter */}
        <CategoryFilter />

        {/* Today's Tasks */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          <View style={styles.taskList}>
            {todayTasks.length > 0 ? (
              todayTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No tasks for today</Text>
              </View>
            )}
          </View>
        </View>

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Completed tasks</Text>
            <View style={styles.taskList}>
              {completedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <FloatingActionButton onPress={() => setShowAddModal(true)} />

      {/* Add Task Modal */}
      <AddTaskModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </SafeAreaView>
  );
};

export default TasksScreen;
