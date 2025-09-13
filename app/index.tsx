import SuperButton from "@/components/superButton";
import SuperTitle from "@/components/superTitle";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [texto, setTexto] = useState("");

  const showMessage = () => {
    setCount(count + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite algo"
        style={{
          borderColor: "gray",
          width: 200,
          borderWidth: 1,
          marginBottom: 20,
        }}
      ></TextInput>
      <SuperTitle title={"Contador: " + count} uppercase />

      <SuperButton
        title={"Mais um a " + count}
        onPress={showMessage}
        disabled={texto.length < 10}
      />
      <Text>{texto}</Text>

      {texto.length > 10 && <Text>Texto maior que 10</Text>}
    </View>
  );
}
