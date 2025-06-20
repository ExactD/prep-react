import testImage from '../../image/test1.jpg';

import image_1906_3 from '../../image/1906-3.jpg';
import image_1906_4 from '../../image/1906-4.jpg';
import image_1906_6 from '../../image/1906-6.jpg';
import image_1906_12 from '../../image/1906-12.jpg';
import image_1906_17 from '../../image/1906-17.jpg';
import image_1906_18 from '../../image/1906-18.jpg';
import image_1906_19 from '../../image/1906-19.jpg';
import image_1906_21 from '../../image/1906-21.jpg';

const tasks = [
  {
    text: '\\((3x + 4)(3x - 4) =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(3x^2 - 16\\)', image: null },
      { text: '\\(3x^2 + 16\\)', image: null },
      { text: '\\(9x^2 + 16\\)', image: null },
      { text: '\\(9x^2 - 16\\)', image: null },
      { text: '\\(9x - 16\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть тіло обертання, яке має лише одну основу.<br><br>',
    image: null,
    variants: [
      { text: 'призма', image: null },
      { text: 'конус', image: null },
      { text: 'куля', image: null },
      { text: 'циліндр', image: null },
      { text: 'піраміда', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У залі кінотеатру є \\(39\\) місць (див. рисунок). Усі VIP-місця зайняті. Михайло навмання обирає собі місце в кінотеатрі. Визначте ймовірність того, що він обере місце з кріслами-мішками.',
    image: image_1906_3,
    variants: [
      { text: '\\(\\frac{3}{11}\\)', image: null },
      { text: '\\(\\frac{7}{10}\\)', image: null },
      { text: '\\(\\frac{10}{13}\\)', image: null },
      { text: '\\(\\frac{3}{8}\\)', image: null },
      { text: '\\(\\frac{3}{10}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено ромб, більша діагональ якого утворює зі стороною кут \\(20^\\circ\\). Знайдіть градусну міру більшого кута ромба.',
    image: image_1906_4,
    variants: [
      { text: '\\(120^\\circ\\)', image: null },
      { text: '\\(140^\\circ\\)', image: null },
      { text: '\\(40^\\circ\\)', image: null },
      { text: '\\(80^\\circ\\)', image: null },
      { text: '\\(160^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв’яжіть нерівність \\(\\log_3 (2x) > \\log_3 10\\).<br><br>',
    image: null,
    variants: [
      { text: '(\\(8\\); \\(+\\infty\\))', image: null },
      { text: '(\\(-\\infty\\); \\(5\\))', image: null },
      { text: '(\\(5\\); \\(+\\infty\\))', image: null },
      { text: '(\\(-\\infty\\); \\(8\\))', image: null },
      { text: '(\\(12\\); \\(+\\infty\\))', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-4\\); \\(3\\)]. Укажіть множину значень функції \\(y = f(x) + 2\\).',
    image: image_1906_6,
    variants: [
      { text: '[\\(-2\\); \\(5\\)]', image: null },
      { text: '[\\(-3\\); \\(0\\)]', image: null },
      { text: '[\\(0\\); \\(4\\)]', image: null },
      { text: '[\\(-4\\); \\(3\\)]', image: null },
      { text: '[\\(1\\); \\(4\\)]', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\left(\\frac{1}{20} \\cdot 25\\right)^{-1} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(0,2\\)', image: null },
      { text: '\\(1,2\\)', image: null },
      { text: '\\(0,8\\)', image: null },
      { text: '\\(0,002\\)', image: null },
      { text: '\\(-1,25\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Клієнт банку двічі знімав гроші з рахунку. Першого разу він зняв 40% від початкової суми, другого разу – \\(500\\) \\(грн\\). Після цього на його рахунку залишилося половина початкової суми. Визначте, скільки грошей залишилося у клієнта.<br><br>',
    image: null,
    variants: [
      { text: '\\(2000\\) \\(грн\\)', image: null },
      { text: '\\(2500\\) \\(грн\\)', image: null },
      { text: '\\(3500\\) \\(грн\\)', image: null },
      { text: '\\(4000\\) \\(грн\\)', image: null },
      { text: '\\(5000\\) \\(грн\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Бісектриса будь-якого трикутника ділить його протилежну сторону навпіл.<br>II. Точка перетину бісектрис трикутника є центром вписанного кола.<br>III. У рівнобедреному трикутнику одна з бісектрис утворює два рівні трикутники.<br><br>',
    image: null,
    variants: [
      { text: 'лише II', image: null },
      { text: 'I, II та III', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть площу бічної поверхні правильної шестикутної призми, сторона основи якої дорівнює \\(5\\) \\(см\\), а висота призми – \\(4\\) \\(см\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(50\\) см\\(^2\\)', image: null },
      { text: '\\(60\\) см\\(^2\\)', image: null },
      { text: '\\(80\\) см\\(^2\\)', image: null },
      { text: '\\(100\\) см\\(^2\\)', image: null },
      { text: '\\(120\\) см\\(^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв’яжіть рівняння \\(\\sqrt{x - 2} = 4\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(10\\)', image: null },
      { text: '\\(18\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(14\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутнику \\(ABCD\\) на стороні \\(AD\\) вибрано точку \\(K\\) так, що \\(AK : KD = 1 : 2\\), \\(\\angle BCK = \\beta\\) (див. рисунок). Визначте площу цього прямокутника.',
    image: image_1906_12,
    variants: [
      { text: '\\(\\frac{2d^2}{3tg\\beta}\\)', image: null },
      { text: '\\(\\frac{2d^2}{3\\sin\\beta}\\)', image: null },
      { text: '\\(\\frac{2}{3}d^2tg\\beta\\)', image: null },
      { text: '\\(\\frac{2}{3}d^2\\sin\\beta\\)', image: null },
      { text: '\\(\\frac{2}{3}d^2\\cos\\beta\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(2\\cos^2 (90^\\circ + 3\\alpha) + 2\\cos^2 3\\alpha =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(2\\cos 6\\alpha\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(0\\)', image: null },
      { text: '\\(-2\\)', image: null },
      { text: '\\(2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Марійка викладала відео на своєму каналі про кулінарію. Першого дня її відео набрало \\(50\\) переглядів. Кожного наступного дня кількість переглядів цього відео збільшувалося вдвічі порівняно з попереднім днем. За яку \\(найменшу\\) кількість днів сумарне число переглядів цього відео перевищить \\(1000\\)?<br><br>',
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
    text: 'Розв’яжіть систему рівнянь \\(\\begin{cases} \\frac{2}{x} + \\frac{5}{y} = 5 \\\\ \\frac{1}{x} - \\frac{2}{y} = 7 \\end{cases}\\). <br><br>Якщо \\((x_0; y_0)\\) – розв’язок системи, то \\(\\frac{1}{x_0} + \\frac{1}{y_0} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(12\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та значенням (А – Д) цього виразу, якщо \\(x = \\sqrt{5} - 4\\).',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Значення\\) \\(виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(x^2 + 8x + 16\\)' },
      { text: '\\(\\frac{x-1}{\\sqrt5}\\)' },
      { text: '\\(\\lg x^0\\)' },
    ],
    variants: [
      { text: '\\(5\\)' },
      { text: '\\(\\sqrt{5}\\)' },
      { text: '\\(0\\)' },
      { text: '\\(1 - \\sqrt{5}\\)' },
      { text: '\\(-5\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між твердженням (1–3) та прямою, зображеною на рисунку (А – Д), для якої це твердження є правильним.',
    leftTitle: '\\(Твердження\\)<br><br>',
    rightTitle: '\\(Пряма\\)<br><br>',
    image: image_1906_17,
    leftOptions: [
      { text: 'не має жодної спільної точки з функцією \\(y = (\\frac{2}{3})^x\\)' },
      { text: 'є графіком функції \\(y = x - 2\\)' },
      { text: 'кутовий коефіцієнт прямої дорівнює \\(0\\)' },
    ],
    variants: [
      { text: 'А ' },
      { text: 'Б ' },
      { text: 'В ' },
      { text: 'Г ' },
      { text: 'Д ' }
    ]
  },
  {
    type: 'matching',
    text: 'У паралелограмі \\(ABCD\\) з точки \\(B\\) на сторону \\(AD\\) опущено висоту \\(BK = 6\\) \\(см\\), \\(AK = 8\\) \\(см\\), \\(KD = 4\\) \\(см\\). До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_1906_18,
    leftOptions: [
      { text: 'Середня лінія трапеції \\(KBCD\\)' },
      { text: '\\(AB\\)' },
      { text: 'Відстань від точки \\(B\\) до сторони \\(CD\\)' },
    ],
    variants: [
      { text: '\\(10\\) \\(см\\)' },
      { text: '\\(6\\) \\(см\\)' },
      { text: '\\(8\\) \\(см\\)' },
      { text: '\\(7,2\\) \\(см\\)' },
      { text: '\\(16\\) \\(см\\)' },
    ]
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-5\\); \\(5\\)], фрагментом якої є півколо. Обчисліть \\(\\frac{1}{\\pi}\\int\\limits_{-5}^{5} f(x) dx\\).',
    type: 'input',
    image: image_1906_19,
  },
  {
    text: 'У прямокутній системі координат у просторі задано трикутну піраміду \\(SABC\\) з вершиною \\(S(0; 0; 9)\\). Основою піраміди є прямокутний рівнобедрений трикутник \\(ABC\\) (\\(\\angle C = 90^\\circ\\)), що лежить у площині \\(xy\\), \\(A(-8; 10; 0)\\), \\(B(8; -2; 0)\\). Знайдіть об’єм цієї піраміди.',
    type: 'input',
    image: null,
  },
  {
    text: 'На діаграмі відображено кількість відвідувачів музею протягом \\(6\\) днів (з вівторка по неділю). Знайдіть \\(різницю\\) між середнім значенням кількості відвідувачів у вихідні дні та середнім значенням кількості відвідувачів у будні дні.',
    type: 'input',
    image: image_1906_21,
  },
  {
    text: 'Знайдіть \\(суму\\) всіх цілих значень \\(a\\) з проміжку [\\(-9\\); \\(4\\)], за кожного з яких рівняння \\(\\frac{3^{x-4a}-3^{3x+10}}{log_{3}{x}} = 0\\) має корінь.',
    type: 'input',
    image: null,
  },
];

  export default tasks;