import { useEffect, useState } from 'react';
import { useKasiskiContext } from '../contexts';
import { kasiskiItem } from '../types';

export const useKasiskiItem = (item: kasiskiItem) => {
  const {
    enabledKasiskiGroup,
    setEnabledKasiskiGroup,
    focusPersistent,
    setFocusPersistent,
    colorMap,
  } = useKasiskiContext();

  const groups = item.groups;
  const defaultColor = (() => {
    if (groups.length === 1) {
      return colorMap.get(groups[0]);
    } else if (groups.length > 1) {
      return '#4a5568'; // gray
    }
    return 'black';
  })();
  const [color, setColor] = useState(defaultColor);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    for (const group of groups) {
      if (enabledKasiskiGroup === group) {
        setEnabled(true);
        setColor(colorMap.get(group));
        return;
      }
    }
    // none of it's group were enabled -> needs to be set to the default
    setEnabled(false);
    setColor(defaultColor);
  }, [defaultColor, groups, enabledKasiskiGroup, colorMap]);

  let onFocusEnter = () => {};
  let onFocusLeave = () => {};
  let onClick = () => {};

  if (groups.length === 1) {
    onFocusEnter = () => {
      focusPersistent || setEnabledKasiskiGroup(groups[0]);
    };
    onFocusLeave = () => {
      focusPersistent || setEnabledKasiskiGroup('');
    };
    onClick = () => {
      if (groups.includes(enabledKasiskiGroup)) {
        setFocusPersistent(!focusPersistent);
      }
    };
  }

  return {
    character: item.character,
    color: color,
    enabled: enabled,
    onFocusEnter: onFocusEnter,
    onFocusLeave: onFocusLeave,
    onClick: onClick,
  };
};
