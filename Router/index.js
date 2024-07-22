import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/home";
import Tambah from "../pages/Tambah";
import RiwayatTicket from "../pages/riwayat/RiwayatTicket.js";
import LoginScreen from "../pages/Login/index.js";
import AdminScreen from "../pages/admin";
import DetailTicket from "../pages/DetailTicket";
import AdminRiwayatTicket from "../pages/RiwayatAdmin";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} options={{headerShown:false}} />
            <Stack.Screen name="DetailTicket" component={DetailTicket} options={{title:"Detail Ticket"}}/>
            <Stack.Screen name="AdminRiwayatTicket" component={AdminRiwayatTicket} options={{title:"Riwayat Ticket admin"}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Tambah" component={Tambah} options={{title:"Ticket"}}/>
            <Stack.Screen name="RiwayatTicket" component={RiwayatTicket} options={{title:"Riwayat Ticket"}} />
        </Stack.Navigator>
    )
}

export default Router;