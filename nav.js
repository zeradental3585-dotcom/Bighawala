(function() {

// Sitewide Organization + WebSite structured data (schema.org), injected once per page load.
// Uses only real, verifiable business details (address/email from contact.html) — no fabricated data.
try {
  if (!document.getElementById('bw-org-schema')) {
    var siteSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.bighawala.com/#organization",
          "name": "BighaWala.com",
          "url": "https://www.bighawala.com/",
          "logo": "https://www.bighawala.com/og-image.png",
          "email": "support@bighawala.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Arar Ghat, Bishunpur Arar",
            "addressLocality": "Madhepura",
            "addressRegion": "Bihar",
            "postalCode": "852115",
            "addressCountry": "IN"
          },
          "parentOrganization": {
            "@type": "Organization",
            "name": "Zera Technologies",
            "url": "https://zeratech.io/"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.bighawala.com/#website",
          "url": "https://www.bighawala.com/",
          "name": "BighaWala.com",
          "inLanguage": "hi",
          "publisher": { "@id": "https://www.bighawala.com/#organization" }
        }
      ]
    };
    var schemaTag = document.createElement('script');
    schemaTag.type = 'application/ld+json';
    schemaTag.id = 'bw-org-schema';
    schemaTag.text = JSON.stringify(siteSchema);
    document.head.appendChild(schemaTag);
  }
} catch (e) {
  // structured data is progressive enhancement — never block page rendering
}

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

