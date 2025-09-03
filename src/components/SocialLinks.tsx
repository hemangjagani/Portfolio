import { cn } from "@/lib/utils";
import {
  Facebook,
  Linkedin,
  Twitter,
  ExternalLink,
  Github,
  Slack,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";
import Image from "next/image";

const SocialLinks = () => {
  const links = [
    // {
    //   name: "Facebook",
    //   link: portfolioConfig.socialLinks.facebook,
    //   icon: <Facebook />,
    // },
    // {
    //   name: "Twitter",
    //   link: portfolioConfig.socialLinks.twitter,
    //   icon: <Twitter />,
    // },
    {
      name: "Upwork",
      link: portfolioConfig.socialLinks.upwork,
      icon: (
        <Image
          src="/upwork.svg"
          alt="Upwork"
          width={10}
          height={10}
          className="h-6 w-6 invert-0 dark:invert"
        />
      ),
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
    {
      name: "Slack",
      link: portfolioConfig.socialLinks.slack,
      icon: <Slack />,
    },
    // {
    //   name: "External",
    //   link: portfolioConfig.socialLinks.external,
    //   icon: <ExternalLink />,
    // },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="_blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "border-black text-black dark:border-white dark:text-white"
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
