// Demo interactiva de la portada: tejado con paneles que se encienden según la potencia elegida.
// Modelo idéntico al de la calculadora (producción = kWp × rendimiento; autoconsumo = % fijo; excedente compensado).

export const HERO_HTML = `<div class="stage boot" id="stage">
<div class="scene">
<svg viewBox="0 0 640 400" role="img" aria-label="Ilustración de una vivienda con paneles solares en el tejado; los paneles se encienden al aumentar la potencia">
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1226"/><stop offset=".62" stop-color="#27264d"/><stop offset="1" stop-color="#b8582e"/></linearGradient>
<radialGradient id="glow"><stop offset="0" stop-color="#ffd25a" stop-opacity=".9"/><stop offset="1" stop-color="#ffb400" stop-opacity="0"/></radialGradient>
<linearGradient id="cell" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a86e8"/><stop offset="1" stop-color="#16408c"/></linearGradient>
</defs>
<rect width="640" height="400" fill="url(#sky)"/>
<g class="sunball"><circle cx="320" cy="96" r="78" fill="url(#glow)"/><circle cx="320" cy="96" r="24" fill="#ffd25a"/></g>
<rect y="352" width="640" height="48" fill="#0b1020"/>
<rect x="74" y="252" width="492" height="102" rx="2" fill="#18203d"/>
<rect x="120" y="282" width="52" height="42" rx="3" fill="#ffd98a" opacity=".9"/>
<rect x="468" y="282" width="52" height="42" rx="3" fill="#ffd98a" opacity=".55"/>
<rect x="294" y="290" width="52" height="64" rx="3" fill="#0f1530"/>
<polygon points="150,128 490,128 582,256 58,256" fill="#232d52" stroke="#34417a" stroke-width="2" stroke-linejoin="round"/>
<g id="hPanels"></g>
</svg>
</div>
<div class="ctrl">
<div><label for="hKwp"><span>Potencia instalada</span><b id="hKwpV">3 kWp · 7 paneles</b></label><input id="hKwp" type="range" min="1" max="10" step="0.5" value="3"></div>
<div><label for="hCons"><span>Consumo anual de tu casa</span><b id="hConsV">3500 kWh</b></label><input id="hCons" type="range" min="1500" max="8000" step="100" value="3500"></div>
<div class="readout" aria-live="polite">
<div class="main"><div class="k">Ahorro estimado el primer año</div><div class="v" id="hSave">–</div></div>
<div><div class="k">Producción anual</div><div class="v" id="hProd">–</div></div>
<div><div class="k">Consumes tú directamente</div><div class="v" id="hSelf">–</div></div>
</div>
<p class="assume">Cuentas de ejemplo: 1.500 kWh por kWp al año, 40 % de autoconsumo, 0,15 €/kWh de tu factura y 0,06 €/kWh por excedentes. <a href="/calculadora-ahorro-placas-solares/">Cámbialos con tus datos</a>.</p>
</div>
</div>`;

export const HERO_JS = `
(function(){
var $=function(i){return document.getElementById(i)};
var f=function(x){return Math.round(x).toLocaleString('es-ES',{useGrouping:'always'})};
var NS='http://www.w3.org/2000/svg',COLS=6,ROWS=4,g=$('hPanels'),cells=[];
function lerp(a,b,t){return a+(b-a)*t}
function P(u,v){var xl=lerp(150,58,v),xr=lerp(490,582,v),y=lerp(128,256,v);return [lerp(xl,xr,u),y]}
for(var r=0;r<ROWS;r++)for(var c=0;c<COLS;c++){
  var u0=.06+c*(.88/COLS),u1=u0+.88/COLS-.016,v0=.09+r*(.82/ROWS),v1=v0+.82/ROWS-.035;
  var pts=[P(u0,v0),P(u1,v0),P(u1,v1),P(u0,v1)].map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1)}).join(' ');
  var el=document.createElementNS(NS,'polygon');el.setAttribute('points',pts);el.setAttribute('class','pn');el.style.setProperty('--i',r*COLS+c);
  g.appendChild(el);cells.push(el);
}
var prev=0,first=true;
function run(){
  var kwp=parseFloat($('hKwp').value),cons=parseFloat($('hCons').value);
  var n=Math.min(Math.round(kwp/0.43),cells.length);
  var prod=kwp*1500,selfc=Math.min(prod*.4,cons),sur=prod-selfc,save=selfc*.15+sur*.06;
  cells.forEach(function(el,i){
    var on=i<n,was=el.classList.contains('on');
    el.classList.toggle('on',on);
    if(on&&!was&&!first){el.classList.remove('pop');void el.getBoundingClientRect();el.classList.add('pop');}
  });
  $('hKwpV').textContent=String(kwp).replace('.',',')+' kWp · '+n+' paneles';
  $('hConsV').textContent=f(cons)+' kWh';
  $('hProd').textContent=f(prod)+' kWh';
  $('hSelf').textContent=f(selfc)+' kWh';
  $('hSave').textContent=f(save)+' €';
  $('hKwp').style.setProperty('--p',((kwp-1)/9*100)+'%');
  $('hCons').style.setProperty('--p',((cons-1500)/6500*100)+'%');
  prev=n;first=false;
}
$('hKwp').addEventListener('input',run);$('hCons').addEventListener('input',run);
run();
setTimeout(function(){$('stage').classList.remove('boot')},2200);
})();
`;
