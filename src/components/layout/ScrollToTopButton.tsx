"use client";

import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-lg border border-[#2d313b] bg-[#111317] text-fit-muted transition-all hover:translate-y-[-55%] hover:border-fit-accent-alt hover:bg-[#1a2312] hover:text-fit-accent-alt sm:absolute sm:top-1/2 sm:right-6 sm:-translate-y-1/2"
    >
      <ArrowUp size={17} strokeWidth={2} />
    </button>
  );
};

export default ScrollToTopButton;
