

## Redesign: Full-Screen Press Kit Hero

Based on the reference image, I'll transform the hero into an immersive full-screen layout and move social icons there.

### Changes

**1. `src/components/HeroSection.tsx` — Full redesign**
- Full viewport height with reduced overlay (~30%) so artist photo dominates
- Large centered "DAFONSE" name
- Three circular icon buttons below (Music, Play, Contact) with `border-primary` glow styling
- Animated bouncing chevron-down arrow
- Social media icons row at bottom (Instagram, SoundCloud, Spotify, TikTok, YouTube) as small circular buttons

**2. `src/components/ContactSection.tsx` — Remove duplicate socials**
- Remove social icons (now in hero)
- Keep WhatsApp CTA only

**3. `src/index.css` — Add bounce animation keyframe**
- Add `bounce-slow` keyframe for the chevron arrow

**4. `tailwind.config.ts` — Register bounce animation**

