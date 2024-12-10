import { Pressable, Text, StyleSheet } from "react-native";
import { Disenyo } from '../temas/Disenyo';
import { color } from "../temas/Colors";
import * as Haptics from 'expo-haptics'

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
    tipo?: 'filaSuperior' | 'columnaDerecha' | 'central';
}

export const BotonOperacion = ({ label, width = 80, onPress, tipo }: Props) => {
    const getBackgroundColor = () => {
        switch (tipo) {
            case 'filaSuperior':
                return color.verde;
            case 'columnaDerecha':
                return color.azul;
            case 'central':
                return color.rojo;
            default:
                return color.lightGray;
        }
    };

    const accion = (() => {
        Haptics.selectionAsync();
        if (onPress)onPress()
        console.log('ahora vibro');
      })
    

    return (
        <Pressable>
            <Text
                style={[Disenyo.boton, { width, backgroundColor: getBackgroundColor() }]}
                onPress={accion}>{label}</Text>
        </Pressable>
    );
};


/*const styles = StyleSheet.create({
    
  });*/