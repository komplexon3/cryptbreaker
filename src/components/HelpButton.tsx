import { Icon, IconProps } from '@chakra-ui/react';
import { chakra, forwardRef, HTMLChakraProps, SystemStyleObject } from '@chakra-ui/system';

const HelpIcon: React.FC<IconProps> = (props) => (
  <Icon focusable='false' aria-hidden {...props}>
    <g stroke='currentColor' strokeWidth='1.5'>
      <path
        strokeLinecap='round'
        fill='none'
        d='M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'
      />
      <path
        fill='none'
        strokeLinecap='round'
        d='M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'
      />
      <circle fill='none' strokeMiterlimit='10' cx='12' cy='12' r='11.25' />
    </g>
  </Icon>
);

interface HelpButtonProps extends HTMLChakraProps<'button'> {
  /**
   * If `true`, the close button will be disabled.
   */
  isDisabled?: boolean;
}

/**
 * A button with a question mark icon.
 */
export const HelpButton = forwardRef<HelpButtonProps, 'button'>((props, ref) => {
  const baseStyle: SystemStyleObject = {
    outline: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    padding: '0.275em',
    borderRadius: '0.275em',
  };

  return (
    <chakra.button
      type='button'
      aria-label='Close'
      ref={ref}
      __css={{
        ...baseStyle,
      }}
      {...props}
    >
      <HelpIcon width='1em' height='1em' />
    </chakra.button>
  );
});
