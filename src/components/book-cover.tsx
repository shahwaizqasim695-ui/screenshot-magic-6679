import { motion } from "motion/react";
import coverAsset from "@/assets/book-cover.png.asset.json";

export function BookCover({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, oklch(0.8 0.13 72 / 55%), transparent 68%)",
        }}
      />
      <motion.img
        src={coverAsset.url}
        alt="Cover of Mastersippi J2 — Jessica: The Storm Collection by Tempestt Lyles"
        width={1300}
        height={1950}
        className="cover-glow relative w-full"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -8, rotate: -0.6 }}
      />
    </div>
  );
}
