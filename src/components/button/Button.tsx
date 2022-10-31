import "./Button.css";

interface IButtonProps {
    buttonText: string,
    onClick: () => {},
    fill?: boolean,
    size?: 'medium' | 'large',
}

Button.defaultProps = {
    fill: false,
    size: 'medium',
}

export default function Button(props: IButtonProps) {
    return (
        <button
            data-testid="btn"
            onClick={props.onClick}
            className={`btn ${props.fill ? 'fill' : ''} ${props.size === 'large' ? 'large' : ''}`}
        >
            {props.buttonText}
        </button>
    )
}
