import {StyleSheet} from "react-native";

export const SubscribeStyles = StyleSheet.create({
    steps: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(42, 52, 118, 1)',
        borderColor: 'rgba(87, 102, 245, 1)',
        borderRadius: 4,
        marginRight: 5,
        marginLeft: 5
    },
    callIcon: {
        marginTop: 85,
        backgroundColor: '#fff',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderColor: 'rgba(29, 74, 186, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    termsText: {fontFamily: 'Avenir', fontSize: 13, color: 'rgba(222, 222, 222, 1)'},
    paymentPlan: {
        minHeight: 130,
        backgroundColor: 'rgba(245, 247, 251, 1)',
        borderColor: 'rgba(222, 222, 222, 0.5)',
        borderWidth: 3,
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
