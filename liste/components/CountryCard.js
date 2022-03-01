import { View, Text, Image, StyleSheet, } from "react-native";

export default function CountryCard(props) {
	return (
		<View style={{ margin: 20 }}>
			<Text style={{ fontWeight: "bold" }}>
				{props.country.name.common}
			</Text>
			<Text>{props.country.capital}</Text>
            <Image style={styles.flag} source={{ uri: props.country.flags.png }} /> 
		</View>
	);
}

const styles = StyleSheet.create({
    flag: {
        width:200,
        height:100,

    },
  });