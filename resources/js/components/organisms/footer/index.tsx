import { Link } from '@inertiajs/react';
import { Separator } from '@/components/ui/separator';
import {
    Mail,
    Phone,
    MapPin,
    Instagram,
    Youtube,
    Facebook,
} from 'lucide-react';

// Import logo (versi putih/terang untuk footer gelap)
import logoDark from '@/components/images/Mula_Logo_Secondary_Transparent_72ppi_White.png';

// ─── Footer Data ──────────────────────────────────────────────────────────────
const footerLinks = {
    kursus: [
        { label: 'English for Beginners', href: '#' },
        { label: 'Business English', href: '#' },
        { label: 'IELTS Preparation', href: '#' },
        { label: 'Conversation Practice', href: '#' },
    ],
    perusahaan: [
        { label: 'Tentang Kami', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Karier', href: '#' },
        { label: 'Hubungi Kami', href: '#' },
    ],
    bantuan: [
        { label: 'FAQ', href: '#' },
        { label: 'Syarat & Ketentuan', href: '#' },
        { label: 'Kebijakan Privasi', href: '#' },
        { label: 'Kebijakan Refund', href: '#' },
    ],
};

const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
];

const contactInfo = [
    { icon: Mail, text: 'hello@mulastudy.com' },
    { icon: Phone, text: '+62 812-3456-7890' },
    { icon: MapPin, text: 'Jakarta, Indonesia' },
];

// ─── Footer Component ─────────────────────────────────────────────────────────
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground">
            {/* ── Top accent rule ── */}
            <div
                className="h-[2px] w-full opacity-20"
                style={{
                    background:
                        'linear-gradient(to right, transparent, white, transparent)',
                }}
            />

            {/* ── Main Footer Content ── */}
            <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
                    {/* ── Brand Column ── */}
                    <div className="lg:col-span-2">
                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <img
                                src={logoDark}
                                alt="Mula Study"
                                className="h-40 w-auto object-contain"
                            />
                        </Link>

                        {/* Tagline */}
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
                            Platform belajar bahasa Inggris terpercaya untuk
                            membantu Anda meraih potensi terbaik dalam karier
                            dan kehidupan.
                        </p>

                        {/* Contact Info */}
                        <ul className="mt-6 space-y-2">
                            {contactInfo.map(({ icon: Icon, text }) => (
                                <li
                                    key={text}
                                    className="flex items-center gap-2.5 text-sm text-primary-foreground/80"
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links */}
                        <div className="mt-7 flex items-center gap-2">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-primary-foreground/50 hover:text-primary-foreground"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Kursus Links ── */}
                    <div>
                        <h3 className="mb-5 text-[10px] font-bold tracking-[0.18em] text-primary-foreground/40 uppercase">
                            Services
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.kursus.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Perusahaan Links ── */}
                    <div>
                        <h3 className="mb-5 text-[10px] font-bold tracking-[0.18em] text-primary-foreground/40 uppercase">
                            Company
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Bantuan Links ── */}
                    <div>
                        <h3 className="mb-5 text-[10px] font-bold tracking-[0.18em] text-primary-foreground/40 uppercase">
                            Support
                        </h3>
                        <ul className="space-y-2.5">
                            {footerLinks.bantuan.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <Separator className="bg-primary-foreground/10" />
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                    <p className="text-xs text-primary-foreground/60">
                        © {currentYear} Mula Study. Semua hak dilindungi.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                        >
                            Syarat & Ketentuan
                        </a>
                        <a
                            href="#"
                            className="text-xs text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                        >
                            Kebijakan Privasi
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
