import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ─── Brand Colours ────────────────────────────────────────────────────────────
const BRAND = {
    blue: '#4260E2',
    teal: '#53D1BF',
    orange: '#F94F02',
    purple: '#9006FC',
    yellow: '#FFF231',
};

// ─── Reviews Data ─────────────────────────────────────────────────────────────
const reviews = [
    {
        name: 'Stephanie',
        avatar: 'AP',
        color: BRAND.blue,
        stars: 5,
        text: "This is my second time joining the private class. It's been really fun, I got a lot of new vocabulary, and I got homework that really helped me understand grammar better. Miss Utari helped me correct my homework. I can feel that my English has improved compared to before 🤩",
    },
    {
        name: 'Stephanie W.',
        avatar: 'SW',
        color: BRAND.teal,
        stars: 5,
        text: "Miss Utari has really helped me a lot with my English. I love the way she teaches — it's clear, fun, and easy to follow. She's super kind and always makes me feel comfortable speaking in English. Big thanks to Miss Utari 🤩",
    },
    {
        name: 'Putu Veby',
        avatar: 'PV',
        color: BRAND.orange,
        stars: 5,
        text: 'Hi Utari! Thank you so much for my first session. I know my English is not good, but you are very patient in teaching me. The knowledge given is very easy to understand. I wish I can get the next session as soon as possible ❤️',
    },
    {
        name: 'Michelle Stephanie',
        avatar: 'MS',
        color: BRAND.purple,
        stars: 5,
        text: "Mentoring with Kak Suzana at Mula Study, from early study planning to preparing my scholarship essay for Australia, was incredibly helpful. It wasn't just about revising the writing, but also about shaping the way I think. Highly recommended ✨",
    },
];

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={BRAND.yellow}
                    className="h-4 w-4"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ReviewSection() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 'left' | 'right') => {
        if (!trackRef.current) return;
        const card = trackRef.current.querySelector(
            '[data-card]',
        ) as HTMLElement;
        const gap = 20;
        const amount = (card?.offsetWidth ?? 320) + gap;
        trackRef.current.scrollBy({
            left: dir === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section id="reviews" className="bg-[#F5F5F7] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Header row ── */}
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <span
                            className="mb-3 inline-block text-xs font-bold tracking-widest uppercase"
                            style={{ color: BRAND.blue }}
                        >
                            Testimonials
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            What our students{' '}
                            <span style={{ color: BRAND.blue }}>say.</span>
                        </h2>
                    </div>

                    {/* Prev / Next buttons */}
                    <div className="hidden gap-2 sm:flex">
                        <button
                            onClick={() => scroll('left')}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-gray-400 hover:text-gray-900"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-gray-400 hover:text-gray-900"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* ── Slider track ── */}
                <div
                    ref={trackRef}
                    className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {reviews.map(({ name, avatar, color, stars, text }) => (
                        <div
                            key={name + avatar}
                            data-card
                            className="flex w-[320px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:w-[360px]"
                        >
                            {/* Stars */}
                            <Stars count={stars} />

                            {/* Quote */}
                            <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
                                "{text}"
                            </p>

                            {/* Author */}
                            <div className="mt-6 flex items-center gap-3 border-t border-gray-50 pt-5">
                                <div
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                                    style={{ background: color }}
                                >
                                    {avatar}
                                </div>
                                <p className="text-sm font-semibold text-gray-900">
                                    {name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
