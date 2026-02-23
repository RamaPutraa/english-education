import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import {
    ArrowRight,
    Compass,
    BarChart3,
    Briefcase,
    GraduationCap,
} from 'lucide-react';
import ContentCourseCareer from './components/content-course-career';
import HowItWorks from '@/components/organisms/how-it-works';

// ─── Brand ────────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const ORANGE = '#F94F02';
const YELLOW = '#FFF231';

const benefits = [
    {
        icon: Compass,
        title: 'Course Selection',
        desc: 'We help you choose majors and programs that align with your interests, goals, and the global job market.',
    },
    {
        icon: BarChart3,
        title: 'Career Mapping',
        desc: 'Understand how your chosen degree translates into concrete career outcomes and salary expectations.',
    },
    {
        icon: Briefcase,
        title: 'Industry Insights',
        desc: 'Get advice from professionals in your target field to make informed decisions about your education.',
    },
    {
        icon: GraduationCap,
        title: 'Post-Study Planning',
        desc: 'Plan your post-graduation pathway — from internships and graduate programs to permanent residency.',
    },
];

const steps = [
    {
        num: '01',
        title: 'Interest & Strengths Assessment',
        desc: 'We explore your academic strengths, passions, and personality to map out fitting career pathways.',
    },
    {
        num: '02',
        title: 'Course Research',
        desc: 'We shortlist programs at top universities that match your goals and career objectives.',
    },
    {
        num: '03',
        title: 'Career Roadmap',
        desc: 'Build a clear 5–10 year career roadmap connecting your degree to your dream role.',
    },
    {
        num: '04',
        title: 'Ongoing Guidance',
        desc: "We stay connected throughout your studies to ensure you're on track with internships and job applications.",
    },
];

export default function CourseCareerPathway() {
    return (
        <>
            <Head title="Course & Career Pathway Planning – Mula Study" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />

                <main className="flex-1">
                    {/* ── Hero ── */}
                    <section className="relative overflow-hidden bg-[#0A0A14] py-28 sm:py-36">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-30"
                            style={{
                                background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${ORANGE}55, transparent)`,
                            }}
                        />
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center">
                                <span
                                    className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                                    style={{ background: ORANGE }}
                                >
                                    Our Services
                                </span>
                                <h1 className="mt-4 text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
                                    Course & Career{' '}
                                    <span style={{ color: YELLOW }}>
                                        Pathway Planning
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-white/60">
                                    Don't just pick a degree — build a career.
                                    Our counsellors help you connect the dots
                                    between what you study and where you want to
                                    go.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{ background: BLUE }}
                                    >
                                        Plan your career path{' '}
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
                    <ContentCourseCareer />

                    {/* ── Benefits Grid ── */}
                    <section className="bg-[#F5F5F7] py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto mb-16 max-w-2xl text-center">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    What we{' '}
                                    <span style={{ color: ORANGE }}>
                                        help you with
                                    </span>
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-gray-500">
                                    Strategic planning from course selection to
                                    career launch.
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
                                                background: `${ORANGE}15`,
                                            }}
                                        >
                                            <Icon
                                                className="h-6 w-6"
                                                style={{ color: ORANGE }}
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
