import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

// ─── Brand Colours ────────────────────────────────────────────────────────────
const BRAND = {
    blue: '#4260E2',
    purple: '#9006FC',
    teal: '#53D1BF',
    orange: '#F94F02',
    yellow: '#FFF231',
};

// ─── Reasons Data ─────────────────────────────────────────────────────────────
const reasons = [
    {
        accent: BRAND.blue,
        title: 'Honest & Ethical Guidance',
        body: "Our advice is based on what is truly best for you — not simply what is available. We never recommend options that don't align with your goals.",
    },
    {
        accent: BRAND.teal,
        title: 'Real-Life Study Experience',
        body: 'Our consultants have lived the international study journey themselves. We combine first-hand experience with professional expertise to guide you effectively.',
    },
    {
        accent: BRAND.orange,
        title: 'Personalised Support',
        body: "Every student's situation is unique. We take the time to understand your background, goals, and circumstances before making any recommendations.",
    },
    {
        accent: BRAND.purple,
        title: 'Transparent & Practical Advice',
        body: 'We offer clear, straightforward guidance at every stage of your journey — from course selection and visa applications to settling into life abroad.',
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WhySection() {
    return (
        <section id="why-mula" className="bg-[#F5F5F7] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Header ── */}
                <div className="mb-4">
                    <span
                        className="mb-3 inline-block text-xs font-bold tracking-widest uppercase"
                        style={{ color: BRAND.blue }}
                    >
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Why Choose{' '}
                        <span style={{ color: BRAND.blue }}>MULA Study</span>
                    </h2>
                </div>

                {/* ── Two intro paragraphs ── */}
                <div className="mb-16 grid gap-6 lg:grid-cols-2">
                    <p className="text-base leading-relaxed text-gray-500">
                        At MULA Study, we believe every student deserves honest
                        and ethical guidance. Our advice is based on what is
                        truly best for you — not simply what is available. We
                        combine real-life international study experience with
                        personalised support to help you make informed decisions
                        with confidence.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500">
                        We understand that studying abroad is not just about
                        choosing a course or a country; it is about shaping your
                        future. That is why we take a student-first approach,
                        offering practical, transparent, and tailored guidance
                        at every stage of your journey.
                    </p>
                </div>

                {/* ── Reasons 2×2 grid ── */}
                <div className="mb-16 grid gap-6 sm:grid-cols-2">
                    {reasons.map(({ accent, title, body }) => (
                        <div
                            key={title}
                            className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                        >
                            {/* Accent dot */}
                            <div className="mt-1 shrink-0">
                                <div
                                    className="h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                                    style={{ background: accent }}
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900">
                                    {title}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                    {body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA Banner ── */}
                <div
                    className="flex flex-col items-center gap-6 rounded-3xl px-8 py-12 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
                    style={{ background: '#0F172A' }}
                >
                    <div>
                        <p
                            className="mb-1 text-xs font-bold tracking-widest uppercase"
                            style={{ color: BRAND.yellow }}
                        >
                            Ready to explore your study abroad options?
                        </p>
                        <h3 className="text-2xl font-bold text-white sm:text-3xl">
                            Book a consultation with{' '}
                            <span style={{ color: BRAND.yellow }}>
                                MULA Study
                            </span>{' '}
                            today.
                        </h3>
                        <p className="mt-2 text-sm text-white/50">
                            Take the first step toward your future — we'll guide
                            you every step of the way.
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-3">
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                            style={{ background: BRAND.yellow }}
                        >
                            Book a consultation{' '}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href="#our-services"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/50 hover:text-white"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
