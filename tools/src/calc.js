(function () {
  var $ = function (i) { return document.getElementById(i); };
  var n = function (i) { var v = parseFloat($(i).value); return isFinite(v) && v > 0 ? v : 0; };
  var f = function (x) { return Math.round(x).toLocaleString('es-ES', { useGrouping: 'always' }); };
  var f1 = function (x) { return x.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); };
  var DEG = 0.005, YEARS = 25;

  function chart(save1, invest) {
    var W = 320, H = 120, pad = 10, pts = [], t, acc = 0, lo = -invest, hi = -invest;
    for (t = 0; t <= YEARS; t++) {
      if (t > 0) acc += save1 * Math.pow(1 - DEG, t - 1);
      var bal = acc - invest;
      pts.push(bal);
      lo = Math.min(lo, bal); hi = Math.max(hi, bal);
    }
    if (hi === lo) hi = lo + 1;
    var x = function (i) { return pad + (W - 2 * pad) * i / YEARS; };
    var y = function (v) { return H - pad - (H - 2 * pad) * (v - lo) / (hi - lo); };
    var line = pts.map(function (v, i) { return x(i).toFixed(1) + ',' + y(v).toFixed(1); }).join(' ');
    var zero = y(0).toFixed(1);
    $('oChart').innerHTML =
      '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Balance acumulado a 25 años: de ' + f(pts[0]) + ' € al inicio a ' + f(pts[YEARS]) + ' € en el año 25">' +
      '<line x1="' + pad + '" x2="' + (W - pad) + '" y1="' + zero + '" y2="' + zero + '" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 4"/>' +
      '<polyline points="' + line + '" fill="none" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  }

  function run() {
    var cons = n('cons'), price = n('price'), kwp = n('kwp'), yld = n('yld'), share = n('share') / 100,
        comp = n('comp'), cost = n('cost'), sub = n('sub'), irpf = $('irpf').checked;
    $('shareV').textContent = Math.round(share * 100) + ' %';
    var prod = kwp * yld;
    var selfc = Math.min(prod * share, cons);
    var surplus = Math.max(prod - selfc, 0);
    var save1 = selfc * price + surplus * comp;
    var net = Math.max(cost - sub, 0);
    var ded = irpf ? 0.4 * Math.min(net, 7500) : 0;
    var invest = Math.max(net - ded, 0);

    var acc = 0, pay = null, t, prev;
    for (t = 0; t < 40 && pay === null; t++) {
      prev = acc;
      acc += save1 * Math.pow(1 - DEG, t);
      if (acc >= invest) pay = invest === 0 ? 0 : t + (invest - prev) / (acc - prev);
    }
    var acc25 = 0;
    for (t = 0; t < YEARS; t++) acc25 += save1 * Math.pow(1 - DEG, t);
    var gain = acc25 - invest;

    $('oProd').textContent = f(prod) + ' kWh';
    $('oSelf').textContent = f(selfc) + ' kWh' + (cons > 0 ? ' (' + Math.round(selfc / cons * 100) + ' % de tu consumo)' : '');
    $('oSur').textContent = f(surplus) + ' kWh';
    $('oSave').textContent = f(save1) + ' €';
    $('oNet').textContent = f(net) + ' €';
    $('oDed').textContent = irpf ? f(ded) + ' €' : 'No incluida';
    $('oPay').textContent = pay === null ? 'Más de 40 años' : pay === 0 ? 'Inmediata' : 'Unos ' + f1(pay) + ' años';
    $('oGain').textContent = f(gain) + ' €';
    $('oGain').className = gain < 0 ? 'neg' : 'sol';
    chart(save1, invest);
  }

  ['cons', 'price', 'kwp', 'yld', 'share', 'comp', 'cost', 'sub', 'irpf'].forEach(function (i) {
    $(i).addEventListener('input', run);
    $(i).addEventListener('change', run);
  });
  run();
})();
