import testImage from '../../image/test1.jpg';

import image_1006_1 from '../../image/1006-1.jpg';
import image_1006_4 from '../../image/1006-4.jpg';
import image_1006_7 from '../../image/1006-7.jpg';
import image_1006_14 from '../../image/1006-14.jpg';
import image_1006_18 from '../../image/1006-18.jpg';

const tasks = [
  {
    text: 'На дитячій каруселі є \\(19\\) місць для катання: човни, літаки та машинки (див. рисунок). Микита навмання обирає собі місце на каруселі. Визначте ймовірність того, що він сяде на машинку.<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{5}{19}\\)', image: null },
      { text: '\\(\\frac{5}{14}\\)', image: null },
      { text: '\\(\\frac{14}{19}\\)', image: null },
      { text: '\\(\\frac{4}{15}\\)', image: null },
      { text: '\\(\\frac{15}{19}\\)', image: null }
    ],
    variantImage: image_1006_1
  },
  {
    text: 'Укажіть многогранник, що має одну грань основи та чотири бічні грані.<br><br>',
    image: null,
    variants: [
      { text: 'трикутна призма', image: null },
      { text: 'чотирикутна призма ', image: null },
      { text: 'п’ятикутна призма ', image: null },
      { text: 'трикутна піраміда ', image: null },
      { text: 'чотирикутна піраміда ', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(|1 - 4 \\cdot 2,5| =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-9\\)', image: null },
      { text: '\\(11\\)', image: null },
      { text: '\\(7,5\\)', image: null },
      { text: '\\(9\\)', image: null },
      { text: '\\(-11\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено план парку, де в точці \\(O\\) розташовано фонтан, а від нього проведено доріжки \\(OA\\), \\(OB\\) і \\(OC\\) так, що \\(OA\\) ⊥ \\(OB\\), \\(\\angle COA\\) = \\(\\angle COB\\) = \\(\\alpha\\). Визначте градусну міру кута \\(\\alpha\\).',
    image: image_1006_4,
    variants: [
      { text: '\\(145^\\circ\\)', image: null },
      { text: '\\(125^\\circ\\)', image: null },
      { text: '\\(135^\\circ\\)', image: null },
      { text: '\\(90^\\circ\\)', image: null },
      { text: '\\(150^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(0,5x = \\frac{1}{4}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(2\\)', image: null },
      { text: '\\(\\frac{1}{2}\\)', image: null },
      { text: '\\(8\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(\\frac{1}{8}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В основі чотирикутної піраміди лежить прямокутник зі сторонами \\(6\\) \\(см\\) та \\(8\\) \\(см\\), а висота піраміди дорівнює діагоналі основи. Знайдіть об\'єм піраміди.<br><br>',
    image: null,
    variants: [
      { text: '\\(240\\) \\(см^3\\)', image: null },
      { text: '\\(\\frac{280}{3}\\) \\(см^3\\)', image: null },
      { text: '\\(480\\) \\(см^3\\)', image: null },
      { text: '\\(280\\) \\(см^3\\)', image: null },
      { text: '\\(160\\) \\(см^3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутній системі координат xy зображено п\'ять точок: \\(O\\), \\(K\\), \\(L\\), \\(M\\) та \\(P\\). Укажіть точку, через яку \\(може\\) проходити графік функції \\(y = -\\frac{3}{x}\\).',
    image: image_1006_7,
    variants: [
      { text: '\\(K\\)', image: null },
      { text: '\\(L\\)', image: null },
      { text: '\\(M\\)', image: null },
      { text: '\\(O\\)', image: null },
      { text: '\\(P\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Запишіть число \\(89\\) млн \\(530\\) тис. у стандартному вигляді.<br><br>',
    image: null,
    variants: [
      { text: '\\(8953 \\cdot 10^4\\)', image: null },
      { text: '\\(8,953 \\cdot 10^{-7}\\)', image: null },
      { text: '\\(8,953 \\cdot 10^7\\)', image: null },
      { text: '\\(89,53 \\cdot 10^6\\)', image: null },
      { text: '\\(895,3 \\cdot 10^5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Будь-яка хорда кола більша за радіус цього кола.<br>II. Кінці діаметра ділять коло на дві рівні частини.<br>III. Рівні хорди кола стягують рівні дуги.<br><br>',
    image: null,
    variants: [
      { text: 'лише II', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\((0,1)^{x + 2} < 0,1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-1; +\\infty)\\)', image: null },
      { text: '\\((3; +\\infty)\\)', image: null },
      { text: '\\((-2; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; 3)\\)', image: null },
      { text: '\\((-\\infty; -1)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розкладіть на множники \\(x^2 - 5x - 6\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((x - 1)(x + 6)\\)', image: null },
      { text: '\\((x - 2)(x + 3)\\)', image: null },
      { text: '\\((x + 1)(x - 6)\\)', image: null },
      { text: '\\((x + 2)(x - 3)\\)', image: null },
      { text: '\\((x - 1)(x - 6)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У геометричній прогресії \\((b_n)\\) перший член \\(b_1 = 0,4\\), знаменник \\(q = 3\\). Укажіть номер члена цієї прогресії, що належить проміжку (\\(10\\); \\(20\\)).<br><br>',
    image: null,
    variants: [
      { text: '\\(1\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{\\cos(540^\\circ - \\alpha)}{\\sin \\alpha} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-1\\)', image: null },
      { text: '\\(-\\frac{1}{\\tan \\alpha}\\)', image: null },
      { text: '\\(-\\tan \\alpha\\)', image: null },
      { text: '\\(\\frac{1}{\\tan \\alpha}\\)', image: null },
      { text: '\\(1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На більшій основі \\(AD\\) рівнобічної трапеції ABCD вибрано точку \\(O\\) так, що \\(BO\\) || \\(CD\\), \\(AO\\) = \\(OD\\) (див. рисунок). \\(AD\\) = \\(12\\), \\(\\angle BAD = \\alpha\\). Знайдіть площу цієї трапеції.',
    image: image_1006_14,
    variants: [
      { text: '\\(\\frac{27}{\\tan \\alpha}\\)', image: null },
      { text: '\\(27 \\sin \\alpha\\)', image: null },
      { text: '\\(54 \\tan \\alpha\\)', image: null },
      { text: '\\(27 \\tan \\alpha\\)', image: null },
      { text: '\\(\\frac{27}{\\sin \\alpha}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(\\log_3 (2x + 1) = 3\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-13; -8]\\)', image: null },
      { text: '\\((-8; 0]\\)', image: null },
      { text: '\\((0; 8]\\)', image: null },
      { text: '\\((8; 13]\\)', image: null },
      { text: '\\((13; 26)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та проміжком (А – Д), якому належить значення цього виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Проміжок\\)<br><br>',
    leftOptions: [
      { text: '\\(\\sqrt{2} \\cdot \\sqrt{18}\\)' },
      { text: '\\(|\\sqrt{2} - 2|\\)' },
      { text: '\\(\\log_{\\sqrt{2}} 0,5\\)' },
    ],
    variants: [
      { text: '\\((-\\infty; -2)\\)' },
      { text: '\\([-2; 0)\\)' },
      { text: '\\([0; 1)\\)' },
      { text: '\\([1; 2)\\)' },
      { text: '\\([2; +\\infty)\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та властивістю її графіка (А – Д).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Властивість\\) \\(графіка\\) \\(функції\\)<br><br>',
    leftOptions: [
      { text: '\\(y = x + 2\\)' },
      { text: '\\(y = x\\)' },
      { text: '\\(y = 4\\)' },
    ],
    variants: [
      { text: 'спадає' },
      { text: 'утворює з осями координат рівнобедрений трикутник' },
      { text: 'немає спільних із графіком функції \\(y = \\log_{0,5} x\\)' },
      { text: 'перетинає графік рівняння \\(x^2 + y^2 = 1\\)' },
      { text: 'не перетинає вісь абсцис' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено прямокутний трикутник \\(ABC\\) \\((\\angle C = 90^\\circ)\\). Точка \\(M\\) – середина \\(CB\\) = \\(16\\) \\(см\\). Радіус кола, описаного навколо трикутника \\(ABC\\), дорівнює \\(10\\) \\(см\\). До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_1006_18,
    leftOptions: [
      { text: '\\(AC\\)' },
      { text: 'найбільша середня лінія трикутника ABC' },
      { text: '\\(AM\\)' },
    ],
    variants: [
      { text: '\\(10\\) \\(см\\)' },
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(16\\) \\(см\\)' },
      { text: '\\(4\\sqrt{11}\\) \\(см\\)' },
      { text: '\\(4\\sqrt{13}\\) \\(см\\)' },
    ]
  },
  {
    text: 'Знайдіть площу фігури, обмеженої графіком функції \\(y = \\frac{x^3}{3}\\), прямою \\(y = 9\\) та віссю \\(y\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано циліндр, осьовим перерізом якого є прямокутник \\(ABCD\\), \\(C\\)(\\(7\\); \\(1\\); \\(3\\)). Висота \\(AB\\) циліндра вдвічі менша за \\(AD\\). Точка \\(O\\)(\\(2\\); \\(-3\\); \\(6\\)) ділить відрізок \\(AD\\) навпіл. Обчисліть площу \\(S\\) повної поверхні цього циліндра. У відповідь запишіть значення \\(\\frac{S}{\\pi}\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'Компанія замовила \\(10\\) наборів по \\(2\\) банки та \\(10\\) наборів по \\(3\\) банки джему в кожному. Середня ціна однієї банки джему з усіх наборів дорівнює \\(72\\) \\(грн\\). Середня ціна банки з джемом із набору з двох банок дорівнює \\(75\\) \\(грн\\). Визначте середню ціну з набору по \\(3\\) банки джему.',
    type: 'input',
    image: null,
  },
  {
    text: 'Визначте \\(кількість\\) усіх цілих значень \\(a\\), за кожного з яких система рівнянь \\(\\begin{cases} 4^x + 2y^2 = 30 \\\\ 4^x - y^2 = 6a - 21 \\end{cases}\\) <br><br> має принаймні один розв\'язок.',
    type: 'input',
    image: null,
  },
];

  export default tasks;