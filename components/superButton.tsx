import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
  title: string;
  onPress?: () => void;
}

/**
 * Um super botão estilizado roxo lindo demais
 * @param title Titulo do botão
 * @param onPress Função a ser executada ao clicar no botão
 * @returns um lindo botão roxo
 */

const SuperButton = ({ title, onPress }: ISuperButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.button_title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SuperButton;
