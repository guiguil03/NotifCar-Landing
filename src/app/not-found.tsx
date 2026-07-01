import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#F0F4F8' }}>
      <h1 className="font-black text-gray-900 text-3xl mb-3">Page introuvable</h1>
      <p className="text-gray-500 text-sm mb-8">Cette page n'existe pas ou plus.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-bold text-sm text-white"
        style={{ background: 'linear-gradient(135deg, #3B7FFF, #5B9FFF)' }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
