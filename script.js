const quotes = [
 {am:"ጥበብ በልምድ ትገኛለች።",en:"Wisdom grows through experience.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"አንድ እጅ አያጨበጭብም።",en:"One hand cannot clap alone.",cat:"life",type:"ባህላዊ ምሳሌ"},
 {am:"ቀስ ብሎ የሚሄድ ሩቅ ይደርሳል።",en:"The one who walks steadily reaches far.",cat:"patience",type:"ምሳሌያዊ አነጋገር"},
 {am:"ዛሬ የተዘራው ነገ ይበቅላል።",en:"What is planted today may grow tomorrow.",cat:"work",type:"የጥበብ ቃል"},
 {am:"ከስህተት የማይማር ስህተቱን ይደግማል።",en:"Those who do not learn from mistakes repeat them.",cat:"wisdom",type:"የሕይወት ትምህርት"},
 {am:"ትዕግሥት መራራ ናት፤ ፍሬዋ ግን ጣፋጭ ነው።",en:"Patience is bitter, but its fruit is sweet.",cat:"patience",type:"የጥበብ ቃል"},
 {am:"በአንድነት ያለ ኃይል በመለያየት አይገኝም።",en:"The strength found in unity is not found in division.",cat:"life",type:"የጥበብ ቃል"},
 {am:"የሚያውቅ ይጠይቃል፤ የማያውቅ ግን አይጠይቅም።",en:"A wise learner asks questions.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"የወደቀ ሁሉ አይሸነፍም፤ የተነሳ ግን ይቀጥላል።",en:"Falling is not defeat; rising means continuing.",cat:"motivation",type:"አበረታች ቃል"},
 {am:"ትንሽ ትንሽ ተራራ ይከመራል።",en:"Little by little, a mountain is built.",cat:"work",type:"ምሳሌያዊ አነጋገር"},
 {am:"ቃል ከአፍ ከወጣ በኋላ መመለስ አይቻልም።",en:"Once words leave the mouth, they cannot be taken back.",cat:"wisdom",type:"የሕይወት ትምህርት"},
 {am:"የሌላውን መንገድ ከመፍረድህ በፊት ጫማውን ሞክር።",en:"Before judging another's path, try their shoes.",cat:"life",type:"የጥበብ ቃል"},
 {am:"የሚሠራ እጅ ባዶ አይቀርም።",en:"A working hand does not remain empty.",cat:"work",type:"አበረታች ቃል"},
 {am:"የዛፉ ፍሬ ከሥሩ ይመስላል።",en:"The fruit of a tree reflects its roots.",cat:"life",type:"ምሳሌያዊ አነጋገር"},
 {am:"ከመናገር በፊት አስብ፤ ከመሥራት በፊት አቅድ።",en:"Think before speaking; plan before acting.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"በጋራ የተሸከሙት ሸክም ይቀላል።",en:"A burden carried together feels lighter.",cat:"life",type:"የጥበብ ቃል"},
 {am:"ተስፋ የጨለማ ቀን መብራት ናት።",en:"Hope is a lamp on a dark day.",cat:"motivation",type:"አበረታች ቃል"},
 {am:"የሚያዳምጥ ሰው ብዙ ይማራል።",en:"The one who listens learns much.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"የወንዝ ጥልቀት በገጹ አይታወቅም።",en:"A river's depth is not known from its surface.",cat:"wisdom",type:"ምሳሌያዊ አነጋገር"},
 {am:"የሚፈልግ መንገድ ያገኛል።",en:"Those who seek find a way.",cat:"motivation",type:"አበረታች ቃል"},
 {am:"የተማረ ሰው በሁሉም ቦታ ቤት ያገኛል።",en:"A learned person finds a home everywhere.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"የሰው ውበት በፊቱ ሳይሆን በሥራው ይታያል።",en:"A person's beauty is seen in their actions, not just their face.",cat:"life",type:"የሕይወት ትምህርት"},
 {am:"ከትንሽ ጀምር፤ ትልቅ ነገር ይገነባል።",en:"Start small; great things can be built.",cat:"work",type:"አበረታች ቃል"},
 {am:"የታገሰ ያገኛል።",en:"Those who persevere will find their reward.",cat:"patience",type:"የጥበብ ቃል"},
 {am:"የሌላውን ችግር ማየት ርኅራኄን ያስተምራል።",en:"Seeing another's struggle teaches compassion.",cat:"life",type:"የሕይወት ትምህርት"},
 {am:"ዕውቀት ሲካፈል ይበዛል።",en:"Knowledge grows when it is shared.",cat:"wisdom",type:"የጥበብ ቃል"},
 {am:"የዛሬን ሥራ ለነገ አታስቀምጥ።",en:"Do not leave today's work for tomorrow.",cat:"work",type:"ምክር"},
 {am:"ችግር መጨረሻ ሳይሆን የመማር መጀመሪያ ሊሆን ይችላል።",en:"A challenge can be the beginning of learning, not the end.",cat:"motivation",type:"አበረታች ቃል"},
 {am:"ሰው በቃሉ ይታወቃል፤ በተግባሩ ይመዘናል።",en:"A person is known by their words and measured by their actions.",cat:"life",type:"የሕይወት ትምህርት"},
 {am:"ጥሩ ጓደኛ በመንገድ ላይ የሚያበራ ብርሃን ነው።",en:"A good friend is a light along the road.",cat:"life",type:"የጥበብ ቃል"}
];
const $ = id => document.getElementById(id);
let current = 0, category = "all", language = "am", lastIndex = -1;
let favorites = JSON.parse(localStorage.getItem("ethiopianWisdomFavorites") || "[]");
let dark = localStorage.getItem("ethiopianWisdomTheme") === "dark";
const catLabels = {all:"ሁሉም",wisdom:"ጥበብ",patience:"ትዕግሥት",work:"ሥራ",life:"ሕይወት",motivation:"ተነሳሽነት"};
function filtered(){return quotes.map((q,i)=>({...q,index:i})).filter(q=>category==="all"||q.cat===category)}
function chooseQuote(){
 const list=filtered(); if(!list.length)return;
 let pick=list[Math.floor(Math.random()*list.length)];
 if(list.length>1) while(pick.index===lastIndex) pick=list[Math.floor(Math.random()*list.length)];
 current=pick.index;lastIndex=current;render();
}
function render(){
 const q=quotes[current];
 $("quote-text").textContent=language==="am"?q.am:q.en;
 $("quote-translation").textContent=language==="am"?q.en:q.am;
 $("quote-type").textContent=q.type;
 $("quote-source").textContent=language==="am"?"የኢትዮጵያ ጥበብ":"Ethiopian inspiration";
 $("quote-count").textContent=String(filtered().findIndex(x=>x.index===current)+1).padStart(2,"0")+" / "+String(filtered().length).padStart(2,"0");
 $("favorite-btn").textContent=favorites.includes(current)?"♥":"♡";
 $("favorite-btn").classList.toggle("is-favorite",favorites.includes(current));
 $("favorite-btn").setAttribute("aria-label",favorites.includes(current)?"Remove from favorites":"Add to favorites");
 $("card-label").textContent=language==="am"?"የዛሬ ጥበብ":"TODAY'S WISDOM";
 $("new-label").textContent=language==="am"?"ሌላ ጥቅስ":"New Quote";
 document.documentElement.lang=language;
 $("language-toggle").textContent=language==="am"?"EN":"አማ";
 $("hero-title").textContent=language==="am"?"ትንሽ ጥበብ፣ ትልቅ ትርጉም።":"Small wisdom. Big meaning.";
 $("hero-subtitle").textContent=language==="am"?"የኢትዮጵያ ምሳሌያዊ አነጋገሮችና አበረታች ቃላት።":"Ethiopian proverbs and uplifting words for everyday life.";
 $("saved-title").textContent=language==="am"?"የተወደዱ ጥቅሶች":"Saved favorites";
 $("saved-description").textContent=language==="am"?"የሚወዷቸውን ጥቅሶች ያስቀምጡ።":"Keep the words that speak to you.";
 $("daily-title").textContent=language==="am"?"የዕለቱ ልምምድ":"Daily practice";
 $("daily-description").textContent=language==="am"?"አንድ ጥበብ ይምረጡና ዛሬ በተግባር ይጠቀሙበት።":"Choose one thought and put it into practice today.";
 document.querySelectorAll(".filter").forEach(b=>{b.textContent=language==="am"?catLabels[b.dataset.category]:({all:"All",wisdom:"Wisdom",patience:"Patience",work:"Work",life:"Life",motivation:"Motivation"})[b.dataset.category]});
}
function toast(message){$("toast").textContent=message;clearTimeout(toast.timer);toast.timer=setTimeout(()=>$("toast").textContent="",2200)}
$("new-quote").addEventListener("click",chooseQuote);
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{category=b.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));chooseQuote()}));
$("favorite-btn").addEventListener("click",()=>{favorites=favorites.includes(current)?favorites.filter(i=>i!==current):[...favorites,current];localStorage.setItem("ethiopianWisdomFavorites",JSON.stringify(favorites));render();if(!$("favorites-panel").classList.contains("hidden"))renderFavorites();toast(favorites.includes(current)?"Added to favorites":"Removed from favorites")});
$("copy-btn").addEventListener("click",async()=>{const q=quotes[current];const text=`${q.am}\n${q.en}\n— ${q.type}`;try{await navigator.clipboard.writeText(text);toast("Quote copied!")}catch(e){toast(text)}});
$("share-btn").addEventListener("click",async()=>{const q=quotes[current],text=`${q.am}\n${q.en}\n\nየጥበብ ቃል | Ethiopian Wisdom`;if(navigator.share){try{await navigator.share({title:"የጥበብ ቃል",text})}catch(e){}}else{try{await navigator.clipboard.writeText(text);toast("Quote copied — ready to share!")}catch(e){toast("Sharing is not available on this browser.")}}});
$("language-toggle").addEventListener("click",()=>{language=language==="am"?"en":"am";render()});
$("theme-toggle").addEventListener("click",()=>{dark=!dark;document.body.classList.toggle("dark",dark);$("theme-toggle").textContent=dark?"☀":"☾";localStorage.setItem("ethiopianWisdomTheme",dark?"dark":"light")});
function renderFavorites(){
 const list=$("favorites-list");list.innerHTML="";
 if(!favorites.length){list.innerHTML=`<p class="translation">${language==="am"?"እስካሁን ምንም ጥቅስ አልተቀመጠም።":"No saved quotes yet. Tap ♡ to save one."}</p>`;return}
 favorites.forEach(i=>{const q=quotes[i],row=document.createElement("div");row.className="favorite-item";const p=document.createElement("p");p.textContent=language==="am"?q.am:q.en;const open=document.createElement("button");open.textContent=language==="am"?"ክፈት":"Open";open.onclick=()=>{current=i;category="all";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.category==="all"));render();$("favorites-panel").classList.add("hidden");window.scrollTo({top:0,behavior:"smooth"})};const remove=document.createElement("button");remove.textContent="♥";remove.setAttribute("aria-label","Remove favorite");remove.onclick=()=>{favorites=favorites.filter(x=>x!==i);localStorage.setItem("ethiopianWisdomFavorites",JSON.stringify(favorites));renderFavorites();render()};row.append(p,open,remove);list.append(row)});
}
$("show-favorites").addEventListener("click",()=>{$("favorites-panel").classList.remove("hidden");renderFavorites();$("favorites-panel").scrollIntoView({behavior:"smooth",block:"nearest"})});
$("close-favorites").addEventListener("click",()=>$("favorites-panel").classList.add("hidden"));
if(dark){document.body.classList.add("dark");$("theme-toggle").textContent="☀"}
chooseQuote();
