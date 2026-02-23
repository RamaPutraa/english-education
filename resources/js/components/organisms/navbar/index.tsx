import { Link, usePage } from '@inertiajs/react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useAppearance } from '@/hooks/use-appearance';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { dashboard, login, register } from '@/routes';

// Import logo assets
import logoLight from '@/components/images/Mula Study_Main_Transparent_72ppi_Blue.png';
import logoDark from '@/components/images/Mula Study_Main_Transparent_72ppi_White.png';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavbarProps {
    canRegister?: boolean;
}

// ─── Navigation Data ──────────────────────────────────────────────────────────
const courses = [
    {
        title: 'Study Abroad Consultation',
        href: '/services/study-abroad',
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Visa Guidance',
        href: '/services/visa-guidance',
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Scholarship Mentoring: LPDP & Australia Awards',
        href: '/services/scholarship-mentoring',
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'Course & Career Pathway Planning',
        href: '/services/course-career',
        description: 'lorem ipsum dolor sit amet',
    },
    {
        title: 'English & IELTS Preparation',
        href: '/services/english-ielts',
        description: 'lorem ipsum dolor sit amet',
    },
];

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'FAQs', href: '#' },
];

// ─── List Item (Dropdown) ─────────────────────────────────────────────────────
function ListItem({
    title,
    href,
    description,
}: {
    title: string;
    href: string;
    description: string;
}) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    href={href}
                    className={cn(
                        'group block rounded-xl p-3.5 leading-none no-underline select-none',
                        'transition-colors outline-none',
                        'hover:bg-muted focus:bg-muted',
                    )}
                >
                    <div className="mb-1 text-sm font-semibold text-foreground">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}

// ─── Theme Toggle Button ──────────────────────────────────────────────────────
function ThemeToggle({ className = '' }: { className?: string }) {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
            className={cn('relative', className)}
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
        >
            <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    );
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
export default function Navbar({ canRegister = true }: NavbarProps) {
    const { auth } = usePage().props as { auth: { user?: { name: string } } };
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md">
            <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* ── Logo ── */}
                <Link href="/" className="shrink-0">
                    <img
                        src={logoLight}
                        alt="Mula Study"
                        className="h-40 w-auto object-contain dark:hidden"
                    />
                    <img
                        src={logoDark}
                        alt="Mula Study"
                        className="hidden h-40 w-auto object-contain dark:block"
                    />
                </Link>

                {/* ── Desktop Navigation ── */}
                <nav className="hidden lg:flex lg:items-center lg:gap-1">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {/* Simple links */}
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.label}>
                                    <NavigationMenuLink
                                        href={link.href}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}

                            {/* Kursus Dropdown */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="te grid w-[480px] gap-1 p-4 md:grid-cols-2">
                                        {courses.map((course) => (
                                            <ListItem
                                                key={course.title}
                                                title={course.title}
                                                href={course.href}
                                                description={course.description}
                                            />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                {/* ── Desktop Right: Theme Toggle + Auth ── */}
                <div className="hidden lg:flex lg:items-center lg:gap-3">
                    <ThemeToggle />
                </div>

                {/* ── Mobile: Theme Toggle + Hamburger ── */}
                <div className="flex items-center gap-1 lg:hidden">
                    <ThemeToggle />
                    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Buka menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-[300px] p-0 sm:w-[360px]"
                        >
                            <SheetHeader className="border-b border-border px-6 py-4">
                                <SheetTitle asChild>
                                    <Link
                                        href="/"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <img
                                            src={logoLight}
                                            alt="Mula Study"
                                            className="w-40 object-contain dark:hidden"
                                        />
                                        <img
                                            src={logoDark}
                                            alt="Mula Study"
                                            className="hidden h-7 w-auto object-contain dark:block"
                                        />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-1 overflow-y-auto px-4 py-4">
                                {/* Simple Links */}
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                {/* Kursus Section */}
                                <div className="mt-2">
                                    <p className="mb-1 px-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                        Kursus
                                    </p>
                                    {courses.map((course) => (
                                        <a
                                            key={course.title}
                                            href={course.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex flex-col rounded-md px-3 py-2.5 transition-colors hover:bg-primary/10"
                                        >
                                            <span className="text-sm font-medium text-foreground">
                                                {course.title}
                                            </span>
                                            <span className="line-clamp-1 text-xs text-muted-foreground">
                                                {course.description}
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                <Separator className="my-3" />

                                <Button
                                    asChild
                                    className="w-full rounded-full"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <Link href={register()}>Get started</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
