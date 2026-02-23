import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import {
    ArrowRight,
    Star,
    Lightbulb,
    BookOpenCheck,
    Trophy,
} from 'lucide-react';
import ContentScholarshipMentoring from './components/content-scholarship-mentoring';
import HowItWorks from '@/components/organisms/how-it-works';

// ─── Brand ────────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const PURPLE = '#9006FC';
const YELLOW = '#FFF231';

const benefits = [
    {
        icon: Star,
        title: 'LPDP Mentoring',
        desc: 'Personalised coaching from LPDP awardees — from essay writing to selection sessions and interviews.',
    },
    {
        icon: Trophy,
        title: 'Australia Awards',
        desc: 'Expert guidance on Australia Awards eligibility, application strategy, and interview preparation.',
    },
    {
        icon: Lightbulb,
        title: 'Research Proposal',
        desc: 'We help you craft compelling research proposals and study objectives that stand out to selection committees.',
    },
    {
        icon: BookOpenCheck,
        title: 'Essay & CV Review',
        desc: 'Detailed feedback on your personal statement, CV, and motivation letters from experienced mentors.',
    },
];

export default function ScholarshipMentoring() {
    return (
        <>
            <Head title="Scholarship Mentoring – Mula Study" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />

                <main className="flex-1">
                    {/* ── Hero ── */}
                    <section className="relative overflow-hidden bg-[#0A0A14] py-28 sm:py-36">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-30"
                            style={{
                                background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${PURPLE}55, transparent)`,
                            }}
                        />
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center">
                                <span
                                    className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                                    style={{ background: PURPLE }}
                                >
                                    Our Services
                                </span>
                                <h1 className="mt-4 text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
                                    Scholarship{' '}
                                    <span style={{ color: YELLOW }}>
                                        Mentoring
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-white/60">
                                    Specialised mentoring for LPDP and Australia
                                    Awards applicants. Learn from scholars
                                    who've been through the exact process — and
                                    won.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{ background: BLUE }}
                                    >
                                        Start your scholarship journey{' '}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a
                                        href="#how-it-works"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
                                    >
                                        How it works
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ── Service Detail ── */}
                    <ContentScholarshipMentoring />
                    {/* ── Benefits Grid ── */}
                    <section className="bg-[#F5F5F7] py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-2xl text-center">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    What's{' '}
                                    <span style={{ color: PURPLE }}>
                                        included
                                    </span>
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-gray-500">
                                    Everything you need to write a compelling
                                    scholarship application — from strategy to
                                    interview.
                                </p>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {benefits.map(({ icon: Icon, title, desc }) => (
                                    <div
                                        key={title}
                                        className="group rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
                                    >
                                        <div
                                            className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                                            style={{
                                                background: `${PURPLE}15`,
                                            }}
                                        >
                                            <Icon
                                                className="h-6 w-6"
                                                style={{ color: PURPLE }}
                                            />
                                        </div>
                                        <h3 className="mb-2 text-base font-semibold text-gray-900">
                                            {title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-500">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ── */}
                    <HowItWorks />
                </main>

                <Footer />
            </div>
        </>
    );
}
