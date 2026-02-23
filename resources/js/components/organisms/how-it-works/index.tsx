// ─── Brand Colours ────────────────────────────────────────────────────────────
const BRAND = {
    blue: '#4260E2',
    purple: '#9006FC',
    teal: '#53D1BF',
    orange: '#F94F02',
    yellow: '#FFF231',
};

// ─── Steps Data ───────────────────────────────────────────────────────────────
const steps = [
    {
        step: '01',
        color: BRAND.blue,
        title: 'Get in Touch',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        step: '02',
        color: BRAND.teal,
        title: 'Personal Consultation',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.',
    },
    {
        step: '03',
        color: BRAND.orange,
        title: 'Tailored Solutions',
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
    },
    {
        step: '04',
        color: BRAND.purple,
        title: 'Peace of Mind',
        body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Header ── */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <span
                        className="mb-4 inline-block rounded-full px-4 py-1 text-xs font-bold tracking-widest text-white uppercase"
                        style={{ background: BRAND.blue }}
                    >
                        How It Works
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Your journey,{' '}
                        <span style={{ color: BRAND.blue }}>
                            four simple steps.
                        </span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris.
                    </p>
                </div>

                {/* ── Steps ── */}
                <div className="relative">
                    {/* Connector line (desktop) */}
                    <div
                        aria-hidden
                        className="absolute top-10 left-0 hidden h-[2px] w-full lg:block"
                        style={{
                            background: `linear-gradient(to right, ${BRAND.blue}, ${BRAND.teal}, ${BRAND.orange}, ${BRAND.purple})`,
                            opacity: 0.25,
                        }}
                    />

                    <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
                        {steps.map(({ step, color, title, body }) => (
                            <div
                                key={step}
                                className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
                            >
                                {/* Step bubble */}
                                <div
                                    className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 transition-shadow duration-300 group-hover:shadow-md"
                                    style={{
                                        outline: `2px solid ${color}`,
                                    }}
                                >
                                    {/* number */}
                                    <span
                                        className="font-mono text-2xl font-bold"
                                        style={{ color }}
                                    >
                                        {step}
                                    </span>
                                    {/* outer glow ring on hover */}
                                    <span
                                        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        style={{
                                            boxShadow: `0 0 0 6px ${color}20`,
                                        }}
                                    />
                                </div>

                                {/* Vertical connector (mobile) */}
                                <div
                                    aria-hidden
                                    className="mb-6 h-8 w-[2px] lg:hidden"
                                    style={{ background: color, opacity: 0.3 }}
                                />

                                {/* Content */}
                                <div>
                                    <div
                                        className="mb-3 hidden h-[3px] w-8 rounded-full transition-all duration-300 group-hover:w-14 lg:block"
                                        style={{ background: color }}
                                    />
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                        {body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA strip ── */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                        style={{ background: BRAND.blue }}
                    >
                        Start your journey
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
