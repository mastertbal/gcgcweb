type InfoProps = {
    text: string
}

const Info = ({ text }: InfoProps) => {
    return (
        <span className="info">{text}</span>
    )
}

export default Info