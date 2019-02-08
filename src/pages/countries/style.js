import {StyleSheet} from "react-native";

export const CountryStyles = StyleSheet.create({
    pageTitle: {textAlign: 'center', fontSize: 18, marginTop: 5, fontFamily: 'Avenir'},
    searchInput: {
        backgroundColor: 'rgba(245, 246, 245, 1)',
        height: 35,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20
    },
    label: {
        backgroundColor: 'rgba(129, 209, 180, 1)',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        borderRadius: 3
    },
    contryRow: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(241, 241, 241, 1)',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