.bw-cookie-notice{
  position:relative;width:100%;
  background:#0f172a;color:rgba(255,255,255,0.9);
  padding:10px 16px;
  display:flex;flex-wrap:wrap;
  align-items:center;justify-content:center;gap:12px;
  font-family:'Poppins',sans-serif;
}
.bw-cookie-text{
  font-size:11.5px;line-height:1.5;
  max-width:640px;text-align:center;
  font-weight:500;
}
.bw-cookie-text a{color:#FFCC00;text-decoration:underline;font-weight:700;}
.bw-cookie-btn{
  background:#2E7D32;color:#fff;border:none;
  padding:8px 18px;border-radius:10px;
  font-weight:700;font-size:12px;
  cursor:pointer;white-space:nowrap;
  font-family:'Poppins',sans-serif;
}
.bw-cookie-btn:hover{background:#256428;}

.bw-share-wrap{
  position:fixed;right:16px;bottom:24px;z-index:9999;
  display:flex;flex-direction:column;align-items:flex-end;gap:10px;
  pointer-events:none; /* the wrapper box can extend past what's visible (e.g. the
    collapsed tray) — only opt specific visible children back in below, so this
    never silently swallows clicks meant for page content underneath it */
}
.bw-share-fab{
  width:56px;height:56px;border-radius:50%;
  background:linear-gradient(135deg,#2E7D32,#1B5E20);
  color:#fff;border:none;box-shadow:0 6px 18px rgba(0,0,0,0.3);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;font-size:24px;line-height:1;
  transition:transform 0.2s ease;
  pointer-events:auto;
}
.bw-share-fab:hover{transform:scale(1.06);}
.bw-share-fab:active{transform:scale(0.95);}
.bw-share-tray{
  display:flex;flex-direction:column;align-items:flex-end;gap:8px;
  opacity:0;pointer-events:none;transform:translateY(8px);
  transition:opacity 0.18s ease,transform 0.18s ease;
}
.bw-share-tray.bw-open{opacity:1;pointer-events:auto;transform:translateY(0);}
.bw-share-item{
  display:flex;align-items:center;gap:9px;
  background:#fff;color:#0f172a;border:1px solid rgba(0,0,0,0.08);
  padding:7px 16px 7px 7px;border-radius:999px;
  box-shadow:0 4px 14px rgba(0,0,0,0.2);
  font-weight:700;font-size:12.5px;
  text-decoration:none;cursor:pointer;white-space:nowrap;
  -webkit-tap-highlight-color:transparent;
}
.bw-share-icon{
  width:30px;height:30px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:15px;font-weight:900;color:#fff;flex-shrink:0;
}
.bw-share-wa .bw-share-icon{background:#25D366;}
.bw-share-fb .bw-share-icon{background:#1877F2;}
.bw-share-tg .bw-share-icon{background:#229ED9;}
.bw-share-x .bw-share-icon{background:#111827;}
.bw-share-copy .bw-share-icon{background:#475569;}
.bw-share-toast{
  position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);
  background:#0f172a;color:#fff;padding:11px 20px;border-radius:999px;
  font-weight:700;font-size:13px;
  opacity:0;pointer-events:none;transition:opacity 0.22s ease,transform 0.22s ease;
  z-index:10000;box-shadow:0 6px 20px rgba(0,0,0,0.32);
  white-space:nowrap;
}
.bw-share-toast.bw-show{opacity:1;transform:translate(-50%,0);}
@media(max-width:600px){
  .bw-share-wrap{bottom:84px;right:14px;}
  .bw-share-toast{bottom:104px;}
}

.bw-wa-modal{
  display:none;position:fixed;inset:0;z-index:100000;
  align-items:center;justify-content:center;padding:16px;
  font-family:'Poppins',sans-serif;
}
.bw-wa-modal.bw-wa-open{display:flex;}
.bw-wa-backdrop{
  position:absolute;inset:0;background:rgba(15,23,42,0.72);
  backdrop-filter:blur(2px);
}
.bw-wa-card{
  position:relative;background:#fff;border-radius:22px;
  max-width:380px;width:100%;padding:28px 24px 24px;
  box-shadow:0 20px 60px rgba(0,0,0,0.35);
  text-align:center;
  animation:bwWaPop 0.25s ease;
}
@keyframes bwWaPop{
  from{opacity:0;transform:scale(0.92) translateY(8px);}
  to{opacity:1;transform:scale(1) translateY(0);}
}
.bw-wa-close{
  position:absolute;top:12px;right:12px;
  width:32px;height:32px;border-radius:50%;
  background:#F5F5F5;border:none;cursor:pointer;
  font-size:15px;color:#555;
  display:flex;align-items:center;justify-content:center;
}
.bw-wa-close:hover{background:#E5E5E5;}
.bw-wa-icon{
  width:64px;height:64px;border-radius:50%;
  background:linear-gradient(135deg,#25D366,#128C7E);
  display:flex;align-items:center;justify-content:center;
  font-size:30px;margin:0 auto 14px;
  box-shadow:0 8px 20px rgba(37,211,102,0.35);
}
.bw-wa-title{
  font-size:17.5px;font-weight:800;color:#0f172a;
  margin-bottom:8px;line-height:1.35;
}
.bw-wa-desc{
  font-size:13px;color:#555;line-height:1.6;
  margin-bottom:20px;font-weight:500;
}
.bw-wa-cta{
  display:flex;align-items:center;justify-content:center;gap:8px;
  background:linear-gradient(135deg,#25D366,#1DA851);
  color:#fff;text-decoration:none;
  padding:14px 20px;border-radius:14px;
  font-weight:700;font-size:15px;
  box-shadow:0 8px 20px rgba(37,211,102,0.35);
  transition:transform 0.15s ease;
  margin-bottom:10px;
}
.bw-wa-cta:hover{transform:translateY(-1px);}
.bw-wa-cta-icon{font-size:18px;}
.bw-wa-later{
  background:none;border:none;color:#888;
  font-size:12.5px;font-weight:600;cursor:pointer;
  padding:8px;font-family:'Poppins',sans-serif;
  text-decoration:underline;
}
.bw-wa-later:hover{color:#555;}
@media(max-width:600px){
  .bw-wa-card{padding:24px 20px 20px;}
}

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
      <a href="vanshavali-kaise-banaye.html" style="font-weight:800;color:#2E7D32;">🌳 वंशावली बनाएं (नया)</a>
      <a href="bigha-calculator.html">🧮 Bigha Calculator</a>
      <a href="bigha-to-decimal.html">🔢 Bigha to Decimal</a>
      <a href="zameen-moolyankan.html">🏡 Zameen Moolyankan</a>
      <a href="land-cost-calculator.html">💰 Registry Cost</a>
      <a href="zameen-comparison.html">⚖️ Zameen Compare</a>
      <a href="bihar-land-quiz.html">🎯 Land Quiz</a>
      <a href="document-checker.html">📄 Document Checker</a>
    </div>
  </li>
  <li>
    <button onclick="bwT('g')" class="bw-db">
      Guides <span class="bw-arr">▼</span>
    </button>
    <div class="bw-dd" id="bwg">
      <a href="bihar-jamin-survey.html" style="font-weight:800;color:#C2410C;">🗺️ जमीन सर्वे गाइड (नया)</a>
      <a href="bihar-survey-status-check.html" style="font-weight:800;color:#1D4ED8;">🔍 सर्वे स्टेटस चेक करें</a>
      <a href="vanshavali-kaise-banaye.html" style="font-weight:800;color:#2E7D32;">🌳 वंशावली बनाएं (Free Tool)</a>
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
    </div>
    <div class="bw-mms">
      <div class="bw-mml">Tools</div>
      <a href="vanshavali-kaise-banaye.html" onclick="bwM()" style="font-weight:800;color:#2E7D32;">🌳 वंशावली बनाएं (नया)</a>
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
      <a href="bihar-jamin-survey.html" onclick="bwM()" style="font-weight:800;color:#C2410C;">🗺️ जमीन सर्वे गाइड (नया)</a>
      <a href="bihar-survey-status-check.html" onclick="bwM()" style="font-weight:800;color:#1D4ED8;">🔍 सर्वे स्टेटस चेक करें</a>
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
      <a href="https://whatsapp.com/channel/0029VbD8TVN9sBIDccVcFb0y" target="_blank" rel="noopener noreferrer" onclick="bwM()">📢 WhatsApp Channel Follow करें</a>
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
    <a href="community-qa.html">
      <span>🤝</span><span>Community</span>
    </a>
  </div>
</div>

<div class="bw-cookie-notice" id="bwCookieNotice" style="display:none;">
  <div class="bw-cookie-text">
    🍪 Hum aur hamare partners (jaise Google AdSense) is site par cookies ka istemal karte hain taaki ads dikha sakein aur experience behtar bana sakein.
    <a href="privacy-policy/index.html">Privacy Policy padhein</a>.
  </div>
  <button type="button" class="bw-cookie-btn" id="bwCookieOk">समझ गया</button>
</div>

<div class="bw-share-wrap" id="bwShareWrap">
  <div class="bw-share-tray" id="bwShareTray">
    <a href="#" id="bwShareWA" target="_blank" rel="noopener noreferrer" class="bw-share-item bw-share-wa" aria-label="WhatsApp par share karein">
      <span class="bw-share-icon">💬</span>WhatsApp
    </a>
    <a href="#" id="bwShareFB" target="_blank" rel="noopener noreferrer" class="bw-share-item bw-share-fb" aria-label="Facebook par share karein">
      <span class="bw-share-icon">f</span>Facebook
    </a>
    <a href="#" id="bwShareTG" target="_blank" rel="noopener noreferrer" class="bw-share-item bw-share-tg" aria-label="Telegram par share karein">
      <span class="bw-share-icon">✈</span>Telegram
    </a>
    <a href="#" id="bwShareX" target="_blank" rel="noopener noreferrer" class="bw-share-item bw-share-x" aria-label="X par share karein">
      <span class="bw-share-icon">𝕏</span>X (Twitter)
    </a>
    <button type="button" id="bwShareCopy" class="bw-share-item bw-share-copy" aria-label="Link copy karein">
      <span class="bw-share-icon">🔗</span>Copy Link
    </button>
  </div>
  <button type="button" class="bw-share-fab" id="bwShareFab" aria-label="Is page ko share karein">📤</button>
</div>
<div class="bw-share-toast" id="bwShareToast">Link copy ho gaya! ✅</div>

<div class="bw-wa-modal" id="bwWaModal" role="dialog" aria-modal="true" aria-label="WhatsApp Channel Follow Karein">
  <div class="bw-wa-backdrop" id="bwWaBackdrop"></div>
  <div class="bw-wa-card">
    <button type="button" class="bw-wa-close" id="bwWaClose" aria-label="बंद करें (Close)">✕</button>
    <div class="bw-wa-icon">📢</div>
    <div class="bw-wa-title">हमारा WhatsApp Channel Follow करें!</div>
    <div class="bw-wa-desc">बिहार जमीन सर्वे 2026 की तारीखें, जमीन के रेट, नए सरकारी नियम और जरूरी अपडेट सबसे पहले सीधे WhatsApp पर पाएं — बिल्कुल मुफ्त।</div>
    <a href="https://whatsapp.com/channel/0029VbD8TVN9sBIDccVcFb0y" target="_blank" rel="noopener noreferrer" id="bwWaFollow" class="bw-wa-cta">
      <span class="bw-wa-cta-icon">💬</span> Channel Follow करें
    </a>
    <button type="button" class="bw-wa-later" id="bwWaLater">बाद में</button>
  </div>
</div>
`;

window.bwSD = [
  {t:'Bihar Jamin Survey Guide',k:'survey sarvekshan vanshavali prapatra form 2 form 3 khanapuri',u:'bihar-jamin-survey.html'},
  {t:'Vanshavali Kaise Banaye (Free Tool)',k:'vanshavali banao generator prapatra 3 genealogy family tree',u:'vanshavali-kaise-banaye.html'},
  {t:'Bihar Survey Status Check',k:'survey status check dlrs online khanapuri complaint',u:'bihar-survey-status-check.html'},
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
  {t:'Community Q&A',k:'community sawaal jawab',u:'community-qa.html'},
  {t:'Bihar Land News',k:'news samachar update',u:'bihar-land-news.html'},
  {t:'Bihar Bhumi Portal',k:'portal bhumi sarkari',u:'bihar-bhumi-portal.html'},
  {t:'Kisan Credit Card',k:'kisan credit kcc loan',u:'kisan-credit-card-bihar.html'},
  {t:'PM Awas Yojana',k:'pm awas ghar yojana',u:'pm-awas-yojana-bihar.html'},
  {t:'Patna Land Rate',k:'patna zameen rate',u:'patna-land-rate.html'},
  {t:'Patna Land FAQ (25 Sawaal)',k:'patna registry bigha katha faq sawaal',u:'land-rate-patna.html'},
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

  try {
    var cookieNotice = document.getElementById('bwCookieNotice');
    var cookieOkBtn = document.getElementById('bwCookieOk');
    if (cookieNotice && cookieOkBtn) {
      if (!localStorage.getItem('bw_cookie_ack')) {
        cookieNotice.style.display = 'flex';
      }
      cookieOkBtn.addEventListener('click', function() {
        try { localStorage.setItem('bw_cookie_ack', '1'); } catch (e) {}
        cookieNotice.style.display = 'none';
      });
    }
  } catch (e) {
    // localStorage unavailable (private browsing etc.) — fail silently, no notice shown
  }

  try {
    var waModal = document.getElementById('bwWaModal');
    var waBackdrop = document.getElementById('bwWaBackdrop');
    var waClose = document.getElementById('bwWaClose');
    var waLater = document.getElementById('bwWaLater');
    var waFollow = document.getElementById('bwWaFollow');
    if (waModal) {
      var waTrack = function (action) {
        try { if (typeof gtag === 'function') { gtag('event', action); } } catch (e2) {}
      };

      // How many times we've ever shown this + when the last one was —
      // lets us back off instead of nagging on every single page view.
      var waAttempts = parseInt(localStorage.getItem('bw_wa_channel_attempts') || '0', 10);
      var waLastShown = parseInt(localStorage.getItem('bw_wa_channel_last_shown') || '0', 10);
      var WA_MAX_ATTEMPTS = 3;
      // Each retry waits longer than the last, and only fires at a moment
      // the visitor is more likely to say yes — see trigger logic below.
      var WA_COOLDOWN_MS = [0, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000];

      var waShow = function () {
        waModal.classList.add('bw-wa-open');
        waAttempts += 1;
        try {
          localStorage.setItem('bw_wa_channel_attempts', String(waAttempts));
          localStorage.setItem('bw_wa_channel_last_shown', String(Date.now()));
        } catch (e2) {}
        waTrack('whatsapp_channel_shown_attempt_' + waAttempts);
      };

      var waDismiss = function (reason) {
        waModal.classList.remove('bw-wa-open');
        if (reason === 'followed') {
          try { localStorage.setItem('bw_wa_channel_followed', '1'); } catch (e2) {}
        }
        waTrack('whatsapp_channel_' + reason);
      };

      if (waClose) waClose.addEventListener('click', function () { waDismiss('dismissed'); });
      if (waBackdrop) waBackdrop.addEventListener('click', function () { waDismiss('dismissed'); });
      if (waLater) waLater.addEventListener('click', function () { waDismiss('dismissed'); });
      if (waFollow) waFollow.addEventListener('click', function () { waDismiss('followed'); });

      var alreadyFollowed = !!localStorage.getItem('bw_wa_channel_followed');
      var underAttemptCap = waAttempts < WA_MAX_ATTEMPTS;
      var cooldownDone = (Date.now() - waLastShown) >= (WA_COOLDOWN_MS[waAttempts] || 0);

      if (!alreadyFollowed && underAttemptCap && cooldownDone) {
        if (waAttempts === 0) {
          // First-ever visit: surface it quickly so every new visitor sees it.
          setTimeout(waShow, 1200);
        } else {
          // Retries earn their spot at a higher-intent moment instead of
          // interrupting again on arrival: when the visitor is about to
          // leave (mouse heads for the top of the screen), or — since that
          // signal doesn't exist on mobile — after they've stuck around
          // reading for a while. Whichever happens first wins, once.
          var waRetryFired = false;
          var waFireRetry = function () {
            if (waRetryFired) return;
            // Don't stack on top of this page's own exit-intent popup if
            // it happens to be open at the same moment.
            var otherExit = document.getElementById('exit-intent-modal');
            if (otherExit && !otherExit.classList.contains('hidden')) return;
            waRetryFired = true;
            waShow();
          };
          document.addEventListener('mouseleave', function (e) {
            if (e.clientY < 10) waFireRetry();
          });
          setTimeout(waFireRetry, 20000);
        }
      }
    }
  } catch (e) {
    // WhatsApp channel prompt is progressive enhancement — never block page rendering
  }

  try { bwInitShare(); } catch (e) { /* share widget is progressive enhancement */ }
}

function bwInitShare(){
  var fab = document.getElementById('bwShareFab');
  var tray = document.getElementById('bwShareTray');
  var toast = document.getElementById('bwShareToast');
  if (!fab || !tray) return;

  var canon = document.querySelector('link[rel="canonical"]');
  var shareUrl = canon ? canon.href : window.location.href;
  var shareTitle = document.title || 'BighaWala.com';
  var shareText = shareTitle + ' — ' + shareUrl;

  var waLink = document.getElementById('bwShareWA');
  var fbLink = document.getElementById('bwShareFB');
  var tgLink = document.getElementById('bwShareTG');
  var xLink = document.getElementById('bwShareX');
  var copyBtn = document.getElementById('bwShareCopy');

  if (waLink) waLink.href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
  if (fbLink) fbLink.href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl);
  if (tgLink) tgLink.href = 'https://t.me/share/url?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(shareTitle);
  if (xLink) xLink.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl);

  // GA4 recommended "share" event — lets Analytics report which pages get
  // shared and on which platform (method), via Reports > Engagement > Events.
  function trackShare(method) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'share', {
          method: method,
          content_type: 'page',
          item_id: shareUrl
        });
      }
    } catch (e) { /* analytics is never allowed to break sharing */ }
  }

  if (waLink) waLink.addEventListener('click', function () { trackShare('WhatsApp'); });
  if (fbLink) fbLink.addEventListener('click', function () { trackShare('Facebook'); });
  if (tgLink) tgLink.addEventListener('click', function () { trackShare('Telegram'); });
  if (xLink) xLink.addEventListener('click', function () { trackShare('X'); });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('bw-show');
    setTimeout(function () { toast.classList.remove('bw-show'); }, 2200);
  }

  function copyFallback() {
    try {
      var ta = document.createElement('textarea');
      ta.value = shareUrl;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Link copy ho gaya! ✅');
      trackShare('Copy Link');
    } catch (e) {
      showToast('Copy nahi ho paya — link manually copy karein');
    }
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () {
          showToast('Link copy ho gaya! ✅');
          trackShare('Copy Link');
        }).catch(copyFallback);
      } else {
        copyFallback();
      }
      tray.classList.remove('bw-open');
    });
  }

  fab.addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({ title: shareTitle, url: shareUrl }).then(function () {
        trackShare('Native Share Sheet');
      }).catch(function () {});
    } else {
      tray.classList.toggle('bw-open');
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#bwShareWrap')) {
      tray.classList.remove('bw-open');
    }
  });
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}

})();
