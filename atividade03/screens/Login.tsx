import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../assets/Logo.svg";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [login, setLogin] = useState<string | null>();
  const [senha, setSenha] = useState<string | null>();
  const [resultado, setResultado] = useState<string | null>();

  const navigation = useNavigation();

  const handleLogin = () => {
    if (login === "admin" && senha === "1234") {
      navigation.navigate("Home" as never)
    } else {
      setResultado("Combinação de usuário e senha inválida");
    }
  };

  return (
    <View style={styles.container}>
      <Logo height={40} />

      <View style={styles.input_group}>
        <Text style={styles.input_text}>Login</Text>
        <TextInput style={styles.input} onChangeText={setLogin} />
      </View>

      <View style={styles.input_group}>
        <Text style={styles.input_text}>Senha</Text>
        <TextInput style={styles.input} onChangeText={setSenha} />
      </View>

      <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
        <Text style={styles.login_text}>Logar</Text>
      </TouchableOpacity>

      <Text style={styles.input_text}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  input_group: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    width: "100%",
  },

  input_text: {
    fontSize: 12,
    fontFamily: "sans-serif",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 25,
    paddingLeft: 8,
    borderRadius: 10,
    width: "100%",
  },

  login_button: {
    backgroundColor: "#3A01DF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  login_text: {
    color: "white",
    fontSize: 18,
  },
});

export default Login;
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}
