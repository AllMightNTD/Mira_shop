import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
type ButtonProps = {
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant?: 'text' | 'contained' | 'outlined';
    onClick?: () => void;
    children?: ReactNode;
    sx?: any;
    error?: boolean;
    type?: 'reset' | 'submit' | 'button';
    startIcon?: ReactNode;
    disabled?: true | false;
};

const ButtonCommon: React.FC<ButtonProps> = ({
    children,
    color,
    startIcon,
    disabled,
    type,
    variant,
    onClick,
}) => {
    return (
        <Button
            color={color}
            startIcon={startIcon}
            disabled={disabled}
            type={type}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export { ButtonCommon };
