import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Star } from 'lucide-react';
import Reveal from '../components/Reveal';
import PhotoHero from '../components/PhotoHero';
import { PrimaryButton } from '../components/Button';
import { PHOTOS } from '../lib/images';

const INFO = [
  { icon: Phone, label: 'Phone', value: '(555) 204-8890' },
  { icon: Mail, label: 'Email', value: 'hello@brightwelldental.com' },
  { icon: MapPin, label: 'Address', value: '482 Maple Grove Ave, Riverside' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–6pm, Sat 9am–2pm' },
];

const TRUST = [
  { icon: ShieldCheck, label: 'HIPAA-compliant care' },
  { icon: Clock, label: 'Same-week appointments' },
  { icon: Star, label: '4.9-star patient rating' },
];

const initialForm = { name: '', email: '', phone: '', date: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PhotoHero
        image={PHOTOS.comfortHands(1600, 900)}
        imageAlt="A warm, reassuring visit at Bright&Well Dental"
        eyebrow="Get in touch"
        title="Let's find a time that works"
        subtitle="Reach out with a question or request an appointment below — we typically respond within one business day."
      />

      <section className="bg-mist pb-20 pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 md:grid-cols-2">
          {/* Info panel */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
              <div className="relative h-48">
                <img
                  src={PHOTOS.reception(900, 500)}
                  alt="Bright&Well Dental reception"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <div className="font-display text-lg font-bold">Visit us in Riverside</div>
                  <div className="text-sm text-white/80">Serving families since 2008</div>
                </div>
              </div>

              <div className="divide-y divide-line px-6">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky text-brand">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-ink">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line bg-sky/60 px-6 py-5">
                {TRUST.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs font-semibold text-ink/70">
                    <item.icon className="h-4 w-4 text-teal" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
              <div className="h-1.5 w-full bg-gradient-to-r from-brand to-teal" />

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-brand">
                      <ShieldCheck className="h-7 w-7" />
                    </div>
                    <h3 className="h3 mt-4">Request received!</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed">
                      Thanks, {form.name.split(' ')[0] || 'there'} — we'll reach out at{' '}
                      {form.email || 'the contact info you provided'} shortly to confirm your
                      visit.
                    </p>

                    {(form.date || form.message) && (
                      <div className="mt-6 w-full max-w-xs rounded-xl border border-line bg-mist p-4 text-left text-sm">
                        {form.date && (
                          <div className="flex justify-between py-1">
                            <span className="text-ink/50">Preferred date</span>
                            <span className="font-medium text-ink">{form.date}</span>
                          </div>
                        )}
                        {form.message && (
                          <div className="mt-1 border-t border-line pt-2 text-ink/70">
                            "{form.message}"
                          </div>
                        )}
                      </div>
                    )}

                    <button
                      onClick={() => {
                        setForm(initialForm);
                        setSubmitted(false);
                      }}
                      className="mt-6 text-sm font-semibold text-brand hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="h3">Request an appointment</h3>
                      <p className="mt-1 text-sm text-ink/60">
                        Fill this out and we'll confirm a time by phone or email.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                          Full name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jamie Rivera"
                          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jamie@email.com"
                        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                        Preferred date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                        What's going on?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us a bit about why you're visiting..."
                        className="w-full resize-none rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand"
                      />
                    </div>

                    <PrimaryButton type="submit" className="w-full">
                      Book an appointment <Send className="h-4 w-4" />
                    </PrimaryButton>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
