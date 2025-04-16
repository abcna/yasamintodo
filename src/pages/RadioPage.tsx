import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "../theme/pages.css";

const RadioPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Radio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div className="centered-content">Radio content</div>
    </IonContent>
  </>
);

export default RadioPage;
