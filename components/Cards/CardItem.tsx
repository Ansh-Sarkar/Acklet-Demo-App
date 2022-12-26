import { View } from "react-native";
import styled from "styled-components/native";
import React, { FunctionComponent } from "react";

// components
import { colors } from "../colors";
import { ScreenWidth } from "../shared";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import CardBg from "./../../assets/bgs/background_transparent.png";

const CardBackground = styled.ImageBackground`
    height: 75%;
    overflow: hidden;
    margin-right: 25px;
    resize-mode: cover;
    border-radius: 25px;
    width: ${ScreenWidth * 0.67}px;
    background-color: ${colors.accent};
`;

const CardTouchable = styled.TouchableHighlight`
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    flex: 1;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
`;

const CardRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.Image`
    flex: 1;
    width: 100%;
    height: 80%;
    resize-mode: contain;
`;

// types
import { CardProps } from "./types";

const CardItem: FunctionComponent<CardProps> = (props) => {
    const handlePress = () => { };
    return (
        <CardBackground source={CardBg}>
            <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{ color: colors.white }} >
                            Credential : {props.accountNo}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{ flex: 3 }}>
                            <SmallText
                                textStyles={{
                                    marginBottom: 5,
                                    color: colors.graylight
                                }}
                            >
                                Holder Name
                            </SmallText>
                            <RegularText
                                textStyles={{
                                    fontSize: 19
                                }}
                            >
                                {props.balance}
                            </RegularText>
                        </View>
                        <Logo source={props.logo} />
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;