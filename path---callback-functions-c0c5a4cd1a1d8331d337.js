webpackJsonp([6232191820038],{365:function(n,a){n.exports={data:{site:{siteMetadata:{navigation:[{path:"/",title:"Media Platform JS SDK"},{path:"/api-reference",title:"API reference"},{path:"/callback-functions",title:"Callback functions"},{path:"/file-management",title:"File Management"},{path:"/archive-files",title:"Create and Extract archive files"},{path:"/images",title:"Images"},{path:"/transcode-video",title:"Transcode video"},{path:"/jobs",title:"Jobs"},{path:"/metadata",title:"Metadata"}]}},page:{frontmatter:{layout:"simple",title:"",include:null},headings:[],html:'<p><em>PLEASE NOTE: Callback functions are to be deprecated in v6 and removed in v7. Use promises instead.</em></p>\n<p>In this SDK, some methods expect a callback function as a parameter.<br>\nAfter sending the HTTP request, the method calls the callback function with the HTTP response as either the <em>error</em> or\n<em>response</em> parameter. These methods\' description in this Wiki specify what object is passed on to them success.  </p>\n<p>To pass the callback function as a parameter, you can either use an anonymous function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">aMethod</span><span class="token punctuation">(</span>aRequest<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// TODO:  handle failure</span>\n\t\t<span class="token keyword">return</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n    <span class="token comment">// TODO: handle success</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>or declare a callback function:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">callbackFunction</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// TODO:  handle failure</span>\n\t\t<span class="token keyword">return</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n    <span class="token comment">// TODO: handle success</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">aMethod</span><span class="token punctuation">(</span>aRequest<span class="token punctuation">,</span> callbackFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>'}},pathContext:{slug:"/callback-functions/"}}}});
//# sourceMappingURL=path---callback-functions-c0c5a4cd1a1d8331d337.js.map