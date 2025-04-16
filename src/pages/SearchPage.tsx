import React from "react";
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import "../theme/pages.css";

const SearchPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Search</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <div className="centered-content">Search content</div>
    </IonContent>
  </>
);

export default SearchPage;
