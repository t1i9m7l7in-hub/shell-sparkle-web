import { Fragment, ReactNode } from 'react';

/**
 * Inline SVG rendering of the character 壳 in the Simplified Chinese glyph
 * variant. Uses currentColor and 1em sizing so it inherits the surrounding
 * text's color, weight context, and font-size exactly — matching the look
 * of adjacent characters such as 蜆 / 蚬.
 */
export const ShellChar = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-label="壳"
    role="img"
    className={className}
    style={{
      display: 'inline-block',
      verticalAlign: '-0.125em',
      lineHeight: 1,
    }}
  >
    <text
      x="50"
      y="50"
      dominantBaseline="central"
      textAnchor="middle"
      fill="currentColor"
      fontSize="92"
      fontWeight="inherit"
      style={{
        fontFamily:
          '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Heiti SC", sans-serif',
        fontFeatureSettings: '"locl"',
      }}
      // Force SC locale glyph variant
      {...({ 'xml:lang': 'zh-Hans' } as Record<string, string>)}
    >
      壳
    </text>
  </svg>
);

/**
 * Replaces every occurrence of the character 壳 in a string with the
 * `<ShellChar />` inline SVG, returning a ReactNode safe for JSX rendering.
 * Non-壳 segments are returned as plain strings, preserving layout.
 */
export const renderShell = (input: ReactNode): ReactNode => {
  if (typeof input !== 'string') return input;
  if (!/[殼壳]/.test(input)) return input;

  const parts = input.split(/[殼壳]/);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <ShellChar />}
    </Fragment>
  ));
};

export default ShellChar;
