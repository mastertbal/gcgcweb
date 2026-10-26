type MissingCogentProps = {
    head: string;
    info1: string;
    info2: string;
}

const MissingCogent = ({ head, info1, info2 }: MissingCogentProps) => {
    return (
        <div className='missing-cogent'>
            <h3>{head}</h3>
            <p className='info1'>{info1}</p>
            <p className='info2'>{info2}</p>
        </div>
    )
}

export default MissingCogent