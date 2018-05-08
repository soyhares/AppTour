import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import TourMarkContainer from './TourMarkContainer';
import TourMarkManager from './TourMarkManager';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.TourMark = new TourMarkManager(0);
    this.TourMark.toFinishOff(() => alert('Listo! Terminé que hacemos ?'))
  }

  render() {
    return (
      <View style={styles.container}>
         
          <View style={styles.containerRow}>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
              title="Step 3"
              description="Presione el botón para avanzar en el tour"
              color="#f4427a"
              descriptionTextSize={18}
              addAppTourTarget={target => this.TourMark.addTarget({ target, id: 3 })}>
                <Button
                  onPress={()=>null}
                  title="Step 3"
                  color="#f4427a"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
              title="Step 5"
              description="Presione el botón para avanzar en el tour"
              color="#2b02e5"
              descriptionTextSize={18}
              addAppTourTarget={target => this.TourMark.addTarget({ target, id: 5 })}>
                <Button
                  onPress={()=>null}
                  title="Step 5"
                  color="#2b02e5"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
                title="Step 1"
                description="Presione el botón para avanzar en el tour"
                color="#7c4816"
                descriptionTextSize={18}
                addAppTourTarget={target => this.TourMark.addTarget({ target, id: 1 })}>
                <Button
                  onPress={()=>null}
                  title="Step 1"
                  color="#7c4816"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>
            
         </View>


        <Text style={styles.welcome}>
          Bienvenido a AppTour!
        </Text>
        <Text style={styles.instructions}>
          Este es un entorno de pruebas para la dependencia react-native-app-tour
        </Text>

        
          <Button
            style={{ marginBottom: 50 }}
            onPress={()=> this.TourMark.start()}
            title="probar"
            accessibilityLabel="Tour started" />
        


         <View style={styles.containerRow}>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
              title="Step 6"
              description="Presione el botón para avanzar en el tour"
              color="#27a339"
              descriptionTextSize={18}
              addAppTourTarget={target => this.TourMark.addTarget({ target, id: 6 })}>
                <Button
                  onPress={()=>null}
                  title="Step 6"
                  color="#27a339"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
              title="Step 2"
              description="Presione el botón para avanzar en el tour"
              color="#7d26a2"
              descriptionTextSize={18}
              addAppTourTarget={target => this.TourMark.addTarget({ target, id: 2 })}>
                <Button
                  onPress={()=>null}
                  title="Step 2"
                  color="#7d26a2"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <TourMarkContainer
                title="Step 4"
                description="Presione el botón para avanzar en el tour"
                color="#e57302"
                descriptionTextSize={18}
                addAppTourTarget={target => this.TourMark.addTarget({ target, id: 4 })}>
                <Button
                  onPress={()=>null}
                  title="Step 4"
                  color="#e57302"
                  accessibilityLabel="Tour started" />
              </TourMarkContainer>
            </View>

         </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerRow: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    width: 350,
    textAlign: 'center',
    color: '#333333',
    marginVertical: 5,
    marginBottom: 25
  },
});
