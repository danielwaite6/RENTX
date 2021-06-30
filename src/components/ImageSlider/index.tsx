import React from 'react';

import {
    ImageIndexes, ImageIndex, CarImageWrapper, CarImage, Container
} from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl, ...rest }: Props) {
    return (
        <Container {...rest}>
            <ImageIndexes>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>

            <CarImageWrapper>
                <CarImage
                    source={{ uri: imagesUrl[0] }}
                    resizeMode="contain"
                />
            </CarImageWrapper>
        </Container>
    );
}