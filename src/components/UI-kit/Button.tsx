import * as StyledUIKit from '../UI-kit/StyledUIKit';

const Button = ({ text }: { text: string }) => {
    return (
        <StyledUIKit.Button>{ text }</StyledUIKit.Button>
    )
}

export default Button;