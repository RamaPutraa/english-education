import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    FileText,
    Clock,
    ShieldCheck,
    MapPin,
    CheckCircle2,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import whyImage from '@/components/images/why.jpg';
import heroImage from '@/components/images/section1.jpg';

const TEAL = '#53D1BF';

const benefits = [
    {
        icon: FileText,
        title: 'Study in Australia',
        desc: '',
        points: [
            'Enrol in a full-time course at a CRICOS-registered institution',
            'Access high-quality education and globally recognised qualifications',
        ],
    },
    {
        icon: Clock,
        title: 'Work While You Study',
        desc: '',
        points: [
            'Work part-time during your study period (as per visa conditions)',
            'Gain local work experience and help support your living costs',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Travel Flexibility',
        desc: '',
        points: [
            'Travel in and out of Australia while your visa is valid',
            'Enjoy the opportunity to explore different cities and cultures',
        ],
    },
    {
        icon: MapPin,
        title: 'Bring Eligible Family Members-Specific Advice',
        desc: ' ',
        points: [
            'Include eligible family members in your visa application (subject to requirements)',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Pathway to Further Study',
        desc: '',
        points: [
            'Continue to higher levels of education after completing your course',
            'Build academic and professional experience for your future career',
        ],
    },
];

const eligibilityCriteria = [
    {
        icon: FileText,
        title: 'Academic',
        desc: '',
        points: [
            'Enrolment in a CRICOS-registered course. You must have a confirmed offer of enrolment (CoE) from an institution registered on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS).',
        ],
    },
    {
        icon: Clock,
        title: 'English Proficiency',
        desc: '',
        points: [
            'Meet English language requirements. Provide evidence of your English proficiency through recognised tests such as IELTS, TOEFL iBT, or PTE Academic (unless exempt).',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Health Cover (OSHC)',
        desc: '',
        points: [
            'Meet health and character requirements. You must meet Australia’s health and character standards, including medical examinations and police clearance (if required).',
            'Overseas Student Health Cover (OSHC). You must have valid OSHC for yourself and any accompanying family members for the full duration of your stay in Australia.',
        ],
    },
    {
        icon: MapPin,
        title: 'Sufficient Funds',
        desc: 'Show evidence of financial capacity. You must demonstrate that you have enough funds to cover',
        points: [
            'tuition fees',
            'living expenses',
            'and living costs for the duration of your study in Australia',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Pathway to Further Study',
        desc: '',
        points: [
            'Continue to higher levels of education after completing your course',
            'Build academic and professional experience for your future career',
        ],
    },
];

const streamsTemporaryData = [
    {
        num: '01',
        label: 'Post-Higher Education Work',
        title: 'Post-Higher Education Work stream',
        desc: 'For international students who recently graduated with a higher education degree from an Australian institution. Suitable for university graduates seeking professional work experience.',
        qualLabel: 'Eligible qualifications',
        qualPoints: [
            'Bachelor degree',
            'Masters degree',
            'Doctoral degree (PhD)',
        ],
        allowLabel: 'It allows you to',
        allowPoints: [
            'Live, work, and study in Australia temporarily',
            'Stay for 2 to 4 years depending on your qualification',
            'Work full-time in any occupation',
        ],
        duration: '2 – 4 years',
    },
    {
        num: '02',
        label: 'Post-Vocational Education Work',
        title: 'Post-Vocational Education Work stream',
        desc: 'For international students who graduated with skills related to occupations in demand in Australia — typically vocational or trade-related courses. Suitable for VET graduates.',
        qualLabel: 'Eligible qualifications',
        qualPoints: [
            'Australian trade or vocational qualification',
            'Occupation on the skilled occupation list',
            'Positive skills assessment (if required)',
        ],
        allowLabel: 'It allows you to',
        allowPoints: [
            'Live, work, and study in Australia temporarily',
            'Work full-time in your nominated skilled occupation',
            'Gain trade experience toward future pathways',
        ],
        duration: 'Up to 18 months',
    },
    {
        num: '03',
        label: 'Second Post-Study Work',
        title: 'Second Post-Study Work stream',
        desc: 'For holders of a first Temporary Graduate visa (Post-Study Work stream) who graduated from an Australian institution in a regional area and lived in a designated regional area.',
        qualLabel: 'Eligibility conditions',
        qualPoints: [
            'Hold or held a Post-Study Work stream visa',
            'Graduated from a regional Australian institution',
            'Lived and studied in a designated regional area',
        ],
        allowLabel: 'It allows you to',
        allowPoints: [
            'Live, work, and study in Australia temporarily',
            'Stay for 1 to 2 additional years',
            'Continue gaining work experience in regional Australia',
        ],
        duration: '1 – 2 additional years',
    },
];

const eligibilityCriteriaTabs2 = [
    {
        icon: FileText,
        title: 'Academic Requirement',
        desc: '',
        points: [
            'Have completed a CRICOS-registered course in Australia',
            'Meet the Australian study requirement',
            'Hold a relevant student visa previously',
        ],
    },
    {
        icon: Clock,
        title: 'English Proficiency',
        desc: '',
        points: [
            'Meet the English language requirement (through recognised tests, if required)',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Health & Character',
        desc: '',
        points: [
            'Meet Australia’s health and character requirements',
            'Hold valid health insurance at the time of application',
        ],
    },
    {
        icon: MapPin,
        title: 'Visa Status',
        desc: '',
        points: [
            'Apply within the required timeframe after completing your studies',
            'Have held a student visa in the last 6 months',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Pathway to Further Study',
        desc: '',
        points: [
            'Continue to higher levels of education after completing your course',
            'Build academic and professional experience for your future career',
        ],
    },
];

export default function ContentVisaGuidance() {
    return (
        <section
            id="our-services"
            className="overflow-hidden bg-white py-15 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Heading ── */}
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Every step of your{' '}
                        <span style={{ color: TEAL }}>visa journey</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                        From the first document to the final approval — we
                        handle the complexity so you can focus on packing.
                    </p>
                </div>

                {/* ── Tabs ── */}
                <Tabs defaultValue="student">
                    {/* Line-style tab triggers */}
                    <TabsList className="mb-14 h-auto w-full justify-start gap-0 rounded-none border-b border-gray-200 bg-transparent p-0">
                        <TabsTrigger
                            value="student"
                            className="relative rounded-none border-b-2 border-transparent bg-transparent px-5 py-5 text-sm font-semibold text-gray-500 transition-colors data-[state=active]:border-[#53D1BF] data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                        >
                            Student Visa (Subclass 500)
                        </TabsTrigger>
                        <TabsTrigger
                            value="graduate"
                            className="relative rounded-none border-b-2 border-transparent bg-transparent px-5 py-5 text-sm font-semibold text-gray-500 transition-colors data-[state=active]:border-[#53D1BF] data-[state=active]:text-gray-900 data-[state=active]:shadow-none"
                        >
                            Temporary Graduate Visa (Subclass 485)
                        </TabsTrigger>
                    </TabsList>

                    {/* ════ TAB 1 — Student Visa ════ */}
                    <TabsContent value="student">
                        <div className="flex flex-col">
                            {/* ── Item 1 — Image LEFT ── */}
                            <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
                                {/* Image */}
                                <div className="relative lg:order-2">
                                    <div
                                        className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                        style={{ background: TEAL }}
                                    />
                                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                        <img
                                            src={heroImage}
                                            alt="Expert Review Before You Lodge"
                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    {/* <span
                                        className="absolute -bottom-4 -left-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                        style={{ color: TEAL }}
                                    >
                                        01
                                    </span> */}
                                </div>
                                {/* Text */}
                                <div>
                                    <span
                                        className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                        style={{ color: TEAL }}
                                    >
                                        <span
                                            className="h-px w-6 rounded"
                                            style={{ background: TEAL }}
                                        />
                                        Visa Guidance
                                    </span>
                                    <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                        Student Visa (Subclass 500)
                                    </h3>

                                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                                        Applying for an Australian student visa
                                        can be complex and stressful —
                                        especially if it’s your first time. At
                                        MULA Study, we provide clear, ethical,
                                        and step-by-step guidance to help you
                                        prepare and submit your Student Visa
                                        (Subclass 500) application with
                                        confidence.
                                    </p>

                                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                                        We don’t just focus on paperwork. We
                                        make sure your visa pathway aligns with
                                        your study plan and long-term goals.
                                    </p>
                                    <p
                                        className="mt-5 text-sm font-medium"
                                        style={{ color: TEAL }}
                                    >
                                        What We Help You With
                                    </p>
                                    <ul className="mt-2 space-y-3">
                                        {[
                                            'Guidance for Student Visa (Subclass 500) application',
                                            'Document checklist and preparation support',
                                            'Genuine Student (GS) statement guidance',
                                            'OSHC (Overseas Student Health Cover) assistance',
                                            'Explanation of visa conditions (work rights, study requirements, compliance)',
                                            'Lodgement support and application monitoring',
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3 text-sm text-gray-600"
                                            >
                                                <CheckCircle2
                                                    className="mt-0.5 h-4 w-4 shrink-0"
                                                    style={{ color: TEAL }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            href="/register"
                                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                            style={{ background: TEAL }}
                                        >
                                            Get my checklist{' '}
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

                            {/* ── Benefits Grid ── */}
                            <div className="mb-8 text-start">
                                <p
                                    className="mb-2 text-xs font-bold tracking-widest uppercase"
                                    style={{ color: TEAL }}
                                >
                                    What you gain
                                </p>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Benefits of the{' '}
                                    <span style={{ color: TEAL }}>
                                        Student Visa (Subclass 500)
                                    </span>
                                </h2>
                                <p className="mt-4 text-base leading-relaxed text-gray-500">
                                    The Student Visa (Subclass 500) allows you
                                    to legally study and live in Australia while
                                    gaining international education and
                                    experience.
                                </p>
                            </div>

                            {/* Cards: left teal accent bar */}
                            <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {benefits.map(
                                    ({ icon: Icon, title, points }) => (
                                        <div
                                            key={title}
                                            className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            {/* left accent */}
                                            <div
                                                className="mt-0.5 h-full w-0.5 shrink-0 rounded-full"
                                                style={{
                                                    background: `${TEAL}60`,
                                                }}
                                            />
                                            <div className="min-w-0">
                                                <div
                                                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                                                    style={{
                                                        background: `${TEAL}18`,
                                                    }}
                                                >
                                                    <Icon
                                                        className="h-4 w-4"
                                                        style={{ color: TEAL }}
                                                    />
                                                </div>
                                                <h3 className="text-md mb-3 font-semibold text-gray-900">
                                                    {title}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {points.map((pt) => (
                                                        <li
                                                            key={pt}
                                                            className="flex items-start gap-2 text-sm leading-relaxed text-gray-500"
                                                        >
                                                            <span
                                                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                                                style={{
                                                                    background:
                                                                        TEAL,
                                                                }}
                                                            />
                                                            {pt}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>

                            {/* ── Eligibility Criteria — dark section ── */}
                            <div
                                className="-mx-4 rounded-3xl px-6 py-12 sm:-mx-6 sm:px-10 lg:-mx-8 lg:px-14"
                                style={{ background: '#0F172A' }}
                            >
                                <div className="mb-10">
                                    <p
                                        className="mb-2 text-xs font-bold tracking-widest uppercase"
                                        style={{ color: TEAL }}
                                    >
                                        Requirements
                                    </p>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Eligibility{' '}
                                        <span style={{ color: TEAL }}>
                                            Criteria
                                        </span>
                                    </h2>
                                    <p className="text-md mt-4 leading-relaxed text-white/50">
                                        To be eligible for the Student Visa
                                        (Subclass 500), you must meet the
                                        following requirements.
                                    </p>
                                </div>

                                {/* Numbered rows */}
                                <div className="divide-y divide-white/10">
                                    {eligibilityCriteria.map(
                                        ({ title, desc, points }, idx) => (
                                            <div
                                                key={title}
                                                className="flex gap-6 py-7"
                                            >
                                                {/* Number */}
                                                <span
                                                    className="mt-0.5 shrink-0 font-mono text-2xl leading-none font-black"
                                                    style={{
                                                        color: `${TEAL}50`,
                                                    }}
                                                >
                                                    {String(idx + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>
                                                <div className="min-w-0">
                                                    <h3 className="text-md mb-1 font-semibold text-white">
                                                        {title}
                                                    </h3>
                                                    {desc && (
                                                        <p className="mb-3 text-sm leading-relaxed text-white/50">
                                                            {desc}
                                                        </p>
                                                    )}
                                                    <ul className="space-y-1.5">
                                                        {points.map((pt) => (
                                                            <li
                                                                key={pt}
                                                                className="flex items-start gap-2 text-sm leading-relaxed text-white/60"
                                                            >
                                                                <span
                                                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                                                    style={{
                                                                        background:
                                                                            TEAL,
                                                                    }}
                                                                />
                                                                {pt}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* ════ TAB 2 — Temporary Graduate Visa ════ */}
                    <TabsContent value="graduate">
                        <div className="flex flex-col">
                            {/* ── Item 1 — Image LEFT ── */}
                            <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
                                {/* Image */}
                                <div className="relative">
                                    <div
                                        className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                                        style={{ background: TEAL }}
                                    />
                                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                                        <img
                                            src={heroImage}
                                            alt="Check Your Eligibility"
                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    {/* <span
                                        className="absolute -right-4 -bottom-4 font-mono text-8xl leading-none font-black opacity-10 select-none"
                                        style={{ color: TEAL }}
                                    >
                                        01
                                    </span> */}
                                </div>
                                {/* Text */}
                                <div>
                                    <span
                                        className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                        style={{ color: TEAL }}
                                    >
                                        <span
                                            className="h-px w-6 rounded"
                                            style={{ background: TEAL }}
                                        />
                                        Visa Guidance
                                    </span>
                                    <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                                        Temporary Graduate Visa (Subclass 485)
                                    </h3>

                                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                                        The Temporary Graduate Visa (Subclass
                                        485) allows international students who
                                        have completed their studies in
                                        Australia to stay and work full-time
                                        after graduation. This visa is designed
                                        to help graduates gain valuable work
                                        experience and further develop their
                                        skills in Australia.
                                    </p>
                                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                                        At MULA Study, we guide you through the
                                        process clearly and responsibly — so
                                        your next step after graduation is well
                                        planned, not rushed.
                                    </p>
                                    <p
                                        className="mt-5 text-sm font-medium"
                                        style={{ color: TEAL }}
                                    >
                                        What is the 485 Visa?
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        The Subclass 485 visa is a temporary
                                        post-study visa for international
                                        students who have recently completed an
                                        eligible qualification in Australia.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500">
                                        It allows you to:
                                    </p>
                                    <ul className="mt-2 space-y-3">
                                        {[
                                            'Stay in Australia after graduation',
                                            'Work full-time',
                                            'Gain local work experience ',
                                            'and Prepare for your next career or study pathway',
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-3 text-sm text-gray-600"
                                            >
                                                <CheckCircle2
                                                    className="mt-0.5 h-4 w-4 shrink-0"
                                                    style={{ color: TEAL }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <Link
                                            href="/register"
                                            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                            style={{ background: TEAL }}
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

                            {/* ── Stream temporary ── */}
                            <div className="mb-10">
                                <p
                                    className="mb-2 text-xs font-bold tracking-widest uppercase"
                                    style={{ color: TEAL }}
                                >
                                    Visa Streams
                                </p>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Streams of the{' '}
                                    <span style={{ color: TEAL }}>
                                        Subclass 485
                                    </span>
                                </h2>
                                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
                                    The Subclass 485 visa has three streams.
                                    Your eligibility depends on your
                                    qualification type, study level, and study
                                    location.
                                </p>
                            </div>

                            {/* Stream cards */}
                            <div className="mb-20 grid gap-5 lg:grid-cols-3">
                                {streamsTemporaryData.map(
                                    ({
                                        num,
                                        label,
                                        title,
                                        desc,
                                        qualLabel,
                                        qualPoints,
                                        allowLabel,
                                        allowPoints,
                                        duration,
                                    }) => (
                                        <div
                                            key={title}
                                            className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                                        >
                                            {/* Header band */}
                                            <div
                                                className="flex items-center justify-between px-6 py-4"
                                                style={{
                                                    background: `${TEAL}10`,
                                                    borderBottom: `1px solid ${TEAL}25`,
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className="font-mono text-2xl leading-none font-black"
                                                        style={{
                                                            color: `${TEAL}55`,
                                                        }}
                                                    >
                                                        {num}
                                                    </span>
                                                    <span className="text-xs font-semibold tracking-wide text-gray-400">
                                                        {label}
                                                    </span>
                                                </div>
                                                {/* Duration pill */}
                                                <span
                                                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                                    style={{
                                                        background: `${TEAL}18`,
                                                        color: '#1fa090',
                                                    }}
                                                >
                                                    {duration}
                                                </span>
                                            </div>

                                            {/* Body */}
                                            <div className="flex flex-1 flex-col gap-5 p-6">
                                                {/* Title + desc */}
                                                <div>
                                                    <h3 className="mb-2 text-sm font-bold text-gray-900">
                                                        {title}
                                                    </h3>
                                                    <p className="text-xs leading-relaxed text-gray-500">
                                                        {desc}
                                                    </p>
                                                </div>

                                                {/* Divider */}
                                                <div
                                                    className="h-px w-full"
                                                    style={{
                                                        background: `${TEAL}20`,
                                                    }}
                                                />

                                                {/* Two labelled lists */}
                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    {/* Qualifications */}
                                                    <div>
                                                        <p
                                                            className="mb-2 text-xs font-bold tracking-wide uppercase"
                                                            style={{
                                                                color: TEAL,
                                                            }}
                                                        >
                                                            {qualLabel}
                                                        </p>
                                                        <ul className="space-y-1.5">
                                                            {qualPoints.map(
                                                                (pt) => (
                                                                    <li
                                                                        key={pt}
                                                                        className="flex items-start gap-2 text-xs leading-relaxed text-gray-600"
                                                                    >
                                                                        <span
                                                                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                                                                            style={{
                                                                                background:
                                                                                    TEAL,
                                                                            }}
                                                                        />
                                                                        {pt}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>

                                                    {/* What it allows */}
                                                    <div>
                                                        <p className="mb-2 text-xs font-bold tracking-wide text-gray-400 uppercase">
                                                            {allowLabel}
                                                        </p>
                                                        <ul className="space-y-1.5">
                                                            {allowPoints.map(
                                                                (pt) => (
                                                                    <li
                                                                        key={pt}
                                                                        className="flex items-start gap-2 text-xs leading-relaxed text-gray-500"
                                                                    >
                                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                                                                        {pt}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>

                            {/* ── Eligibility Criteria Tabs 2— dark section ── */}
                            <div
                                className="-mx-4 rounded-3xl px-6 py-12 sm:-mx-6 sm:px-10 lg:-mx-8 lg:px-14"
                                style={{ background: '#0F172A' }}
                            >
                                <div className="mb-10">
                                    <p
                                        className="mb-2 text-xs font-bold tracking-widest uppercase"
                                        style={{ color: TEAL }}
                                    >
                                        Requirements
                                    </p>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Eligibility{' '}
                                        <span style={{ color: TEAL }}>
                                            Criteria
                                        </span>
                                    </h2>
                                    <p className="text-md mt-4 leading-relaxed text-white/50">
                                        To be eligible for the Temporary
                                        Graduate Visa (Subclass 485), you must
                                        generally:
                                    </p>
                                </div>

                                {/* Numbered rows */}
                                <div className="divide-y divide-white/10">
                                    {eligibilityCriteriaTabs2.map(
                                        ({ title, desc, points }, idx) => (
                                            <div
                                                key={title}
                                                className="flex gap-6 py-7"
                                            >
                                                {/* Number */}
                                                <span
                                                    className="mt-0.5 shrink-0 font-mono text-2xl leading-none font-black"
                                                    style={{
                                                        color: `${TEAL}50`,
                                                    }}
                                                >
                                                    {String(idx + 1).padStart(
                                                        2,
                                                        '0',
                                                    )}
                                                </span>
                                                <div className="min-w-0">
                                                    <h3 className="text-md mb-1 font-semibold text-white">
                                                        {title}
                                                    </h3>
                                                    {desc && (
                                                        <p className="mb-3 text-sm leading-relaxed text-white/50">
                                                            {desc}
                                                        </p>
                                                    )}
                                                    <ul className="space-y-1.5">
                                                        {points.map((pt) => (
                                                            <li
                                                                key={pt}
                                                                className="flex items-start gap-2 text-sm leading-relaxed text-white/60"
                                                            >
                                                                <span
                                                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                                                    style={{
                                                                        background:
                                                                            TEAL,
                                                                    }}
                                                                />
                                                                {pt}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
