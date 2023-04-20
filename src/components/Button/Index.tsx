import { Button as ButtonBase, IButtonProps, IIconProps, Text } from 'native-base';
import { ReactElement, ReactNode } from 'react';


type Props = IButtonProps & {
  title?: string;
  _icon?: ReactNode;
  variant?: 'solid' | 'outline';
  width?: string;
  height?: string;

}

export function Button({ title, _icon, variant, width, height, ...rest}: Props){
  return(
    <ButtonBase
    w={width}
    h={height}
    bg={ variant === "outline" ? "transparent" : "green.700" }
    borderWidth={ variant === "outline" ? 1 : 0 }
    borderColor="green.500"
    rounded="md"
    _pressed={{
      bg:  variant === "outline" ? "gray.500" : "green.500"
    }}
    {...rest}>
      <Text color={ variant === "outline" ? "green.500" : "white" }
      fontFamily="heading"
      fontSize="md" >
        {title}
        {_icon}
      </Text>
    </ButtonBase>  );
}