import styled from "styled-components/native";
import React, { FunctionComponent, useRef } from "react";
import BottomSheet from "reanimated-bottom-sheet";

// components
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";
import IssuedCredentialItem from "./CreateCredentials";
import RegularText from "../Texts/RegularText";

const IssueCredentialBackground = styled.View`
    width: 100%;
    padding: 15px;
    background-color: ${colors.white};
`;

const IssueCredentialRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-horizontal: 25px;
`;

const IssuedCredentialsList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height: 80%;
    padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

// types
import { CreateCredentialsSectionProps } from "./types";

const CreateCredentialsSection: FunctionComponent<CreateCredentialsSectionProps> = (props) => {
    console.log(props)
    const sheetRef = useRef<BottomSheet>(null);

    const renderContent = () => {
        return (
            <IssueCredentialBackground>
                <IssueCredentialRow style={{ marginBottom: 25, marginTop: 20 }}>
                    <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                        Issue Credential To
                    </RegularText>
                    <TextButton onPress={() => alert("Add")}>
                        <SmallText textStyles={{
                            fontWeight: "bold",
                            color: colors.tertiary,
                        }}>
                            + Add
                        </SmallText>
                    </TextButton>
                </IssueCredentialRow>
                <IssuedCredentialsList
                    data={props.data}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    contentContainerStyle={{
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    }}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={({ item }: any) => <IssuedCredentialItem {...item} />}
                />
            </IssueCredentialBackground>
        )
    }

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[250, 45]}
            borderRadius={25}
            initialSnap={1}
            enabledInnerScrolling={true}
            enabledContentTapInteraction={false}
            renderContent={renderContent}
        />
    );
};

export default CreateCredentialsSection;