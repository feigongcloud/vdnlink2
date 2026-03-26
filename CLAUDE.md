# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **VIPSpeed (视界云)**, a TikTok/cross-border VPN service marketing website built with Umi.js 3.x and React 17. The site promotes global network services for TikTok live streaming, short video operations, cross-border office work, and AI tool access.

## Build & Development Commands

### Development
```bash
npx umi dev
# or if umi is globally installed:
umi dev
```

### Production Build
```bash
npx umi build
# Output: dist/ directory
```

### Deployment
```bash
./deploy_vipspeed.sh
```
This script:
1. Builds the project with `umi build`
2. Backs up the remote directory with timestamp
3. Syncs to remote server via rsync over SSH
4. Deploys to: `shisongjienew@123.60.140.77:/usr/local/openresty/nginx/html/frontend/vipspeed`

## Architecture

### Framework & Routing
- **Framework**: Umi.js 3.x (React-based meta-framework)
- **Routing**: Configured in `config/config.js`, not file-based
- Routes include: `/`, `/tiktok`, `/guide`, `/partner`, `/info`, `/app`, `/detail/:id`, `/privacy-policy`
- Each route maps to a page component in `src/pages/`

### State Management
The project uses **dual state management** patterns:

1. **Redux + Immutable.js** (for legacy blog/detail pages):
   - Store configured in `src/pages/store/`
   - Uses `redux-immutable` with `combineReducers`
   - Reducers: `home` and `detail` modules
   - Redux DevTools enabled
   - Thunk middleware for async actions

2. **React Component State** (for marketing pages):
   - Most Home components use local state
   - Mobile responsive detection via `enquire-js`

### Directory Structure

```
src/
├── Home/                      # Main landing page components
│   ├── index.jsx             # Home page container (class component)
│   ├── index_v2.jsx          # Alternate home version
│   ├── data.source.js        # Configuration data for all Home sections
│   ├── components/           # Reusable marketing sections
│   │   ├── TiktokHeroSection.js
│   │   ├── ProductTabs.js
│   │   ├── FeatureSection.js
│   │   ├── CaseSection.js
│   │   └── ...
│   ├── less/                 # LESS stylesheets
│   └── utils/                # Request utilities
├── pages/
│   ├── index.js              # Root page (renders HomeV2)
│   ├── tiktok.js             # TikTok-specific landing
│   ├── ecommerce.jsx         # E-commerce guide page
│   ├── partner_v2/           # Partner program page
│   ├── appinfo/              # App information pages
│   ├── detail/               # Blog detail (uses Redux)
│   ├── home/                 # Blog home (uses Redux)
│   ├── store/                # Redux store configuration
│   └── components/           # Shared page components
├── assets/                    # Images, icons, favicons
└── global.less               # Global styles
```

### Component Patterns

**Home Page Components** (`src/Home/`):
- Organized as section-based components (Banner, Content, Feature, Footer)
- Data-driven via `data.source.js` exports (e.g., `Nav00DataSource`, `Banner01DataSource`)
- Props pattern: `{ id, dataSource, isMobile }`
- Uses `enquire-js` for responsive breakpoints
- Lazy loading: `CarouselBanner` uses React.lazy + Suspense

**Page Entry Points** (`src/pages/`):
- `index.js` → Main landing (renders `HomeV2` from `src/Home/`)
- Uses `react-helmet` for SEO meta tags
- Uses `react-favicon` for dynamic favicons
- Baidu Analytics tracking via embedded scripts

### Styling Approach
- **LESS** as CSS preprocessor
- File naming: `component-name.less` (e.g., `banner0.less`, `nav0.less`)
- Global styles in `src/global.less`
- Ant Design theme customization in component-specific LESS files

### Third-Party Libraries
- **UI Framework**: Ant Design 4.x, Semi UI 2.x, Ant Design Pro Components
- **Animations**: `rc-tween-one`, `rc-scroll-anim`, `rc-banner-anim`, `rc-queue-anim`, `rc-texty`
- **HTTP**: `axios` (legacy), `umi-request` (Umi built-in)
- **State**: `redux`, `redux-immutable`, `redux-thunk`, `react-redux`
- **Routing**: `react-router-dom` v4 (managed by Umi)
- **Utilities**: `dayjs`, `classnames`, `ahooks`

## Key Configuration

### Umi Config (`config/config.js`)
- `singular: true` - Use singular directory names
- `antd: {}` - Ant Design plugin enabled
- `exportStatic: {}` - Export as static HTML
- Custom webpack config via `chainWebpack`:
  - JS output: `static/js/vdnlink.[hash].js`
  - Chunk output: `static/js/[id].[chunkhash:8].chunk.js`

### SEO & Metadata
Main keywords: TikTok直播专线, TK短视频矩阵, 企业跨境办公, AIGC网络访问, 原生IP独享

## Development Notes

### Mobile Responsiveness
- Use `enquireScreen()` from `enquire-js` for breakpoint detection
- Pass `isMobile` prop down to components
- Convention: Components should adapt layout based on `isMobile` boolean

### Adding New Routes
1. Add route definition to `config/config.js` routes array
2. Create page component in `src/pages/`
3. Umi auto-generates routing configuration

### Modifying Home Sections
1. Update data in `src/Home/data.source.js`
2. Component renders are controlled by `src/Home/index.jsx` (or `index_v2.jsx`)
3. Styling in corresponding LESS file under `src/Home/less/`

### Working with Redux Pages
- Blog/detail pages use Redux store in `src/pages/store/`
- Actions defined in `store/actionCreators.js`
- Reducers use Immutable.js methods (`.get()`, `.set()`, etc.)
- Connect components with `react-redux` connect HOC

### Deployment Workflow
1. Test locally with `npx umi dev`
2. Build with `npx umi build`
3. Deploy with `./deploy_vipspeed.sh` (requires SSH access)
4. Production URL: https://www.vdnlink.cn
