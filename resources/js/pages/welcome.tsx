import { Head, usePage } from '@inertiajs/react';
import Navbar from '@/components/organisms/navbar';
import Footer from '@/components/organisms/footer';
import HeroSection from '@/components/organisms/hero-section';
import WhySection from '@/components/organisms/why-section';
import HowItWorksSection from '@/components/organisms/how-it-works';
import ReviewSection from '@/components/organisms/review-section';
import BlogSection from '@/components/organisms/blog-section';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col bg-background">
                <Navbar canRegister={canRegister} />

                <main className="flex-1">
                    <HeroSection />
                    <WhySection />
                    <HowItWorksSection />
                    <ReviewSection />
                    <BlogSection />
                </main>

                <Footer />
            </div>
        </>
    );
}
