Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Youth Sports Organization Website with Baseball/Softball Focus
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Home, Baseball, Softball, Prospects, News, Events, College Commits, Fan Wear, Sponsorship, Contact
- Social media icons in top right: Facebook, Instagram, YouTube, Baseball/Softball icon
- Two main entry points via Baseball and Softball sections


2. Layout Components:
- Header logo section: 200px height
- Main navigation bar: 60px height
- Hero banner with mission statement: 400px height
- Dual-panel layout for Baseball/Softball sections: 50/50 split
- Footer height: 80px with social media icons


3. Content Sections:
- Organization logo and branding header
- Mission statement text block
- Baseball entry point with grayscale logo
- Softball entry point with yellow logo
- Copyright footer section


4. Interactive Controls:
- "CLICK TO ENTER" buttons for both Baseball and Softball sections
- Navigation menu items with hover states
- Social media icon links with hover effects
- Interactive logo buttons for sport selection


5. Colors:
- Primary: Yellow (#FFD700)
- Secondary: Black (#000000)
- Accent: White (#FFFFFF)
- Gray: (#808080) for Baseball logo
- Background gradients for sport sections


6. Grid/Layout Structure:
- 12-column grid system
- Full-width header and footer
- Two-column layout for main content
- Responsive breakpoints at 768px and 1024px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── Navigation
│   ├── features/
│   │   ├── BaseballSection
│   │   ├── SoftballSection
│   │   └── MissionStatement
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Responsive navigation system
- Sport-specific entry points
- Social media integration
- Dynamic content loading
- Interactive sport selection


3. State Management:
```typescript
interface AppState {
├── navigation: {
│   ├── currentPage: string
│   ├── isMenuOpen: boolean
├── }
├── sports: {
│   ├── selectedSport: 'baseball' | 'softball'
│   └── sportContent: SportContent
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/baseball/*',
├── '/softball/*',
├── '/prospects',
├── '/news',
├── '/events',
├── '/college-commits',
├── '/fan-wear',
├── '/sponsorship',
└── '/contact'
]
```


5. Component Architecture:
- MainLayout (Header, Content, Footer)
- SportSection (BaseballSection, SoftballSection)
- NavigationBar
- SocialMediaBar
- ContentContainer


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'large': 1440px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.