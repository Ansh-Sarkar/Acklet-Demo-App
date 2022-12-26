import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';
import React, { FunctionComponent } from "react";

// custom imports
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import background from "./../assets/bgs/background_v1.png";
import RegularButton from "../components/Buttons/RegularButton";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props  = StackScreenProps<RootStackParamList, "Welcome">;

const WelcomeContainer = styled(Container)`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    background-color: ${colors.secondary};
`;

const TopSection = styled.View`
    flex: 1;
    width: 100%;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    flex: 1;
    width: 100%;
    padding: 25px;
    justify-content: flex-end;
`;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background} />
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Competency Passbook
                    </BigText>
                    <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                        A Smart Digital Wallet to Store All Your Credentials in a Secure and Verifiable Manner.
                    </SmallText>
                    <RegularButton onPress={() => { navigation.navigate("Home")}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome