(function() {

var NAV_HTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

/* Shared hero gradients — gives each page category its own identity */
.hero-gradient{
  background:linear-gradient(135deg,#1B5E20 0%,#2E7D32 50%,#C2410C 100%);
}
.hero-gradient-north{
  background:linear-gradient(135deg,#0f766e 0%,#0d9488 50%,#047857 100%);
}
.hero-gradient-south{
  background:linear-gradient(135deg,#92400e 0%,#c2410c 50%,#9a3412 100%);
}
.hero-gradient-east{
  background:linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 50%,#2563eb 100%);
}
.hero-gradient-hub{
  background:linear-gradient(135deg,#581c87 0%,#7c3aed 50%,#6d28d9 100%);
}

.bw-header *{box-sizing:border-box;margin:0;padding:0;}

html{
  overflow-x:hidden;
  max-width:100vw;
}

a,button,.bw-mbar a,.bw-ham,.bw-si{
  -webkit-tap-highlight-color:rgba(46,125,50,0.15);
  touch-action:manipulation;
}

.bw-sr-only{
  position:absolute;width:1px;height:1px;
  padding:0;margin:-1px;overflow:hidden;
  clip:rect(0,0,0,0);white-space:nowrap;border:0;
}

/* Shared FAQ accordion (used across guide pages via .faq-item/.faq-button/.faq-icon) */
.faq-item{
  border-bottom:1px solid #e2e8f0;
}
.faq-item:last-child{border-bottom:none;}
.faq-button{
  width:100%;display:flex;align-items:center;justify-content:space-between;
  gap:12px;padding:16px 4px;background:none;border:none;cursor:pointer;
  text-align:left;font-weight:700;font-size:14px;color:#0f172a;
  font-family:'Poppins',sans-serif;min-height:44px;
}
.faq-icon{
  flex-shrink:0;width:26px;height:26px;display:flex;align-items:center;justify-content:center;
  font-size:18px;font-weight:900;color:#2E7D32;background:#E8F5E9;border-radius:8px;
  transition:transform 0.25s ease;
}
.faq-answer{
  max-height:0;overflow:hidden;
  transition:max-height 0.3s ease, padding 0.3s ease;
  padding:0 4px;font-size:13px;line-height:1.65;color:#475569;font-weight:500;
}
.faq-item.active .faq-answer{
  max-height:600px;padding-bottom:16px;
}
.faq-item.active .faq-icon{
  transform:rotate(45deg);
  background:#2E7D32;color:#fff;
}

.bw-header{
  background:#fff;
  border-bottom:2px solid #E8F5E9;
  box-shadow:0 2px 8px rgba(0,0,0,0.06);
  position:sticky;top:0;
  z-index:9999;width:100%;
  font-family:'Poppins',sans-serif;
}

.bw-hi{
  max-width:1280px;margin:0 auto;
  padding:0 20px;height:62px;
  display:flex;align-items:center;
  justify-content:space-between;gap:16px;
}

.bw-logo{
  display:flex;align-items:center;
  gap:10px;text-decoration:none;
  flex-shrink:0;
  min-height:44px;
}

.bw-li{
  width:40px;height:40px;
  background:linear-gradient(135deg,#2E7D32,#1B5E20);
  border-radius:10px;
  display:flex;align-items:center;
  justify-content:center;
  box-shadow:0 2px 8px rgba(46,125,50,0.3);
  flex-shrink:0;
}

.bw-li span{
  color:#fff;font-weight:900;
  font-size:15px;letter-spacing:-0.5px;
}

.bw-lt{
  display:flex;flex-direction:column;
  line-height:1.15;
}

.bw-ln{
  font-size:17px;font-weight:800;
  white-space:nowrap;
}

.bw-ln .g{color:#2E7D32;}
.bw-ln .o{color:#C2410C;}

.bw-ltag{
  font-size:9.5px;color:#888;
  font-weight:400;white-space:nowrap;
}

.bw-nav{
  display:flex;align-items:center;
  gap:2px;list-style:none;
  flex:1;justify-content:center;
}

.bw-nav>li{position:relative;}

.bw-nav>li>a,
.bw-nav>li>button{
  display:flex;align-items:center;
  gap:3px;padding:8px 11px;
  min-height:44px;
  color:#333;text-decoration:none;
  font-size:13px;font-weight:500;
  background:none;border:none;
  cursor:pointer;border-radius:8px;
  white-space:nowrap;
  transition:all 0.15s;
  font-family:'Poppins',sans-serif;
}

.bw-nav>li>a:hover,
.bw-nav>li>button:hover{
  background:#F1F8E9;color:#2E7D32;
}

.bw-arr{
  font-size:9px;opacity:0.5;
  transition:transform 0.2s;
}

.bw-ddo .bw-arr{transform:rotate(180deg);}

.bw-dd{
  display:none;position:absolute;
  top:calc(100% + 6px);left:50%;
  transform:translateX(-50%);
  background:#fff;
  border:1px solid #E8F5E9;
  border-radius:12px;
  box-shadow:0 8px 30px rgba(0,0,0,0.12);
  min-width:220px;z-index:99999;
  overflow:hidden;
}

.bw-dd.bw-dop{display:block;}

.bw-dd a{
  display:flex;align-items:center;
  gap:9px;padding:10px 16px;
  color:#444;text-decoration:none;
  font-size:13px;
  border-bottom:1px solid #F5F5F5;
  transition:background 0.12s;
  font-family:'Poppins',sans-serif;
}

.bw-dd a:last-child{border-bottom:none;}
.bw-dd a:hover{background:#F1F8E9;color:#2E7D32;}

.bw-right{
  display:flex;align-items:center;
  gap:8px;flex-shrink:0;
}

.bw-si{
  width:44px;height:44px;
  border-radius:8px;background:none;
  border:none;cursor:pointer;
  display:flex;align-items:center;
  justify-content:center;
  font-size:17px;color:#555;
  transition:background 0.15s;
}

.bw-si:hover{background:#F1F8E9;color:#2E7D32;}

.bw-sai{
  display:flex;align-items:center;
  gap:5px;padding:8px 14px;
  min-height:44px;
  background:#2E7D32;color:#fff;
  border-radius:20px;
  text-decoration:none;
  font-size:12.5px;font-weight:600;
  white-space:nowrap;
  transition:background 0.15s;
  font-family:'Poppins',sans-serif;
}

.bw-sai:hover{background:#1B5E20;}

.bw-wai{
  display:flex;align-items:center;
  gap:5px;padding:8px 14px;
  min-height:44px;
  background:#C2410C;color:#fff;
  border-radius:20px;
  text-decoration:none;
  font-size:12.5px;font-weight:600;
  white-space:nowrap;
  transition:background 0.15s;
  font-family:'Poppins',sans-serif;
}

.bw-wai:hover{background:#E65C00;}

.bw-ham{
  display:none;flex-direction:column;
  align-items:center;justify-content:center;
  gap:5px;cursor:pointer;
  width:44px;height:44px;
  background:none;border:none;
  padding:6px;border-radius:8px;
}

.bw-ham span{
  display:block;width:22px;height:2.5px;
  background:#333;border-radius:3px;
  transition:all 0.25s;
}

.bw-sw{
  display:none;position:absolute;
  top:100%;left:0;right:0;
  background:#fff;
  padding:12px 20px 16px;
  border-bottom:1px solid #E8F5E9;
  box-shadow:0 4px 20px rgba(0,0,0,0.08);
  z-index:9998;
}

.bw-sw.bw-sop{display:block;}

.bw-si2{
  width:100%;padding:11px 18px;
  border:2px solid #2E7D32;
  border-radius:25px;font-size:14px;
  font-family:'Poppins',sans-serif;
  outline:none;color:#333;
}

.bw-sr{
  display:none;margin-top:8px;
  border:1px solid #E8F5E9;
  border-radius:10px;overflow:hidden;
  background:#fff;
  box-shadow:0 4px 12px rgba(0,0,0,0.08);
}

.bw-sr.bw-srop{display:block;}

.bw-sri{
  display:flex;align-items:center;
  gap:10px;padding:11px 16px;
  text-decoration:none;color:#333;
  font-size:13px;
  font-family:'Poppins',sans-serif;
  border-bottom:1px solid #F5F5F5;
  transition:background 0.12s;
}

.bw-sri:last-child{border-bottom:none;}
.bw-sri:hover{background:#F1F8E9;color:#2E7D32;}

.bw-sre{
  padding:14px 16px;color:#888;
  font-size:13px;
  font-family:'Poppins',sans-serif;
}

.bw-sre a{color:#2E7D32;}

.bw-mm{
  display:none;position:fixed;
  top:0;left:0;right:0;bottom:0;
  background:#fff;z-index:99999;
  overflow-y:auto;
}

.bw-mm.bw-mop{display:block;}

.bw-mmt{
  display:flex;align-items:center;
  justify-content:space-between;
  padding:14px 20px;
  border-bottom:1px solid #E8F5E9;
  position:sticky;top:0;
  background:#fff;z-index:1;
}

.bw-mmc{
  width:44px;height:44px;
  border-radius:8px;background:#F5F5F5;
  border:none;cursor:pointer;
  font-size:18px;color:#333;
  display:flex;align-items:center;
  justify-content:center;
}

.bw-mmb{padding:12px 20px 100px;}

.bw-mms{margin-bottom:20px;}

.bw-mml{
  font-size:10px;font-weight:700;
  color:#aaa;text-transform:uppercase;
  letter-spacing:1.2px;
  padding:10px 0 6px;
  font-family:'Poppins',sans-serif;
}

.bw-mm a{
  display:flex;align-items:center;
  gap:10px;padding:13px 4px;
  min-height:44px;
  color:#333;text-decoration:none;
  font-size:15px;
  font-family:'Poppins',sans-serif;
  border-bottom:1px solid #F5F5F5;
  transition:color 0.12s;
}

.bw-mm a:hover{color:#2E7D32;}

.bw-mmwa{
  display:block;
  background:#C2410C;color:#fff;
  text-align:center;padding:15px;
  border-radius:12px;font-weight:700;
  font-size:15px;margin-top:20px;
  text-decoration:none;
  font-family:'Poppins',sans-serif;
}

.bw-mbar{
  display:none;position:fixed;
  bottom:0;left:0;right:0;
  background:#1B5E20;z-index:9998;
  padding:6px 0 10px;
  box-shadow:0 -2px 10px rgba(0,0,0,0.2);
}

.bw-mbari{
  display:flex;justify-content:space-around;
}

.bw-mbar a{
  display:flex;flex-direction:column;
  align-items:center;gap:2px;
  text-decoration:none;
  color:rgba(255,255,255,0.75);
  flex:1;padding:4px 0;
  font-family:'Poppins',sans-serif;
  transition:color 0.15s;
}

.bw-mbar a span:first-child{font-size:20px;}
.bw-mbar a span:last-child{font-size:9.5px;font-weight:500;}
.bw-mbar a:hover{color:#FFCC00;}

@media(max-width:1024px){
  .bw-nav{display:none;}
  .bw-wai{display:none;}
  .bw-ham{display:flex;}
}

@media(max-width:600px){
  .bw-mbar{display:block;}
  .bw-hi{padding:0 14px;}
  .bw-ln{font-size:15px;}
  .bw-ltag{display:none;}
  .bw-li{width:36px;height:36px;}
  .bw-li span{font-size:13px;}
}
@media(max-width:420px){
  .bw-hi{padding:0 10px;gap:6px;}
  .bw-right{gap:4px;}
  .bw-sai{display:none;}
}
</style>

<header class="bw-header" id="bwH">
<div class="bw-hi">

<a href="index.html" class="bw-logo">
  <div class="bw-li"><span>BW</span></div>
  <div class="bw-lt">
    <span class="bw-ln">
      <span class="g">Bigha</span><span class="o">Wala</span><span class="g">.com</span>
    </span>
    <span class="bw-ltag">बिहार का #1 जमीन पोर्टल</span>
  </div>
</a>

<ul class="bw-nav">
  <li><a href="index.html">Home</a></li>
  <li><a href="apna-khata-dekhe.html">अपना खाता</a></li>
  <li>
    <button onclick="bwT('t')" class="bw-db">
      Tools <span class="bw-arr">▼</span>
    </button>
    <div class="bw-dd" id="bwt">
      <a href="bigha-calculator.html">🧮 Bigha Calculator</a>
      <a href="bigha-to-decimal.html">🔢 Bigha to Decimal</a>
      <a href="zameen-moolyankan.html">🏡 Zameen Moolyankan</a>
      <a href="land-cost-calculator.html">💰 Registry Cost</a>
      <a href="zameen-comparison.html">⚖️ Zameen Compare</a>
      <a href="bihar-land-quiz.html">🎯 Land Quiz</a>
      <a href="document-checker.html">📄 Document Checker</a>
      <a href="saathi-bot.html">🎙️ साथी Voice AI</a>
    </div>
  </li>
  <li>
    <button onclick="bwT('g')" class="bw-db">
      Guides <span class="bw-arr">▼</span>
    </button>
    <div class="bw-dd" id="bwg">
      <a href="dakhil-kharij.html">📋 Dakhil Kharij</a>
      <a href="dakhil-kharij-fees.html">💰 DK Fees</a>
      <a href="bhulekh.html">🗺️ Bhulekh Bihar</a>
      <a href="jamabandi.html">📑 Jamabandi</a>
      <a href="lpc-bihar.html">📄 LPC Bihar</a>
      <a href="lpc-validity-renewal.html">⏱️ LPC Validity</a>
      <a href="registry-bihar.html">📜 Registry Guide</a>
      <a href="zameen-registry-charges.html">💳 Registry Charges</a>
      <a href="bainama-format-bihar.html">📝 Bainama Format</a>
      <a href="khata-khesra-bihar.html">🔑 Khata Khesra</a>
      <a href="khatiyan-bihar.html">📜 Khatiyan Bihar</a>
      <a href="bhu-naksha-bihar.html">🗺️ Bhu Naksha</a>
      <a href="self-declaration-form-bihar.html">📋 Self Declaration</a>
      <a href="zameen-vivad-bihar.html">⚖️ Zameen Vivad</a>
      <a href="bihar-bhumi-portal.html">🏛️ Bihar Bhumi Portal</a>
      <a href="kisan-credit-card-bihar.html">🌾 Kisan Credit Card</a>
      <a href="pm-awas-yojana-bihar.html">🏠 PM Awas Yojana</a>
      <a href="halka-mauja-kya-hota-hai.html">🏘️ Halka Mauja Kya Hai</a>
      <a href="lpc-dakhil-kharij-status-check.html">🔍 LPC/DK Status Check</a>
    </div>
  </li>
  <li>
    <button onclick="bwT('r')" class="bw-db">
      Rates <span class="bw-arr">▼</span>
    </button>
    <div class="bw-dd" id="bwr">
      <a href="land-rates.html">💰 Land Rates 2026</a>
      <a href="mvr-rate-bihar.html">📊 MVR Rate Bihar</a>
      <a href="jamin-ka-rate-bihar.html">🏘️ Jamin Ka Rate</a>
      <a href="circle-rate-bihar.html">🔢 Circle Rate</a>
      <a href="bihar-all-districts-land-rate.html">📍 All 38 Districts</a>
    </div>
  </li>
  <li><a href="community-qa.html">Community</a></li>
  <li><a href="bihar-land-news.html">News</a></li>
</ul>

<div class="bw-right">
  <button class="bw-si" onclick="bwS()" aria-label="खोजें (Search)">🔍</button>
  <a href="saathi-bot.html" class="bw-sai">🎙️ साथी AI</a>
  <a href="https://wa.me/919835102324" target="_blank" class="bw-wai">💬 Expert</a>
  <button class="bw-ham" onclick="bwM()" aria-label="मेन्यू खोलें (Open menu)">
    <span></span><span></span><span></span>
  </button>
</div>

</div>

<div class="bw-sw" id="bwSW">
  <label for="bwSI" class="bw-sr-only">साइट खोजें (Search site)</label>
  <input type="text" class="bw-si2"
    id="bwSI"
    placeholder="खोजें... Bigha Calculator, Dakhil Kharij, Patna Rate"
    oninput="bwDS(this.value)"
    autocomplete="off">
  <div class="bw-sr" id="bwSR"></div>
</div>
</header>

<div class="bw-mm" id="bwMM">
  <div class="bw-mmt">
    <a href="index.html" class="bw-logo" onclick="bwM()">
      <div class="bw-li"><span>BW</span></div>
      <div class="bw-lt">
        <span class="bw-ln">
          <span class="g">Bigha</span><span class="o">Wala</span><span class="g">.com</span>
        </span>
      </div>
    </a>
    <button class="bw-mmc" onclick="bwM()" aria-label="मेन्यू बंद करें (Close menu)">✕</button>
  </div>
  <div class="bw-mmb">
    <div class="bw-mms">
      <a href="index.html" onclick="bwM()">🏠 Home</a>
      <a href="apna-khata-dekhe.html" onclick="bwM()">📋 अपना खाता देखें</a>
      <a href="saathi-bot.html" onclick="bwM()">🎙️ साथी Voice AI</a>
    </div>
    <div class="bw-mms">
      <div class="bw-mml">Tools</div>
      <a href="bigha-calculator.html" onclick="bwM()">🧮 Bigha Calculator</a>
      <a href="bigha-to-decimal.html" onclick="bwM()">🔢 Bigha to Decimal</a>
      <a href="zameen-moolyankan.html" onclick="bwM()">🏡 Zameen Moolyankan</a>
      <a href="land-cost-calculator.html" onclick="bwM()">💰 Registry Cost</a>
      <a href="zameen-comparison.html" onclick="bwM()">⚖️ Zameen Compare</a>
      <a href="bihar-land-quiz.html" onclick="bwM()">🎯 Bihar Land Quiz</a>
      <a href="document-checker.html" onclick="bwM()">📄 Document Checker</a>
    </div>
    <div class="bw-mms">
      <div class="bw-mml">Guides</div>
      <a href="dakhil-kharij.html" onclick="bwM()">📋 Dakhil Kharij</a>
      <a href="dakhil-kharij-fees.html" onclick="bwM()">💰 DK Fees</a>
      <a href="bhulekh.html" onclick="bwM()">🗺️ Bhulekh Bihar</a>
      <a href="jamabandi.html" onclick="bwM()">📑 Jamabandi</a>
      <a href="lpc-bihar.html" onclick="bwM()">📄 LPC Bihar</a>
      <a href="lpc-validity-renewal.html" onclick="bwM()">⏱️ LPC Validity</a>
      <a href="registry-bihar.html" onclick="bwM()">📜 Registry Guide</a>
      <a href="zameen-registry-charges.html" onclick="bwM()">💳 Registry Charges</a>
      <a href="bainama-format-bihar.html" onclick="bwM()">📝 Bainama Format</a>
      <a href="khata-khesra-bihar.html" onclick="bwM()">🔑 Khata Khesra</a>
      <a href="khatiyan-bihar.html" onclick="bwM()">📜 Khatiyan Bihar</a>
      <a href="bhu-naksha-bihar.html" onclick="bwM()">🗺️ Bhu Naksha</a>
      <a href="self-declaration-form-bihar.html" onclick="bwM()">📋 Self Declaration</a>
      <a href="zameen-vivad-bihar.html" onclick="bwM()">⚖️ Zameen Vivad</a>
      <a href="bihar-bhumi-portal.html" onclick="bwM()">🏛️ Bihar Bhumi Portal</a>
      <a href="kisan-credit-card-bihar.html" onclick="bwM()">🌾 Kisan Credit Card</a>
      <a href="pm-awas-yojana-bihar.html" onclick="bwM()">🏠 PM Awas Yojana</a>
      <a href="halka-mauja-kya-hota-hai.html" onclick="bwM()">🏘️ Halka Mauja Kya Hai</a>
      <a href="lpc-dakhil-kharij-status-check.html" onclick="bwM()">🔍 LPC/DK Status Check</a>
    </div>
    <div class="bw-mms">
      <div class="bw-mml">Rates</div>
      <a href="land-rates.html" onclick="bwM()">💰 Land Rates 2026</a>
      <a href="mvr-rate-bihar.html" onclick="bwM()">📊 MVR Rate Bihar</a>
      <a href="jamin-ka-rate-bihar.html" onclick="bwM()">🏘️ Jamin Ka Rate</a>
      <a href="circle-rate-bihar.html" onclick="bwM()">🔢 Circle Rate Bihar</a>
      <a href="bihar-all-districts-land-rate.html" onclick="bwM()">📍 All 38 Districts</a>
    </div>
    <div class="bw-mms">
      <div class="bw-mml">More</div>
      <a href="community-qa.html" onclick="bwM()">🤝 Community Q&A</a>
      <a href="bihar-land-news.html" onclick="bwM()">📰 Bihar Land News</a>
      <a href="whatsapp-alerts.html" onclick="bwM()">📱 WhatsApp Alerts</a>
      <a href="about.html" onclick="bwM()">ℹ️ About Us</a>
      <a href="contact.html" onclick="bwM()">📞 Contact</a>
      <a href="disclaimer.html" onclick="bwM()">📝 Disclaimer</a>
    </div>
    <a href="https://wa.me/919835102324"
      target="_blank" class="bw-mmwa">
      💬 WhatsApp Expert: 9835102324
    </a>
  </div>
</div>

<div class="bw-mbar">
  <div class="bw-mbari">
    <a href="index.html">
      <span>🏠</span><span>Home</span>
    </a>
    <a href="bigha-calculator.html">
      <span>🧮</span><span>Calculator</span>
    </a>
    <a href="apna-khata-dekhe.html">
      <span>📋</span><span>Khata</span>
    </a>
    <a href="saathi-bot.html">
      <span>🎙️</span><span>साथी</span>
    </a>
    <a href="community-qa.html">
      <span>🤝</span><span>Community</span>
    </a>
  </div>
</div>
`;

window.bwSD = [
  {t:'अपना खाता देखें',k:'apna khata khatyan',u:'apna-khata-dekhe.html'},
  {t:'Bigha Calculator',k:'bigha katha dhur convert',u:'bigha-calculator.html'},
  {t:'Bigha to Decimal',k:'bigha decimal dismil',u:'bigha-to-decimal.html'},
  {t:'Dakhil Kharij',k:'dakhil kharij mutation',u:'dakhil-kharij.html'},
  {t:'Dakhil Kharij Fees',k:'dakhil fees paisa kharcha',u:'dakhil-kharij-fees.html'},
  {t:'LPC Bihar',k:'lpc land possession',u:'lpc-bihar.html'},
  {t:'LPC Validity',k:'lpc validity renewal expire',u:'lpc-validity-renewal.html'},
  {t:'Jamabandi',k:'jamabandi nakal download',u:'jamabandi.html'},
  {t:'Bhulekh Bihar',k:'bhulekh record',u:'bhulekh.html'},
  {t:'Registry Guide',k:'registry nibandhan',u:'registry-bihar.html'},
  {t:'Registry Charges',k:'registry charges stamp duty',u:'zameen-registry-charges.html'},
  {t:'Bainama Format',k:'bainama sale deed hindi',u:'bainama-format-bihar.html'},
  {t:'Khata Khesra',k:'khata khesra number',u:'khata-khesra-bihar.html'},
  {t:'Khatiyan Bihar',k:'khatiyan cs rs survey jamabandi',u:'khatiyan-bihar.html'},
  {t:'Halka Mauja Kya Hai',k:'halka mauja anchal revenue village',u:'halka-mauja-kya-hota-hai.html'},
  {t:'LPC/Dakhil Kharij Status',k:'lpc status dakhil kharij status mutation check',u:'lpc-dakhil-kharij-status-check.html'},
  {t:'Bhu Naksha',k:'bhu naksha land map',u:'bhu-naksha-bihar.html'},
  {t:'Self Declaration',k:'self declaration shapath patra',u:'self-declaration-form-bihar.html'},
  {t:'Zameen Vivad',k:'zameen vivad dispute',u:'zameen-vivad-bihar.html'},
  {t:'Land Rates Bihar',k:'zameen rate kimat',u:'land-rates.html'},
  {t:'MVR Rate Bihar',k:'mvr minimum valuation',u:'mvr-rate-bihar.html'},
  {t:'Circle Rate',k:'circle rate sarkari',u:'circle-rate-bihar.html'},
  {t:'Jamin Ka Rate',k:'jamin rate check',u:'jamin-ka-rate-bihar.html'},
  {t:'Zameen Moolyankan',k:'moolyankan valuation',u:'zameen-moolyankan.html'},
  {t:'Cost Calculator',k:'cost kharcha stamp',u:'land-cost-calculator.html'},
  {t:'Zameen Compare',k:'compare do plot',u:'zameen-comparison.html'},
  {t:'Bihar Land Quiz',k:'quiz test knowledge',u:'bihar-land-quiz.html'},
  {t:'Document Checker',k:'document kagaz checker',u:'document-checker.html'},
  {t:'साथी Voice AI',k:'saathi voice ai bot',u:'saathi-bot.html'},
  {t:'Community Q&A',k:'community sawaal jawab',u:'community-qa.html'},
  {t:'Bihar Land News',k:'news samachar update',u:'bihar-land-news.html'},
  {t:'Bihar Bhumi Portal',k:'portal bhumi sarkari',u:'bihar-bhumi-portal.html'},
  {t:'Kisan Credit Card',k:'kisan credit kcc loan',u:'kisan-credit-card-bihar.html'},
  {t:'PM Awas Yojana',k:'pm awas ghar yojana',u:'pm-awas-yojana-bihar.html'},
  {t:'Patna Land Rate',k:'patna zameen rate',u:'patna-land-rate.html'},
  {t:'All 38 Districts',k:'all district sabhi jila',u:'bihar-all-districts-land-rate.html'},
  {t:'About BighaWala',k:'about us hamare',u:'about.html'},
  {t:'Contact Us',k:'contact sampark',u:'contact.html'}
];

window.bwT = function(id){
  var dd=document.getElementById('bw'+id);
  if(!dd) return;
  var isO=dd.classList.contains('bw-dop');
  document.querySelectorAll('.bw-dd')
    .forEach(function(d){d.classList.remove('bw-dop');});
  document.querySelectorAll('.bw-db')
    .forEach(function(b){b.classList.remove('bw-ddo');});
  if(!isO){
    dd.classList.add('bw-dop');
    if(dd.previousElementSibling)
      dd.previousElementSibling.classList.add('bw-ddo');
  }
};

document.addEventListener('click',
function(e){
  if(!e.target.closest('.bw-db')&&
     !e.target.closest('.bw-dd')){
    document.querySelectorAll('.bw-dd')
      .forEach(function(d){
        d.classList.remove('bw-dop');});
    document.querySelectorAll('.bw-db')
      .forEach(function(b){
        b.classList.remove('bw-ddo');});
  }
  var w=document.getElementById('bwSW');
  if(w&&!e.target.closest('#bwSW')&&
     !e.target.closest('.bw-si'))
    w.classList.remove('bw-sop');
});

window.bwM = function(){
  var m=document.getElementById('bwMM');
  if(!m) return;
  var o=m.classList.contains('bw-mop');
  m.classList.toggle('bw-mop');
  document.body.style.overflow=o?'':'hidden';
};

window.bwS = function(){
  var w=document.getElementById('bwSW');
  if(!w) return;
  w.classList.toggle('bw-sop');
  if(w.classList.contains('bw-sop')){
    var si = document.getElementById('bwSI');
    if(si) si.focus();
  }
};

window.bwDS = function(q){
  var r=document.getElementById('bwSR');
  if(!r) return;
  if(!q||q.length<2){
    r.classList.remove('bw-srop');return;}
  var ql=q.toLowerCase();
  var h=window.bwSD.filter(function(i){
    return i.t.toLowerCase().includes(ql)||
           i.k.toLowerCase().includes(ql);
  }).slice(0,7);
  if(h.length===0){
    r.innerHTML='<div class="bw-sre">'+
      'कोई result नहीं। '+
      '<a href="https://wa.me/919835102324"'+
      ' target="_blank">WhatsApp पर पूछें →</a>'+
      '</div>';
  }else{
    r.innerHTML=h.map(function(x){
      return '<a href="'+x.u+
        '" class="bw-sri">🔍 '+x.t+'</a>';
    }).join('');
  }
  r.classList.add('bw-srop');
};

function initNav(){
  var existing = document.querySelector('.bw-header,#bwH');
  if(existing){
    existing.remove();
  }
  var temp = document.createElement('div');
  temp.innerHTML = NAV_HTML;
  var refNode = document.body.firstChild;
  while(temp.firstChild){
    document.body.insertBefore(temp.firstChild, refNode);
  }

  document.querySelectorAll('a[href]').forEach(function(a){
    var h=a.href||'';
    var ext=['bihar.gov.in','nic.in',
      'bhulagan','emapi.bihar',
      'nibandhan.bihar','pmayg',
      'bankbazaar','sbi.co.in',
      'pmaymis','wa.me','hdfc.com','zeratech.io'];
    var isE=ext.some(function(d){
      return h.includes(d);});
    if(isE){
      a.setAttribute('target','_blank');
      a.setAttribute('rel',
        'noopener noreferrer');
    }
  });

  if(window.innerWidth<600){
    var mbarEl = document.querySelector('.bw-mbar');
    var mbarH = mbarEl ? mbarEl.getBoundingClientRect().height : 80;
    document.body.style.paddingBottom = Math.ceil(mbarH + 8) + 'px';
  }

  var ft = document.querySelector('footer');
  if (ft && !document.getElementById('zera-credit-ft')) {
    var cDiv = document.createElement('div');
    cDiv.id = 'zera-credit-ft';
    cDiv.innerHTML = '<div style="text-align:center;padding:10px 0 0;border-top:1px solid rgba(255,255,255,0.1);margin-top:12px;font-size:11px;color:rgba(255,255,255,0.5);font-family:\'Poppins\',sans-serif;">A <strong style="color:rgba(255,255,255,0.7);">Zera Technologies</strong> Property | Designed &amp; Developed by <a href="https://zeratech.io/" target="_blank" style="color:#FFCC00;text-decoration:none;font-weight:600;">Zera Technologies</a></div>';
    ft.appendChild(cDiv.firstElementChild);
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}

})();
