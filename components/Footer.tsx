import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f6f6f6] border-t border-[#a7d7f9] mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-sm text-[#54595d]">
          <p>
            Text is available under the{' '}
            <a 
              href="https://creativecommons.org/licenses/by-sa/4.0/" 
              className="text-[#0645ad] hover:underline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-ShareAlike License
            </a>; 
            additional terms may apply.
          </p>
          <div className="mt-2 flex gap-4">
            <Link href="/terms">
              <span className="text-[#0645ad] hover:underline">Terms & Conditions</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="text-[#0645ad] hover:underline">Privacy Policy</span>
            </Link>
            <Link href="/code-of-conduct">
              <span className="text-[#0645ad] hover:underline">Code of Conduct</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
