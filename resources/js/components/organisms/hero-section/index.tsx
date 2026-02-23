import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { register } from '@/routes';
import heroImage from '@/components/images/section1.jpg';

// ─── Brand ───────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const YELLOW = '#FFF231';
const TEAL = '#53D1BF';

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* ── Full-bleed background image ── */}
            <div className="relative h-svh min-h-[600px] w-full lg:min-h-[700px]">
                <img
                    src={heroImage}
                    alt="Study abroad consultation"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* ── Overlay — dark + slight blue tint, left-heavy ── */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(105deg, rgba(10,10,20,0.82) 0%, rgba(10,10,20,0.55) 55%, rgba(10,10,20,0.25) 100%)',
                    }}
                />

                {/* ── Content — left-aligned ── */}
                <div className="absolute inset-0 flex items-center">
                    <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
                        <div className="max-w-2xl">
                            {/* Eyebrow */}
                            <div className="mb-7 flex items-center gap-3">
                                <span
                                    className="h-[2px] w-10 rounded-full"
                                    style={{ background: YELLOW }}
                                />
                                <span className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                                    Mula Study
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Your path to
                                <br />
                                <span style={{ color: YELLOW }}>
                                    studying abroad
                                </span>
                                <br />
                                starts here.
                            </h1>

                            {/* Sub-text */}
                            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                                Expert consultants. Personalised guidance. From
                                IELTS prep to visa approval — we walk every step
                                with you.
                            </p>

                            {/* CTA row */}
                            <div className="mt-10 flex flex-wrap items-center gap-5">
                                {/* Primary */}
                                <Link
                                    href={register()}
                                    className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                                    style={{ background: BLUE }}
                                >
                                    Get started free
                                    <ArrowRight className="h-4 w-4" />
                                </Link>

                                {/* Secondary — ghost */}
                                <Link
                                    href="#how-it-works"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white"
                                >
                                    How it works
                                    <ArrowRight className="h-4 w-4 opacity-60" />
                                </Link>
                            </div>

                            {/* Divider + trust line */}
                            <div className="mt-14 flex items-center gap-4">
                                <div className="h-px max-w-[64px] flex-1 bg-white/20" />
                                <p className="text-xs text-white/40">
                                    Trusted by 10,000+ students across Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom teal accent bar (thin) ── */}
                <div
                    className="absolute bottom-0 left-0 h-[3px] w-full"
                    style={{
                        background: `linear-gradient(to right, ${BLUE}, ${TEAL})`,
                    }}
                />
            </div>
        </section>
    );
}
