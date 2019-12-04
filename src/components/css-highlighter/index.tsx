import decamelize from 'decamelize';
import React from 'react';

import { PrismLight } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import darcula from 'react-syntax-highlighter/dist/esm/styles/prism/darcula';

PrismLight.registerLanguage('css', css);

interface CssHighlighterProps {
  className?: string;
  codeObject?: Record<string, string>;
}

const objectToString = (styles: Record<string, string>): string => {
  const styleArray = Object.entries(styles);
  const styleString = styleArray
    .map(style => {
      const atrribute = decamelize(style[0], '-');
      return `  ${atrribute}: ${style[1]};\n`;
    })
    .join('');
  return styleString ? `{\n${styleString}}` : '';
};

const CssHighlighter: React.FunctionComponent<CssHighlighterProps> = props => {
  const { className, codeObject } = props;
  const codeString = codeObject ? objectToString(codeObject) : '';

  return (
    <div className={className}>
      <PrismLight language="css" showLineNumbers style={darcula}>
        {codeString}
      </PrismLight>
    </div>
  );
};

export { CssHighlighter };
