// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/jianshen/Documents/sz/vdnlink2/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/index.html",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/guide",
    "component": require('@/pages/guide').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
