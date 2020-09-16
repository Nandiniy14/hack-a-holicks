import * as React from 'react';
import { IUserLoginDetailsProps } from './types/IUserLoginDetailsProps';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

export const UserLoginDetails: React.FunctionComponent<IUserLoginDetailsProps> = (props: IUserLoginDetailsProps) => {
    
const [username, setUserName] = React.useState("");
const [password, setPassword] = React.useState("");

const handleSubmit = (event: any): void => {
    props.fetchPHDOneDetails();
    props.onNavigate('/phd/v1');
}
const validateFormFields = (): boolean => {
    return username.length > 0 && password.length > 0;
}

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username">
                    <FormLabel>Emp ID</FormLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormLabel>Company</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block disabled={!validateFormFields()} type="submit">
                    Login
                </Button>
            </form>
        </div>
      );
};