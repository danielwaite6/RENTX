import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useTheme } from 'styled-components';
import { CarDTO } from '../../dtos/carDTO';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButton
} from './styles';

export function Home() {

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    const theme = useTheme();

    const navigation = useNavigation();



    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car });
    }

    function handleOpenMyCars() {
        navigation.navigate('MyCars');
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total {cars.length} Carros
                    </TotalCars>
                </HeaderContent>
            </Header>


            {
                loading
                    ?
                    <Load />
                    :
                    <CarList
                        data={cars}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
                    />
            }

            <MyCarsButton onPress={handleOpenMyCars}>
                <Ionicons name="ios-car-sport" size={38} color={theme.colors.shape} />
            </MyCarsButton>


        </Container>
    );
}