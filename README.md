<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <link rel="dns-prefetch" href="https://assets-cdn.github.com">
    <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
    <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
    <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
    <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
    <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
    <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">
  </head>
<body>
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text">
      <h1>
        <a id="user-content-product-name" class="anchor" aria-hidden="true" href="#product-name">
        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
        Login Social
      </h1>
      <blockquote>
        <p>Práctica de Node.Js usando Passport para conectar.</p>
      </blockquote>

      <!-- <p><a href="https://npmjs.org/package/datadog-metrics" rel="nofollow"><img src="https://camo.githubusercontent.com/5f764b15a5a631771a214a086b0da2799b1c8327/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f64617461646f672d6d6574726963732e7376673f7374796c653d666c61742d737175617265" alt="NPM Version" data-canonical-src="https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square" style="max-width:100%;"></a>
      <a href="https://travis-ci.org/dbader/node-datadog-metrics" rel="nofollow"><img src="https://camo.githubusercontent.com/e14fac8021872d240bf8baf6c136a5ae3c84b589/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f6462616465722f6e6f64652d64617461646f672d6d6574726963732f6d61737465722e7376673f7374796c653d666c61742d737175617265" alt="Build Status" data-canonical-src="https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square" style="max-width:100%;"></a>
      <a href="https://npmjs.org/package/datadog-metrics" rel="nofollow"><img src="https://camo.githubusercontent.com/6b23c710537e328ef22ba09b126775f6cb8bf730/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f64617461646f672d6d6574726963732e7376673f7374796c653d666c61742d737175617265" alt="Downloads Stats" data-canonical-src="https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square" style="max-width:100%;"></a></p>
      <p><a target="_blank" href="/dbader/readme-template/blob/master/header.png"><img src="/dbader/readme-template/raw/master/header.png" alt="" style="max-width:100%;"></a></p> -->

      ![login-node](https://lh3.googleusercontent.com/m7MgU95rti9rCoFJgBseNqK6alKPNGIAx9IhCnX1rJOO_rVpvCnMQZEUc8vq4MgR6ZMaiU2V2mLW "Login-node")

      <h2>
        <a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
        Instalación
      </h2>
      <h4>OS X,  Linux y Windows:</h4>
      <div class="highlight highlight-source-shell"><p>Abra un terminal y ejecute</p></div>
      <div class="highlight highlight-source-shell"><pre>git clone http://github.com/pulidovpe/login-node.git</pre></div>
      <div class="highlight highlight-source-shell"><pre>cd login-node</pre></div>
      <div class="highlight highlight-source-shell"><pre>npm install</pre></div>
      <div class="highlight highlight-source-shell"><pre>node server.js</pre></div>

      <!--
      <h2><a id="user-content-usage-example" class="anchor" aria-hidden="true" href="#usage-example"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage example</h2>
      <p>A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.</p>
      <p><em>For more examples and usage, please refer to the <a href="https://github.com/yourname/yourproject/wiki">Wiki</a>.</em></p>
      <h2><a id="user-content-development-setup" class="anchor" aria-hidden="true" href="#development-setup"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development setup</h2>
      <p>Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.</p>
      <div class="highlight highlight-source-shell"><pre>make install
      npm <span class="pl-c1">test</span></pre></div>
      <h2><a id="user-content-release-history" class="anchor" aria-hidden="true" href="#release-history"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Release History</h2>
      <ul>
      <li>0.2.1
      <ul>
      <li>CHANGE: Update docs (module code remains unchanged)</li>
      </ul>
      </li>
      <li>0.2.0
      <ul>
      <li>CHANGE: Remove <code>setDefaultXYZ()</code></li>
      <li>ADD: Add <code>init()</code></li>
      </ul>
      </li>
      <li>0.1.1
      <ul>
      <li>FIX: Crash when calling <code>baz()</code> (Thanks @GenerousContributorName!)</li>
      </ul>
      </li>
      <li>0.1.0
      <ul>
      <li>The first proper release</li>
      <li>CHANGE: Rename <code>foo()</code> to <code>bar()</code></li>
      </ul>
      </li>
      <li>0.0.1
      <ul>
      <li>Work in progress</li>
      </ul>
      </li>
      </ul>
      -->

      <h2>
        <a id="user-content-meta" class="anchor" aria-hidden="true" href="#meta"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
        Meta
      </h2>
      <p>Pulido V.P.E. – <a href="https://twitter.com/pulidovpe" rel="nofollow">@pulidovpe</a> – <a href="mailto:pulidovpe.dev@gmail.com">pulidovpe.dev@gmail.com</a></p>
      <p>Distributed under the MIT license. See <code>LICENSE</code> for more information.</p>
      <p><a href="https://github.com/pulidovpe/">https://github.com/pulidovpe/login-node</a></p>
      <h2>
        <a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
        Para contribuir
      </h2>
      <ol>
      <li>Has un "Fork" (<a href="https://github.com/pulidovpe/login-node/fork">https://github.com/pulidovpe/login-node/fork</a>)</li>
      <li>Crea tu propia rama (<code>git checkout -b feature/fooBar</code>)</li>
      <li>Sube tus cambios (<code>git commit -am 'Add some fooBar'</code>)</li>
      <li>Actualiza tu rama (<code>git push origin feature/fooBar</code>)</li>
      <li>Has un "Pull Request"</li>
      </ol>
    </article>
  </div>
  <div class="modal-backdrop js-touch-events"></div>
</body>
</html>