
type Props = {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <div className="bg-white sticky top-0 z-10">
                    <div className="MontserratSemiTitle p-3 ml-5 uppercase font-bold">
                        {title}
                    </div>
            </div>
    )
}