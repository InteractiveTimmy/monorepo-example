import type { Props } from './types'

const Button = (props: Props) => {
    const { text } = props;
    const [value, setValue] = useState('something');

    return (
        <button>{value} - {text}</button>
    )
};

export default Button;