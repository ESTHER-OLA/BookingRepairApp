"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { disableNavWithFooter } from "@/lib/disableComponents";
import { useAuth } from "@/lib/auth-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return pathname === path;
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user || !user.name) return "U";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <>
      {!disableNavWithFooter.includes(path) && (
        <header className="sticky top-0 z-50 px-8 w-full border-b bg-chart-3/95 backdrop-blur supports-[backdrop-filter]:bg-chart-3/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-xl hidden md:block">
                <Image
                  src="/logo-nav.png"
                  alt="logo"
                  width={80}
                  height={80}
                ></Image>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-chart-5" : "text-card"
                }`}
              >
                Home
              </Link>
              <Link
                href="#services"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/services") ? "text-chart-5" : "text-card"
                }`}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-chart-5" : "text-card"
                }`}
              >
                About
              </Link>
              <Link
                href="#bookRepair"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/bookRepair") ? "text-chart-5" : "text-card"
                }`}
              >
                Book Repair
              </Link>
              <Link
                href="#contact"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/contact") ? "text-chart-5" : "text-card"
                }`}
              >
                Contact
              </Link>
            </nav>
            <div className="flex justify-end">
              <ModeToggle />
            </div>

            <div className="hidden md:flex items-center gap-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-8 w-8 rounded-full"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={user.avatar || ""}
                            alt={user.name || "User"}
                          />
                          <AvatarFallback>{getUserInitials()}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user.name || "User"}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-chart-5 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t">
              <div className="container py-4 flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-chart-5" : "text-card"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/services") ? "text-chart-5" : "text-card"
                  }`}
                  onClick={toggleMenu}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-chart-5" : "text-card"
                  }`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="/bookRepair"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/bookRepair") ? "text-chart-5" : "text-card"
                  }`}
                  onClick={toggleMenu}
                >
                  Book Repair
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/contact") ? "text-chart-5" : "text-card"
                  }`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                  {isAuthenticated ? (
                    <>
                      <Link href="/notifications" onClick={toggleMenu}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <Bell className="mr-2 h-4 w-4" />
                          Notifications
                          {unreadCount > 0 && (
                            <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                              {unreadCount}
                            </span>
                          )}
                        </Button>
                      </Link>
                      <Link href="/profile" onClick={toggleMenu}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={handleLogout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={toggleMenu}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                        >
                          Login
                        </Button>
                      </Link>
                      <Link href="/signup" onClick={toggleMenu}>
                        <Button className="w-full bg-gradient-to-r from-chart-5 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
}
