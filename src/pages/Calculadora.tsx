import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'

const Calculadora = () => {

    const [n, setN] = useState<string>("0");
    const [lastN, setLastN] = useState<string>("0");
    const[operation, setOperation] = useState<string>("");
    const[readyToClear, setReadyToClear] = useState<boolean>(false);

    const handleNumber = (num:string) =>{
        if(n==="0"||readyToClear){
            setN(num);
            setReadyToClear(false);
        }else   
            setN(n.concat(num));
    }

    const handleComa = () =>{
        if(n.indexOf(".")===-1)
            setN(n.concat("."));
    }

    const handleCE = () =>{
        setN("0");
        setLastN("0");
    }

    const handleC = () => {
        setN("0");
    }

    const handleOperation = (op:string) =>{
        if(lastN!=="0")
            handleEquals();
        else
            setLastN(n);
        setOperation(op);
        setReadyToClear(true);
    }

    const handleBack = () =>{
        setN(n.substring(0,n.length-1));
    }

    const handlePercentaje = () =>{
        setN(eval(`${n}/100`));
        setReadyToClear(true);
    }

    const handleOneOverX = () =>{
        setN(eval(`1/${n}`));
        setReadyToClear(true);
    }

    const handleSquare = () => {
        setN(String(Math.pow(+n, 2)));
        setReadyToClear(true);
    }
    
    const handleSquareRoot = () => {
        setN(String(Math.sqrt(+n)));
        setReadyToClear(true);
    }

    const hanldeMasMenos = () =>{
        if(n.startsWith("-"))
            setN(n.substring(1));
        else
            setN("-".concat(n));
    }

    const handleEquals = () => {
        setLastN(eval(`${lastN}${operation}${n}`));
        setReadyToClear(true);
    }

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Calculadora</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <h3>{lastN}</h3>
                    </IonCol>
                </IonRow>
                <IonRow>
                      <IonCol size='11'><h1>{n}</h1></IonCol>
                      <IonCol><h2>{operation}</h2></IonCol>
                </IonRow>
                <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handlePercentaje() }} >%</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleCE() }} >CE</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleC() }} >C</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleBack() }} >&lt;-</IonButton>
                      </IonCol>
                </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleOneOverX() }} >1/x</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleSquare() }} >x^2</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleSquareRoot() }}  >Sqrt(x)</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleOperation("/") }}>/</IonButton>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() =>{handleNumber("7")}}>7</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("8") }}>8</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("9") }}>9</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleOperation("*") }}>*</IonButton>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("4") }}>4</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("5") }}>5</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("6") }}>6</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleOperation("-") }}>-</IonButton>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("1") }}>1</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("2") }}>2</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("3") }}>3</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleOperation("+") }}>+</IonButton>
                      </IonCol>
                  </IonRow>
                  <IonRow>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { hanldeMasMenos() }} >+/-</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleNumber("0") }}>0</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleComa() }}>,</IonButton>
                      </IonCol>
                      <IonCol>
                          <IonButton expand='block' onClick={() => { handleEquals() }} >=</IonButton>
                      </IonCol>
                  </IonRow>
            </IonGrid>
            
        </IonContent>
    </IonPage>
  )
}

export default Calculadora