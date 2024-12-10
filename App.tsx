import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { Disenyo } from './src/temas/Disenyo';


export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,Operadores,
         operaciones,resultado  } = useCalculadora();

  return (
  
    <View style={Disenyo.container}>    
      <Pantalla numberOfLines={1} tipo='principal' adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tipo='secundaria'> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit tipo='secundaria'>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

      <View style={Disenyo.fila}>
        <BotonOperacion label='C' tipo="filaSuperior" onPress={clean}></BotonOperacion>
        <BotonOperacion label='+/-' tipo="filaSuperior" onPress={cambiarSigno}></BotonOperacion>
        <BotonOperacion label='del' tipo="filaSuperior" onPress={borrarDigito}></BotonOperacion>
        <BotonOperacion label='/' tipo="columnaDerecha" onPress={() => operaciones(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={Disenyo.fila}>
        <BotonOperacion label='7' tipo="central" onPress={() => construirNumero('7')}></BotonOperacion>
        <BotonOperacion label='8' tipo="central" onPress={() => construirNumero('8')}></BotonOperacion>
        <BotonOperacion label='9' tipo="central" onPress={() => construirNumero('9')}></BotonOperacion>
        <BotonOperacion label='x' tipo="columnaDerecha" onPress={() => operaciones(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={Disenyo.fila}>
        <BotonOperacion label='4' tipo="central" onPress={() => construirNumero('4')}></BotonOperacion>
        <BotonOperacion label='5' tipo="central" onPress={() => construirNumero('5')}></BotonOperacion>
        <BotonOperacion label='6' tipo="central" onPress={() => construirNumero('6')}></BotonOperacion>
        <BotonOperacion label='-' tipo="columnaDerecha" onPress={() => operaciones(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={Disenyo.fila}>
        <BotonOperacion label='1' tipo="central" onPress={() => construirNumero('1')}></BotonOperacion>
        <BotonOperacion label='2' tipo="central" onPress={() => construirNumero('2')}></BotonOperacion>
        <BotonOperacion label='3' tipo="central" onPress={() => construirNumero('3')}></BotonOperacion>
        <BotonOperacion label='+' tipo="columnaDerecha" onPress={() => operaciones(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={Disenyo.fila}>
        <BotonOperacion label='0' width={180} tipo="central" onPress={() => construirNumero('0')}></BotonOperacion>
        <BotonOperacion label='.' tipo="central" onPress={() => construirNumero('.')}></BotonOperacion>
        <BotonOperacion label='=' tipo="columnaDerecha" onPress={resultado}></BotonOperacion>
    </View>

    </View>


  );
}

