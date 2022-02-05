import { useKasiskiItem } from '../hooks';
import { kasiskiItem } from '../types';

interface KasiskiItemProps {
  kasiskiItem: kasiskiItem;
}

export const KasiskiItem: React.FC<KasiskiItemProps> = ({ kasiskiItem }) => {
  const { character, color, enabled, onFocusEnter, onFocusLeave, onClick } =
    useKasiskiItem(kasiskiItem);

  const element = (
    <span
      style={{ color: color }}
      onMouseEnter={(e) => {
        e.preventDefault();
        onFocusEnter();
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        onFocusLeave();
      }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {color === 'black' ? character : <b>{character}</b>}
    </span>
  );
  return enabled ? <span style={{ backgroundColor: '#F6E05E' }}>{element}</span> : element;
};
