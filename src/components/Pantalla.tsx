import { Text, type TextProps, StyleSheet } from 'react-native';
import { Disenyo } from '../temas/Disenyo';

interface Props extends TextProps { 
  tipo: 'principal' | 'secundaria'; 
};

export const Pantalla = ({children,tipo, ...rest}:Props) => {
  return (
    <Text style={tipo === 'principal' ? Disenyo.pantallaPrincipal : Disenyo.pantallaSecundaria} {...rest}>
        {children}
    </Text>
  )
}




