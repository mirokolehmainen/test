import { IonButtons, 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
  import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Information</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding"></IonContent>
        
        <IonTitle className='Movie'>Movies</IonTitle>
        <IonList>
      <IonItem>
        <IonLabel>James Bond</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Starwars</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Simpsons</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Friends</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Unknown Soldier</IonLabel>
      </IonItem>
    </IonList>
      </IonPage>
  
  );
};

export default Home;
