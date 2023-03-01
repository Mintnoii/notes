import{_ as s,c as n,o as a,d as l}from"./app.5afdac1a.js";const A=JSON.parse('{"title":"统一处理项目中的图标","description":"","frontmatter":{},"headers":[{"level":2,"title":"Why ? 🤔","slug":"why-🤔","link":"#why-🤔","children":[{"level":3,"title":"IconFont主要的几点劣势：","slug":"iconfont主要的几点劣势","link":"#iconfont主要的几点劣势","children":[]},{"level":3,"title":"Svg Icon 的优劣势：","slug":"svg-icon-的优劣势","link":"#svg-icon-的优劣势","children":[]}]},{"level":2,"title":"What ? 🧐","slug":"what-🧐","link":"#what-🧐","children":[{"level":3,"title":"优点：","slug":"优点","link":"#优点","children":[]}]},{"level":2,"title":"How ? 😉","slug":"how-😉","link":"#how-😉","children":[]}],"relativePath":"tutorial/icon.md"}'),o={name:"tutorial/icon.md"},p=l(`<h1 id="统一处理项目中的图标" tabindex="-1">统一处理项目中的图标 <a class="header-anchor" href="#统一处理项目中的图标" aria-hidden="true">#</a></h1><h2 id="why-🤔" tabindex="-1">Why ? 🤔 <a class="header-anchor" href="#why-🤔" aria-hidden="true">#</a></h2><p>为什么使用 SVG 而不是 IconFont</p><h3 id="iconfont主要的几点劣势" tabindex="-1">IconFont主要的几点劣势： <a class="header-anchor" href="#iconfont主要的几点劣势" aria-hidden="true">#</a></h3><ol><li>浏览器将其视为文字进行抗锯齿优化，有时得到的效果并没有想象中那么锐利。 尤其是在不同系统下对文字进行抗锯齿的算法不同，可能会导致显示效果不同</li><li>IconFont 作为一种字体，Icon 显示的大小和位置可能要受到 font-size、line-height、word-spacing 等等 CSS 属性的影响。 Icon 所在容器的 CSS 样式可能对 Icon 的位置产生影响，调整起来很不方便</li><li>使用上存在不便。首先，加载一个包含数百图标的 IconFont，却只使用其中几个图标，非常浪费加载时间。 自己制作 IconFont 以及把多个 IconFont 中用到的图标整合成一个 Font 也非常不方便</li><li>如果想实现最大程度的浏览器支持，可能要提供至少四种不同类型的字体文件。包括 TTF、WOFF、EOT以及一个使用 SVG 格式定义的字体</li><li>网络延时会导致 Icon 会先加载出来一个 string</li></ol><hr><h3 id="svg-icon-的优劣势" tabindex="-1">Svg Icon 的优劣势： <a class="header-anchor" href="#svg-icon-的优劣势" aria-hidden="true">#</a></h3><ol><li>完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署</li><li>在低端设备上 SVG 有更好的清晰度</li><li>支持多色图标</li><li>对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖 劣势：兼容性（其实目前浏览器兼容性已经不错 查看兼容性）</li></ol><h2 id="what-🧐" tabindex="-1">What ? 🧐 <a class="header-anchor" href="#what-🧐" aria-hidden="true">#</a></h2><p>实现原理</p><ul><li>svg 图标比较小，而且都是可读的 xml 文本，我们把它直接放在项目中即可，通过 vite-plugin-svg-icons 插件生成 svg 雪碧图，实现自动引入</li><li>插件会自动将所有 svg 图片加载到 HTML 中。并且每一个 svg 将会被过滤去无用的信息数据。让 svg 达到最小的值。之后使用 svg 图片就只需要操作 DOM 即可，而不需要发送 http 请求</li><li>利用 svg 的 symbol 元素，将每个 icon 包括在 symbol 中</li><li>再通过</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xlink:href=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>来使用所需的 icon</p><h3 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h3><ul><li>解决各种版本 iconfont 私有图标库问题</li><li>每个 SVG 图标都可以更改大小颜色</li><li>在页面中使用时代码清爽</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">svgIcon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">home</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="how-😉" tabindex="-1">How ? 😉 <a class="header-anchor" href="#how-😉" aria-hidden="true">#</a></h2><ol><li>配置 vite.config.ts 文件 安装 vite-plugin-svg-icons 插件后编辑 Vite 配置文件：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">createSvgIconsPlugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-svg-icons</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">省略其他部分代码</span></span>
<span class="line"><span style="color:#FFCB6B;">plugins:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    createSvgIconsPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 项目 svg 图片路径</span></span>
<span class="line"><span style="color:#A6ACCD;">       iconDirs: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">path.resolve(process.cwd(), </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/assets/icons</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       // 图标 ID 样式</span></span>
<span class="line"><span style="color:#A6ACCD;">       symbolId: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-icon-[name]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><ol><li>封装 SvgIcon 图标组件</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script setup lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SvgIcon</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Props</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">prefix?</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">name?</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">color?</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">size?</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">className?</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">props</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">withDefaults</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">defineProps&lt;Props&gt;(</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">prefix:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-icon</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">color:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">size:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">className:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">svg-icon</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">symbolId</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">computed</span><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> \`#</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">props.prefix</span><span style="color:#89DDFF;">}-\${</span><span style="color:#A6ACCD;">props.name</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">\`)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;svg aria-hidden=&quot;true&quot; :width=&quot;size&quot; :height=&quot;size&quot; :class=&quot;className&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:xlink:href=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">symbolId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:fill=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/svg&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">style lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">.svg-icon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vertical-align:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-0.15em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fill:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">currentColor</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">overflow:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">/style&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>使用说明</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">svg-icon name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#2395f1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> /</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>name 就是放置在 @/assets/icons 文件夹里的图标文件名</li><li>color 颜色填充，使用此项会默认覆盖图标颜色 注意事项： 🚨</li><li>单色图标需要设计同学导出不带 fill 属性的 svg 图片才能实现自定义颜色</li><li>如果没有提供，可以手动删除，或者安装使用 Figma 的插件 Svg Export 导出</li></ul>`,24),e=[p];function t(c,r,D,i,C,y){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{A as __pageData,h as default};