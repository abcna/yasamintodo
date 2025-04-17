import React from "react";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import {
  add,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from "ionicons/icons";
import "../theme/pages.css";

const LibraryPage = () => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Library</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>
        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Here's a small text description for the card content. Nothing more,
          nothing less.
        </IonCardContent>
        <IonButton fill="clear">Action 1</IonButton>
        <IonButton fill="clear">Action 2</IonButton>
      </IonCard>
      <div className="centered-content">Library content</div>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  </>
);

export default LibraryPage;
