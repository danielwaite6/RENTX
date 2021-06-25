import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';

export function Home() {

    const carData = {
        brand: 'Audi',
        name: 'RS COUPE',
        rent: {
            period: 'Ao dia',
            price: 120.000
        },
        thumbnail: 'https://www.ccarprice.com/products/Audi-A5-Coupe-Technik-2019.png',
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
                        Total 12 Carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            <CarList
                data={[1, 2, 3, 4, 5, 6, 7,]}
                keyExtractor={(item) => String(item)}
                renderItem={({ item }) => <Car data={carData} />}
            />


        </Container>
    );
}