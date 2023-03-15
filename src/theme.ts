type colors = {
  background: string;
  textBody: string;
  textTitle: string;
  secTextTitle: string;
  primary: string;
  secondary: string;
  ternary: string;
  neutralGray: string;
  neutralBlue: string;
  neutralLight: string;
  positiveAction: string;
  negativeAction: string;
  negativeActionLight: string;
  warning: string;
};

interface ThemeProps {
  color: colors;
  typography: string;
  borderRadius: string;
  boxShadow: string;
  border: string;
}

export const theme: ThemeProps = {
  color: {
    background: '#F3F5F5',
    textBody: '#494B51',
    textTitle: '#101218',
    secTextTitle: '#F2F2F3',
    primary: '#EC2024',
    secondary: '#224099',
    ternary: '#ACD036',
    neutralGray: '#E8E8EA',
    neutralBlue: '#F4F9FE',
    neutralLight: '#ffffff',
    positiveAction: '#A0C619',
    negativeAction: '#D60000',
    negativeActionLight: '#D6000010',
    warning: '#F75B00',
  },
  typography: 'Roboto, sans-serif',
  borderRadius: '2px',
  boxShadow: '0 3px 13px #00000020',
  border: '2px solid #E8E8EA',
};
