import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/home';
import { Appointments } from '../screens/appointments';
import { theme } from '../global/styles/theme';
import { AppointmentsCreate } from '../components/appointments_create';

const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}>
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen 
                name="Appointments"
                component={Appointments}
            />
            <Screen 
                name="AppointmentsCreate"
                component={AppointmentsCreate}
            />

        </Navigator>
    );
}