import { 
    IonButton,
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    useIonRouter} from '@ionic/react';
    import './Home.css';
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();

    const MakeLogin = () =>
    navigation.push('/app','root', 'replace');
  

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome to my site</IonTitle>
                </IonToolbar>
            </IonHeader>
                <IonContent className="ion-padding">
                    <IonButton onClick={()=> MakeLogin()} expand="full">
                        Press to continue
                    </IonButton>
                </IonContent>

        </IonPage>

    )
    }

  export default Login