import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ToothMark from './ToothMark';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <ToothMark className="h-7 w-7 text-brand" />
            Bright&amp;Well Dental
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Friendly, modern dental care for every member of the family — from first checkups to
            confident smiles.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {['home', 'about', 'services', 'gallery', 'contact'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => onNavigate(id)}
                  className="capitalize text-white/60 transition-colors hover:text-white"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              (555) 204-8890
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              hello@brightwelldental.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              482 Maple Grove Ave, Riverside
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Hours
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-teal" />
              Mon–Fri: 8am – 6pm
            </li>
            <li className="pl-6">Saturday: 9am – 2pm</li>
            <li className="pl-6">Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Bright&amp;Well Dental. All rights reserved.
      </div>
    </footer>
  );
}
