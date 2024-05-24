import React, { useState, forwardRef } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  MotionProps,
  Variants,
} from "framer-motion";
import {
  MenuButton,
  Menu,
  MenuItem as AriakitMenuItem,
  useMenuStore,
  MenuButtonArrow,
  MenuArrow,
} from "@ariakit/react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const menuVariants: Variants = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const itemProps: MotionProps = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
};

export default function BeOurPartner() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuItemClick = (type: string) => {
    navigate(`/signin?type=${type}`);
  };

  return (
    <MenuComponent
      label="Be Our Partner"
      className="inline-flex w-full justify-center gap-x-1.5 text-s font-semibold ring-1 ring-inset ring-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 transition duration-700 ease-in-out rounded-lg border-2 border-white shadow shadow-primary px-[20px] py-[5px]"
      open={open}
      setOpen={setOpen}
      animate={open ? "open" : "closed"}
      initial="closed"
      exit="closed"
      variants={menuVariants}
    >
      <MenuItem {...itemProps} onClick={() => handleMenuItemClick("owner")}>
        Food / Mart Merchant
      </MenuItem>
      <MenuItem {...itemProps} onClick={() => handleMenuItemClick("driver")}>
        Savor Driver
      </MenuItem>
      <MenuItem {...itemProps} onClick={() => handleMenuItemClick("rider")}>
        Savor Rider
      </MenuItem>
    </MenuComponent>
  );
}

interface MenuProps extends React.ComponentPropsWithoutRef<typeof MenuButton> {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  label: React.ReactNode;
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
  initial?: MotionProps["initial"];
  exit?: MotionProps["exit"];
}

const MenuComponent = forwardRef<HTMLButtonElement, MenuProps>(
  function MenuComponent(
    {
      open,
      setOpen,
      label,
      children,
      animate,
      transition,
      variants,
      initial,
      exit,
      ...props
    },
    ref
  ) {
    const menu = useMenuStore({ open, setOpen });
    const currentPlacement = menu.useState("currentPlacement");
    const mounted = menu.useState("mounted");
    return (
      <MotionConfig reducedMotion="user">
        <MenuButton
          store={menu}
          ref={ref}
          {...props}
          className={clsx(
            "inline-flex w-full justify-center items-center gap-x-1.5 text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          )}
        >
          {label}
          <MenuButtonArrow />
        </MenuButton>
        <AnimatePresence>
          {mounted && (
            <Menu
              store={menu}
              alwaysVisible
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              data-placement={currentPlacement}
              render={
                <motion.div
                  initial={initial}
                  exit={exit}
                  animate={animate}
                  variants={variants}
                  transition={transition}
                />
              }
            >
              <MenuArrow className="menu-arrow" />
              {children}
            </Menu>
          )}
        </AnimatePresence>
      </MotionConfig>
    );
  }
);

interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {}

const MotionMenuItem = motion(AriakitMenuItem);

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(
  props,
  ref
) {
  return (
    <MotionMenuItem
      ref={ref}
      {...props}
      className={clsx(
        "block w-full text-left text-sm px-4 py-2 text-gray-700 hover:bg-gray-100 hover:underline underline-offset-8 decoration-amber-500 decoration-2"
      )}
    />
  );
});
