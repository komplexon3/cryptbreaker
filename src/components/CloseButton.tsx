import { Icon, IconProps } from '@chakra-ui/react';
import { chakra, forwardRef, SystemStyleObject, HTMLChakraProps } from '@chakra-ui/system';

const CloseIcon: React.FC<IconProps> = (props) => (
  <Icon focusable='false' aria-hidden {...props}>
    <path
      fill='currentColor'
      d='M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
    />
  </Icon>
);

interface CloseButtonProps extends HTMLChakraProps<'button'> {
  /**
   * If `true`, the close button will be disabled.
   */
  isDisabled?: boolean;
}

/**
 * A button with a closing icon.
 */
export const CloseButton = forwardRef<CloseButtonProps, 'button'>((props, ref) => {
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
      <CloseIcon width='1em' height='1em' />
    </chakra.button>
  );
});
