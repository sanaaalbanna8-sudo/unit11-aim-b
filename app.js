const SPEAKER = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z"/></svg>';

const NAV = [
  { title: "البداية", links: [
    ["index.html#home", "خريطة الهدف ب"],
    ["index.html#map", "ماذا سنستعرض"]
  ]},
  { title: "ب1 · أنواع الشبكات", links: [
    ["b1.html#b1-open", "افتتاح ب1"],
    ["b1.html#scopes", "النطاقات الخمسة"],
    ["b1.html#lan", "LAN المحلية"],
    ["b1.html#wan", "WAN الواسعة"],
    ["b1.html#wlan", "WLAN اللاسلكية"],
    ["b1.html#san", "SAN التخزين"],
    ["b1.html#pan", "PAN الشخصية"],
    ["b1.html#compare-types", "مقارنة الأنواع"],
    ["b1.html#access-classes", "إنترانت وإكسترانت وسحابة"],
    ["b1.html#fail-game", "لعبة: إن تعطل…"],
    ["b1.html#wired-wireless", "الدمج السلكي واللاسلكي"],
    ["b1.html#star", "النجمي والموسّع"],
    ["b1.html#hierarchical", "الهرمي والمتشابك والمخصص"],
    ["b1.html#logical", "الإيثرنت و 802.11"],
    ["b1.html#architecture", "نظير وخادم وعميل رقيق"],
    ["b1.html#trends", "اتجاهات حديثة"],
    ["b1.html#iot", "إنترنت الأشياء"],
    ["b1.html#draw", "عدّل المخطط"]
  ]},
  { title: "ب2 · مكونات الشبكة", links: [
    ["b2.html#b2-open", "افتتاح ب2"],
    ["b2.html#endpoints", "أجهزة المستخدم"],
    ["b2.html#connectivity", "أجهزة الاتصال"],
    ["b2.html#copper", "النحاس والألياف"],
    ["b2.html#wireless-media", "وسائط لاسلكية و Li-Fi"],
    ["b2.html#external-storage", "التخزين الخارجي"],
    ["b2.html#operating-systems", "أنظمة التشغيل"],
    ["b2.html#tools", "أدوات المراقبة والإدارة"],
    ["b2.html#applications", "تطبيقات الشبكة"],
    ["b2.html#b2-impact", "أثر المكونات"]
  ]},
  { title: "ب3 · خدمات البنية", links: [
    ["b3.html#b3-open", "افتتاح ب3"],
    ["b3.html#tcpip", "TCP/IP"],
    ["b3.html#ports", "المنافذ"],
    ["b3.html#packets", "الحزم والكبسلة"],
    ["b3.html#ipv4", "IPv4 والتقسيم"],
    ["b3.html#nat", "العناوين الخاصة و NAT و IPv6"],
    ["b3.html#address-lab", "اقرأ العنوان"],
    ["b3.html#domains", "النطاقات"],
    ["b3.html#segmentation", "تجزئة الشبكة"],
    ["b3.html#dns", "أسماء النطاقات"],
    ["b3.html#directory", "الدليل والمصادقة"],
    ["b3.html#dhcp-routing", "DHCP والتوجيه"],
    ["b3.html#remote", "الوصول عن بُعد"],
    ["b3.html#file-web", "ملفات وطباعة وويب وبريد"],
    ["b3.html#case", "دراسة كلية الأفق"],
    ["b3.html#secure-existing", "تأمين نظام قائم"]
  ]},
  { title: "الحصة والمصطلحات", links: [
    ["lab.html#lab-open", "فهرس العملي"],
    ["lab.html#lab-ip", "ipconfig والعنوان العام"],
    ["lab.html#lab-ping", "ping و tracert"],
    ["lab.html#lab-dns", "nslookup"],
    ["lab.html#lab-firewall", "الجدار والسجلات"],
    ["lab.html#lab-phone", "هاتف الطالب"],
    ["lab.html#lab-draw", "رسم الكلية"],
    ["lab.html#lab-boundaries", "حدود العرض الآمن"],
    ["glossary.html#glossary", "المعجم والنطق"]
  ]}
];

function toast(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.style.display = "none"; }, 3200);
}

function buildNav() {
  const side = document.getElementById("side");
  if (!side) return;
  const here = location.pathname.split(/[/\\]/).pop() || "index.html";
  const hash = location.hash;
  side.innerHTML = `
    <div class="brand-block">
      <a href="index.html">
        <div class="brand-k">UNIT 11 · AIM B</div>
        <strong>الأثر الأمني للأنظمة المتصلة</strong>
        <span>الوحدة 11 · نتاج التعلم ب فقط</span>
        <span class="rights">© Sanaa Albanna · جميع الحقوق محفوظة · All rights reserved</span>
      </a>
    </div>
    ${NAV.map((group) => `
      <h2>${group.title}</h2>
      ${group.links.map(([href, label]) => {
        const [file, id] = href.split("#");
        const active = here === file && hash === "#" + id;
        return `<a class="item${active ? " active" : ""}" href="${href}">${label}</a>`;
      }).join("")}
    `).join("")}
  `;
}

function upgradeTerms() {
  document.querySelectorAll(".t").forEach((el) => {
    if (el.dataset.ready) return;
    el.dataset.ready = "1";
    const en = el.dataset.en || "";
    const say = el.dataset.say || en;
    const ar = (el.dataset.ar || el.textContent || "").trim();
    el.textContent = "";
    el.classList.add("term");
    if (ar) {
      const label = document.createElement("span");
      label.className = "ar";
      label.textContent = ar;
      el.append(label);
    }
    if (en) {
      const bdi = document.createElement("bdi");
      bdi.className = "en";
      bdi.textContent = en;
      el.append(bdi);
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "say";
    btn.dataset.en = say;
    btn.setAttribute("aria-label", "نطق " + (en || say));
    btn.innerHTML = SPEAKER;
    el.append(btn);
  });
}

function pickVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find((v) => v.lang.toLowerCase().startsWith("en-gb"))
    || voices.find((v) => v.lang.toLowerCase().startsWith("en"));
}

