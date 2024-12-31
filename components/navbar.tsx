"use client";

import {
  LuFolderHeart,
  LuMessageCircle,
} from "react-icons/lu";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Image,
  NavbarProps,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useReducer } from "react";
import {FaHome} from "react-icons/fa";

const menuItems = ["Home", "Work", "Projects"];

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUiNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      {...props}
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary-200",
        ],
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-5 md:gap-8 rounded-full border-small border-default-200/20 bg-background/60 pl-2 pr-1 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="rounded-full bg-foreground text-background">
            <Image
              alt="Logo"
              className="h-10 w-10 rounded-full"
              src="/avatar.jpeg"
            />
          </div>
          <span className="ml-2 font-medium md:hidden">Ali</span>
        </NavbarBrand>

        {/* Items */}
        <NavbarItem className="hidden md:flex" isActive={pathname === "/"}>
          <Link
            className="text-black flex gap-2 hover:text-foreground-900"
            href="/"
            size="md"
          >
            <FaHome />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className="hidden md:flex"
          isActive={pathname === "/projects"}
        >
          <Link
            className="text-black flex gap-2 hover:text-foreground-900"
            href="/projects"
            size="md"
          >
            <LuFolderHeart />
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
          <Link
            className="text-black flex gap-2 hover:text-foreground-900 text-medium ml-3 bg-[#4D869C]/40 rounded-full px-3 py-3"
            href="https://cal.com/abufutaim"
          >
            <LuMessageCircle size={20} />
            Let's Talk
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black hover:text-primary"
              href={
                item.toLowerCase() == "home" ? "/" : `/${item}`.toLowerCase()
              }
              size="md"
              onPress={() => setIsMenuOpen()}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}
