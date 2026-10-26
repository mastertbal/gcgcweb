type WhereValueChildProps = {
    imageUrl: string;
    title: string;
    desc: string;
}

const WhereValueChild = ({ imageUrl, title, desc }: WhereValueChildProps) => {
    return (
        <div className='wvc-comp'>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default WhereValueChild