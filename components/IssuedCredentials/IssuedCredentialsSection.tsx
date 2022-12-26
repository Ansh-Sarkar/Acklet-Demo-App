import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import React, { FunctionComponent } from "react";

// types
import { IssuedCredentialsSectionProps } from "./types";

// components
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";
import IssuedCredentialsItem from "./IssuedCredentialsItem";

const IssuedCredentialsSectionBackground = styled.View`
    flex: 2;
    width: 100%;
    padding-top: 5px;
    padding-horizontal: 25px;
`;

const IssuedCredentialsRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const IssuedCredentialsList = styled.FlatList`
    width: 100%;
`;

const IssuedCredentialsSection: FunctionComponent<IssuedCredentialsSectionProps> = (props) => {
    return (
        <IssuedCredentialsSectionBackground>
            <IssuedCredentialsRow style={{ marginBottom: 25 }}>
                <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                    Transactions
                </RegularText>
                <SmallText textStyles={{ color: colors.secondary }}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.graydark} />
                </SmallText>
            </IssuedCredentialsRow>
            <IssuedCredentialsList
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <IssuedCredentialsItem {...item} />}
            >
            </IssuedCredentialsList>
        </IssuedCredentialsSectionBackground>
    );
};

export default IssuedCredentialsSection;