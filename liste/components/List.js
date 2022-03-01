import { FlatList, Text, View } from 'react-native';
import { useState , useEffect } from "react";
import CountryCard from './CountryCard';
export default function List() {

    const [countries , setCountries]= useState([]);

    function fetchCountriesData() {
        fetch('https://restcountries.com/v3.1/all')
          .then((response) => response.json())
          .then((json) => setCountries(json))
          .catch((error) => console.error(error))
      }
      useEffect(()=> {
        fetchCountriesData();
      })

  return (
        <FlatList
        style={{ margin: 100 }}
        data={countries}
        renderItem={(data) => <CountryCard country={data.item} />}
        keyExtractor={(data, index) => index.toString()}
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={() => <Text>Footer</Text>}
        ItemSeparatorComponent={() => (
            <View style={{ borderBottomWidth: 1 }}></View>
        )}
        />
  );
}
