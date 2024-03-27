

export interface ParagraphProps  {
    text:string,
    className?:string
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
    text,
    className
}) => {

    return (
        <p className={`paragraph ${className}`}>
            {text}
        </p>
    )
}

export default Paragraph