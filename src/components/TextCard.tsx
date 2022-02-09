import { Card } from '@/components';
import { Skeleton, Text } from '@chakra-ui/react';

interface TextCardProps {
  title: string;
  text: string;
  skeletonIfEmpty?: boolean;
}

export const TextCard: React.FC<TextCardProps> = ({ title, text, skeletonIfEmpty }) => {
  return (
    <Card title={title}>
      {skeletonIfEmpty && text.length === 0 ? (
        <Skeleton>
          <Text>Filler</Text>
        </Skeleton>
      ) : (
        <Text fontFamily={'monospace'} fontSize={'1rem'}>
          {text}
        </Text>
      )}
    </Card>
  );
};
