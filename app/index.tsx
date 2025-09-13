import SuperButton from "@/components/superButton";
import SuperTitle from "@/components/superTitle";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

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
      <SuperTitle title={"Contador: " + count} uppercase />

      <SuperButton title={"Mais um a " + count} onPress={showMessage} />
    </View>
  );
}
