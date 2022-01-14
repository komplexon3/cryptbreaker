import { Card } from '@/components';

interface PlainTextBoxProps {
  text: string;
}

export const PlainTextBox: React.FC<PlainTextBoxProps> = ({ text }) => {
  return <Card title='Plain Text'>{text}</Card>;
};
