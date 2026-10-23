/*
 * Copyright (c) 2026 by dawgcodes.
 * Licensed under Apache-2.0 with Commons Clause and Attribution/Naming Clause
 */

import React from 'react';

/**
 * Sticky app footer - always visible at the bottom of the viewport.
 * Spans the full width of the grid (sidebar + content).
 *
 * @param {{ version: string|null }} props
 */
export default function Footer({ version }) {
  return (
    <footer className="app-footer">
      <span className="app-footer-version">
        pm2-dawgcodes-dashboard
        {version && (
          <>
            {' '}
            <strong>v{version}</strong>
          </>
        )}
      </span>
      <span className="app-footer-credit">
        Made with <span className="app-footer-heart">❤️</span> by{' '}
        <a href="https://github.com/dawgcodes" target="_blank" rel="noopener noreferrer">
          dawgcodes
        </a>
      </span>
    </footer>
  );
}
