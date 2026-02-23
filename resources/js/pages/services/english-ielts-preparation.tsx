import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import {
    ArrowRight,
    Mic,
    PenLine,
    Headphones,
    ClipboardCheck,
} from 'lucide-react';
import ContentEnglishIelts from './components/content-english-ielts';
import HowItWorks from '@/components/organisms/how-it-works';

// ─── Brand ────────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const TEAL = '#53D1BF';
const YELLOW = '#FFF231';

const benefits = [
    {
        icon: PenLine,
        title: 'Writing Mastery',
        desc: 'Task 1 & Task 2 coaching with expert feedback on coherence, grammar, vocabulary, and band score strategies.',
    },
    {
        icon: Mic,
        title: 'Speaking Confidence',
        desc: 'Live mock speaking sessions with fluency coaching and cue card / discussion strategies.',
    },
    {
        icon: Headphones,
        title: 'Listening Techniques',
        desc: 'Proven techniques to tackle tricky IELTS listening formats — maps, forms, multiple choice, and more.',
    },
    {
        icon: ClipboardCheck,
        title: 'Full Mock Tests',
        desc: 'Timed, full-length practice tests under exam conditions with detailed band score breakdowns.',
    },
];

const steps = [
    {
        num: '01',
        title: 'Diagnostic Test',
        desc: 'Sit a free diagnostic test so we can identify your current band score and areas needing the most improvement.',
    },
    {
        num: '02',
        title: 'Personalised Study Plan',
        desc: 'We create a study plan tailored to your target band score and exam date.',
    },
    {
        num: '03',
        title: 'Intensive Practice',
        desc: 'Weekly lessons focusing on your weak skills, supported by expert feedback and practice materials.',
    },
    {
        num: '04',
        title: 'Exam Readiness',
        desc: 'Final mock tests, pacing strategies, and exam-day tips to walk in calm and confident.',
    },
];

export default function EnglishIeltsPreparation() {
    return (
        <>
            <Head title="English & IELTS Preparation – Mula Study" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />

                <main className="flex-1">
                    {/* ── Hero ── */}
                    <section className="relative overflow-hidden bg-[#0A0A14] py-28 sm:py-36">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-30"
                            style={{
                                background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${BLUE}55, transparent)`,
                            }}
                        />
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center">
                                <span
                                    className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                                    style={{ background: BLUE }}
                                >
                                    Our Services
                                </span>
                                <h1 className="mt-4 text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
                                    English & IELTS{' '}
                                    <span style={{ color: YELLOW }}>
                                        Preparation
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-white/60">
                                    Achieve the band score you need with expert
                                    coaching, proven techniques, and
                                    personalised practice plans — whether your
                                    target is 6.5, 7.0, or 8.0+.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{ background: BLUE }}
                                    >
                                        Start preparing now{' '}
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
                    <ContentEnglishIelts />
                    {/* ── Benefits Grid ── */}
                    <section className="bg-[#F5F5F7] py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-2xl text-center">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    All four{' '}
                                    <span style={{ color: BLUE }}>
                                        skills covered
                                    </span>
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-gray-500">
                                    Writing, Speaking, Listening, and Reading —
                                    with focused coaching in each area.
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
                                            style={{ background: `${BLUE}15` }}
                                        >
                                            <Icon
                                                className="h-6 w-6"
                                                style={{ color: BLUE }}
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
