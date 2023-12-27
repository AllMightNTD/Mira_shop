import {
    FormControl,
    FormControlProps,
    FormHelperText,
    OutlinedInput,
    OutlinedInputProps,
    Typography,
    outlinedInputClasses,
    styled,
} from '@mui/material';
import { FieldError, FieldValues, UseControllerProps, useController } from 'react-hook-form';

type AddControlProps = {
    helperText?: string | JSX.Element;
    label?: string;
    fieldError?: FieldError | boolean;
};

type MyInputProps<T extends FieldValues> = UseControllerProps<T> &
    OutlinedInputProps &
    AddControlProps & {
        controlProps?: FormControlProps;
    };

const InputCommon = <T extends FieldValues>({
    name,
    control,
    defaultValue,
    fullWidth,
    label,
    type = 'text',
    placeholder,
    helperText,
    controlProps,
    required,
    ...props
}: MyInputProps<T>) => {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
    } = useController({ name, control, defaultValue });
    return (
        <FormControl sx={{ width: '100%' }}>
            <Typography
                sx={{
                    color: error ? '#d32f2f' : 'initial',
                }}
            >
                {required ? (
                    <>
                        {label}
                        <span style={{ ...styleStar }}>*</span>
                    </>
                ) : (
                    label
                )}
            </Typography>
            <InputStyled
                type={type}
                placeholder={placeholder}
                {...inputProps}
                inputRef={ref}
                error={!!error}
            />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
        </FormControl>
    );
};

const InputStyled = styled(OutlinedInput)(({ theme }) => ({
    [`&.${outlinedInputClasses.disabled}`]: {
        backgroundColor: theme.palette.grey[300],
    },
    height: '50px !important',
    marginTop: '4px',
    width: '100%',
    outline: 'none !important',
    borderRadius: '5px',
    overflow: 'hidden',
    fontSize: '16px',
    border: '1px solid #000',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '@media (max-width: 600px)': {
        fontSize: '14px',
    },
}));

const styleStar = {
    marginLeft: '2px',
};

export { InputCommon };
