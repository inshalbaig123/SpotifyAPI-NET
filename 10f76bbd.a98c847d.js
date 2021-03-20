(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(188)),i={id:"token_swap",title:"Token Swap"},s={id:"version-5.1.1/auth/token_swap",title:"Token Swap",description:"This way uses server-side code or at least access to an exchange server, otherwise, compared to other",source:"@site/versioned_docs/version-5.1.1/auth/token_swap.md",permalink:"/SpotifyAPI-NET/docs/auth/token_swap",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/token_swap.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1616259952,sidebar:"version-5.1.1/someSidebar",previous:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/auth/client_credentials"}},c=[{value:"Using TokenSwapWebAPIFactory",id:"using-tokenswapwebapifactory",children:[]},{value:"Using TokenSwapAuth",id:"using-tokenswapauth",children:[]},{value:"Token Swap Endpoint",id:"token-swap-endpoint",children:[]},{value:"Remarks",id:"remarks",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This way uses server-side code or at least access to an exchange server, otherwise, compared to other\nmethods, it is impossible to use."),Object(a.b)("p",null,'With this approach, you provide the URI/URL to your desired exchange server to perform all necessary\nrequests to Spotify, as well as requests that return back to the "server URI".'),Object(a.b)("p",null,"The exchange server ",Object(a.b)("strong",{parentName:"p"},"must")," be able to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Return the authorization code from Spotify API authenticate page via GET request to the "server URI".'),Object(a.b)("li",{parentName:"ul"},"Request the token response object via POST to the Spotify API token page."),Object(a.b)("li",{parentName:"ul"},"Request a refreshed token response object via POST to the Spotify API token page.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"The good news is that you do not need to code it yourself.")),Object(a.b)("p",null,"The advantages of this method are that the client ID and redirect URI are very well hidden and almost unexposed, but more importantly, your client secret is ",Object(a.b)("strong",{parentName:"p"},"never")," exposed and is completely hidden compared to other methods (excluding ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/SpotifyWebAPI/auth#implicitgrantauth"}),"ImplicitGrantAuth"),"\nas it does not deal with a client secret). This means\nyour Spotify app ",Object(a.b)("strong",{parentName:"p"},"cannot")," be spoofed by a malicious third party."),Object(a.b)("h2",{id:"using-tokenswapwebapifactory"},"Using TokenSwapWebAPIFactory"),Object(a.b)("p",null,"The TokenSwapWebAPIFactory will create and configure a SpotifyWebAPI object for you."),Object(a.b)("p",null,"It does this through the method GetWebApiAsync ",Object(a.b)("strong",{parentName:"p"},"asynchronously"),", which means it will not halt execution of your program while obtaining it for you. If you would like to halt execution, which is ",Object(a.b)("strong",{parentName:"p"},"synchronous"),", use ",Object(a.b)("inlineCode",{parentName:"p"},"GetWebApiAsync().Result")," without using ",Object(a.b)("strong",{parentName:"p"},"await"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'TokenSwapWebAPIFactory webApiFactory;\nSpotifyWebAPI spotify;\n\n// You should store a reference to WebAPIFactory if you are using AutoRefresh or want to manually refresh it later on. New WebAPIFactory objects cannot refresh SpotifyWebAPI object that they did not give to you.\nwebApiFactory = new TokenSwapWebAPIFactory("INSERT LINK TO YOUR index.php HERE")\n{\n    Scope = Scope.UserReadPrivate | Scope.UserReadEmail | Scope.PlaylistReadPrivate,\n    AutoRefresh = true\n};\n// You may want to react to being able to use the Spotify service.\n// webApiFactory.OnAuthSuccess += (sender, e) => authorized = true;\n// You may want to react to your user\'s access expiring.\n// webApiFactory.OnAccessTokenExpired += (sender, e) => authorized = false;\n\ntry\n{\n    spotify = await webApiFactory.GetWebApiAsync();\n    // Synchronous way:\n    // spotify = webApiFactory.GetWebApiAsync().Result;\n}\ncatch (Exception ex)\n{\n    // Example way to handle error reporting gracefully with your SpotifyWebAPI wrapper\n    // UpdateStatus($"Spotify failed to load: {ex.Message}");\n}\n')),Object(a.b)("h2",{id:"using-tokenswapauth"},"Using TokenSwapAuth"),Object(a.b)("p",null,"Since the TokenSwapWebAPIFactory not only simplifies the whole process but offers additional functionality too\n(such as AutoRefresh and AuthSuccess AuthFailure events), use of this way is very verbose and is only\nrecommended if you are having issues with TokenSwapWebAPIFactory or need access to the tokens."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'TokenSwapAuth auth = new TokenSwapAuth(\n    exchangeServerUri: "INSERT LINK TO YOUR index.php HERE",\n    serverUri: "http://localhost:4002",\n    scope: Scope.UserReadPrivate | Scope.UserReadEmail | Scope.PlaylistReadPrivate\n);\nauth.AuthReceived += async (sender, response) =>\n{\n    lastToken = await auth.ExchangeCodeAsync(response.Code);\n\n    spotify = new SpotifyWebAPI()\n    {\n        TokenType = lastToken.TokenType,\n        AccessToken = lastToken.AccessToken\n    };\n\n    authenticated = true;\n    auth.Stop();\n};\nauth.OnAccessTokenExpired += async (sender, e) => spotify.AccessToken = (await auth.RefreshAuthAsync(lastToken.RefreshToken)).AccessToken;\nauth.Start();\nauth.OpenBrowser();\n')),Object(a.b)("h2",{id:"token-swap-endpoint"},"Token Swap Endpoint"),Object(a.b)("p",null,"To keep your client secret completely secure and your client ID and redirect URI as secure as possible, use of a web server (such as a php website) is required."),Object(a.b)("p",null,"To use this method, an external HTTP Server (that you may need to create) needs to be able to supply the following HTTP Endpoints to your application:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/swap")," - Swaps out an ",Object(a.b)("inlineCode",{parentName:"p"},"authorization_code")," with an ",Object(a.b)("inlineCode",{parentName:"p"},"access_token")," and ",Object(a.b)("inlineCode",{parentName:"p"},"refresh_token")," - The following parameters are required in the JSON POST Body:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"grant_type")," (set to ",Object(a.b)("inlineCode",{parentName:"li"},'"authorization_code"'),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"code")," (the ",Object(a.b)("inlineCode",{parentName:"li"},"authorization_code"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redirect_uri")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Important")," The page that the redirect URI links to must return the authorization code json to your ",Object(a.b)("inlineCode",{parentName:"li"},"serverUri")," (default is 'http://localhost:4002') but to the folder 'auth', like this: 'http://localhost:4002/auth'.")))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/refresh")," - Refreshes an ",Object(a.b)("inlineCode",{parentName:"p"},"access_token")," - The following parameters are required in the JSON POST Body:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"grant_type")," (set to ",Object(a.b)("inlineCode",{parentName:"li"},'"refresh_token"'),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"refresh_token"))),Object(a.b)("p",null,"The following open-source token swap endpoint code can be used for your website:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rollersteaam/spotify-token-swap-php"}),"rollersteaam/spotify-token-swap-php")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/simontaen/SpotifyTokenSwap"}),"simontaen/SpotifyTokenSwap"))),Object(a.b)("h2",{id:"remarks"},"Remarks"),Object(a.b)("p",null,"It should be noted that GitHub Pages does not support hosting php scripts. Hosting php scripts through it will cause the php to render as plain HTML, potentially compromising your client secret while doing absolutely nothing."),Object(a.b)("p",null,"Be sure you have whitelisted your redirect uri in the Spotify Developer Dashboard otherwise the authorization will always fail."),Object(a.b)("p",null,"If you did not use the WebAPIFactory or you provided a ",Object(a.b)("inlineCode",{parentName:"p"},"serverUri")," different from its default, you must make sure your redirect uri's script at your endpoint will properly redirect to your ",Object(a.b)("inlineCode",{parentName:"p"},"serverUri")," (such as changing the areas which refer to ",Object(a.b)("inlineCode",{parentName:"p"},"localhost:4002")," if you had changed ",Object(a.b)("inlineCode",{parentName:"p"},"serverUri")," from its default), otherwise it will never reach your new ",Object(a.b)("inlineCode",{parentName:"p"},"serverUri"),"."))}l.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||a;return n?o.a.createElement(d,s({ref:t},p,{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);