import { useEffect } from "react";

/**
 * Sets --vv-bottom-inset on documentElement so scrollable regions can pad
 * above the virtual keyboard when the layout viewport does not shrink.
 */
export function useVisualViewportInset(): void {
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) {
      return;
    }

    const update = () => {
      const bottom = Math.max(
        0,
        window.innerHeight - (vv.height + vv.offsetTop)
      );
      document.documentElement.style.setProperty(
        "--vv-bottom-inset",
        `${bottom}px`
      );
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--vv-bottom-inset");
    };
  }, []);
}
