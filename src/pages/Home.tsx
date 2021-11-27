import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }

    setTasks(oldState => [...oldState, newTask])


    //TODO - add new task
    // const taskWithSameTitle = tasks.find(task => task.title === newTaskTitle);

    // if (taskWithSameTitle) {
    //   // return Alert.
    // }
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const updatedTasks = tasks.map(task => ({ ...task }))

    const foundItem = updatedTasks.find(item => item.id = id)

    if (!foundItem) return;

    foundItem.done = !foundItem.done;

    setTasks(updatedTasks) ;
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const updatedTask = tasks.filter(task => task.id !== id);

    setTasks(updatedTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />

      <Text onPress={() => console.warn(tasks)}> OLOCO</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})