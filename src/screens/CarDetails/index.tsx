import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { CarDTO } from '../../dtos/carDTO';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'
import { Button } from '../../components/Button'

import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

import {
    Container, Header, Footer, CarImages, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories
} from './styles';


interface Params {
    car: CarDTO
}

export function CarDetails() {

    const navigation = useNavigation();

    const route = useRoute();
    const { car } = route.params as Params;

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP,
            ),
        }
    });

    function handleConfirmRental() {
        navigation.navigate('Scheduling', { car });
    }

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>

            <Animated.View
                style={[headerStyleAnimation]}
            >
                <Header>
                    <BackButton onPress={handleBack} />
                </Header>

                <CarImages>
                    <ImageSlider
                        imagesUrl={car.photos}
                    />
                </CarImages>
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 50,
                    paddingTop: 5,
                    paddingLeft: 2,
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
            >
                <Details>

                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>

                </Details>

                <Acessories>
                    {
                        car.accessories.map((accessory) => (
                            <Acessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAcessoryIcon(accessory.type)} />
                        ))
                    }
                </Acessories>

                <About>
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </About>

            </Animated.ScrollView>

            <Footer>
                <Button title="Escolher Período do Aluguel"
                    onPress={handleConfirmRental}
                />
            </Footer>

        </Container>
    );
}