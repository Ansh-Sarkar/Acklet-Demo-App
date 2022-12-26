import { View } from "react-native";
import styled from "styled-components/native";
import React, { FunctionComponent } from "react";

// components
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import IssuedCredentialsAvi from "./IssuedCredentialsAvi";
import RegularText from "../Texts/RegularText";

const IssuedCredentialsRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
    justify-content: space-between;
`;

const LeftView = styled.View`
    flex: 2;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

const RightView = styled.View`
    flex: 1;
`;

// types
import { IssuedCredentialsProps } from "./types";

const IssuedCredentialsItem: FunctionComponent<IssuedCredentialsProps> = (props) => {
    return (
        <IssuedCredentialsRow>
            <LeftView>
                <IssuedCredentialsAvi
                    background={props.art.background}
                    icon={props.art.icon}
                />
                <View style={{ marginLeft: 10 }}>
                    <RegularText
                        textStyles={{
                            color: colors.secondary,
                            textAlign: "left",
                            marginBottom: 5,
                        }}
                    >
                        {props.title}
                    </RegularText>
                    <SmallText
                        textStyles={{
                            textAlign: "left",
                            color: colors.graydark,
                        }}
                    >
                        {props.subtitle}
                    </SmallText>
                </View>
            </LeftView>
            <RightView>
                <RegularText
                    textStyles={{
                        color: colors.secondary,
                        textAlign: "right",
                        marginBottom: 5,
                    }}
                >
                    {props.amount}
                </RegularText>
                <SmallText
                    textStyles={{
                        textAlign: "right",
                        color: colors.graydark,
                    }}
                >
                    {props.date}
                </SmallText>
            </RightView>
        </IssuedCredentialsRow>
    );
};

export default IssuedCredentialsItem;