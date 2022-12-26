import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import React, { FunctionComponent } from "react";

import { colors } from "../components/colors";
import { Container } from "../components/shared";
import { CardData } from "../constants/CardData";
import CardSection from "../components/Cards/CardSection";
import { CreateCredentialsData } from "../constants/CreateCredentialsData";
import { IssuedCredentialsData } from "../constants/IssuedCredentialsData";
import CreateCredentialsSection from "../components/CreateCredentials/CreateCredentialsSection";
import IssuedCredentialsSection from "../components/IssuedCredentials/IssuedCredentialsSection";

const HomeContainer = styled(Container)`
    flex: 1;
    width : 100%;
    background-color: ${colors.graylight};
`;

const Home: FunctionComponent = () => {
    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={CardData} />
            <IssuedCredentialsSection data={IssuedCredentialsData} />
            <CreateCredentialsSection data={CreateCredentialsData} />
        </HomeContainer>
    );
};

export default Home;