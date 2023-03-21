import { IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,IonItem,IonCheckbox, IonLabel } from '@ionic/react';
  import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding"></IonContent>

        <IonItem>
        <IonCheckbox slot="start"></IonCheckbox>
        <IonLabel className='lab'>James Bond has good movies</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox slot="start"></IonCheckbox>
        <IonLabel className='lab'>Starwars are great</IonLabel>
      </IonItem>
      <IonItem>
        <IonCheckbox slot="start"></IonCheckbox>
        <IonLabel className='lab'>The Unknown Soldier is good</IonLabel>
      </IonItem>
      </IonPage>
  
  );
};

export default Home;
