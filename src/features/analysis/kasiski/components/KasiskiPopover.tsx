import {
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useKasiskiContext } from '../contexts';

export const KasiskiPopover: FC = () => {
  const { selectedKasikiItem, setSelectedKasikiItem } = useKasiskiContext();

  return (
    <Popover
      isOpen={!!selectedKasikiItem}
      onClose={() => setSelectedKasikiItem(undefined)}
      isLazy
      lazyBehavior='unmount'
    >
      <PopoverAnchor>
        <div style={{ display: 'hidden' }} />
      </PopoverAnchor>

      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader></PopoverHeader>
        <PopoverBody>{selectedKasikiItem?.groups ?? null}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
