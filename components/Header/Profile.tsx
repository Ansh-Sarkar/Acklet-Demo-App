import {
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
    View
} from "react-native";
import styled from "styled-components/native";
import React, { FunctionComponent } from "react";

import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// custom imports

const StyledView = styled.TouchableOpacity`
    flex-direction: column;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`;

const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <>
            <StyledView>
                <StyledImage style={props.imgStyle} source={props.img} />
            </StyledView>
        </>
    );
};

export default Profile