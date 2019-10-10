export const gqlSignInQuery: string = `
    query($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            name
            email
            notificationCounter
            role
            token
        }
    }
`;