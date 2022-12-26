import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";

// components
import { colors } from "../colors";
import Profile from "../Header/Profile";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";

const CreateCredentialsItemContainer = styled.TouchableHighlight`
    height: 130px;
    width: ${ScreenWidth * 0.24}px;
    padding: 10px;
    border-radius: 15px;
    justify-content: space-around;
    margin: 0px 10px 10px 0px;
`;

// types
import { CreateCredentialsProps } from "./types";

const CreateCredentialsItem: FunctionComponent<CreateCredentialsProps> = (props) => {
    return (
        <CreateCredentialsItemContainer
            underlayColor={colors.secondary}
            style={{ backgroundColor: props.background }}
            onPress={() => { alert("Issue a credential !"); }}
        >
            <>
                <Profile img={props.img} imgContainerStyle={{
                    marginBottom: 20,
                }} />
                <SmallText
                    textStyles={{
                        textAlign: "left",
                        color: colors.white,
                        fontSize: 12,
                    }}
                >
                    {props.name}
                </SmallText>
                <RegularText
                    textStyles={{
                        color: colors.white,
                        textAlign: "left",
                        fontSize: 13,
                    }}
                >
                    {props.amount}
                </RegularText>
            </>
        </CreateCredentialsItemContainer>
    );
};

export default CreateCredentialsItem;