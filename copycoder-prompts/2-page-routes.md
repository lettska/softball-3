Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /home
- /baseball
- /softball
- /prospects
- /news
- /events
- /college-commits
- /fan-wear
- /sponsorship
- /contact

Page Implementations:
/home:
Core Purpose: Serve as main landing page showcasing organization overview
Key Components
- Hero banner with featured content
- Program highlights section
- Latest news

/updates feed
- Upcoming events calendar preview
- Success stories carousel
Layout Structure:
- Full-width hero section
- 3-column grid for highlights
- Sidebar layout for news

/baseball:
Core Purpose: Baseball program information and team management
Key Components
- Team rosters and schedules
- Practice

/game calendars
- Coach profiles
- Photo galleries
- Stats dashboard
Layout Structure:
- Tabbed interface for different teams
- Split view for schedule

/softball:
Core Purpose: Softball program information and team management
Key Components
- Team rosters and schedules
- Practice

/prospects:
Core Purpose: Showcase player profiles for college recruitment
Key Components
- Player profile cards
- Skills assessment metrics
- Video highlights
- Academic records
- Contact forms
Layout Structure
- Filterable grid of profiles
- Modal detailed views
- Split screen video player
- Stats visualization

/news:
Core Purpose: Organization news and updates hub
Key Components
- Article feed
- Category filters
- Search functionality
- Social media integration
- Newsletter signup
Layout Structure
- Main content + sidebar
- Infinite scroll articles
- Featured article hero
- Category navigation

/events:
Core Purpose: Event management and registration
Key Components
- Calendar view
- Event details cards
- Registration forms
- Payment integration
- Event maps
Layout Structure
- Calendar grid view
- List view option
- Event detail modals
- Registration workflow

/college-commits:
Core Purpose: Celebrate and track college commitments
Key Components
- Commitment announcements
- Player profiles
- College information
- Historical commitment data
Layout Structure
- Timeline view
- School-grouped grid
- Stats dashboard
- Success stories

/fan-wear:
Core Purpose: E-commerce for organization merchandise
Key Components
- Product catalog
- Shopping cart
- Size

/color selectors
- Payment processing
- Order management
Layout Structure:
- Product grid
- Filter sidebar
- Quick view modals
- Checkout flow

/sponsorship:
Core Purpose: Sponsor acquisition and management
Key Components
- Sponsorship tiers
- Benefits overview
- Application forms
- Sponsor showcase
- Payment options
Layout Structure
- Pricing table
- Benefits comparison
- Application wizard
- Current sponsor grid

/contact:
Core Purpose: Organization communication hub
Key Components
- Contact form
- Location map
- Department directory
- Social media links
- FAQ section
Layout Structure
- Split contact

Layouts:
MainLayout:
- Applicable routes: All routes
- Core components
  - Navigation header
  - Footer
  - Breadcrumbs
  - Mobile menu
- Responsive behavior
  - Collapsible navigation
  - Stack layout on mobile
  - Flexible content area

DashboardLayout
- Applicable routes: /baseball, /softball, /prospects
- Core components
  - Sidebar navigation
  - Stats header
  - Action buttons
  - Quick links
- Responsive behavior
  - Collapsible sidebar
  - Scrollable content
  - Mobile-optimized stats

CommerceLayout
- Applicable routes: /fan-wear
- Core components
  - Shopping cart
  - Category nav
  - Search bar
  - User account
- Responsive behavior
  - Sticky cart
  - Mobile catalog view
  - Simplified checkout
</page-structure-prompt>