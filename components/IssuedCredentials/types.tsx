export interface IssuedCredentialsProps {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    date: string;
    art: {
        icon: string;
        background: string;
    }
}

export interface IssuedCredentialsSectionProps {
    data: Array<IssuedCredentialsAviProps>;
}

export interface IssuedCredentialsAviProps {
    icon: any;
    background: any;
}
