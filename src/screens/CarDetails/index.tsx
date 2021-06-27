import React from 'react';
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Acessory } from '../../components/Acessory'
import { Button } from '../../components/Button'

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import {
    Container, Header, Footer, CarImages, Content, Details, Description, Brand, Name, Rent, Period, Price, About, Acessories
} from './styles';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={['https://www.ccarprice.com/products/Audi-A5-Coupe-Technik-2019.png']}
                />
            </CarImages>

            <Content>
                <Details>

                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580,00</Price>
                    </Rent>

                </Details>

                <Acessories>
                    <Acessory name="380 KM/h" icon={speedSvg} />
                    <Acessory name="3.2s" icon={accelerationSvg} />
                    <Acessory name="800 HP" icon={forceSvg} />
                    <Acessory name="Gasolina" icon={gasolineSvg} />
                    <Acessory name="Auto" icon={exchangeSvg} />
                    <Acessory name="2 Pessoas" icon={peopleSvg} />
                </Acessories>

                <About>
                    BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ BLÁ
                </About>

            </Content>

            <Footer>
                <Button title="Confirmar" color="green" />
            </Footer>

        </Container>
    );
}