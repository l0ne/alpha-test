import React from "react";
import {SafeAreaView, Text, View, TextInput, FlatList, TouchableOpacity} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import {CountryStyles} from "./style";
import Flag from 'react-native-flags';
import {Header} from "../../components/header";

const contries = [
    {id: 1, name: 'United States', code: 'US', calls: true, sms: true},
    {id: 2, name: 'Canada', code: 'CA', calls: true, sms: true},
    {id: 3, name: 'Australia', code: 'AU', calls: true, sms: false},
    {id: 4, name: 'Belgium', code: 'BE', calls: true, sms: false},
    {id: 5, name: 'Cyprus', code: 'CY', calls: true, sms: false},
    {id: 6, name: 'Czech Republic', code: 'CZ', calls: true, sms: false},
    {id: 7, name: 'Denmark', code: 'DK', calls: true, sms: false},
    {id: 8, name: 'Estonia', code: 'EE', calls: true, sms: false},
    {id: 9, name: 'Finland', code: 'FI', calls: true, sms: false},
    {id: 10, name: 'France', code: 'FR', calls: true, sms: false},
    {id: 11, name: 'Greece', code: 'GR', calls: true, sms: false},
]

const Label = (props) => {
    const {name, color} = props;
    return (
        <View style={[CountryStyles.label, color && {backgroundColor: color}]}>
            <Text style={{fontSize: 8, fontWeight: 'bold', color: '#fff'}}>{name.toUpperCase()}</Text>
        </View>
    )

}

export class CountryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            countriesList: contries
        };
    }

    searchCountry = (search) => {
        let res = contries.filter(item => {
            if (item.name.indexOf(search) != -1) {
                return item;
            }
        })
        this.setState({search: search, countriesList: res});
    }

    render() {
        const { countriesList } = this.state;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <Header />
                <View style={{flex: 1, padding: 20}}>
                    <Text style={CountryStyles.pageTitle}>Select a Country</Text>
                    <View style={CountryStyles.searchInput}>
                        <AntDesignIcon name='search1' size={18} color={'rgba(204, 205, 207, 1)'}
                                       style={{paddingLeft: 20, paddingRight: 10, paddingTop: 2}}/>
                        <TextInput onChangeText={this.searchCountry}
                                   placeholder='Search countries...'/>
                    </View>
                    <FlatList data={countriesList} style={{marginTop: 20}} renderItem={({item}) =>
                        <TouchableOpacity style={CountryStyles.contryRow} onPress={() => this.props.navigation.navigate('Subscribe')}>
                            <View style={{height: 50, alignItems: 'flex-start'}}>
                                <Flag code={item.code} size={32} type='flat' />
                            </View>
                            <View style={{fontFamily: 'Avenir', width: '70%'}}>
                                <Text style={{fontSize: 18, marginBottom: 5}}>{item.name}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    {item.calls && <Label name='calls' />}
                                    {item.sms && <Label name='sms' color='rgba(133, 208, 208, 1)' />}
                                </View>
                            </View>
                            <EntypoIcon name='chevron-thin-right' style={{fontSize: 16, color: 'rgba(204, 204, 204, 1)'}} />
                        </TouchableOpacity>
                    } keyExtractor={(item) => item.id.toString() }/>
                </View>
            </SafeAreaView>
        );
    }
}
