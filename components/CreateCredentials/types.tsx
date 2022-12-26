import { ImageSourcePropType } from "react-native";

export interface CreateCredentialsProps {
    id: number;
    name: string;
    amount: string;
    background: string;
    img: ImageSourcePropType;
}

export interface CreateCredentialsSectionProps {
    data: Array<CreateCredentialsProps>;
}