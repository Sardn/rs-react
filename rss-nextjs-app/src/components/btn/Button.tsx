import { type FC, type ReactNode } from 'react';
import styles from './Button.module.css';
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  testId?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  testId = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
