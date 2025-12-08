// Centralized theme configuration for consistent styling across components

export const themeClasses = {
  // Container & Layout
  container: {
    main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    section: "py-16 sm:py-20 lg:py-24",
  },

  // Typography
  typography: {
    h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent",
    h2: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white",
    h3: "text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white",
    h4: "text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-100",
    lead: "text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed",
    body: "text-base text-neutral-700 dark:text-neutral-300",
    small: "text-sm text-neutral-600 dark:text-neutral-400",
  },

  // Cards
  card: {
    base: "group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 hover:-translate-y-1",
    hover: "hover:border-primary-300 dark:hover:border-primary-700",
    padding: "p-6 sm:p-8",
    glass:
      "backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50",
  },

  // Buttons
  button: {
    primary:
      "inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900",
    secondary:
      "inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900",
    ghost:
      "inline-flex items-center justify-center px-4 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200",
  },

  // Form Elements
  form: {
    input:
      "w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none",
    textarea:
      "w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 outline-none resize-none",
    label:
      "block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2",
  },

  // Badges & Tags
  badge: {
    primary:
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800",
    secondary:
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800",
    neutral:
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700",
  },

  // Gradient Overlays
  gradient: {
    radial:
      "absolute inset-0 bg-gradient-radial from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
    mesh: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-accent-500/5 to-transparent opacity-50",
  },

  // Animations
  animation: {
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
    scaleIn: "animate-scale-in",
  },

  // Dividers
  divider: {
    horizontal:
      "w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent",
    vertical:
      "w-px h-full bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent",
  },

  // Links
  link: {
    default:
      "text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 underline-offset-4 hover:underline",
    nav: "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200",
  },

  // Icons
  icon: {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  },
};

// Helper function to combine classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
