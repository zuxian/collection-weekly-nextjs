import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import ThemeChanger from "../themeSwitch";
import { useTheme } from 'next-themes'


function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src
  switch (resolvedTheme) {
    case 'light':
      src = '/tailwind-logo.svg'
      break
    case 'dark':
      src = '/tailwind-logo-black.svg'
      break
    default:
      src = '/tailwind-logo.svg'
      break
  }
  return <Image src={src} width={40} height={40} priority alt="Tailwind CSS logo" />
}

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-green-500 dark:bg-purple-800">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6 text-white dark:text-black">
        <div className="flex items-center">
          {/* <Image
            src="/tailwind-logo.svg"
            width={40}
            height={40}
            priority
            alt="Tailwind CSS logo"
          /> */}

          <ThemedImage />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 ">
              收藏周刊
            </a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "首页", route: "/" },
            { title: "关于", route: "/about" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6 font-bold md:text-lg" key={title}>
              <Link href={route}>
                <a className="block">{title}</a>
              </Link>
            </li>
          ))}
          <li className="mt-3 md:mt-0 md:ml-6 font-bold md:text-lg" key="一键换肤">
           <ThemeChanger  />
          </li>
        </ul>
      </div>
    </header>
  );
}
