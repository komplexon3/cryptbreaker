import { Textarea } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

import { Card } from '@/components';

interface TextEntryCardProps {
  title: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholderText?: string;
}

export const TextEntryCard: React.FC<TextEntryCardProps> = ({
  title,
  onChange,
  placeholderText,
}) => {
  return (
    <Card title={title}>
      <Textarea onChange={onChange} placeholder={placeholderText} />
    </Card>
  );
};