function speak(text, button) {
  if (!window.speechSynthesis) {
    toast("هذا المتصفح لا يشغّل النطق. المصطلح الإنجليزي ظاهر بجانب الزر.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.9;
  const voice = pickVoice();
  if (voice) utter.voice = voice;
  document.querySelectorAll(".say.on").forEach((b) => b.classList.remove("on"));
  if (button) button.classList.add("on");
  utter.onend = () => button && button.classList.remove("on");
  window.speechSynthesis.speak(utter);
}

function wireBuilder() {
  const builder = document.querySelector(".builder");
  if (!builder) return;
  const note = document.getElementById("builderNote");
  const notes = {
    server: "الـ Server يضع الحسابات والملفات في نقطة واحدة يمكن إدارتها. إن بقي على الشبكة نفسها مع أجهزة الطلاب بلا عزل، اقترب أي جهاز مصاب من بيانات الطلاب.",
    wan: "رابط الإنترنت هو المدخل العام. الحزم تعبر الـ Router، وهنا يُقرر ما يدخل إلى الكلية وما يخرج منها.",
    wifi: "الـ Access Point تنشر الإشارة في الهواء. شبكة الضيوف تبقى مفصولة عن Server السجلات حتى لا يصبح هاتف الزائر طريقًا إلى الداخل."
  };
  builder.querySelectorAll("button[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.add;
      const shown = builder.classList.toggle("show-" + key);
      btn.classList.toggle("on", shown);
      if (note && shown) note.textContent = notes[key];
      if (note && !shown) note.textContent = "المخطط النجمي للمختبر ما زال أمامك. أضف الجزء الذي تريد مناقشة أثره.";
    });
  });
}

function wireGlossary() {
  const input = document.getElementById("glossarySearch");
  if (!input) return;
  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    document.querySelectorAll(".gloss article").forEach((article) => {
      article.hidden = Boolean(value) && !article.innerText.toLowerCase().includes(value);
    });
  });
}

document.addEventListener("click", (event) => {
  const say = event.target.closest(".say");
  if (!say) return;
  event.preventDefault();
  speak(say.dataset.en, say);
});

document.getElementById("btnMenu")?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.body.classList.remove("nav-open");
});

if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => pickVoice();
}

buildNav();
upgradeTerms();
wireBuilder();
wireGlossary();
wireFailGame();
bootDeck();

function wireFailGame() {
  document.querySelectorAll(".fail-game .reveal-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const box = btn.nextElementSibling;
      if (!box || !box.classList.contains("reveal")) return;
      const open = box.hasAttribute("hidden");
      if (open) {
        box.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        btn.textContent = "اخفِ الإجابة";
      } else {
        box.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "أظهر ما نناقشه بعد التفكير";
      }
    });
  });
}

function bootDeck() {
  const slides = [...document.querySelectorAll(".slide")];
  if (!slides.length) return;
  const here = location.pathname.split(/[/\\]/).pop() || "index.html";
  const offsets = {
    "index.html": 0,
    "b1.html": 2,
    "b2.html": 20,
    "b3.html": 30,
    "lab.html": 46,
    "glossary.html": 54
  };
  const total = 55;
  const offset = offsets[here] || 0;
  let index = 0;
  if (location.hash === "#end") index = slides.length - 1;
  else if (location.hash) {
    const found = slides.findIndex((slide) => "#" + slide.id === location.hash);
    if (found >= 0) index = found;
  }

  const bar = document.createElement("div");
  bar.className = "deck-bar";
  bar.innerHTML = '<p class="rights">© Sanaa Albanna · جميع الحقوق محفوظة · All rights reserved</p><button type="button" id="deckPrev">السابق</button><div class="track" aria-hidden="true"><span id="deckFill"></span></div><span class="count" id="deckCount"></span><button type="button" class="go" id="deckNext">التالي</button>';
  document.body.append(bar);

  function show(nextIndex) {
    index = nextIndex;
    slides.forEach((slide, i) => slide.classList.toggle("on", i === index));
    slides[index].scrollTop = 0;
    const id = slides[index].id;
    history.replaceState(null, "", location.pathname + "#" + id);
    document.getElementById("deckCount").textContent = (offset + index + 1) + " / " + total;
    document.getElementById("deckFill").style.width = ((offset + index + 1) / total * 100) + "%";
    document.querySelectorAll(".side a.item").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href").endsWith("#" + id));
    });
  }

  function goNext() {
    if (index < slides.length - 1) show(index + 1);
    else if (document.body.dataset.next) location.href = document.body.dataset.next;
  }

  function goPrev() {
    if (index > 0) show(index - 1);
    else if (document.body.dataset.prev) location.href = document.body.dataset.prev + "#end";
  }

  document.getElementById("deckNext").addEventListener("click", goNext);
  document.getElementById("deckPrev").addEventListener("click", goPrev);
  document.getElementById("side")?.addEventListener("click", (event) => {
    const link = event.target.closest("a.item");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const [file, hash] = href.split("#");
    if ((file === here || file === "") && hash) {
      const found = slides.findIndex((slide) => slide.id === hash);
      if (found >= 0) {
        event.preventDefault();
        show(found);
        document.body.classList.remove("nav-open");
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown" || event.key === "PageDown") {
      event.preventDefault();
      goNext();
    } else if (event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "PageUp") {
      event.preventDefault();
      goPrev();
    }
  });
  show(index);
}
