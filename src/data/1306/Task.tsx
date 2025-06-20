import testImage from '../../image/test1.jpg';

import image_1306_4 from '../../image/1306-4.jpg';
import image_1306_5 from '../../image/1306-5.jpg';
import image_1306_15 from '../../image/1306-15.jpg';
import image_1306_18 from '../../image/1306-18.jpg';
import image_1306_21 from '../../image/1306-21.jpg';

const tasks = [
  {
    text: 'Кут \\(\\alpha\\) дорівнює шостій частині розгорнутого кута. Знайдіть градусну міру кута \\(\\beta\\), що суміжний із кутом \\(\\alpha\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(30^{\\circ}\\)', image: null },
      { text: '\\(120^{\\circ}\\)', image: null },
      { text: '\\(60^{\\circ}\\)', image: null },
      { text: '\\(150^{\\circ}\\)', image: null },
      { text: '\\(140^{\\circ}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему рівнянь \\(\\left\\{ \\begin{array}{cl} 4x - 3y = -1 \\\\ 5x - 2y = 4 \\end{array} \\right.\\)<br><br>',
    image: null,
    variants: [
      { text: '\\((2; -3)\\)', image: null },
      { text: '\\((-2; 3)\\)', image: null },
      { text: '\\((2; 3)\\)', image: null },
      { text: '\\((-2; -3)\\)', image: null },
      { text: '\\((3; 2)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\(0,3x^2 \\cdot 3x^4\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(0,9x^5\\)', image: null },
      { text: '\\(0,6x^6\\)', image: null },
      { text: '\\(3,3x^6\\)', image: null },
      { text: '\\(0,6x^5\\)', image: null },
      { text: '\\(0,9x^6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено куб \\(ABCDA_1B_1C_1D_1\\). Укажіть пряму перетину площин \\(BB_1C\\) і \\(CDD_1\\).',
    image: image_1306_4,
    variants: [
      { text: '\\(B_1C\\)', image: null },
      { text: '\\(CC_1\\)', image: null },
      { text: '\\(B_1C_1\\)', image: null },
      { text: '\\(CD\\)', image: null },
      { text: '\\(DD_1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На діаграмі відображено кількість користувачів, які ставили свої відгуки у вигляді оцінок від \\(1\\) до \\(10\\) за послуги в деякому готелі. Визначте кількість користувачів, які поставили оцінку \\(5\\) та вище.',
    image: image_1306_5,
    variants: [
      { text: '\\(60\\)', image: null },
      { text: '\\(110\\)', image: null },
      { text: '\\(130\\)', image: null },
      { text: '\\(190\\)', image: null },
      { text: '\\(210\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Кілограм картоплі коштує \\(a\\) \\(грн\\), а кілограм моркви на \\(15\\) \\(грн\\) дорожчий за кілограм картоплі. Укажіть формулу для обчислення вартості \\(P\\) (у \\(грн\\)) трьох кілограмів картоплі та двох кілограмів моркви.<br><br>',
    image: null,
    variants: [
      { text: '\\(P = 5a + 15\\)', image: null },
      { text: '\\(P = 5a + 30\\)', image: null },
      { text: '\\(P = 2a + 45\\)', image: null },
      { text: '\\(P = 5a + 45\\)', image: null },
      { text: '\\(P = 3a + 30\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\left| 2 \\cdot 1\\frac{3}{8} - 3 \\right| =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{4}\\)', image: null },
      { text: '\\(2\\frac{5}{8}\\)', image: null },
      { text: '\\(\\frac{5}{8}\\)', image: null },
      { text: '\\(-\\frac{1}{4}\\)', image: null },
      { text: '\\(1\\frac{1}{4}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Сторони основи прямої трикутної призми дорівнюють \\(5\\) \\(см\\), \\(6\\) \\(см\\), \\(7\\) \\(см\\). Знайдіть висоту цієї призми, якщо площа її бічної поверхні дорівнює \\(144\\) \\(см\\)\\(^2\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(4\\) \\(см\\)', image: null },
      { text: '\\(8\\) \\(см\\)', image: null },
      { text: '\\(9\\) \\(см\\)', image: null },
      { text: '\\(12\\) \\(см\\)', image: null },
      { text: '\\(16\\) \\(см\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\((a + b)^{-2} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-a^2 - b^2\\)', image: null },
      { text: '\\(\\frac{1}{a^2 + b^2}\\)', image: null },
      { text: '\\(-a^2 - 2ab - b^2\\)', image: null },
      { text: '\\(\\frac{a^2 + b^2}{a^2b^2}\\)', image: null },
      { text: '\\(\\frac{1}{a^2 + 2ab + b^2}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Діагоналі будь-якого ромба ділять його кути навпіл.<br>II. Діагоналі будь-якого чотирикутника точкою перетину діляться навпіл.<br>III. Діагоналі будь-якого квадрата перпендикулярні.<br><br>',
    image: null,
    variants: [
      { text: 'лише І та ІІ', image: null },
      { text: 'лише І', image: null },
      { text: 'лише І та ІІІ', image: null },
      { text: 'лише ІІІ', image: null },
      { text: 'лише ІІ та ІІІ', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Матеріальна точка рухається прямолінійно за законом \\(x(t) = 1,2t + 0,2t^2\\), де \\(x(t)\\) – координата точки (у \\(метрах\\)), \\(t\\) – час (у \\(секундах\\)). Знайдіть швидкість цієї точки в момент часу \\(t = 2,75\\) с.<br><br>',
    image: null,
    variants: [
      { text: '\\(2,3\\) \\(м/с\\)', image: null },
      { text: '\\(1,75\\) \\(м/с\\)', image: null },
      { text: '\\(4,4\\) \\(м/с\\)', image: null },
      { text: '\\(3,85\\) \\(м/с\\)', image: null },
      { text: '\\(3,875\\) \\(м/с\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(4 + 2\\log_{\\frac{1}{2}} x = 0\\).<br><br>',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-1\\)]', image: null },
      { text: '(\\(-1\\); \\(1\\)]', image: null },
      { text: '(1; 4]', image: null },
      { text: '(4; 8]', image: null },
      { text: '(8; \\(+\\infty\\))', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Скільки всього цілих чисел містить проміжок [\\(\\sqrt[3]{-8}\\); \\(\\sqrt[3]{100}\\)]?<br><br>',
    image: null,
    variants: [
      { text: '\\(4\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(8\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(x^2 < 9\\).<br><br>',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-3\\))', image: null },
      { text: '(\\(-\\infty\\); \\(-3\\)) \\(\\cup\\) \\((3; +\\infty\\))', image: null },
      { text: '(\\(-\\infty; 3)\\)', image: null },
      { text: '\\((3; +\\infty\\))', image: null },
      { text: '(\\(-3; 3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) з гострим кутом \\(\\angle A = 2\\alpha\\) на стороні \\(AD\\) вибрано точку \\(K\\) так, що \\(AB = AK = KD\\) (див. рисунок). Визначте площу паралелограма \\(ABCD\\), якщо \\(BK = d\\).',
    image: image_1306_15,
    variants: [
      { text: '\\(\\frac{d^2}{2\\tan\\alpha}\\)', image: null },
      { text: '\\({d^2}{\\tan\\alpha}\\)', image: null },
      { text: '\\(\\frac{d^2\\tan\\alpha}{2}\\)', image: null },
      { text: '\\(2d^2\\tan\\alpha\\)', image: null },
      { text: '\\(\\frac{d^2}{\\tan\\alpha}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\) \\(про\\) \\(значення\\) \\(виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(\\cos 2\\pi\\)' },
      { text: '\\(\\log_{\\pi} \\frac{1}{\\pi}\\)' },
      { text: '\\(\\pi^2 - 9\\)' },
    ],
    variants: [
      { text: 'є цілим додатним числом' },
      { text: 'є цілим від\'ємним числом' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'є нецілим додатним числом' },
      { text: 'є нецілим від\'ємним числом' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та властивістю її графіка (А – Д).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Властивість\\) \\(графіка\\) \\(функції\\)<br><br>',
    leftOptions: [
      { text: '\\(y = 2x + 6\\)' },
      { text: '\\(y = -2\\)' },
      { text: '\\(y = -x\\)' },
    ],
    variants: [
      { text: 'паралельний осі \\(y\\)' },
      { text: 'є бісектрисою другої та четвертої координатних чвертей' },
      { text: 'дотикається до графіка рівняння \\(x^2 + y^2 = 4\\)' },
      { text: 'паралельний до графіка функції \\(y = 2x\\)' },
      { text: 'не перетинає графік функції \\(y = \\tan x\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'Навколо кола радіуса \\(4\\) \\(см\\) описано рівнобічну трапецію, середня лінія якої дорівнює \\(10\\) \\(см\\) (див. рисунок). До кожного відрізка (1–3) доберіть його довжину (А–Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_1306_18,
    leftOptions: [
      { text: 'Висота трапеції' },
      { text: 'Бічна сторона трапеції' },
      { text: 'Більша основа трапеції' },
    ],
    variants: [
      { text: '\\(8\\) \\(см\\)' },
      { text: '\\(10\\) \\(см\\)' },
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(16\\) \\(см\\)' },
      { text: '\\(20\\) \\(см\\)' },
    ]
  },
  {
    text: 'У геометричній прогресії \\((b_n)\\) наступний член відноситься до попереднього як \\(3 : 2\\). Знайдіть суму шостого і сьомого членів цієї прогресії, якщо п\'ятий член \\(b_5 = 54\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано циліндр, осьовим перерізом якого є квадрат \\(ABCD\\), \\(C(8; -13; 10)\\). Точка \\(O(4; -3; 2)\\) ділить відрізок \\(AD\\) навпіл. Обчисліть об\'єм \\(V\\) цього циліндра. У відповідь запишіть значення \\(\\frac{V}{\\pi}\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'Учень з понеділка до п\'ятниці записував час (у \\(хвилинах\\)), який він витрачав на дорогу до школи та зі школи (див. таблицю). Відомо, що в середньому за всі \\(5\\) дні дорога зі школи займала на \\(6\\) \\(хвилин\\) більше, ніж до школи. Знайдіть \\(x\\).',
    type: 'input',
    image: image_1306_21,
  },
  {
    text: 'Знайдіть \\(кількість\\) усіх цілих значень \\(a\\) з проміжку \\((-7; 7)\\), за кожного з яких рівняння \\((3^{\\alpha-2x} - 3^{2-4x}) \\cdot (3 + \\sqrt{3x - 5}) = 0\\) має корені.',
    type: 'input',
    image: null,
  }
];

  export default tasks;