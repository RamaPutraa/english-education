// ─── Brand Colours ────────────────────────────────────────────────────────────
const BRAND = {
    blue: '#4260E2',
    teal: '#53D1BF',
    orange: '#F94F02',
    purple: '#9006FC',
    yellow: '#FFF231',
};

// ─── Blog Posts Data ───────────────────────────────────────────────────────────
const posts = [
    {
        tag: 'Study Abroad',
        tagColor: BRAND.blue,
        date: 'Feb 12, 2026',
        title: 'How to Choose the Right University in Australia',
        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.',
        readTime: '5 min read',
        featured: true,
    },
    {
        tag: 'IELTS Tips',
        tagColor: BRAND.teal,
        date: 'Feb 8, 2026',
        title: 'The 7 Habits of High-Scoring IELTS Candidates',
        excerpt:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
        readTime: '4 min read',
        featured: false,
    },
    {
        tag: 'Scholarship',
        tagColor: BRAND.orange,
        date: 'Jan 30, 2026',
        title: 'LPDP 2026: A Complete Application Guide',
        excerpt:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        readTime: '7 min read',
        featured: false,
    },
    {
        tag: 'Visa',
        tagColor: BRAND.purple,
        date: 'Jan 22, 2026',
        title: 'Student Visa Checklist: What You Actually Need',
        excerpt:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
        readTime: '3 min read',
        featured: false,
    },
];

// ─── Image Placeholder ────────────────────────────────────────────────────────
function ImgPlaceholder({ className }: { className?: string }) {
    return (
        <div
            className={`flex items-center justify-center bg-gray-100 ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
            </svg>
        </div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function BlogSection() {
    const [featured, ...rest] = posts;

    return (
        <section id="blog" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Header ── */}
                <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span
                            className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-bold tracking-widest text-white uppercase"
                            style={{ background: BRAND.blue }}
                        >
                            Blog
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Insights &{' '}
                            <span style={{ color: BRAND.blue }}>updates.</span>
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors duration-200 hover:text-gray-900"
                    >
                        View all posts
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                {/* ── Grid: 1 featured left + 3 small right ── */}
                <div className="grid gap-6 lg:grid-cols-5">
                    {/* Featured card */}
                    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md lg:col-span-3">
                        {/* Image */}
                        <ImgPlaceholder className="aspect-video w-full" />

                        {/* Content */}
                        <div className="flex flex-1 flex-col gap-4 p-8">
                            <div className="flex items-center gap-3">
                                <span
                                    className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                                    style={{ background: featured.tagColor }}
                                >
                                    {featured.tag}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {featured.date}
                                </span>
                            </div>
                            <h3 className="text-xl leading-snug font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#4260E2] sm:text-2xl">
                                {featured.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-400">
                                {featured.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-4">
                                <span className="text-xs text-gray-400">
                                    {featured.readTime}
                                </span>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                                    style={{ color: BRAND.blue }}
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* Small cards */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        {rest.map((post) => (
                            <article
                                key={post.title}
                                className="group flex gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                {/* Thumbnail */}
                                <ImgPlaceholder className="h-20 w-20 shrink-0 rounded-xl" />

                                {/* Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="mb-1.5 flex items-center gap-2">
                                            <span
                                                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                                                style={{
                                                    background: post.tagColor,
                                                }}
                                            >
                                                {post.tag}
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-sm leading-snug font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#4260E2]">
                                            {post.title}
                                        </h3>
                                    </div>
                                    <span className="mt-2 text-xs text-gray-400">
                                        {post.readTime}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
