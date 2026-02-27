import type { ReactNode } from 'react'

/**
 * Parses a plain string with lightweight markup into React elements.
 *
 * Supported syntax:
 * - `*text*`      → <span className="font-alt font-primary">text</span>  (highlight)
 * - `[text](url)` → <a href="url" target="_blank" rel="noreferrer noopener">text</a>
 *
 * Plain strings without markers are returned as-is.
 */
export function renderRichText(text: string): ReactNode {
  // Pattern matches *highlight* or [link text](url)
  const pattern = /\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g

  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let keyIndex = 0

  while ((match = pattern.exec(text)) !== null) {
    // Add any plain text before this match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    if (match[1] !== undefined) {
      // *highlight* match
      parts.push(
        <span key={keyIndex++} className="font-alt font-primary">
          {match[1]}
        </span>
      )
    } else if (match[2] !== undefined && match[3] !== undefined) {
      // [text](url) match
      parts.push(
        <a
          key={keyIndex++}
          href={match[3]}
          target="_blank"
          rel="noreferrer noopener"
        >
          {match[2]}
        </a>
      )
    }

    lastIndex = match.index + match[0].length
  }

  // Add any remaining plain text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  // If no markers were found, return the original string
  if (parts.length === 0) {
    return text
  }

  // If only one part and it's a string, return it directly
  if (parts.length === 1) {
    return parts[0]
  }

  return <>{parts}</>
}
