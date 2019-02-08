import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { CountryScreen } from './src/pages/countries';
import { SubscribeScreen } from './src/pages/subscriptions';

const AppNavigator = createStackNavigator(
    {
      Contries: CountryScreen,
      Subscribe: SubscribeScreen
    },
    {
      initialRouteName: "Contries",
      headerMode: 'none',
    }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
