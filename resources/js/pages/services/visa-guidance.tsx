import { Head, Link } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import { ArrowRight, FileText, Clock, ShieldCheck, MapPin } from 'lucide-react';
import ContentVisaGuidance from './components/content-visa-guidance';
import HowItWorks from '@/components/organisms/how-it-works';

// ─── Brand ────────────────────────────────────────────────────────────────────
const BLUE = '#4260E2';
const TEAL = '#53D1BF';
const YELLOW = '#FFF231';
// {
//         number: '03',
//         title: 'Study Pathway Planning',
//         intro: 'We create a personalised study plan for you, including recommended courses, institutions, and timelines. You will receive clear guidance on:',
//         points: [
//             'Entry requirements',
//             'Estimated costs and duration',
//             'Possible progression pathways',
//             'Visa considerations',
//         ],
//         description:
//             'This ensures you have a realistic and well-structured roadmap before moving forward.',
//     },
const benefits = [
    {
        icon: FileText,
        title: 'Document Checklist',
        desc: 'Get a complete, personalised checklist of all documents needed for your student visa application.',
        points: [
            'Entry requirements',
            'Estimated costs and duration',
            'Possible progression pathways',
            'Visa considerations',
        ],
    },
    {
        icon: Clock,
        title: 'Timeline Management',
        desc: 'We map out critical deadlines so you never miss a submission window at the embassy.',
    },
    {
        icon: ShieldCheck,
        title: 'Application Review',
        desc: 'Expert review of your visa application to minimise the risk of rejection before lodgement.',
    },
    {
        icon: MapPin,
        title: 'Country-Specific Advice',
        desc: 'Guidance tailored to the specific requirements of Australia, UK, USA, Canada, and Europe.',
    },
];

const steps = [
    {
        num: '01',
        title: 'Assess Your Case',
        desc: 'We review your academic records, finances, and visa history to evaluate your application strength.',
    },
    {
        num: '02',
        title: 'Document Preparation',
        desc: 'We guide you on gathering transcripts, bank statements, health checks, and supporting letters.',
    },
    {
        num: '03',
        title: 'Application Lodgement',
        desc: 'We review your completed form and supporting documents before you submit to the embassy.',
    },
    {
        num: '04',
        title: 'Visa Grant & Debrief',
        desc: 'Once your visa is granted we brief you on entry conditions, work rights, and next steps.',
    },
];

export default function VisaGuidance() {
    return (
        <>
            <Head title="Visa Guidance – Mula Study" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar />

                <main className="flex-1">
                    {/* ── Hero ── */}
                    <section className="relative overflow-hidden bg-[#0A0A14] py-28 sm:py-36">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-30"
                            style={{
                                background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${TEAL}55, transparent)`,
                            }}
                        />
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl text-center">
                                <span
                                    className="mb-5 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase"
                                    style={{ background: TEAL }}
                                >
                                    Our Services
                                </span>
                                <h1 className="mt-4 text-5xl leading-tight font-bold tracking-tight text-white sm:text-6xl">
                                    Visa{' '}
                                    <span style={{ color: YELLOW }}>
                                        Guidance
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg leading-relaxed text-white/60">
                                    Navigating student visa requirements is
                                    complex. Our consultants simplify the
                                    process — increasing your approval chances
                                    and reducing stress.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <Link
                                        href="/register"
                                        className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                        style={{ background: BLUE }}
                                    >
                                        Book a free session{' '}
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
                    <ContentVisaGuidance />

                    {/* ── How It Works ── */}
                    <HowItWorks />
                </main>

                <Footer />
            </div>
        </>
    );
}
