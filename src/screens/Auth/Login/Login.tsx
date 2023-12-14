import { Box, Button, Container } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginType } from '../../../lib/types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputCommon } from '../../../components/Input/InputCommon';

const validateLogin = yup
    .object({
        email: yup.string().email('Email sai định dạng').required('Email không được bỏ trống'),
        password: yup.string().required('Password không được bỏ trống'),
    })
    .required();
const Login: React.FC = () => {
    const { control, handleSubmit } = useForm<LoginType>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(validateLogin),
    });

    const onSubmit: SubmitHandler<LoginType> = async (value) => {
        console.log('value ', value);
    };
    return (
        <Container sx={{ ...styleContainer }}>
            <Box sx={{ ...styleFormLogin }} component="form" onSubmit={handleSubmit(onSubmit)}>
                <InputCommon
                    required
                    control={control}
                    name="email"
                    label="Email"
                    placeholder="Email...."
                />
                <InputCommon
                    required
                    control={control}
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password...."
                />
                <Button type="submit" variant="contained">
                    Contained
                </Button>
            </Box>
        </Container>
    );
};

const styleContainer = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
};
const styleFormLogin = {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    minWidth: '350px',
};
export { Login };
