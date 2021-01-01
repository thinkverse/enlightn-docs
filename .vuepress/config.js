module.exports = {
  title: 'Enlightn',
  description: "Enlightn - A Laravel Tool To Boost Your App's Performance & Security",
  base: '/docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
        {
            text: 'Home',
            link: 'https://www.laravel-enlightn.com',
        },
        {
            text: 'Github',
            link: 'https://github.com/enlightn/enlightn'
        }
    ],
    sidebar: [
        {
            title: 'Getting Started',
            collapsable: false,
            sidebarDepth: 0,
            children: [
                '/getting-started/installation',
                '/getting-started/configuration',
                '/getting-started/usage'
            ]
        },
        {
            title: 'Performance Checks',
            path: '/performance/',
            children: [
                '/performance/cache-driver-analyzer',
                '/performance/cache-header-analyzer',
                '/performance/collection-call-analyzer',
                '/performance/config-caching-analyzer',
                '/performance/debug-log-analyzer',
                '/performance/dev-dependency-analyzer',
                '/performance/env-call-analyzer',
                '/performance/horizon-suggestion-analyzer',
                '/performance/minification-analyzer',
                '/performance/mysql-single-server-analyzer',
                '/performance/opcache-analyzer',
                '/performance/queue-driver-analyzer',
                '/performance/route-caching-analyzer',
                '/performance/session-driver-analyzer',
                '/performance/shared-cache-lock-analyzer',
                '/performance/unused-global-middleware-analyzer',
                '/performance/view-caching-analyzer',
                '/performance/cdn-analyzer',
                '/performance/command-constructor-injection-analyzer',
                '/performance/compression-header-analyzer',
                '/performance/event-caching-analyzer',
                '/performance/fallback-route-analyzer',
                '/performance/redis-cache-hit-ratio-analyzer',
                '/performance/redis-rate-limiting-analyzer',
                '/performance/redis-single-server-analyzer',
                '/performance/redis-throttling-analyzer',
                '/performance/telescope-cache-hit-ratio-analyzer',
                '/performance/telescope-duplicate-query-analyzer',
                '/performance/telescope-memory-intensive-request-analyzer',
                '/performance/telescope-model-hydration-analyzer',
                '/performance/telescope-non-queued-notification-analyzer',
                '/performance/telescope-nplusone-query-analyzer',
                '/performance/telescope-slow-query-analyzer',
                '/performance/telescope-slow-response-analyzer'
            ],
            collapsable: true,
            sidebarDepth: 0,
        },
        {
            title: 'Security Checks',
            path: '/security/',
            children: [
                '/security/app-debug-analyzer',
                '/security/app-debug-hide-analyzer',
                '/security/app-key-analyzer',
                '/security/csrf-analyzer',
                '/security/encrypted-cookies-analyzer',
                '/security/file-permissions-analyzer',
                '/security/fillable-foreign-key-analyzer',
                '/security/frontend-vulnerable-dependency-analyzer',
                '/security/hsts-header-analyzer'
            ],
            collapsable: true,
            sidebarDepth: 0,
        }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
