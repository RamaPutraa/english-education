import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/components/images/section1.jpg';
import whyImage from '@/components/images/why.jpg';

const BLUE = '#4260E2';

export default function ContentEnglishIelts() {
    return (
        <section
            id="our-services"
            className="overflow-hidden bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Heading ── */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Every skill.{' '}
                        <span style={{ color: BLUE }}>Every band.</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                        A structured, coach-led programme that takes you from
                        your current score to your target band.
                    </p>
                </div>

                <div className="flex flex-col gap-28">
                    {/* ── Item 1 — Image LEFT ── */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: BLUE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={heroImage}
                                    alt="Start With a Free Diagnostic Test"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -right-4 -bottom-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: BLUE }}
                            >
                                01
                            </span>
                        </div>
                        {/* Text */}
                        <div>
                            <span
                                className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                style={{ color: BLUE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: BLUE }}
                                />
                                Diagnostic & Planning
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Start With a Free Diagnostic Test
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: BLUE }}
                            >
                                Know your baseline. Target your weakness.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                Before any study begins, we run a full IELTS
                                practice test under timed conditions — covering
                                all four skills. Our coaches then analyse your
                                performance band-by-band and build a
                                personalised study plan that focuses your time
                                exactly where it counts most.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'Full IELTS mock test (all 4 skills)',
                                    'Skill-by-skill gap analysis and score report',
                                    'Personalised study schedule built around your exam date',
                                    'Target band score strategy and milestone check-ins',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: BLUE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: BLUE }}
                                >
                                    Take my free test{' '}
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
                                style={{ color: BLUE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: BLUE }}
                                />
                                Writing & Speaking
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Master the Skills That Lose the Most Points
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: BLUE }}
                            >
                                Writing and Speaking: practised, not memorised.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                Writing Task 1 & 2 and the Speaking exam account
                                for half your overall band score — and they are
                                where most test-takers leave marks on the table.
                                Our coaches use annotated live feedback to
                                improve your coherence, vocabulary range, and
                                grammatical accuracy.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'Weekly Writing Task 1 & 2 assignments with feedback',
                                    'Speaking mock recordings with fluency coaching',
                                    'Vocabulary and paraphrasing expansion drills',
                                    'Band descriptor alignment for every submission',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: BLUE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: BLUE }}
                                >
                                    Improve my Writing & Speaking{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-400"
                                >
                                    See sample feedback
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="relative lg:order-2">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: BLUE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={whyImage}
                                    alt="Writing and Speaking Coaching"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -bottom-4 -left-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: BLUE }}
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
