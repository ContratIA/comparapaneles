(function () {
  var $ = function (i) { return document.getElementById(i); };
  var n = function (i) { var v = parseFloat($(i).value); return isFinite(v) && v > 0 ? v : 0; };
  var f = function (x) { return Math.round(x).toLocaleString('es-ES', { useGrouping: 'always' }); };
  var f1 = function (x) { return x.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); };
  var DEG = 0.005, YEARS = 25, IDS = ['a', 'b', 'c'];
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function calc(o, s) {
    var prod = o.kwp * s.yld;
    var selfc = Math.min(prod * s.share, s.cons);
    var surplus = Math.max(prod - selfc, 0);
    var save1 = selfc * s.price + surplus * s.comp;
    var net = Math.max(o.price - s.sub, 0);
    var base = s.pct === 0.4 ? 7500 : 5000;
    var ded = s.pct * Math.min(net, base);
    var invest = Math.max(net - ded, 0);
    var acc = 0, pay = null, t, prev;
    for (t = 0; t < 40 && pay === null; t++) {
      prev = acc;
      acc += save1 * Math.pow(1 - DEG, t);
      if (acc >= invest) pay = invest === 0 ? 0 : t + (invest - prev) / (acc - prev);
    }
    var acc25 = 0;
    for (t = 0; t < YEARS; t++) acc25 += save1 * Math.pow(1 - DEG, t);
    return { eurkwp: o.price / o.kwp, prod: prod, save1: save1, invest: invest, pay: pay, gain: acc25 - invest };
  }

  function read(i) {
    return {
      id: i, name: $('nm' + i).value.trim() || 'Oferta ' + i.toUpperCase(),
      price: n('pr' + i), kwp: n('kw' + i), prom: n('py' + i),
      gInst: n('gi' + i), gInv: n('gv' + i), bat: $('bt' + i).checked, tram: $('tr' + i).checked
    };
  }

  function run() {
    var s = { cons: n('cons'), price: n('price'), yld: n('yld'), share: n('share') / 100, comp: n('comp'), sub: n('sub'), pct: parseInt($('irpf').value, 10) / 100 };
    $('shareV').textContent = Math.round(s.share * 100) + ' %';
    var offers = IDS.map(read).filter(function (o) { return o.price > 0 && o.kwp > 0; });
    var out = $('cmpOut');
    if (offers.length < 1) { out.innerHTML = '<p class="cmp-empty">Rellena al menos el precio y los kWp de una oferta para ver el resultado.</p>'; return; }
    offers.forEach(function (o) { o.r = calc(o, s); });

    var mixed = offers.some(function (o) { return o.bat !== offers[0].bat; });
    var best = {};
    if (offers.length > 1) {
      if (!mixed) best.eur = offers.reduce(function (a, b) { return b.r.eurkwp < a.r.eurkwp ? b : a; }).id;
      best.gain = offers.reduce(function (a, b) { return b.r.gain > a.r.gain ? b : a; }).id;
      var withPay = offers.filter(function (o) { return o.r.pay !== null; });
      if (withPay.length) best.pay = withPay.reduce(function (a, b) { return b.r.pay < a.r.pay ? b : a; }).id;
    }
    var mark = function (key, o) { return best[key] === o.id ? ' class="best"' : ''; };
    var row = function (label, cell, key) {
      return '<tr><th scope="row">' + label + '</th>' + offers.map(function (o) { return '<td' + (key ? mark(key, o) : '') + '>' + cell(o) + '</td>'; }).join('') + '</tr>';
    };
    var promTxt = function (o) {
      if (!o.prom) return 'No indicada';
      var d = (o.prom / s.yld - 1) * 100;
      var t = f(o.prom) + ' kWh/kWp (' + (d >= 0 ? '+' : '') + f1(d) + ' % frente a tu dato de PVGIS)';
      return d > 10 ? '<span class="warn">' + t + '</span>' : t;
    };
    var html = '<div class="tablewrap cmp-table"><table><thead><tr><th scope="col">Dato</th>' + offers.map(function (o) { return '<th scope="col">' + esc(o.name) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      row('Precio total (IVA incl.)', function (o) { return f(o.price) + ' €'; }) +
      row('Potencia', function (o) { return f1(o.kwp) + ' kWp'; }) +
      row('Euros por kWp', function (o) { return f(o.r.eurkwp) + ' €/kWp'; }, 'eur') +
      row('Producción anual estimada', function (o) { return f(o.r.prod) + ' kWh'; }) +
      row('Producción que promete la oferta', promTxt) +
      row('Ahorro del primer año', function (o) { return f(o.r.save1) + ' €'; }) +
      row('Inversión tras ayudas', function (o) { return f(o.r.invest) + ' €'; }) +
      row('Amortización aproximada', function (o) { return o.r.pay === null ? 'Más de 40 años' : o.r.pay === 0 ? 'Inmediata' : 'Unos ' + f1(o.r.pay) + ' años'; }, 'pay') +
      row('Balance neto a 25 años', function (o) { return '<span class="' + (o.r.gain < 0 ? 'neg' : 'sol') + '">' + f(o.r.gain) + ' €</span>'; }, 'gain') +
      row('Garantía de la instalación', function (o) { return o.gInst ? f(o.gInst) + ' años' : 'No indicada'; }) +
      row('Garantía del inversor', function (o) { return o.gInv ? f(o.gInv) + ' años' : 'No indicada'; }) +
      row('Incluye batería', function (o) { return o.bat ? 'Sí' : 'No'; }) +
      row('Incluye trámites y legalización', function (o) { return o.tram ? 'Sí' : 'No'; }) +
      '</tbody></table></div>';
    if (mixed) html += '<p class="cmp-note">Una oferta incluye batería y otra no, así que no marcamos el menor precio por kWp: no son comparables en euros por kWp.</p>';
    html += '<p class="cmp-note">Resultado orientativo con los datos que has introducido. Los paneles pierden un 0,5 % de producción al año (supuesto fijo). No incluye mantenimiento, cambio de inversor, financiación ni variaciones del precio de la luz. En la tabla se resalta el mejor valor de cada fila de euros por kWp, amortización y balance.</p>';
    out.innerHTML = html;
  }

  var EX = { a: ['Oferta A', 4800, 3, 1500, 5, 10, 0, 1], b: ['Oferta B', 4200, 2.5, 1900, 2, 5, 0, 0], c: ['Oferta C', 7900, 3, 0, 10, 12, 1, 1] };
  function setVal(id, v) { $(id).value = v === 0 ? '' : v; }
  function example() {
    IDS.forEach(function (i) {
      var e = EX[i];
      $('nm' + i).value = e[0]; setVal('pr' + i, e[1]); setVal('kw' + i, e[2]); setVal('py' + i, e[3]);
      setVal('gi' + i, e[4]); setVal('gv' + i, e[5]); $('bt' + i).checked = !!e[6]; $('tr' + i).checked = !!e[7];
    });
    run();
  }
  function clear() {
    IDS.forEach(function (i) {
      ['nm', 'pr', 'kw', 'py', 'gi', 'gv'].forEach(function (p) { $(p + i).value = ''; });
      $('bt' + i).checked = false; $('tr' + i).checked = false;
    });
    run();
  }

  if (!$('cmpOut')) return;
  var form = $('cmpForm');
  form.addEventListener('input', run);
  form.addEventListener('change', run);
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  $('cmpEx').addEventListener('click', example);
  $('cmpClr').addEventListener('click', clear);
  run();
})();
