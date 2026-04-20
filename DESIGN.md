# Stellar19 Studios - Design Documentation

## 1. Visual Identity & Aesthetic
The design for Stellar19 Studios is inspired by **Pro Wrestling** aesthetics: high-energy, aggressive, bold, and high-contrast. It leverages a modern "Cyber/Neon" dark mode style.

- **Background:** Deep solid black (`#000000`) or gritty industrial textures (concrete, metal).
- **Primary Accent:** Neon Electric Pink (`#FF007F`) for buttons, glowing borders, and interactive elements.
- **Typography:** 
  - **Headings:** Heavy, bold, and slightly italicized sans-serif (e.g., `Inter` Black or custom Impact-style font). Text should feel like it's "shouting."
  - **Body:** Clean, wide sans-serif for high readability on dark backgrounds.
- **Effects:**
  - **Glassmorphism:** Frosted glass overlays (`backdrop-blur-lg`) for content cards to add depth without losing the "dark" feel.
  - **Neon Glow:** Subtle outer glows on buttons and active headers.
  - **Transitions:** Fast, snappy animations (0.15s - 0.2s) that feel energetic.

## 2. Core Components
### 2.1. The "Aggressive" Button
- Background: `#FF007F` (Neon Pink).
- Text: White, Bold, All-Caps.
- Hover: Invert colors or increase glow intensity.
- Shape: Sharp corners or slight diagonal cuts to emphasize the "aggressive" look.

### 2.2. Content Cards
- Background: `rgba(255, 255, 255, 0.05)` (Glassmorphism).
- Border: `1px solid rgba(255, 255, 255, 0.1)` with selective pink highlights on focus.
- Blur: `10px`.

## 3. Layout Structure
- **Asymmetric Grid:** Use overlapping elements and diagonal lines to break the traditional boxy web feel.
- **Section Breaks:** Sharp, angled dividers instead of flat horizontal lines.

## 4. Headless CMS Strategy (Supabase)
All textual content, service pricing, and equipment lists are pulled from Supabase. The frontend acts as a high-fidelity visual shell for the dynamic data.
- **Revalidation:** Next.js ISR or Real-time listeners to ensure client updates are reflected instantly.
