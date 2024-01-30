
export interface TitleProps {
    titleText: string
}

export const Title = ({titleText}: TitleProps) => {

    return (
        <>
            <div className="title">
                <h1 className="h1-title">{titleText}</h1>
            </div>
        </>
    )
}