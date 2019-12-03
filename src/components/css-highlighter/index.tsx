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
  return styleArray
    .map(style => `  ${decamelize(style[0], '-')}: ${style[1]};\n`)
    .join('');
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
