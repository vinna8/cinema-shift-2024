import * as StyledUIKit from '../../style/StyledUIKit';

const Button = ({ text }: { text: string }) => {
    return (
        <StyledUIKit.Button>{ text }</StyledUIKit.Button>
    )
}

export default Button;