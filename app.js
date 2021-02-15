const earningsBullshits = [
  /\B[бБ]ольш\W{2,4} +деньг\W{1,3}\B/,
  /\Bработа\W{1,4}где хо\W{2,7}\B/,
  /\B[пП]рямо сейчас\B/,
  /\B[рР]абота\W{0,3} ["«]на дядю["»]\B/,
  /\Bгорба\W{2,6}с[яь]\B/,
  /\B[вВ] любое время\B/,
  /\Bвсего +\d{1,3} +(минут|час)\D{0,3} в (день|неделю)\B/,
  /\B[шШ]кол\W\B/,
  /\B[пП]ассивн\W{1,3}\B/,
  /\B[нН]а +Бали\B/,
  /\BТаиланд\W{0,2}\B/,
  /\B[сС]истем\W{1,3} выгодно\B/,
  /\B[рР]абот\W{1,3} в декрете\B/,
  /\Bвсему +науч\W{1,3}\B/,
  /\Bуста\W{1,2} +\W+ +в +офисе\B/,
  /\Bофисн\W{2,3} +планктон\W{0,2}\B/,
  /\Bмой +доход +составил\B/,
  /\Bменя +часто +спрашивают\B/,
  /\Bмногие +спрашивают\B/,
  /\Bработать +н[ие] +дня\B/,
  /\Bденежн\W{2,3} +поток\W?\B/,
  /\Bденежн\W{2,3} +энерги\W\B/,
  /\Bне +соль[ею]\W{3,5}\B/,
  /\Bна +нов\W{2,3} +уров\W{2,3}\B/,
  /\Bдоход +не +ограничен\B/,
  /\Bнеограниченн\W{2,3} +доход\B/,
  /\Bидти +к +своей +цели\B/,
  /\Bвс[её], +о +ч[её]м +(ты|вы) +мечтал\W\B/,
  /\Bсброс\W{1,4} +оковы\B/,
  /\Bофисн\W{2,4} +рабств\W\B/,
];

