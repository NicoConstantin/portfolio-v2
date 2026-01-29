'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Languages, Moon, Sun, Menu, CodeXml } from 'lucide-react'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const { resolvedTheme, setTheme } = useTheme()
  const params = useParams<{ locale?: string }>()
  const locale = typeof params?.locale === 'string' ? params.locale : 'en'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const navOptions: string[] = ['home', 'about', 'skills', 'projects', 'recommendations']
  const langOptions: string[] = ['en', 'fr', 'es']

  const toggleTheme = () => {
    const isDark = resolvedTheme === 'dark'
    setTheme(isDark ? 'light' : 'dark')
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <nav className="fixed top-0 z-50 flex h-16 w-full items-center justify-center border-b backdrop-blur-md bg-background/80">
      <div className="z-50 flex h-full w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href={`#home`} className="z-40">
          <CodeXml className="text-primary text-xl transition-all duration-300 ease-in-out hover:opacity-90" />
        </Link>

        {/*MENU Hamburger */}
        <div className="flex items-center md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="border-border bg-surface/95 top-16 flex flex-col items-center justify-start gap-y-6 rounded-b-2xl border-b p-10 shadow-sm"
            >
              <div className="flex w-full flex-col items-center gap-y-4">
                {navOptions.map((option: string) => {
                  return (
                    <SheetClose asChild key={option}>
                      <Link
                        href={`#${option}`}
                        className="text-md hover:text-foreground transition-all duration-300 ease-in-out"
                      >
                        {t(option)}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>

              <div className="bg-border h-px w-full" />

              <div className="flex w-full items-center justify-center gap-x-6">
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDark ? <Sun /> : <Moon />}
                </Button>

                <div className="border-border bg-surface-2 inline-flex rounded-full border p-1">
                  {langOptions.map((lng: string) => {
                    const isActive = lng === locale
                    return (
                      <SheetClose asChild key={lng}>
                        <Link
                          href="/"
                          locale={lng}
                          aria-current={isActive ? 'true' : undefined}
                          aria-label={t(`Languages.${lng}`)}
                          title={t(`Languages.${lng}`)}
                          className={cn(
                            'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                            isActive ? 'bg-background text-foreground shadow-sm' : 'text-muted hover:text-foreground'
                          )}
                        >
                          {lng.toUpperCase()}
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/*MENU TABLET-DESKTOP */}
        <div className="hidden items-center gap-x-6 md:flex">
          <ul className="flex items-center gap-x-6 lg:gap-x-8">
            {navOptions.map((option: string) => {
              return (
                <Link
                  key={option}
                  href={`#${option}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {t(option)}
                </Link>
              )
            })}
          </ul>

          <div className="flex items-center gap-x-2 ">
            <Button
              variant="ghost"
              className="hover:text-primary transition-colors"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hover:text-primary transition-colors">
                  <Languages />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50" align="end">
                {langOptions.map((lng: string) => {
                  return (
                    <DropdownMenuItem key={lng} className="cursor-pointer">
                      <Link
                        href="/"
                        locale={lng}
                        className="text-md hover:text-primary transition-all duration-300 ease-in-out"
                      >
                        {t(`Languages.${lng}`)}
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
