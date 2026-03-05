# Prediction Market Animated Icons

本專案提供預測市場中使用的「成功」與「錯誤」圖示動畫，包含 React 組件與純 HTML/CSS 版本。

## 雙版本說明

### 1. React (Vite) 版本 (推薦 RD 使用)
- **原始碼位置**: `src/components/AnimatedIcons.tsx`
- **樣式位置**: `src/components/AnimatedIcons.css`
- **啟動方式**: 執行 `npm install` 後 `npm run dev`。

### 2. 純 HTML/CSS 版本 (快速預覽)
- **檔案名稱**: `vanilla-demo.html`
- **使用方式**: 直接點開該檔案即可在瀏覽器查看完整動畫效果與 CSS 代碼。

## 動畫細節
- 基於 CSS `@keyframes` 實現。
- 使用 `cubic-bezier` 達成 Q 彈 (Bounce) 效果。
