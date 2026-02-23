import { Head } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import { Award, BookOpen, Globe, Heart, Target, Users } from 'lucide-react';
import founderimg from '@/components/images/founder.jpeg';

// ─── Brand Palette ────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const TEAL = '#53D1BF';

// ─── Data ─────────────────────────────────────────────────────────────────────

const certificates = [
    {
        label: 'British Council Partner',
        sub: 'Official Partnership Certificate',
    },
    { label: 'PIER Accredited', sub: 'International Education Consultant' },
    { label: 'Australia Awards', sub: 'Authorised Referral Agency' },
    { label: 'LPDP Registered', sub: 'Scholarship Preparation Provider' },
];

const values = [
    {
        icon: Heart,
        title: 'Student-First',
        desc: "Every decision we make starts with one question: what's best for the student?",
    },
    {
        icon: Target,
        title: 'Results-Driven',
        desc: 'We measure our success by your milestones — acceptance letters, visas approved, dreams realised.',
    },
    {
        icon: Globe,
        title: 'Global Perspective',
        desc: 'A deep understanding of international education systems lets us match you with the right opportunity, anywhere in the world.',
    },
    {
        icon: BookOpen,
        title: 'Continuous Learning',
        desc: 'We stay at the forefront of scholarship and visa policies so you always receive the most current guidance.',
    },
    {
        icon: Users,
        title: 'Community',
        desc: 'Our alumni network spans the globe — once a Mula Study student, always part of our family.',
    },
    {
        icon: Award,
        title: 'Integrity',
        desc: 'Honest advice, transparent processes, and zero hidden fees — always.',
    },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionEyebrow({ label }: { label: string }) {
    return (
        <div className="mb-4 flex items-center gap-3">
            <span
                className="h-[2px] w-8 rounded-full"
                style={{ background: TEAL }}
            />
            <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {label}
            </span>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function About() {
    return (
        <>
            <Head title="About Us — Mula Study" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />

                <main className="flex-1">
                    {/* ════════════════════════════════════════════════════════
                        §1  HERO
                    ════════════════════════════════════════════════════════ */}
                    <section className="relative overflow-hidden py-28 sm:py-36">
                        {/* Soft gradient orb — top-right */}
                        <div
                            className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-10 blur-3xl"
                            style={{
                                background: `radial-gradient(circle, ${BLUE}, transparent 70%)`,
                            }}
                        />
                        {/* Soft gradient orb — bottom-left */}
                        <div
                            className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-10 blur-3xl"
                            style={{
                                background: `radial-gradient(circle, ${TEAL}, transparent 70%)`,
                            }}
                        />

                        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
                            <SectionEyebrow label="About Us" />

                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                Helping students reach{' '}
                                <span
                                    className="italic"
                                    style={{ color: BLUE }}
                                >
                                    the world.
                                </span>
                            </h1>

                            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                                Mula Study is an Indonesian education
                                consultancy dedicated to making studying abroad
                                accessible, clear, and achievable — regardless
                                of your starting point.
                            </p>
                        </div>
                    </section>
                    {/* ════════════════════════════════════════════════════════
                        §2  CERTIFICATES
                    ════════════════════════════════════════════════════════ */}
                    <section className="border-y border-border/40 bg-muted/20 py-14">
                        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                            {/* Label */}
                            <p className="mb-8 text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                                Accreditations &amp; Partnerships
                            </p>

                            {/* Certificate cards row */}
                            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                                {certificates.map((cert) => (
                                    <div
                                        key={cert.label}
                                        className="group flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background p-5 text-center transition-shadow duration-300 hover:shadow-md"
                                    >
                                        {/* Image placeholder — replace with <img src="..." /> */}
                                        <div
                                            className="flex h-20 w-full items-center justify-center rounded-xl"
                                            style={{
                                                background:
                                                    'linear-gradient(135deg, #f0f3ff 0%, #eaf8f6 100%)',
                                            }}
                                        >
                                            <Award
                                                className="h-8 w-8 opacity-30"
                                                style={{ color: BLUE }}
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-foreground">
                                                {cert.label}
                                            </p>
                                            <p className="mt-0.5 text-xs text-muted-foreground">
                                                {cert.sub}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    ;
                    {/* ════════════════════════════════════════════════════════
                        §3  FOUNDER
                    ════════════════════════════════════════════════════════ */}
                    <section className="py-24 sm:py-32">
                        {' '}
                        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                            <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:items-center">
                                {/* Photo card */}
                                <div className="mx-auto w-full max-w-xs lg:mx-0">
                                    <div className="group relative overflow-hidden rounded-2xl">
                                        {/* Gradient accent behind photo */}
                                        <div
                                            className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl opacity-30"
                                            style={{
                                                background: `linear-gradient(135deg, ${BLUE}, ${TEAL})`,
                                            }}
                                        />

                                        {/* Photo placeholder — replace src with the actual image */}
                                        <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-muted shadow-lg">
                                            {/* ↓  Replace this block with <img src="..." /> when photo is ready */}
                                            <img
                                                src={founderimg}
                                                alt="Founder"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Name tag below photo */}
                                    <div className="mt-5 text-center lg:text-left">
                                        <p className="text-lg font-semibold text-foreground">
                                            Utari Mijayanti
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Founder of MULA Study
                                        </p>

                                        {/* Thin accent */}
                                        <div
                                            className="mx-auto mt-3 h-[2px] w-10 rounded-full lg:mx-0"
                                            style={{
                                                background: `linear-gradient(to right, ${BLUE}, ${TEAL})`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Quote + Bio */}
                                <div className="self-center">
                                    <SectionEyebrow label="Meet the Founder" />

                                    {/* Pull quote */}
                                    <blockquote className="relative mb-8">
                                        <span
                                            className="absolute -top-4 -left-3 font-serif text-7xl leading-none opacity-10 select-none"
                                            style={{ color: BLUE }}
                                            aria-hidden
                                        >
                                            "
                                        </span>
                                        <p className="relative text-2xl leading-snug font-medium tracking-tight text-foreground sm:text-3xl">
                                            kata kata hari ini mbok kalo mau
                                            isi, kalau nda ta hapus
                                        </p>
                                    </blockquote>

                                    <div className="space-y-4 leading-relaxed text-muted-foreground">
                                        <p>
                                            Having experienced life as an
                                            international student in Australia,
                                            Utari Mijayanti understands
                                            firsthand the excitement,
                                            challenges, and uncertainties of
                                            studying abroad. From choosing the
                                            right course to navigating visa
                                            processes and adapting to a new
                                            culture, she knows that access to
                                            the right guidance can shape a
                                            student’s entire future. MULA Study
                                            was founded with a clear vision: to
                                            ensure that Balinese and Indonesian
                                            students regardless of background
                                            have access to world-class education
                                            abroad. Guided by this purpose,
                                            Utari is committed to providing
                                            ethical counselling, personalised
                                            support, and practical strategies
                                            that help students make informed and
                                            confident decisions about their
                                            academic journeys.
                                        </p>
                                        <p>
                                            After spending several years
                                            studying and working in Australia,
                                            Utari returned home with the mission
                                            to empower students with the
                                            knowledge, resources, and confidence
                                            needed to pursue global
                                            opportunities. Through trusted
                                            international partnerships and a
                                            student-first approach, MULA Study
                                            supports each individual not only in
                                            securing a place of study, but also
                                            in building a pathway toward
                                            long-term personal and professional
                                            growth. Utari believes that
                                            education is more than a
                                            qualification—it is a gateway to
                                            independence, perspective, and a
                                            better future. Through MULA Study,
                                            she continues to mentor aspiring
                                            international students, opening
                                            doors to brighter futures and
                                            helping them turn their dreams of
                                            studying abroad into achievable
                                            realities.
                                        </p>
                                    </div>

                                    {/* Credentials pills */}
                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {[
                                            'International Student Alumni (Australia)',
                                            'Founder of MULA Study',
                                            'Study Abroad Mentor',
                                        ].map((cred) => (
                                            <span
                                                key={cred}
                                                className="rounded-full border border-border px-3.5 py-1 text-xs font-medium text-foreground"
                                            >
                                                {cred}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ════════════════════════════════════════════════════════
                        §4  FOUNDER
                    ════════════════════════════════════════════════════════ */}
                    <section className="bg-muted/20 py-24 sm:py-32">
                        {' '}
                        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                            <div className="mb-14 text-center">
                                <SectionEyebrow label="What We Stand For" />
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                    Our core values
                                </h2>
                                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                                    These principles shape every conversation,
                                    every recommendation, and every outcome.
                                </p>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {values.map((v) => {
                                    const Icon = v.icon;
                                    return (
                                        <div
                                            key={v.title}
                                            className="group rounded-2xl border border-border/60 bg-background p-7 transition-shadow duration-300 hover:shadow-lg"
                                        >
                                            <div
                                                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                                                style={{
                                                    background: `${BLUE}14`,
                                                }}
                                            >
                                                <Icon
                                                    className="h-5 w-5"
                                                    style={{ color: BLUE }}
                                                />
                                            </div>
                                            <h3 className="mb-2 text-base font-semibold text-foreground">
                                                {v.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {v.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    {/* ════════════════════════════════════════════════════════
                        §5  CTA STRIP
                    ════════════════════════════════════════════════════════ */}
                    <section className="py-24 sm:py-28">
                        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Ready to start{' '}
                                <span style={{ color: BLUE }}>
                                    your journey?
                                </span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                                Book a free consultation and let's chart your
                                path together.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a
                                    href="/register"
                                    className="inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                                    style={{ background: BLUE }}
                                >
                                    Get started — it's free
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                                >
                                    Explore our services
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
