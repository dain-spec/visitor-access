## Overview

**Visitor Access** 프로젝트의 디자인 기준은 Figma 디자인 시스템 **WEHAGO Mobile 2.0 DSG** 입니다. 본 문서는 해당 파일의 Variable·Text Style·Component 정의를 코드·기획이 참조할 수 있도록 정리한 스펙입니다.

**Figma 소스:** [WEHAGO-Mobile-2.0_DSG-1-](https://www.figma.com/design/zHzZmBFOuB0lijVf8uVq6L/WEHAGO-Mobile-2.0_DSG-1-)

**UIGuide 페이지:** `UIGuide_v1.1` (v1.1)

### 핵심 특성

- **라이트 모바일 UI** — 기본 배경 `{color/background/basic}` (#f5f6fa), 카드·입력은 흰색 계열.
- **브랜드 액센트** — WEHAGO Blue `{color/primary/500}` (#105aff). Primary CTA·링크·포커스에 사용.
- **3단 토큰 구조** — `primitive` → `semantic` → `component`. UI에는 **component 토큰을 우선** 적용하고, 없으면 semantic을 사용.
- **타이포** — **Pretendard**, Body/Heading 스케일, 자간 -2% (대부분 스타일).
- **모바일 퍼스트** — Button·Input·AppBar·BottomNavi 등 모바일 패턴 중심 컴포넌트 라이브러리.

### 토큰 적용 우선순위

1. **component** — `color/button/primary-fill`, `color/text/basic` 등 UI 역할별 토큰
2. **semantic** — `color/primary/500`, `gap/6`, `radius/medium` 등 의미·스케일 토큰
3. **primitive** — `color/blue/500`, `number/7` 등 원시값 (직접 UI에 쓰지 않음)

---

## Token Architecture

| 컬렉션 | 변수 수 | 역할 |
|--------|---------|------|
| `primitive` | 91 | gray/blue/bluegray/red/green/orange 팔레트, `number/*`, `typo/*` |
| `semantic` | 102 | primary·secondary·neutral·상태색, gap/padding/size/radius/alpha |
| `component` | 88 | background·surface·button·text·icon·border·input·action·element |

**모드:** 현재 파일은 각 컬렉션 **Mode 1** 단일 모드.

**연결 예시 (Button Primary):**

```
#105AFF  →  color/blue/500 (primitive)
         →  color/primary/500 (semantic)
         →  color/button/primary-fill (component)
```

---

## Colors

### Primitive palette (발췌)

| 그룹 | 스케일 | 대표값 |
|------|--------|--------|
| gray | 0–1000 | `#ffffff` … `#000000` |
| blue | 50–800 | `#eff4ff` … `#002d93` — **브랜드 블루 `#105aff` = blue/500** |
| bluegray | 30–900 | `#f7f8fa` … `#50596c` |
| red | 50–800 | negative 계열 |
| green | 50–600 | positive 계열 |
| orange | 100–800 | pending/warning 계열 |
| opacity | black6–black80, white30 | 오버레이·dim |

### Semantic colors

| 토큰 | Hex | 용도 |
|------|-----|------|
| `{color/primary/500}` | #105aff | 브랜드 기본 |
| `{color/primary/600}` | #124ceb | pressed 계열 |
| `{color/primary/700}` | #0943c6 | primary pressed (button) |
| `{color/primary/50}` | #eff4ff | primary 배경 tint |
| `{color/secondary/500}` | #989898 | 보조 그레이 |
| `{color/neutral/500}` | #afb7c9 | 중립 블루그레이 |
| `{color/positive/500}` | #27c36f | 성공 |
| `{color/negative/600}` | #ed2947 | 오류 |
| `{color/pending/400}` | #ffa000 | 대기·경고 |

### Component colors (UI에 직접 사용)

#### Background & Surface

| 토큰 | Hex | Figma 정의 |
|------|-----|------------|
| `{color/background/basic}` | #f5f6fa | Frame 전체, 기본 화면 배경 |
| `{color/background/white}` | #ffffff | 흰 배경 |
| `{color/background/dim}` | rgba(0,0,0,0.4) | Dim·모달 뒤 |
| `{color/background/inverse}` | #333333 | 역전 배경 |
| `{color/surface/basic}` | #f5f6fa | 기본 surface |
| `{color/surface/white}` | #ffffff | Card, Dialog, Infobox 등 |
| `{color/surface/subtle}` | #f7f8fa | 미세 lift |
| `{color/surface/success-subtler}` | #f2fffa | 성공 배경 |
| `{color/surface/error-subtler}` | #fdf5f5 | 오류 배경 |
| `{color/surface/warning-subtler}` | #fff2dc | 경고 배경 |
| `{color/surface/info-subtler}` | #eff4ff | 정보 배경 |
| `{color/surface/snackbar}` | rgba(0,0,0,0.8) | Snackbar |

#### Text

| 토큰 | Hex | 용도 |
|------|-----|------|
| `{color/text/bolder}` | #222222 | 최강조 |
| `{color/text/basic}` | #333333 | 본문 기본 |
| `{color/text/subtle}` | #777777 | 보조 |
| `{color/text/subtler}` | #989898 | 더 약한 보조 |
| `{color/text/disabled}` | #b4b4b4 | 비활성 |
| `{color/text/primary}` | #105aff | 브랜드 링크·강조 |
| `{color/text/success}` | #27c36f | 성공 문구 |
| `{color/text/warning}` | #ffa000 | 경고 문구 |
| `{color/text/point}` | #fa4553 | 포인트·오류 문구 |
| `{color/text/basic-inverse}` | #ffffff | 어두운 배경 위 텍스트 |

#### Button

| 토큰 | Hex | 용도 |
|------|-----|------|
| `{color/button/primary-fill}` | #105aff | Primary 배경 |
| `{color/button/primary-pressed}` | #0943c6 | Primary pressed |
| `{color/button/fill}` | #ffffff | Secondary/Tertiary fill |
| `{color/button/secondary-border}` | #105aff | Secondary 테두리 |
| `{color/button/secondary-pressed}` | #eff4ff | Secondary pressed 배경 |
| `{color/button/tertiary-border}` | #e1e1e1 | Tertiary 테두리 |
| `{color/button/tertiary-pressed}` | #f7f8fa | Tertiary pressed |
| `{color/button/disabled}` | #f4f4f4 | Disabled 배경 |

#### Border & Input

| 토큰 | Hex | 용도 |
|------|-----|------|
| `{color/border/basic}` | #d3d3d3 | 기본 1px 보더 |
| `{color/border/subtle}` | #e1e1e1 | 약한 보더 |
| `{color/border/subtler}` | #ededed | 더 약한 보더 |
| `{color/border/outline}` | rgba(0,0,0,0.06) | 아웃라인 |
| `{color/input/field}` | #ffffff | 입력 필드 배경 |
| `{color/input/field-search}` | #f7f8fa | 검색 필드 배경 |
| `{color/input/field-readonly}` | #fafafa | 읽기 전용 |
| `{color/input/border}` | #d3d3d3 | 기본 |
| `{color/input/border-active}` | #4a4a4a | 포커스 |
| `{color/input/border-error}` | #fa4553 | 오류 |
| `{color/input/border-success}` | #27c36f | 성공 |
| `{color/input/border-warning}` | #ffa000 | 경고 |

#### Icon & Action & Element

| 토큰 | Hex | 용도 |
|------|-----|------|
| `{color/icon/basic}` | #4a4a4a | 기본 아이콘 |
| `{color/icon/subtle}` | #777777 | 보조 아이콘 |
| `{color/icon/primary}` | #105aff | 브랜드 아이콘 |
| `{color/action/primary}` | #105aff | Tab, Picker 등 액션 |
| `{color/element/primary}` | #105aff | Badge, Toggle, Checkbox 등 |

---

## Typography

### Font family

| 토큰 | 값 |
|------|-----|
| `{typo/font/type}` | Pretendard |
| `{typo/weight/regular}` | Regular |
| `{typo/weight/medium}` | Medium |
| `{typo/weight/bold}` | Bold |

**코드 fallback:** `"Pretendard", -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans KR", sans-serif`

### Text styles (Figma local styles)

공통: line-height **140%**, letter-spacing **-2%**.

#### Heading

| Style | Size | Weight |
|-------|------|--------|
| `Heading/xlarge` | 24px | Regular / Bold |
| `Heading/large` | 22px | Regular / Bold |
| `Heading/medium` | 20px | Regular / Bold |
| `Heading/small` | 18px | Regular / Bold |
| `Heading/xsmall` | 16px | Regular / Bold |

#### Body

| Style | Size | Weight |
|-------|------|--------|
| `Body/xxlarge` | 18px | Regular / Medium / Bold |
| `Body/xlarge` | 16px | Regular / Medium / Bold |
| `Body/large` | 15px | Regular / Medium / Bold |
| `Body/medium` | 14px | Regular / Medium / Bold |
| `Body/small` | 13px | Regular / Medium / Bold |
| `Body/xsmall` | 12px | Regular / Medium / Bold |
| `Body/xxsmall` | 11px | Regular / Medium / Bold |

#### 기타

| Style | Size | 용도 |
|-------|------|------|
| `Underline/small` | 13px | 밑줄 링크 |

### Principles

- UI 라벨·버튼: **Body/medium-m** (14px Medium) 또는 컴포넌트 Spec 참조.
- 섹션 제목: **Heading/small-b** 이상.
- 자간은 Figma와 동일하게 **-2%** 유지 (px 환산 시 `letter-spacing: -0.02em`).

---

## Layout

### Spacing scale (`semantic` → `primitive number/*`)

| Semantic | px | Primitive |
|----------|-----|-----------|
| `{gap/1}` | 2 | number/2 |
| `{gap/2}` | 4 | number/3 |
| `{gap/3}` | 6 | number/4 |
| `{gap/4}` | 8 | number/5 |
| `{gap/5}` | 12 | number/6 |
| `{gap/6}` | 16 | number/7 |
| `{gap/7}` | 20 | number/8 |
| `{gap/8}` | 24 | number/9 |

| Padding | px |
|---------|-----|
| `{padding/1}` | 4 |
| `{padding/2}` | 6 |
| `{padding/3}` | 8 |
| `{padding/4}` | 12 |
| `{padding/5}` | 16 |
| `{padding/6}` | 20 |
| `{padding/7}` | 24 |
| `{padding/8}` | 28 |
| `{padding/9}` | 32 |

| Size (height 등) | px |
|------------------|-----|
| `{size/1}` … `{size/15}` | 8 … 64 (4px 단위 계단) |
| `{size/16}` | 72 |
| `{size/17}` | 80 |
| `{size/18}` | 88 |

**Base unit:** 2px 그리드 (`number/*`). 실무에서는 semantic `gap`·`padding`·`size`를 우선 사용.

### Border radius

| Token | px |
|-------|-----|
| `{radius/xxsmall}` | 4 |
| `{radius/xsmall}` | 6 |
| `{radius/small}` | 8 |
| `{radius/medium}` | 12 |
| `{radius/large}` | 16 |
| `{radius/xlarge}` | 20 |
| `{radius/max}` | 1000 (pill) |

### Alpha / overlay

| Token | Value |
|-------|-------|
| `{alpha/alpha1}` | rgba(0,0,0,0.06) |
| `{alpha/alpha2}` | rgba(0,0,0,0.08) |
| `{alpha/alpha3}` | rgba(0,0,0,0.12) |
| `{alpha/alpha4}` | rgba(0,0,0,0.24) |
| `{alpha/alpha5}` | rgba(0,0,0,0.4) |
| `{alpha/alpha6}` | rgba(0,0,0,0.6) |
| `{alpha/alpha7}` | rgba(0,0,0,0.8) |
| `{alpha/alpha-inverse}` | rgba(255,255,255,0.3) |

---

## Elevation & Depth

WEHAGO Mobile DS는 **surface 단계 + 1px border** 로 깊이를 표현합니다. Linear식 다크 캔버스·헤어라인 라더는 사용하지 않습니다.

| Level | Treatment | Token 예시 |
|-------|-----------|------------|
| 0 | 페이지 배경 | `{color/background/basic}` |
| 1 | 카드·패널 | `{color/surface/white}` + `{color/border/subtle}` |
| 2 | 입력·떠 있는 요소 | `{color/input/field}` + border |
| Overlay | Dim·Snackbar | `{color/background/dim}`, `{color/surface/snackbar}` |

---

## Components

> Figma `UIGuide_v1.1` 기준. Variant 속성은 `Property=Value` 형식.

### Button

**Types:** Primary · Secondary · Tertiary  
**States:** Default · Pressed · Disabled  
**Sizes (height):** XXLarge 52 · XLarge 48 · Large 44 · Medium 40 · Small 36 · XSmall 32 · XXSmall 28

| Type | Fill | Border | Text |
|------|------|--------|------|
| Primary | `{color/button/primary-fill}` | — | white |
| Secondary | `{color/button/fill}` | `{color/button/secondary-border}` | `{color/text/primary}` |
| Tertiary | `{color/button/fill}` | `{color/button/tertiary-border}` | `{color/text/basic}` |

**Anatomy:** Container · Icon (optional) · Label  
**Sticky Button:** 화면 하단 고정 CTA (가이드 예: 76px 영역)

**관련 컴포넌트:** `GhostButton`, `TextButton`, `FloatingButton`, `DropdownButton`

### Input / TextField

| 컴포넌트 | Variants |
|----------|----------|
| `Input` | State: Default, Focused, Typing, Disabled, ReadOnly · Size: Default, Large |
| `InputLabel` | 라벨 + 필드 조합 |
| `InputBorder` | Default, Typing, Focused, Completed, Error, Success |
| `TextArea` | Default, Focused, Typing, Completed, ReadOnly |
| `Searchbar` | Default, Focused, Typing, Completed, … |
| `Dropdown` / `DropdownBorder` | Default, Selected, Error, Success, Pending, Disabled |

토큰: `{color/input/*}`, `{color/text/*}`, `{color/border/*}`

### Card & List

| 컴포넌트 | 설명 |
|----------|------|
| `Card` | ListCardSingle / ListCardDouble · Default / Reorder |
| `List` | ListSingle / ListDouble |
| `ThumbnailCard` | Default / File |

### Feedback & Status

| 컴포넌트 | 용도 |
|----------|------|
| `BadgeState` | Progress, Success, Negative, Neutral |
| `BadgeNoti` | Dot, 0-9, 10-99 |
| `BadgeInfo` | Default / Off · Small / Large |
| `Infobox` / `InfoboxState` | 안내·경고·성공 메시지 |
| `Snackbar` | Success, Warning, Info |
| `Dialog` | Default, Link, InfoBox, NoTitle, NoSub, Input |
| `Emptyset` | Medium / Small |

### Navigation & Chrome

| 컴포넌트 | Variants |
|----------|----------|
| `AppBar` | Color: Light/Dark · Type: Default/Actionbar |
| `BottomNavi` | Device: iOS / Android / Tablet |
| `TabBorder` | Default / Resizing |
| `TabChips` | 필터·하위 depth 탭 |
| `StatusBars` / `HomeIndicator` | Phone / Tablet |

### Form controls

`Checkbox`, `Radio`, `Toggle`, `Atomic/_Chips`, `Tag`, `FileUpload`, `Calender`, `Accordion`

### Avatar & Media

`Avatar` (다수 memoji × size), `Atomic/_ThumbnailImage`, `MultiGroup`

---

## Do's and Don'ts

### Do

- UI 색상은 **component 토큰**부터 찾고, 없으면 **semantic**을 사용한다.
- Primary 액션에는 `{color/button/primary-fill}` / `{color/text/primary}` 를 쌍으로 맞춘다.
- 간격·높이는 `gap/*`, `padding/*`, `size/*` 스케일만 사용한다 (임의 px 지양).
- 타이포는 Figma Text Style 이름(`Body/medium-m` 등)과 매핑한다.
- 모바일 터치 타깃: Button Large **44px** 이상 권장 (DS Spec 기준).

### Don't

- **primitive** 색(`color/blue/500`)을 컴포넌트에 직접 바인딩하지 않는다 — semantic/component를 거친다.
- Linear 다크 마케팅 팔레트(`#010102` canvas, lavender `#5e6ad2`)를 이 프로젝트에 혼용하지 않는다.
- DS에 없는 임의 semantic(예: `colors.canvas`, `colors.hairline`) 이름을 새로 만들지 않는다 — Figma 변수명을 따른다.
- Button을 pill 형태로 임의 변경하지 않는다 — `radius/*` 스케일 준수.

---

## Responsive Behavior

WEHAGO Mobile 2.0은 **모바일·태블릿** 단말을 전제합니다.

| Breakpoint 관점 | Figma 패턴 |
|-----------------|------------|
| Phone | 기본 375pt 레이아웃, BottomNavi, HomeIndicator |
| Tablet | `Device=Tablet` 변형, Tab/Grid 확장 |
| Touch | Button 최소 높이 44px(Large), Input 44px |

**Collapsing:** Tab·TabChips는 가로 스크롤; Tab Item 간격 TabBorder **20px**, TabChips **8px** (padding 12).

---

## Code mapping (visitor-access-site)

`styles.css`는 Figma component 토큰명을 CSS 변수로 매핑해 사용합니다.

| Figma (component) | CSS 변수 |
|-------------------|----------|
| `color/background/basic` | `--color-background-basic` |
| `color/surface/white` | `--color-surface-white` |
| `color/text/basic` | `--color-text-basic` |
| `color/text/subtle` | `--color-text-subtle` |
| `color/button/primary-fill` | `--color-button-primary-fill` |
| `color/button/primary-pressed` | `--color-button-primary-pressed` |
| `color/border/subtle` | `--color-border-subtle` |
| `color/input/field` | `--color-input-field` |
| `color/input/border-active` | `--color-input-border-active` |
| `gap/6` | `--gap-6` (16px) |
| `gap/8` | `--gap-8` (24px) |
| `radius/medium` | `--radius-medium` (12px) |
| `radius/small` | `--radius-small` (8px, Button) |

**Font:** Pretendard CDN + `--font-text` 스택. 버튼·입력 높이 **44px** (Button Large / Input Default).

---

## Iteration Guide

1. Figma 변수·컴포넌트 변경 시 **이 문서를 먼저** 갱신한다.
2. 컴포넌트 작업은 Figma 컴포넌트명(`Button`, `Input` 등)으로 지칭한다.
3. 새 UI 토큰이 필요하면 Figma `semantic` / `component` 컬렉션에 추가한 뒤 문서에 반영한다.
4. `npx @google/design.md lint DESIGN.md` 로 문서 형식을 검증한다 (선택).

---

## Known Gaps

- Figma 파일은 **단일 모드(Mode 1)** — 다크 모드 semantic은 별도 정의되지 않음.
- `styles.css` / `index.html` 은 WEHAGO component 토큰·Pretendard·Button/Input 44px 스펙에 맞춰 동기화됨 (2026-05-20).
- Visitor Access 전용 컴포넌트(방문 체크인 카드 등)는 Figma DS `Card`·`Input` 조합으로 구현하거나, 필요 시 로컬 변형을 문서에 추가한다.
- Code Connect 매핑(`.figma.ts`)은 미구성 — 필요 시 `Button`, `Input`부터 연결.

---

## Source reference

| 항목 | 값 |
|------|-----|
| File | WEHAGO-Mobile-2.0_DSG-1- |
| fileKey | `zHzZmBFOuB0lijVf8uVq6L` |
| Collections | primitive, semantic, component |
| Components (UIGuide) | 461+ (Button, Input, Card, Dialog, …) |
| Last synced from Figma | 2026-05-20 |