const politicalBullshits = [
  /\Bвраг\W{0,3}\B/,
  /\Bвойн\W{1,3}\B/,
  /\Bбор\W\W?с[ья]\B/,
  /\Bмраз\W{0,3}\B/,
  /\Bгад\W{0,3}\B/,
  /\Bурод\W{0,3}\B/,
  /\Bпредател\W{0,3}\B/,
  /\Bиуд\W{0,3}\B/,
  /\Bпаразит\W{0,3}\B/,
  /\Bагент\W{0,3}\B/,
  /\Bметодичк\W{0,3}\B/,
  /\Bпо +указке\B/,
  /\Bвероломн\W{0,3}\B/,
  /\Bопуска\W{1,3}с[яь]\B/,
  /\Bпровальн\W{0,3}\B/,
  /\Bунизительн\W{0,3}\B/,
  /\Bчудовищн\W{0,3}\B/,
  /\Bварварск\W{0,3}\B/,
  /\Bзверск\W{0,3}\B/,
  /\B(об)?нищ\W{2,6}\B/,
  /\B(на|с) +колен\W{0,3}\B/,
  /\Bдави\W{2,4}\B/,
  /\Bподавля\W{1,4}\B/,
  /\Bвырва\W{1,4}\B/,
  /\Bуничтожи\W{1,4}\B/,
  /\Bрастопта\W{1,4}\B/,
  /\Bпроглоти\W{1,4}\B/,
  /\Bподстави\W{1,4}\B/,
  /\Bдоби\W{1,4}с[ья]\B/,
  /\Bдоби\W{1,4}\B/,
  /\Bнеудивительно\B/,
  /\Bв +то +время +как\B/,
  /\Bразумеетс[ья]\B/,
  /\B(мы|каждый) +(из +нас)? +долж\W{2,4}\B/,
  /\B(мы|каждый) +(из +нас)? +обяза\W{1,3}\B/,
  /\Bостава\W{1,4}с[ья] +в +стороне\B/,
  /\Bвсе +только +начинаетс[ья]\B/,
  /\Bсу\W{1,4} +котор\W{2,4}\B/,
  /\Bединственн\W{2,4}\B/,
  /\Bв +упор +не +виде\W{1,4}\B/,
  /\Bзакрыва\W{1,4} +глаза\B/,
  /\Bжестк\W{1,4}\B/,
  /\Bбескомпромиссн\W{1,4}\B/,
  /\Bбесцеремонн\W{1,4}\B/,
  /\Bмощн\W{1,4}\B/,
  /\Bрезонанс\W{0,4}\B/,
  /\Bэпопе\W{1,4}\B/,
  /\Bгеро\W{1,4}\B/,
  /\Bгероическ\W{1,4}\B/,
  /\B(с|на) +колен\W{0,4}\B/,
  /\Bподвиг\W{0,4}\B/,
  /\Bдолг\W{0,4}\B/,
  /\Bсвященн\W{1,4}\B/,
  /\Bдля +кажд\W{1,4}\B/,
  /\Bбезучастн\W{1,4}\B/,
  /\Bскорее +всего\B/,
  /\Bвероятнее +всего\B/,
  /\Bперспектив\W{0,3} +развития\B/,
  /\Bмы +как +страна\B/,
  /\Bнарод\W{0,2}\B/,
  /\Bобществ\W{1,4}\B/,
  /\Bдеградац\W{2,4}\B/,
  /\Bразвал\W{0,4}\B/,
  /\Bбез +лишнего +шума\B/,
  /\Bтак +называем\W{0,4}\B/,
  /\Bдно \B/,
  /\Bпросто\B/,
  /\Bпросто-напросто\B/,
  /\Bсотни +тысяч\B/,
  /\Bмиллионы\B/,
  /\Bдесятки +миллионов\B/,
  /\Bбудущ\W{2,4}\B/,
  /\Bпобед\W{1,4}\B/,
  /\Bсветл\W{2,4}\B/,
  /\Bскорее +всего\B/,
  /\Bвсе +стороны +(\W{5,15} )?жизни\B/,
  /\Bвсеобщ\W{2,4}\B/,
  /\Bвсе\B/,
  /\Bкаждый\B/,
  /\Bразвити\W{1,4} +страны\B/,
  /\Bнедаром\B/,
  /\Bмноголетн\W{2,4}\B/,
  /\Bмы +как +страна\B/,
  /\Bотсутствие +какого-либо\B/,
  /\Bкаки\W{1,3}-либо +перспектив\W{0,4}\B/,
  /\Bдостойн\W{2,4} +рол\W{1,3}\B/,
  /\Bдостоинств\W{1,4}\B/,
  /\Bгордос\W{1,4}\B/,
  /\Bсвобод\W{0,4}\B/,
  /\Bтотальн\W{1,4}\B/,
  /\Bмассовое +(\W{5,15} )?сознание\B/,
  /\Bпо-видимому\B/,
  /\Bнет +даже +подобия\B/,
  /\Bочевидно\B/,
];

const start = () => {
  const style = document.createElement("style");

  style.innerHTML = ` 
    .highlight {
          background: #4CFF00;
        }
  `;

  document.head.appendChild(style);

  const highlightText = (regExp, originalHtml) => {
    const newHtml = originalHtml.replace(new RegExp(regExp, "gi"), (match) => {
      return '<span class="highlight">' + match + "</span>";
    });

    return newHtml;
  };

  const highlightPropaganda = (tagName) => {
    const tags = document.getElementsByTagName(tagName);

    Object.values(tags).forEach((tag) => {
      for (var i = 0; i < earningsBullshits.length; i++) {
        const text = tag.innerHTML;
        tag.innerHTML = highlightText(earningsBullshits[i], text);
      }

      for (let i = 0; i < politicalBullshits.length; i++) {
        const text = tag.innerHTML;
        tag.innerHTML = highlightText(politicalBullshits[i], text);
      }
    });
  };

  highlightPropaganda("p");
};

if (document.readyState === "interactive") {
  start();
} else {
  document.addEventListener("DOMContentLoaded", start);
}
