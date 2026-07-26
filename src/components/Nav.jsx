import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ToothMark from './ToothMark';
import { PrimaryButton } from './Button';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ page, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-display text-lg font-bold text-ink"
        >
          <ToothMark className="h-8 w-8 text-brand" />
          Bright&amp;Well Dental
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="group relative py-1 text-sm font-medium text-ink/80 transition-colors hover:text-brand"
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100 ${
                  page === link.id ? 'scale-x-100' : ''
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton onClick={() => go('contact')}>Book an appointment</PrimaryButton>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-line p-2 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-white px-5 py-4 md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                page === link.id ? 'bg-sky text-brand' : 'text-ink/80 hover:bg-mist'
              }`}
            >
              {link.label}
            </button>
          ))}
          <PrimaryButton onClick={() => go('contact')} className="mt-2 w-full">
            Book an appointment
          </PrimaryButton>
        </nav>
      )}
    </header>
  );
}
