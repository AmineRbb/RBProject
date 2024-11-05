
export default function Footer() {
    return (
        <p className="text-sm">
            © {new Date().getFullYear()} By{' '}
            <span className="font-semibold text-blue-800 hover:text-blue-400 transition-colors duration-300">
            Amine RABBOUCH
            </span>
        </p>
    )
}