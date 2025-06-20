import testImage from '../../image/test1.jpg';

import image_2006_1 from '../../image/2006-1.jpg';
import image_2006_3 from '../../image/2006-3.jpg';
import image_2006_5 from '../../image/2006-5.jpg';
import image_2006_7 from '../../image/2006-7.jpg';
import image_2006_9 from '../../image/2006-9.jpg';
import image_2006_12 from '../../image/2006-12.jpg';
import image_2006_16 from '../../image/2006-16.jpg';
import image_2006_18 from '../../image/2006-18.jpg';

const tasks = [
  {
    text: 'Драбина \\(BC\\) приставлена до вертикальної стіни \\(AB\\) й спирається на горизонтальну поверхню \\(AC\\) (див. рисунок). За наведеними на рисунку даними визначте градусну міру кута \\(BCA\\) нахилу драбини до поверхні \\(AC\\).',
    image: image_2006_1,
    variants: [
      { text: '\\(18^\\circ\\)', image: null },
      { text: '\\(12^\\circ\\)', image: null },
      { text: '\\(72^\\circ\\)', image: null },
      { text: '\\(82^\\circ\\)', image: null },
      { text: '\\(78^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв’яжіть рівняння \\(10^x = 0,1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(1\\)', image: null },
      { text: '\\(-1\\)', image: null },
      { text: '\\(-9,9\\)', image: null },
      { text: '\\(0\\)', image: null },
      { text: '\\(0,01\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено трикутну піраміду \\(SABC\\) з основою \\(ABC\\). Точка \\(M\\) – середина ребра \\(AB\\). Укажіть пряму, що лежить у площині \\(SCM\\).',
    image: image_2006_3,
    variants: [
      { text: '\\(SB\\)', image: null },
      { text: '\\(AM\\)', image: null },
      { text: '\\(BC\\)', image: null },
      { text: '\\(SA\\)', image: null },
      { text: '\\(SC\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(40x^3 - 15x =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(5x(35x^2 - 10x)\\)', image: null },
      { text: '\\(25x^2\\)', image: null },
      { text: '\\(5x^3(8 - 3x)\\)', image: null },
      { text: '\\(5x(8x^2 - 5)\\)', image: null },
      { text: '\\(5x(8x^2 - 3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На діаграмі відображено інформацію про кількісний розподіл за кольорами стрічок, із яких плетуть маскувальні сітки. Білі стовпці діаграми відповідають кількості стрічок зазначеного кольору, використаних для однієї сітки влітку, а сірі – восени. За діаграмою визначте різницю між кількостями зелених і жовтих стрічок для маскувальних сіток \\(влітку\\).',
    image: image_2006_5,
    variants: [
      { text: '\\(15\\)', image: null },
      { text: '\\(20\\)', image: null },
      { text: '\\(25\\)', image: null },
      { text: '\\(30\\)', image: null },
      { text: '\\(35\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Автомобіль, ціна якого в листопаді становила \\(850 000\\) \\(грн\\), можна придбати в грудні з акційною знижкою 5%. Яку суму зекономив покупець, який придбав цей автомобіль у грудні, користуючись акційною знижкою?<br><br>',
    image: null,
    variants: [
      { text: '\\(8500\\) \\(грн\\)', image: null },
      { text: '\\(45000\\) \\(грн\\)', image: null },
      { text: '\\(2500\\) \\(грн\\)', image: null },
      { text: '\\(85000\\) \\(грн\\)', image: null },
      { text: '\\(42500\\) \\(грн\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть об’єм півкулі радіуса \\(9\\) (див. рисунок).<br><br>',
    image: image_2006_7,
    variants: [
      { text: '\\(486\\pi\\)', image: null },
      { text: '\\(243\\pi\\)', image: null },
      { text: '\\(324\\pi\\)', image: null },
      { text: '\\(162\\pi\\)', image: null },
      { text: '\\(972\\pi\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Півсума довжин бічних сторін будь-якої трапеції дорівнює її середній лінії.<br>II. Діагональ будь-якої трапеції ділить її на \\(2\\) рівні трикутники.<br>III. Середня лінія будь-якої трапеції ділить її висоту навпіл.<br><br>',
    image: null,
    variants: [
      { text: 'лише I та II', image: null },
      { text: 'лише II та III', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-3\\); \\(3\\)]. У яких координатних чвертях розташований графік функції \\(y = -f(x)\\)?',
    image: image_2006_9,
    variants: [
      { text: 'лише в I та II', image: null },
      { text: 'лише в I та IV', image: null },
      { text: 'лише в I, II та III', image: null },
      { text: 'лише в II, III та IV', image: null },
      { text: 'в усіх чвертях', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{x-9}{2\\sqrt{x}-6} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{\\sqrt{x}+3}{2}\\)', image: null },
      { text: '\\(1,5\\)', image: null },
      { text: '\\(\\frac{2}{\\sqrt{x}-3}\\)', image: null },
      { text: '\\(\\frac{\\sqrt{x}-3}{2}\\)', image: null },
      { text: '\\(\\frac{2}{\\sqrt{x}+3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить число \\(\\log_{\\frac{1}{2}} 8\\).<br><br>',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-5\\)]', image: null },
      { text: '(\\(-5\\); \\(0\\)]', image: null },
      { text: '(\\(0\\); \\(1\\)]', image: null },
      { text: '(\\(1\\); \\(5\\)]', image: null },
      { text: '(\\(5\\); \\(+\\infty\\))', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На сторонах \\(AD\\) й \\(BC\\) паралелограма \\(ABCD\\) вибрано відповідно точки \\(K\\) й \\(M\\) так, що чотирикутник \\(KMCD\\) є ромбом (див. рисунок). Визначте площу паралелограма \\(ABCD\\), якщо \\(AK : KD = 1 : 2\\), \\(KC = d\\), \\(\\angle CKD = \\alpha\\).',
    image: image_2006_12,
    variants: [
      { text: '\\(\\frac{3d^2}{4tg\\alpha}\\)', image: null },
      { text: '\\(\\frac{3d^2tg\\alpha}{4}\\)', image: null },
      { text: '\\(\\frac{4d^2tg\\alpha}{3}\\)', image: null },
      { text: '\\(\\frac{3d^2}{2tg\\alpha}\\)', image: null },
      { text: '\\(\\frac{3d^2tg\\alpha}{2}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Визначте кількість цілих чисел із проміжку [\\(-10\\); \\(10\\)], що задовольняють нерівність \\(|x-2| < 7\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(13\\)', image: null },
      { text: '\\(12\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(15\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Яка з наведених функцій є первісною для функції \\(f(x) = e^x + 2\\)?<br><br>',
    image: null,
    variants: [
      { text: '\\(F(x) = e^x + 2x - 3\\)', image: null },
      { text: '\\(F(x) = e^x + 1\\)', image: null },
      { text: '\\(F(x) = 2x\\)', image: null },
      { text: '\\(F(x) = xe^{x-1} + 2x + 3\\)', image: null },
      { text: '\\(F(x) = xe^{x-1}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв’яжіть систему рівнянь \\(\\begin{cases} y - \\frac{2}{x} = 3 \\\\ y + \\frac{1}{x} = 9 \\end{cases}\\). <br><br>Якщо \\((x_0; y_0)\\) – розв’язок системи, то \\(x_0 + y_0 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(4,5\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(3,5\\)', image: null },
      { text: '\\(7,5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Узгодьте вираз (1–3) з точкою (А – Д) на координатній прямій, координатою якої є значення виразу, якщо \\(a = -2\\).',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Точка\\)<br><br>',
    image: image_2006_16,
    leftOptions: [
      { text: '\\(|a|\\)' },
      { text: '\\(a^0\\)' },
      { text: '\\(tg(\\pi a)\\)' },
    ],
    variants: [
      { text: '\\(K\\)' },
      { text: '\\(L\\)' },
      { text: '\\(M\\)' },
      { text: '\\(N\\)' },
      { text: '\\(P\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'Доберіть до початку речення (1–3) його закінчення (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    leftOptions: [
      { text: 'Графік функції \\(y = x\\) не має жодної спільної точки з' },
      { text: 'Графік функції \\(y = 3^x\\) має лише одну спільну точку з' },
      { text: 'Графік рівняння \\((x + 3)^2 + y^2 = 4\\) має дві спільні точки з' },
    ],
    variants: [
      { text: 'віссю \\(x\\)' },
      { text: 'віссю \\(y\\)' },
      { text: 'прямою \\(y = x-4\\)' },
      { text: 'прямою \\(y = -4\\)' },
      { text: 'прямою \\(y = -2\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено прямокутник \\(ABCD\\) та два кола. Перше коло з центром у точці \\(O_1\\), описане навколо цього прямокутника, друге коло з центром у точці \\(O_2\\), довжиною \\(16\\pi\\) \\(см\\), дотикається до сторін \\(AB\\), \\(BC\\) та \\(AD\\). \\(BC = 30\\) \\(см\\). До кожного початку речення (1–3) доберіть його закінчення (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    image: image_2006_18,
    leftOptions: [
      { text: 'Довжина сторони \\(AB\\) дорівнює' },
      { text: 'Довжина радіуса кола, описаного навколо прямокутника \\(ABCD\\) дорівнює' },
      { text: 'Довжина відрізка \\(O_1O_2\\) дорівнює' },
    ],
    variants: [
      { text: '\\(7\\) \\(см\\)' },
      { text: '\\(9\\) \\(см\\)' },
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(16\\) \\(см\\)' },
      { text: '\\(17\\) \\(см\\)' },
    ]
  },
  {
    text: 'Обчисліть значення похідної функції \\(f(x) = (7x + 5)(3\\cos x - 1)\\) у точці \\(x_0 = 0\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано куб \\(ABCDA_1B_1C_1D_1\\). Діагоналі грані \\(ABCD\\) перетинаються в точці \\(K(6; -6; 4)\\), точка \\(M(-4; 4; 9)\\) – середина ребра \\(CC_1\\). Обчисліть площу \\(повної\\) поверхні цього куба.',
    type: 'input',
    image: null,
  },
  {
    text: 'У будні дні щоденна плата Назара за роботу в кав\'ярні становить \\(300\\) \\(грн\\), а в субботу й неділю – на \\(200\\) \\(грн\\) більше. Скільки в середньому за день заробляє Назар (у \\(грн\\)), якщо він виходить на роботу в четвер і працює \\(10\\) днів безперервно?',
    type: 'input',
    image: null,
  },
  {
    text: 'Знайдіть \\(кількість\\) усіх цілих значень \\(a\\) з проміжку \\((-4; 10)\\), за кожного з яких рівняння \\(\\log_2^2 x + a \\log_2 x + 4a - 16 = 0\\) має два різних корені, з яких один менший за \\(0,1\\), а другий – більший за \\(0,5\\).',
    type: 'input',
    image: null,
  },
];

  export default tasks;