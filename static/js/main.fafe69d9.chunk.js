(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),o=(n(25),n(4)),E=n(5),s=n(9),l=n(6),A=n(8),u=n(1),O=n(7),R=n(13),N={CHOSE_POKEMON_NAME:"CHOSE_POKEMON_NAME",CHOSE_LETTER:"CHOSE_LETTER"},m=["ABRA","AERODACTYL","ALAKAZAM","ALPHA","ARBOK","ARCANINE","ARTICUNO","BEEDRILL","BELLOSSOM","BELLSPROUT","BLASTOISE","BULBASAUR","BUTTERFREE","CATERPIE","CHANSEY","CHARIZARD","CHARMANDER","CHARMELEON","CLEFABLE","CLEFAIRY","CLOYSTER","CUBONE","DEWGONG","DIGLETT","DITTO","DODRIO","DODUO","DRAGONAIR","DRAGONITE","DRATINI","DROWZEE","DUGTRIO","EEVEE","EKANS","ELECTABUZZ","ELECTRODE","EXEGGCUTE","EXEGGUTOR","FARFETCH","FEAROW","FLAREON","GASTLY","GENGAR","GEODUDE","GLOOM","GOLBAT","GOLDEEN","GOLDUCK","GOLEM","GRAVELER","GRIMER","GROWLITHE","GYARADOS","HAUNTER","HITMONCHAN","HITMONLEE","HORSEA","HYPNO","IVYSAUR","JIGGLYPUFF","JOLTEON","JYNX","KABUTO","KABUTOPS","KADABRA","KAKUNA","KANGASKHAN","KINGLER","KOFFING","KRABBY","LAPRAS","LICKITUNG","MACHAMP","MACHOKE","MACHOP","MAGIKARP","MAGMAR","MAGNEMITE","MAGNETON","MANKEY","MAROWAK","MEGA","MEOWTH","METAPOD","MEW","MEWTWO","MOLTRES","MR","MUK","NIDOKING","NIDOQUEEN","NIDORINA","NIDORINO","NINETALES","ODDISH","OMANYTE","OMASTAR","ONIX","PARAS","PARASECT","PERSIAN","PIDGEOT","PIDGEOTTO","PIDGEY","PIKACHU","PINSIR","POLITOED","POLIWAG","POLIWHIRL","POLIWRATH","PONYTA","PORYGON","PRIMEAPE","PSYDUCK","RAICHU","RAPIDASH","RATICATE","RATTATA","RHYDON","RHYHORN","SANDSHREW","SANDSLASH","SCYTHER","SEADRA","SEAKING","SEEL","SHELLDER","SLOWBRO","SLOWKING","SLOWPOKE","SNORLAX","SPEAROW","SQUIRTLE","STARMIE","STARYU","TANGELA","TAUROS","TENTACOOL","TENTACRUEL","VAPOREON","VENOMOTH","VENONAT","VENUSAUR","VICTREEBEL","VILEPLUME","VOLTORB","VULPIX","WARTORTLE","WEEDLE","WEEPINBELL","WEEZING","WIGGLYTUFF","ZAPDOS","ZUBAT"],L=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],T="/pokemon-hangman",p={logo:"".concat(T,"/images/app-logo.png"),heart:"".concat(T,"/images/heart.png"),playing:"".concat(T,"/images/gottaCatchEmAll.png"),won:"".concat(T,"/images/happy-pikachu.png"),lost:"".concat(T,"/images/sad-pikachu.png")},I=n(19),h=n.n(I),S=function(e){return e.split("").map(function(e){return function(e){return P.choices.includes(e)?e:"_"}(e)}).join().replace(/,/g,"")},P={lives:6,choices:[],visualProgress:function(e){return S(e)},choseRandomPokemonName:function(){return h.a.sample(m)},removeLife:function(){P.lives--},choseLetter:function(e,t){return function(e,t){if(e.includes(t))throw new Error("This letter was already chosen!")}(P.choices,t),P.choices.push(t),e.includes(t)||P.removeLife(),P.choices},reStart:function(){P.lives=6,P.choices=[]},isWon:function(e){return e===P.visualProgress(e)},isLost:function(e){return 0===P.lives},isGameOver:function(e){return P.isWon(e)||P.isLost(e)}},g=P,f=g.lives,C=g.choices,G=g.choseRandomPokemonName,M=g.visualProgress,v=g.choseLetter,D=g.isWon,H=g.isLost,b=g.reStart,d={name:"",choices:C,hearts:f,nameProgress:"CLICK NEW GAME",imageStatus:"playing",isPlaying:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.CHOSE_POKEMON_NAME:b();var n=G(),a=M(n);return Object(R.a)({},d,{name:n,nameProgress:a,isPlaying:!0});case N.CHOSE_LETTER:var r=v(e.name,t.payload),c=D(e.name),i=H(e.name),o=i?e.name:M(e.name),E=!c&&!i;return Object(R.a)({},e,{choices:r,hearts:g.lives,nameProgress:o,imageStatus:function(e,t){return e?"won":t?"lost":"playing"}(c,i),isPlaying:E});default:return e}},K=Object(O.b)(U),_=function(){return r.a.createElement("img",{alt:"Guillaume Pokemon Hangman logo",className:"App__logo",src:p.logo})},y=function(e){var t=e.status;return r.a.createElement("img",{alt:"status",className:"App__status-image",src:p[t]})},W=Object(u.b)(function(e){return{status:e.imageStatus}})(y),k=function(e){var t=e.lives;return r.a.createElement("div",{className:"App__lives"},function(e){for(var t=[],n=0;n<e;n++)t.push(r.a.createElement("span",{key:n},r.a.createElement("img",{src:p.heart,alt:"life-".concat(n+1)})));return t}(t))},B=Object(u.b)(function(e){return{lives:e.hearts}})(k),Y=function(e){var t=e.progress;return r.a.createElement("div",{className:"App__name-progress"},t)},j=Object(u.b)(function(e){return{progress:e.nameProgress}})(Y),w=n(3),F=function(e){return r.a.createElement("button",{onClick:e.onClick,className:e.className},e.children)},V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).clickLetter=n.clickLetter.bind(Object(w.a)(Object(w.a)(n))),n.state={choices:[]},n}return Object(A.a)(t,e),Object(E.a)(t,[{key:"clickLetter",value:function(e){var t=this.state.choices;t.push(e),this.setState({choices:t}),this.props.onClick(e)}},{key:"render",value:function(){var e=this;return L.map(function(t){var n=e.state.choices.includes(t),a=r.a.createElement(F,{className:"App__alphabet-letter-button",key:t,children:t,onClick:function(){return e.clickLetter(t)}});return n?function(e){return r.a.createElement("div",{className:"App__alphabet-letter-hidden-button",key:e},e)}(t):a})}}]),t}(r.a.Component),Z=Object(u.b)(null,function(e){return{onClick:function(t){return e(function(e){return{type:N.CHOSE_LETTER,payload:e}}(t))}}})(V),X=function(e){var t=e.isPlaying;return r.a.createElement("div",{className:"App__alphabet-letter-container"},t?r.a.createElement(Z,null):r.a.createElement("div",{className:"App__alphabet-letter-container--empty"}))},J=Object(u.b)(function(e){return{isPlaying:e.isPlaying}})(X),Q=function(e){var t=e.isPlaying,n=e.onClick;return!t&&r.a.createElement(F,{onClick:n,className:"App__new-game-button",children:"New Game"})},x=Object(u.b)(function(e){return{isPlaying:e.isPlaying}},function(e){return{onClick:function(t){return e(function(e){return{type:N.CHOSE_POKEMON_NAME,payload:e}}(t))}}})(Q),$=(n(32),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{store:K},r.a.createElement("div",{className:"App"},r.a.createElement(_,null),r.a.createElement(B,null),r.a.createElement(W,null),r.a.createElement(j,null),r.a.createElement(J,null),r.a.createElement(x,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.fafe69d9.chunk.js.map