import { Link } from '@inertiajs/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/components/images/section1.jpg';
import whyImage from '@/components/images/why.jpg';

const PURPLE = '#9006FC';

export default function ContentScholarshipMentoring() {
    return (
        <section
            id="our-services"
            className="overflow-hidden bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Heading ── */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        From application{' '}
                        <span style={{ color: PURPLE }}>to award</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                        Mentorship through every stage of the most competitive
                        scholarship programmes in Indonesia.
                    </p>
                </div>

                <div className="flex flex-col gap-28">
                    {/* ── Item 1 — Image LEFT ── */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <div className="relative">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: PURPLE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={heroImage}
                                    alt="Know If You Qualify"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -right-4 -bottom-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: PURPLE }}
                            >
                                01
                            </span>
                        </div>
                        {/* Text */}
                        <div>
                            <span
                                className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                style={{ color: PURPLE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: PURPLE }}
                                />
                                Eligibility & Strategy
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Know If You Qualify — Before You Apply
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: PURPLE }}
                            >
                                Start smart, not hopeful.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                LPDP and Australia Awards have complex and
                                evolving eligibility criteria. We run a thorough
                                assessment of your academic record, work
                                experience, leadership profile, and proposed
                                field of study — then advise on the most
                                strategic pathway and timing for your
                                application.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'LPDP & Australia Awards eligibility deep-dive',
                                    'Application timing and sequence strategy',
                                    'Alternative scholarships identified as backup',
                                    'Realistic success probability assessment',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: PURPLE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: PURPLE }}
                                >
                                    Check my eligibility{' '}
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
                                style={{ color: PURPLE }}
                            >
                                <span
                                    className="h-px w-6 rounded"
                                    style={{ background: PURPLE }}
                                />
                                Essays & Proposals
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Write Essays That Win Panels Over
                            </h3>
                            <p
                                className="mt-2 text-sm font-medium"
                                style={{ color: PURPLE }}
                            >
                                Every word is an argument for your potential.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-gray-500">
                                Scholarship essays are not personal diaries —
                                they are persuasive arguments. Our mentors
                                (including past LPDP and Australia Awards
                                recipients) coach you through crafting essays
                                and research proposals that are specific,
                                evidence-backed, and impossible to ignore.
                            </p>
                            <ul className="mt-6 space-y-3">
                                {[
                                    'Study plan and research proposal development',
                                    'Personal statement and essay structure coaching',
                                    'Multiple draft rounds with mentor feedback',
                                    'Final proofreading and polish before submission',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-gray-600"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-4 w-4 shrink-0"
                                            style={{ color: PURPLE }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/register"
                                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: PURPLE }}
                                >
                                    Start writing{' '}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-400"
                                >
                                    See examples
                                </a>
                            </div>
                        </div>
                        {/* Image */}
                        <div className="relative lg:order-2">
                            <div
                                className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                style={{ background: PURPLE }}
                            />
                            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                <img
                                    src={whyImage}
                                    alt="Write Essays That Win Panels Over"
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <span
                                className="absolute -bottom-4 -left-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                style={{ color: PURPLE }}
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
