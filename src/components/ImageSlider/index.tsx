import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
    ImageIndexes, ImageIndex, CarImageWrapper, CarImage, Container
} from './styles';

interface Props {
    imagesUrl: string[];
}

interface ChangeImageProps {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({ imagesUrl, ...rest }: Props) {

    const [imageIndex, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        //console.log(info);
        const index = info.viewableItems[0].index!;
        setImageIndex(index);

    });

    return (
        <Container {...rest}>
            <ImageIndexes>
                {
                    imagesUrl.map((_, index) => (
                        <ImageIndex
                            key={String(index)}
                            active={index === imageIndex}
                        />
                    ))
                }
            </ImageIndexes>


            <FlatList
                data={imagesUrl}
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage
                            source={{ uri: item }}
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                )}
                keyExtractor={(key) => key}
                horizontal
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={indexChanged.current}
            />



        </Container>
    );
}