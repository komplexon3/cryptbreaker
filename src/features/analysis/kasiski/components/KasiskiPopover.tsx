import {
  Button,
  Flex,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useKasiskiContext } from '../contexts';
import { kasiskiItem } from '../types';

export const KasiskiPopover: FC = () => {
  const {
    selectedKasikiItem,
    setSelectedKasikiItem,
    kasiskiGroupsToPositionsMap,
    colorMap,
    setEnabledKasiskiGroup,
  } = useKasiskiContext();

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
        {selectedKasikiItem &&
          (selectedKasikiItem.groups.length === 1 ? (
            <KasiskiPopoverSingleGroupContent
              item={selectedKasikiItem}
              groupsToPositions={kasiskiGroupsToPositionsMap}
              colorMap={colorMap}
            />
          ) : (
            <KasiskiPopoverMultipleGroupsContent
              item={selectedKasikiItem}
              groupsToPositions={kasiskiGroupsToPositionsMap}
              colorMap={colorMap}
              setFocusGroup={setEnabledKasiskiGroup}
            />
          ))}
      </PopoverContent>
    </Popover>
  );
};

interface KasiskiPopoverContentProps {
  item: kasiskiItem;
  groupsToPositions: Map<string, number[]>;
  colorMap: Map<string, string>;
  groupSegment?: string;
  setFocusGroup?: (group: string) => void;
}

const KasiskiPopoverSingleGroupContent: FC<KasiskiPopoverContentProps> = ({
  item,
  groupsToPositions,
  colorMap,
  groupSegment,
}) => {
  groupSegment = groupSegment ?? item.groups[0];
  if (!groupSegment) {
    throw Error('GroupSegment is undefined.');
  }

  return (
    <>
      <PopoverHeader color={colorMap.get(groupSegment)}>
        <b>{groupSegment}</b>
      </PopoverHeader>
      <PopoverBody>
        The segment {groupSegment} can be found at indices: <br />
        <b>{groupsToPositions.get(groupSegment)?.join(', ')}</b>
      </PopoverBody>
    </>
  );
};

const KasiskiPopoverMultipleGroupsContent: FC<KasiskiPopoverContentProps> = ({
  item,
  groupsToPositions,
  colorMap,
  setFocusGroup,
}) => {
  const [groupSegment, setGroupSegment] = useState('');

  if (!setFocusGroup) {
    throw Error('SetFocusGroup is undefined.');
  }

  const onSelectGroup = (group: string) => {
    setGroupSegment(group);
    setFocusGroup(group);
  };

  if (groupSegment === '') {
    return (
      <>
        <PopoverHeader>
          <b>Select segment</b>
        </PopoverHeader>
        <PopoverBody>
          The selected part belongs to multiple segments. Select the segment you want to consider:
          <Flex flexWrap='wrap'>
            {item.groups.map((g) => (
              <Button
                w='fit-content'
                marginRight='0.4rem'
                marginTop='0.4rem'
                onClick={(e) => {
                  e.preventDefault();
                  onSelectGroup(g);
                }}
              >
                {g}
              </Button>
            ))}
          </Flex>
        </PopoverBody>
      </>
    );
  }

  return (
    <KasiskiPopoverSingleGroupContent
      item={item}
      groupSegment={groupSegment}
      groupsToPositions={groupsToPositions}
      colorMap={colorMap}
    />
  );
};
