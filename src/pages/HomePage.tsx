import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "../theme/pages.css";

const HomePage = () => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task && category) {
      setTodos([...todos, { task, category }]);
      setTask("");
      setCategory("");
    }
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listen now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="form-container">
          <div className="form-section">
            <IonItem>
              <IonLabel position="stacked">Task</IonLabel>
              <IonInput
                value={task}
                placeholder="Enter your task"
                onIonChange={(e) => setTask(e.detail.value!)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Category</IonLabel>
              <IonSelect
                value={category}
                placeholder="Select Category"
                onIonChange={(e) => setCategory(e.detail.value)}
              >
                <IonSelectOption value="Work">Work</IonSelectOption>
                <IonSelectOption value="Personal">Personal</IonSelectOption>
                <IonSelectOption value="Other">Other</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton expand="block" onClick={addTodo}>
              Add Todo
            </IonButton>
          </div>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{todo.task}</IonCardTitle>
                  <IonCardSubtitle>{todo.category}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Here's a small text description for the card content. Nothing
                  more, nothing less.
                </IonCardContent>
                <IonButton fill="clear">Action 1</IonButton>
                <IonButton fill="clear">Action 2</IonButton>
              </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default HomePage;
