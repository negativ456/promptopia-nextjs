"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/shared/assets/images/logo.svg";
import {
  ClientSafeProvider,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { useEffect, useState } from "react";
import { LiteralUnion } from "next-auth/react/types";
import { BuiltInProviderType } from "next-auth/providers";
import { HeaderSkeleton } from "@/shared/ui/Skeletons/HeaderSkeleton/HeaderSkeleton";
import { AppRoutes, routes } from "@/shared/const/routes";

export const Navbar = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setCurrentProviders = async () => {
      return await getProviders();
    };

    setCurrentProviders().then((r) => {
      console.log(r);
      setProviders(r);
    });
  }, []);

  if (status === "loading") {
    return (
      <div className={"w-full pt-3"}>
        <HeaderSkeleton />
      </div>
    );
  }

  return (
    <nav className={"flex-between w-full mb-16 pt-3"}>
      <Link
        href={routes[AppRoutes.MAIN]()}
        className={"flex gap-2 flex-center"}
      >
        <Image src={Logo} width={30} height={30} alt={"logo"} />
        <p className="logo_text">Promptopia</p>
      </Link>
      <div className={"sm:flex hidden"}>
        {session?.user ? (
          <div className={"flex gap-3 md:gap-5"}>
            <Link className={"black_btn"} href={routes[AppRoutes.CREATE]()}>
              Create post
            </Link>
            <button
              type={"button"}
              onClick={() => signOut()}
              className={"outline_btn"}
            >
              Sign out
            </button>
            <Link href={routes[AppRoutes.PROFILE]()}>
              <Image
                src={session?.user.image ?? Logo}
                width={37}
                height={37}
                className={"rounded-full"}
                alt={"profile"}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className={"black_btn"}
                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      <div className={"sm:hidden flex relative"}>
        {session?.user ? (
          <div className={"flex"}>
            <Image
              src={session?.user.image ?? Logo}
              width={37}
              height={37}
              onClick={() => setToggleDropdown((prev) => !prev)}
              className={"rounded-full"}
              alt={"profile"}
            />
            {toggleDropdown && (
              <div className={"dropdown"}>
                <Link
                  className={"dropdown_link"}
                  onClick={() => setToggleDropdown(false)}
                  href={routes[AppRoutes.PROFILE]()}
                >
                  My profile
                </Link>
                <Link
                  className={"dropdown_link"}
                  onClick={() => setToggleDropdown(false)}
                  href={routes[AppRoutes.CREATE]()}
                >
                  Create prompt
                </Link>
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className={"mt-5 w-full black_btn"}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className={"black_btn"}
                  key={provider.id}
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};
