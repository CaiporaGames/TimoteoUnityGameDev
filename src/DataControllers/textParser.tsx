import React from 'react';

// Function to parse and replace custom tags with styled components
const parseText = (
  text: string, 
  styles: { [key: string]: React.CSSProperties } = {}
) => {
  // Regular expression to match custom tags like {{bold|word}} or {{italic|word}}
  const regex = /\{\{(\w+)\|([^}]+)\}\}/g;

  // Store text parts and tags
  let lastIndex = 0;
  const parts: (string | JSX.Element)[] = [];
  
  text.replace(regex, (match, styleKey, content, offset) => {
    // Add text before the match
    if (offset > lastIndex) {
      parts.push(text.substring(lastIndex, offset));
    }

    // Apply styles based on tag
    const style = styles[styleKey] || {};
    parts.push(<span style={style} key={offset}>{content}</span>);
    
    // Update lastIndex
    lastIndex = offset + match.length;
    return match;
  });

  // Add remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return <>{parts}</>;
};

export default parseText;
