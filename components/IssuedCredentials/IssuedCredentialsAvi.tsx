import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import React, { FunctionComponent } from "react";

// components
import { colors } from "../colors";

const StyledView = styled.View`
    width: 45px;
    height: 45px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

// types
import { IssuedCredentialsAviProps } from "./types";

const IssuedCredentialsAvi: FunctionComponent<IssuedCredentialsAviProps> = (props) => {
    return (
        <StyledView style={{
            backgroundColor: props.background
        }}>
            <Ionicons name={props.icon} size={25} color={colors.white} />
        </StyledView>
    );
};

export default IssuedCredentialsAvi;