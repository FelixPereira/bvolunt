import { Container } from "./style";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CustomButton({ children }: CustomButtonProps) {
  return <Container>{children}</Container>;
}
