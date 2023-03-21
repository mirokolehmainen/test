import {
  IonButton,
    IonContent, 
    IonHeader, 
    IonItem, 
    IonMenu,  
    IonMenuToggle,  
    IonPage,  
    IonRouterOutlet, 
    IonSplitPane, 
    IonTitle, 
    IonToolbar } from '@ionic/react';
import { Redirect,Route } from 'react-router';
import Home from './Home';
    import './Home.css';
import Information from './Information';

  
  const Menu: React.FC = () => {

    const paths= [
      {name: 'Home', url: '/app/Home'},
      {name: 'Information', url: '/app/Information'},
    ]


    return (
      <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent> {paths.map((item, index)=>(
              <IonMenuToggle key ={index}>
                <IonItem routerLink={item.url} routerDirection ="forward">
                 {item.name} 

                </IonItem>
              </IonMenuToggle>
             ))}
               <IonButton routerLink="/" routerDirection="back"
              expand="full">
                Logout
              </IonButton>
          </IonContent>
          </IonMenu>

        <IonRouterOutlet id="main">
        <Route exact path="/app/Home" component= {Home}/>
        <Route exact path="/app/Information" component= {Information}/>
        <Route exact path="/app">
            <Redirect to ="/app/Home" />
            </Route>
        </IonRouterOutlet>
      </IonSplitPane>
      </IonPage>
    );
  };
  
  export default Menu;
  