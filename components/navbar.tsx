"use client";

import {
  LuHome,
  LuFolderHeart,
  LuLuggage,
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
  Button,
  Image,
  NavbarProps,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const menuItems = ["Home", "Work", "Projects"];

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();

  return (
    <NextUiNavbar
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
        className="gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
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
              src="/beaudelaire.jpeg"
            />
          </div>
          <span className="ml-2 font-medium md:hidden">Beaudelaire</span>
        </NavbarBrand>

        {/* Items */}
        <NavbarItem className="hidden md:flex" isActive={pathname === "/"}>
          <Link
            className="text-black flex gap-2 hover:text-foreground-900"
            href="/"
            size="md"
          >
            <LuHome />
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex" isActive={pathname === "/work"}>
          <Link
            className="text-black flex gap-2 hover:text-foreground-900"
            href="/work"
            size="md"
          >
            <LuLuggage />
            Work
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
          <Button
            className="text-black flex gap-2 hover:text-foreground-900 text-medium"
            radius="full"
            variant="flat"
          >
            <LuMessageCircle />
            Say Hi
          </Button>
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
            <Link className="w-full text-default-500" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}