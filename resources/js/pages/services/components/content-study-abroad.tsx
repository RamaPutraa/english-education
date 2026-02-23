import { CheckCircle2 } from 'lucide-react';

const BLUE = '#4260E2';
const TEAL = '#53D1BF';

// ─── Steps ────────────────────────────────────────────────────────────────────
const steps = [
    {
        number: '01',
        title: 'Initial Consultation',
        intro: 'Meet with our counsellor for a personalised discussion about your academic background, work experience, and study abroad goals. We take time to understand your interests, future plans, and concerns, while explaining how MULA Study can support you throughout your journey.',
        points: [],
    },
    {
        number: '02',
        title: 'Profile Assessment',
        intro: 'We carefully review your education history, English level, work experience, and career objectives to understand your strengths and possible pathways. Based on your profile, we identify suitable study options and countries that align with your long-term goals.',
        points: [],
    },
    {
        number: '03',
        title: 'Study Pathway Planning',
        intro: 'We create a personalised study plan for you, including recommended courses, institutions, and timelines. You will receive clear guidance on:',
        points: [
            'Entry requirements',
            'Estimated costs and duration',
            'Possible progression pathways',
            'Visa considerations',
        ],
        description:
            'This ensures you have a realistic and well-structured roadmap before moving forward.',
    },
    {
        number: '04',
        title: 'Application & Document Guidance',
        intro: 'We guide you step-by-step in preparing your application documents, including:',
        points: [
            'Academic documents',
            'Personal statements (if required)',
            'CV or work experience evidence',
            'Supporting forms',
        ],
        description:
            'Our team reviews your documents to ensure they are accurate, complete, and aligned with your chosen study pathway.',
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContentStudyAbroad() {
    return (
        <section
            id="our-services"
            className="overflow-hidden bg-[#F5F5F7] py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Heading ── */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        How the Consultation{' '}
                        <span style={{ color: BLUE }}>Works</span>
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-gray-500">
                        A structured, personalised session designed to give you
                        clarity and confidence at every stage of your study
                        abroad journey.
                    </p>
                </div>

                {/* ── Steps ── */}
                <div className="flex flex-col gap-16">
                    {steps.map((step, idx) => {
                        const isEven = idx % 2 === 1;
                        return (
                            <div
                                key={step.number}
                                className={`grid items-center gap-10 lg:grid-cols-[1fr_2fr] ${isEven ? 'lg:grid-cols-[2fr_1fr]' : ''}`}
                            >
                                {/* Step number block */}
                                <div
                                    className={`flex items-center justify-center ${isEven ? 'lg:order-2' : ''}`}
                                >
                                    <div
                                        className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full sm:h-36 sm:w-36"
                                        style={{
                                            background: `linear-gradient(135deg, ${BLUE}18, ${TEAL}18)`,
                                            border: `1.5px solid ${BLUE}25`,
                                        }}
                                    >
                                        <span
                                            className="font-mono text-4xl leading-none font-black sm:text-5xl"
                                            style={{ color: `${BLUE}40` }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Text block */}
                                <div className={isEven ? 'lg:order-1' : ''}>
                                    {/* Label */}
                                    <span
                                        className="mb-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                                        style={{ color: BLUE }}
                                    >
                                        <span
                                            className="h-px w-5 rounded"
                                            style={{ background: BLUE }}
                                        />
                                        Step {step.number}
                                    </span>

                                    <h3 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-base leading-relaxed text-gray-500">
                                        {step.intro}
                                    </p>

                                    <ul className="mt-5 space-y-3">
                                        {step.points.map((pt) => (
                                            <li
                                                key={pt}
                                                className="flex items-start gap-3 text-sm text-gray-600"
                                            >
                                                <CheckCircle2
                                                    className="mt-0.5 h-4 w-4 shrink-0"
                                                    style={{ color: TEAL }}
                                                />
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-base leading-relaxed text-gray-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
