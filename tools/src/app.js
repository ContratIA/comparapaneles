(function () {
  var d = document;
  var $ = function (s, c) { return (c || d).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); };
  var fmt = function (x) { return Math.round(x).toLocaleString('es-ES', { useGrouping: 'always' }); };

  // Menú móvil
  var ham = $('#ham'), menu = $('#mob-menu');
  function setMenu(open) {
    ham.setAttribute('aria-expanded', String(open));
    ham.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('open', open);
  }
  if (ham && menu) {
    ham.addEventListener('click', function () { setMenu(ham.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 960) setMenu(false); });
  }

  // Sombra de la cabecera al hacer scroll
  var top = $('.top');
  if (top) {
    var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Revelado suave
  var rev = $$('.rev');
  if (rev.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      rev.forEach(function (el) { io.observe(el); });
    } else {
      rev.forEach(function (el) { el.classList.add('vis'); });
    }
  }

  // Pestañas
  $$('[data-tabs]').forEach(function (box) {
    var tabs = $$('[role=tab]', box);
    function show(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        $('#' + t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(t); });
      t.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
        if (j < 0) return;
        e.preventDefault();
        show(tabs[(j + tabs.length) % tabs.length], true);
      });
    });
    show(tabs[0]);
  });

  // Estimación rápida de la portada (mismas fórmulas que la calculadora completa)
  var qSave = $('#qSave');
  if (qSave) {
    var q = function (id) { var v = parseFloat($(id).value); return isFinite(v) && v > 0 ? v : 0; };
    var quick = function () {
      var prod = q('#qKwp') * 1500, selfc = Math.min(prod * 0.4, q('#qCons'));
      qSave.textContent = fmt(selfc * q('#qPrice') + (prod - selfc) * 0.06) + ' €';
    };
    ['#qCons', '#qPrice', '#qKwp'].forEach(function (s) { $(s).addEventListener('input', quick); });
    quick();
  }

  // Formulario de contacto (Formspree)
  var form = $('form[data-contact]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = $('button[type=submit]', form), msg = $('.msg', form);
      btn.disabled = true;
      msg.hidden = true;
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          form.reset();
          msg.className = 'msg ok';
          msg.textContent = 'Mensaje enviado. Te responderemos por correo en cuanto podamos.';
        })
        .catch(function () {
          msg.className = 'msg err';
          msg.textContent = 'No se ha podido enviar. Escríbenos directamente a info@comparapaneles.com.';
        })
        .then(function () { btn.disabled = false; msg.hidden = false; });
    });
  }
})();
