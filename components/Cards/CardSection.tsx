import styled from "styled-components/native";
import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

// components
const CardList = styled.FlatList`
    flex: 1;
    width: 100%;
    padding-left: 25px;
    padding-bottom: 15px;
`;
import CardItem from "./CardItem";

// types
import { CardSectionProps } from "./types";

const CardSectionBackground = styled.View`
    flex: 2;
    width: 100%;
    padding-top: 5px;
    padding-horizontal: 25px;
`;

const CardRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CardSection: FunctionComponent<CardSectionProps> = (props) => {
    return (
        <>
            <CardSectionBackground>
                <CardRow style={{ marginBottom: 25 }}>
                    <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                        Your Credentials
                    </RegularText>
                    <SmallText textStyles={{ color: colors.secondary }}>
                        Verified
                        <Ionicons name="caret-down" size={13} color={colors.graydark} />
                    </SmallText>
                </CardRow>
                <CardList
                    data={props.data}
                    horizontal={true}
                    showHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingRight: 25,
                        alignItems: 'center',
                    }}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={({ item }: any) => <CardItem {...item} />}
                />
            </CardSectionBackground>
        </>
    );
};

export default CardSection;