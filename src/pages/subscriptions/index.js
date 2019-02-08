import React, {Fragment} from "react";
import {StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Header} from "../../components/header";
import { LinearGradient } from 'expo';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {SubscribeStyles} from "./style";
import EntypoIcon from "react-native-vector-icons/Entypo";

const PaymentPlan = (props) => {
    const {number, period, cost, isSelected} = props;

    if (isSelected) {
        return (
            <TouchableOpacity style={{width: '33%', shadowOffset: {width: 3, height: 3}, shadowColor: '#2EB4FD', shadowOpacity: 0.5, zIndex: 1}}>
                <LinearGradient colors={['rgba(52, 188, 252, 1)', 'rgba(19, 124, 224, 1)']} style={{height: 130, padding: 5}}>
                    <View style={{backgroundColor: '#fff', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 22, color: 'rgba(4, 120, 238, 1)'}}>{number}</Text>
                        <Text style={{fontFamily: 'Avenir', color: 'rgba(4, 120, 238, 1)'}}>trial</Text>
                        <Text style={{fontFamily: 'Avenir', fontWeight: 'bold', color: 'rgba(4, 120, 238, 1)'}}>{cost}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={SubscribeStyles.paymentPlan}>
            <Text style={{fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 22}}>{number}</Text>
            <Text style={{fontFamily: 'Avenir'}}>months</Text>
            <Text style={{fontFamily: 'Avenir', fontWeight: 'bold'}}>{cost}</Text>
        </TouchableOpacity>
    )
}

export class SubscribeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1
        };
    }

    render() {
        const {activeStep} = this.state;
        return (
            <SafeAreaView style={{backgroundColor: 'rgba(14, 67, 158, 1)'}}>
                <StatusBar backgroundColor='rgba(14, 67, 158, 1)' barStyle="light-content" />
                <LinearGradient colors={['rgba(14, 67, 158, 1)', 'rgba(89, 109, 238, 1)']} style={{minHeight: 580}}>
                    <Header />
                    <View style={{flex: 1, alignItems: 'center', padding: 10}}>
                        <Text style={{fontFamily: 'Avenir', color: '#fff', fontWeight: 'bold', fontSize: 18}}>+1 868-264-0510</Text>
                        <View style={{width: '100%', alignItems: 'flex-end', marginTop: -25}}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Text style={{color: '#fff', fontSize: 18}}>Close</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontFamily: 'Avenir', color: '#fff', fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Real Number</Text>
                        <Text style={{color: '#fff'}}>Contact anyone with your real number</Text>
                        <View style={SubscribeStyles.callIcon}>
                            <MaterialIcons name='call' size={42} color={'rgba(53, 89, 200, 1)'}/>
                        </View>
                        <View style={{width: '43%', marginTop: 85}}>
                            <Text style={{textAlign: 'center', fontFamily: 'Avenir', color: '#fff', fontSize: 12}}>3 days free, then $7.99/wk, if not cancelled</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <TouchableOpacity style={[SubscribeStyles.steps, activeStep == 1 && {backgroundColor: '#fff'}]}></TouchableOpacity>
                            <TouchableOpacity style={[SubscribeStyles.steps]}></TouchableOpacity>
                            <TouchableOpacity style={[SubscribeStyles.steps]}></TouchableOpacity>
                            <TouchableOpacity style={[SubscribeStyles.steps]}></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignItems: 'center', marginBottom: -10, zIndex: 2}}>
                        <View style={{backgroundColor: 'rgba(52, 188, 252, 1)', padding: 2, borderRadius: 15, width: '28%', alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontFamily: 'Avenir', fontSize: 12, fontWeight: 'bold'}}>Most Popular</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', zIndex: 1}}>
                        <PaymentPlan number={3} cost='$29.99' period='months'/>
                        <PaymentPlan number='3-Day' cost='$7.99/wk' period='trial' isSelected={true}/>
                        <PaymentPlan number={12} cost='$59.99' period='months' />
                    </View>
                    <View style={{height: 5, backgroundColor: '#fff'}}></View>
                </LinearGradient>
                <View style={{flex: 1, alignItems: 'center', minHeight: 200}}>
                    <TouchableOpacity style={{width: '65%', shadowOffset: {width: 3, height: 3}, shadowColor: 'grey', shadowOpacity: 0.3}}>
                        <LinearGradient colors={['rgba(4, 119, 217, 1)', 'rgba(51, 187, 253, 1)']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                                        style={{height: 56, marginTop: 30, justifyContent: 'center', borderRadius: 28}}>
                            <Text style={{color: '#fff', textAlign: 'center', fontFamily: 'Avenir', fontSize: 20}}>ACTIVATE</Text>
                            <View style={{alignItems: 'flex-end', paddingRight: 20}}>
                                <EntypoIcon name='chevron-right' style={{fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: -28}} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={[SubscribeStyles.termsText, {marginTop: 10}]}>Terms of Use | Privacy Policy</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <EntypoIcon name='ccw' color='rgba(222, 222, 222, 1)' size={14} style={{marginTop: 5}}/>
                        <Text style={[SubscribeStyles.termsText, {marginLeft: 10, marginTop: 5}]}>Restore</Text>
                    </View>
                    <View style={{width: '100%', padding: 20}}>
                        <Text style={SubscribeStyles.termsText}>Information about the subscriptions:</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
