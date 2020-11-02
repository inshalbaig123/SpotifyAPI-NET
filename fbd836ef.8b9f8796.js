(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(187)),l={id:"iplayableitem",title:"IPlayableItem"},o={id:"iplayableitem",title:"IPlayableItem",description:"When working with playlists or the current playing context, you will encounter the IPlayableItem type, which only contains a Type property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced IPlayableItem.",source:"@site/docs/iplayableitem.md",permalink:"/SpotifyAPI-NET/docs/next/iplayableitem",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/iplayableitem.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1604345241,sidebar:"docs",previous:{title:"Retry Handling",permalink:"/SpotifyAPI-NET/docs/next/retry_handling"},next:{title:"Unit Testing",permalink:"/SpotifyAPI-NET/docs/next/unit_testing"}},s=[{value:"Fields",id:"fields",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When working with playlists or the current playing context, you will encounter the ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem")," type, which only contains a ",Object(i.b)("inlineCode",{parentName:"p"},"Type")," property. Spotify recently introduced shows/episodes to the API, and thus had to adapt API endpoints which previously just returned track objects. Now, playlists and the current playing context can include two types: tracks and episodes. To reflect this in our models, we introduced ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var spotify = new SpotifyClient("YourAccessToken");\n\nvar playlist = await spotify.Playlists.Get("37i9dQZEVXbMDoHDwVN2tF");\nforeach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  // When was it added\n  Console.WriteLine(item.AddedAt);\n  // The only propety on item is item.Type, it\'s a IPlayableItem\n  Console.WriteLine(item.Track.Type);\n}\n')),Object(i.b)("p",null,"Now, this type per se is probably useless to you. You're interested in the name, uri or artist of the episode/track. To get that info, you have to type cast the ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem")," to the respective type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"foreach (PlaylistTrack<IPlayableItem> item in playlist.Tracks.Items)\n{\n  if (item.Track is FullTrack track)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(track.Name);\n  }\n  if (item.Track is FullEpisode episode)\n  {\n    // All FullTrack properties are available\n    Console.WriteLine(episode.Name);\n  }\n}\n")),Object(i.b)("p",null,"To this day, ",Object(i.b)("inlineCode",{parentName:"p"},"IPlayableItem")," can only be ",Object(i.b)("inlineCode",{parentName:"p"},"FullTrack")," or ",Object(i.b)("inlineCode",{parentName:"p"},"FullEpisode"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("p",null,"When requesting just a subset of fields using the ",Object(i.b)("inlineCode",{parentName:"p"},"fields")," query parameter, the call might fail with an exception similar to ",Object(i.b)("inlineCode",{parentName:"p"},"Received unknown playlist element type"),". For example, the following call fails:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'var playlistGetItemsRequest = new PlaylistGetItemsRequest();\nplaylistGetItemsRequest.Fields.Add("items(track(name))");\nvar playlistItems = await spotify.Playlists.GetItems("YourPlaylistId", playlistGetItemsRequest);\n')),Object(i.b)("p",null,"By requesting just the track name from the items, we don't have any kind of type information of the item itself. Thus, we're unable to cast it to the correct model. To fix this, include the type in the fields as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'playlistGetItemsRequest.Fields.Add("items(track(name,type))");\n')))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,b=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return n?r.a.createElement(b,o({ref:t},c,{components:n})):r.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);