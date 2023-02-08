import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
} from '@ionic/react';

import './Menu.css';

const Menu: React.FC = () => {

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonItem href='/'>
            <IonLabel>Calculadora</IonLabel>
          </IonItem>
          <IonItem href='/page/hola'>
            <IonLabel>Hola</IonLabel>
          </IonItem>
          <IonItem href='/page/buenas'>
            <IonLabel>Buenas</IonLabel>
          </IonItem>
          <IonItem href='/page/que tal'>
            <IonLabel>Que tal</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
