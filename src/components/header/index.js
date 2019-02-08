import React from "react";
import {Text, TouchableOpacity} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

export const Header = () => {
    return (
        <TouchableOpacity style={{flexDirection: 'row'}}>
            <EntypoIcon name="triangle-left" size={14} style={{paddingLeft: 5}}/>
            <Text style={{fontSize: 11}}>Search</Text>
        </TouchableOpacity>
    )
}
