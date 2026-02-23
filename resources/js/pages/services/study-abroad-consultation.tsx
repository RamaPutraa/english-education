import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import { ArrowRight } from 'lucide-react';
import HowItWorks from '@/components/organisms/how-it-works';
import ContentStudyAbroad from './components/content-study-abroad';

// ─── Brand ────────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const YELLOW = '#FFF231';

// ─── Consultation Discussion Points ───────────────────────────────────────────
const consultationPoints = [
    'Your education background and work experience',
    'Your career goals and personal interests',
    'Suitable countries and institutions for your profile',
    'Course options and study pathways',
    'Visa requirements and eligibility',
    'Budget considerations and living costs',
    'Long-term opportunities such as work rights and further study',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function StudyAbroadConsultation() {
    return (
        <>
            <Head title="Study Abroad Consultation – Mula Study" />
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
                                    Study Abroad{' '}
                                    <span style={{ color: YELLOW }}>
                                        Consultation
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-white/60">
                                    Expert, personalised guidance to help you
                                    find, apply for, and secure admission at top
                                    universities worldwide. Your dream
                                    destination is closer than you think.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{ background: BLUE }}
                                    >
                                        Book a free consultation{' '}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <a
                                        href="#our-services"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
                                    >
                                        Explore services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── During Your Consultation ── */}
                    <section className="bg-[#F5F5F7] py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    During your{' '}
                                    <span style={{ color: BLUE }}>
                                        consultation,
                                    </span>{' '}
                                    we will discuss:
                                </h2>
                            </div>

                            {/* Row 1 — 4 cards */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {consultationPoints
                                    .slice(0, 4)
                                    .map((point, i) => (
                                        <div
                                            key={point}
                                            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                                        >
                                            <span
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                                                style={{ background: BLUE }}
                                            >
                                                {i + 1}
                                            </span>
                                            <p className="text-sm leading-relaxed text-gray-700">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                            </div>

                            {/* Row 2 — 3 cards centred */}
                            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:mx-auto lg:max-w-[75%]">
                                {consultationPoints.slice(4).map((point, i) => (
                                    <div
                                        key={point}
                                        className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                                    >
                                        <span
                                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                                            style={{ background: BLUE }}
                                        >
                                            {i + 5}
                                        </span>
                                        <p className="text-sm leading-relaxed text-gray-700">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: BLUE }}
                                >
                                    Book your free consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── Content Detail (alternating rows) ── */}
                    <ContentStudyAbroad />

                    {/* ── How It Works ── */}
                    <HowItWorks />
                </main>

                <Footer />
            </div>
        </>
    );
}
