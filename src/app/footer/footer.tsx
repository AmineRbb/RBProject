import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="text-sm text-gray-600">
                                © {currentYear} RBB Project
                            </div>
                            <div className="text-sm text-gray-600">
                                Créé par{' '}
                                <span className="font-semibold text-blue-600 hover:text-blue-500 transition-colors duration-200">
                                    Amine RABBOUCH
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                            <Link 
                                href="/tournoi" 
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Tournois
                            </Link>
                            <Link 
                                href="/player" 
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Joueurs
                            </Link>
                            <Link 
                                href="/teams" 
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Teams
                            </Link>
                            <Link 
                                href="/regles" 
                                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Règles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}