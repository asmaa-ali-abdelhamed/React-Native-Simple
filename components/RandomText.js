import axios from "axios";
import React, { useState } from "react";
import {Text, View, Button} from "react-native"
const RandomText = () => {

    const [text, setText] = useState("");
    // alert(JSON.stringify(res.data.slip.advice))

    const random = (min, max ) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return (Math.floor(Math.random() * (max - min + 1) )).toString();
    }

    const getText = () => {
        axios.get("http://api.adviceslip.com/advice/" +  random(1, 10))
        .then((res) =>  setText(res.data.slip.advice))
        .catch((err) => alert(err))
    }

    return(
       <View>     
            <Text>  Random Text  </Text>

            <Button title="Random Text" onPress={ getText} />

            <Text style={{color: "blue", fontSize: 20}}> 
                {text}
            </Text>
        </View> 


    )

}

export default RandomText;
