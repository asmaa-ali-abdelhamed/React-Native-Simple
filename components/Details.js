import React, { Component, useEffect, useState }  from "react";
import { Text } from "react-native";
import axios from "axios";

const Details = ({ navigation, route }) => {
    // alert(JSON.stringify(route.params.id))

    const id = route.params.id;
    const [details, setDetails] = useState({});

    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`) 
      .then((res) => setDetails(res.data))
      .catch((err) => alert(err) )

    }, [ ]);

    return (
        <Text> {details.title} </Text>
    )
}

export default Details

