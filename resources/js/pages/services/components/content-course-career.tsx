import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import whyImage from '@/components/images/why.jpg';
import heroImage from '@/components/images/section1.jpg';

const ORANGE = '#F94F02';

export default function ContentCourseCareer() {
    return (
        <section
            id="our-services"
            className="overflow-hidden bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Heading ── */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        From interests to a{' '}
                        <span style={{ color: ORANGE }}>clear career plan</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                        Four steps to turn what you love into a degree and
                        career you will be proud of.
                    </p>
                </div>

                <div className="flex flex-col gap-28">
                    {/* ── Item 1 — Image LEFT ── */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: ORANGE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={whyImage}
                                    alt="Understand Your Strengths"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -right-4 -bottom-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: ORANGE }}
                            >
                                01
                            </span>
                        </div>
                        {/* Text */}
                        <div>
                            <span
                                className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                style={{ color: ORANGE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: ORANGE }}
                                />
                                Self-Discovery
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Understand Your Strengths & Interests
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: ORANGE }}
                            >
                                Pick a path you'll actually enjoy walking.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                Career planning starts with self-knowledge. We
                                run structured assessments to map your academic
                                strengths, natural aptitudes, and genuine
                                interests — then translate the results into a
                                shortlist of study fields that energise rather
                                than exhaust you.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'Structured interest and personality assessment',
                                    'Academic strength analysis from your transcript',
                                    'Field-of-study shortlist based on real data',
                                    'Debrief session with a career specialist',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: ORANGE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: ORANGE }}
                                >
                                    Discover my strengths{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="#how-it-works"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-400"
                                >
                                    How it works
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Item 2 — Image RIGHT ── */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Text */}
                        <div className="lg:order-1">
                            <span
                                className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                style={{ color: ORANGE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: ORANGE }}
                                />
                                Course Selection
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Choose the Right Course at the Right University
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: ORANGE }}
                            >
                                Not all degrees are created equal.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                Two students can study the same subject and
                                graduate with vastly different career
                                trajectories depending on institution,
                                specialisation, and co-curricular opportunities.
                                We match your profile to programs that maximise
                                your outcomes — not just your admission chances.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'Program-level comparison across institutions',
                                    'Specialisation and elective pathway planning',
                                    'Graduate employment rate and starting salary data',
                                    'Scholarship opportunities within each program',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: ORANGE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: ORANGE }}
                                >
                                    Find my course{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-400"
                                >
                                    See course guide
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="relative lg:order-2">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: ORANGE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={heroImage}
                                    alt="Choose the Right Course"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -bottom-4 -left-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: ORANGE }}
                            >
                                02
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
