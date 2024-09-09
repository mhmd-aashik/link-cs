import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-30 h-14 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="z-40 flex items-center justify-center gap-1"
          >
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="h-7 w-7"
            />
            <span className="text-2xl font-semibold">Convo</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            <MobileNav />

            <div className="hidden items-center space-x-4 sm:flex">
              <>
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <SignedOut>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                    href="/sign-in"
                  >
                    Sign in
                  </Link>
                </SignedOut>
                <SignedOut>
                  <Link
                    className={buttonVariants({
                      size: "sm",
                    })}
                    href="/sign-up"
                  >
                    Register
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSwitchSessionUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-10 w-10",
                      },
                    }}
                  />
                </SignedIn>
                <SignedIn>
                  <Button>
                    <SignOutButton />
                  </Button>
                </SignedIn>
              </>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
