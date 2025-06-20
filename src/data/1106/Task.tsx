import testImage from '../../image/test1.jpg';

import image_1106_1 from '../../image/1106-1.jpg';
import image_1106_2 from '../../image/1106-2.jpg';
import image_1106_5 from '../../image/1106-5.jpg';
import image_1106_7 from '../../image/1106-7.jpg';
import image_1106_12 from '../../image/1106-12.jpg';
import image_1106_17 from '../../image/1106-17.jpg';
import image_1106_18 from '../../image/1106-18.jpg';
import image_1106_19 from '../../image/1106-19.jpg';

const tasks = [
  {
    text: 'Місця в літаку розташовані у \\(20\\) рядів, у кожному ряді є по \\(3\\) місця, розділені проходом, ліворуч і праворуч від проходу (див. рисунок). Комп’ютерна програма випадковим чином обирає місце для пасажира. Визначте ймовірність того, що пасажиру дістанеться місце біля проходу.',
    image: image_1106_1,
    variants: [
      { text: '\\(\\frac{1}{6}\\)', image: null },
      { text: '\\(\\frac{1}{4}\\)', image: null },
      { text: '\\(\\frac{1}{5}\\)', image: null },
      { text: '\\(\\frac{1}{3}\\)', image: null },
      { text: '\\(\\frac{2}{5}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено куб \\(ABCDA_1B_1C_1D_1\\). Укажіть пряму, яка паралельна площині \\(AA_1B_1B\\).',
    image: image_1106_2,
    variants: [
      { text: '\\(AD\\)', image: null },
      { text: '\\(AC\\)', image: null },
      { text: '\\(C_1D\\)', image: null },
      { text: '\\(B_1D\\)', image: null },
      { text: '\\(A_1C_1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\((4x - 5)^2 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(16x^2 - 40x + 25\\)', image: null },
      { text: '\\(16x^2 - 25\\)', image: null },
      { text: '\\(16x^2 + 25\\)', image: null },
      { text: '\\(16x^2 - 20x + 25\\)', image: null },
      { text: '\\(4x^2 - 25\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть число, яке є розв’язком нерівності \\(|-2x - 3| > 5\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(-2\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(0\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(-1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутній системі координат \\(xy\\) зображено Пізанську вежу \\(OA\\), яка утворює з віссю \\(y\\) кут \\(4^\\circ\\). Визначте кут, який утворює ця вежа з віссю \\(x\\).',
    image: image_1106_5,
    variants: [
      { text: '\\(96^\\circ\\)', image: null },
      { text: '\\(86^\\circ\\)', image: null },
      { text: '\\(84^\\circ\\)', image: null },
      { text: '\\(76^\\circ\\)', image: null },
      { text: '\\(94^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В основі чотирикутної піраміди лежить ромб з діагоналями \\(12\\) \\(см\\) і \\(20\\) \\(см\\). Знайдіть об’єм цієї піраміди, якщо її висота дорівнює \\(15\\) \\(см\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(1600\\) \\(см^3\\)', image: null },
      { text: '\\(1200\\) \\(см^3\\)', image: null },
      { text: '\\(800\\) \\(см^3\\)', image: null },
      { text: '\\(600\\) \\(см^3\\)', image: null },
      { text: '\\(1800\\) \\(см^3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено точку \\(A\\), через яку проходить графік функції \\(y = f(x)\\). Укажіть функцію \\(f(x)\\).',
    image: image_1106_7,
    variants: [
      { text: '\\(f(x) = -x^2\\)', image: null },
      { text: '\\(f(x) = \\log_4 x\\)', image: null },
      { text: '\\(f(x) = \\frac{1}{x}\\)', image: null },
      { text: '\\(f(x) = \\sqrt{x}\\)', image: null },
      { text: '\\(f(x) = x + 2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Маса одного протона приблизно дорівнює \\(1,67 \\cdot 10^{-27}\\) \\(кг\\). Визначте масу \\(100\\) таких протонів.<br><br>',
    image: null,
    variants: [
      { text: '\\(1,67 \\cdot 10^{-30}\\) \\(кг\\)', image: null },
      { text: '\\(1,67 \\cdot 10^{-29}\\) \\(кг\\)', image: null },
      { text: '\\(1,67 \\cdot 10^{-25}\\) \\(кг\\)', image: null },
      { text: '\\(1,67 \\cdot 10^{-24}\\) \\(кг\\)', image: null },
      { text: '\\(167 \\cdot 10^{-25}\\) \\(кг\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Серединний перпендикуляр, проведений до сторони рівностороннього трикутника, поділяє його на два рівних трикутники.<br>II. У прямокутному трикутнику серединні перпендикуляри, проведенні до його катетів, перетинаються в точці, що є середнюю гіпотенузи.<br>III. Точка перетину серединних перпендикулярів у тупокутному трикутнику розташована всередині цього трикутника.<br><br>',
    image: null,
    variants: [
      { text: 'лише I та II', image: null },
      { text: 'лише II', image: null },
      { text: 'I, II та III', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише I', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть значення виразу \\(2\\sqrt{m+m+m}\\), якщо \\(m = \\frac{1}{27}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{6}\\)', image: null },
      { text: '\\(\\frac{2\\sqrt{3}}{9}\\)', image: null },
      { text: '\\(1,5\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(\\frac{2}{3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить менший корінь рівняння \\(3^{x^2} = 81\\).<br><br>',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-3\\))', image: null },
      { text: '[\\(-3\\); \\(-2\\))', image: null },
      { text: '[\\(-2\\); \\(0\\))', image: null },
      { text: '[\\(0\\); \\(2\\))', image: null },
      { text: '(\\(2\\); \\(+\\infty\\))', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) на стороні \\(AD\\) вибрано точку \\(K\\) так, що \\(BK = CD\\), \\(AK : KD = 3 : 2\\) (див. рисунок). \\(BC = 20\\), \\(\\angle AKB = \\alpha\\). Знайдіть площу цього паралелограма.',
    image: image_1106_12,
    variants: [
      { text: '\\(120 \\cos \\alpha\\)', image: null },
      { text: '\\(120 \\tan \\alpha\\)', image: null },
      { text: '\\(\\frac{60}{\\tan \\alpha}\\)', image: null },
      { text: '\\(\\frac{120}{\\tan \\alpha}\\)', image: null },
      { text: '\\(60 \\tan \\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У геометричній прогресії \\((b_n)\\) сума перших п’яти членів дорівнює \\(32\\), а сума перших чотирьох членів дорівнює \\(20\\). Знайдіть п’ятий член \\(b_5\\) цієї прогресії.<br><br>',
    image: null,
    variants: [
      { text: '\\(52\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(18\\)', image: null },
      { text: '\\(12\\)', image: null },
      { text: '\\(24\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть \\(2 \\log_6 3 + \\log_6 4\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(2\\)', image: null },
      { text: '\\(2 \\log_6 12\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(2 \\log_6 7\\)', image: null },
      { text: '\\(\\log_6 13\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв’яжіть систему рівнянь \\(\\left\\{ \\begin{array}{cl} 2x - \\frac{y}{3} = 7 \\\\ 4x + \\frac{2y}{3} = 6 \\end{array} \\right.\\) <br><br> Якщо \\((x_0; y_0)\\) - розв’язок системи, то \\(x_0 + y_0 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-6\\)', image: null },
      { text: '\\(2,5\\)', image: null },
      { text: '\\(-1,5\\)', image: null },
      { text: '\\(-4,5\\)', image: null },
      { text: '\\(-3,5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\) \\(про\\) \\(значення\\) \\(виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(\\sin \\frac{7\\pi}{2}\\)' },
      { text: '\\(\\pi ^ {\\cos 90^\\circ}\\)' },
      { text: '\\(\\frac{\\pi}{3}\\)' },
    ],
    variants: [
      { text: 'є раціональним нецілим числом' },
      { text: 'є ірраціональним числом' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'є натуральним числом' },
      { text: 'є цілим від’ємним числом' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(1\\); \\(9\\)]. Установіть відповідність між початком речення (1–3) та його закінченням (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    image: image_1106_17,
    leftOptions: [
      { text: 'Найбільше значення функції на проміжку [\\(1\\); \\(9\\)]' },
      { text: 'Найменше значення функції на проміжку [\\(1\\); \\(3\\)]' },
      { text: 'Найменше ціле значення \\(x\\), за якого виконується нерівність \\(f(x) < 0\\)' },
    ],
    variants: [
      { text: 'дорівнює \\(5\\)' },
      { text: 'дорівнює \\(6\\)' },
      { text: 'дорівнює \\(7\\)' },
      { text: 'дорівнює \\(8\\)' },
      { text: 'дорівнює \\(9\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено квадрат \\(ABCD\\) і прямокутний трикутник \\(KBC\\) (\\(\\angle B = 90^\\circ\\)), що лежать в одній площині. Периметр квадрата \\(ABCD\\) дорівнює \\(24\\) \\(см\\), середня лінія трапеції \\(AKCD\\) дорівнює \\(10\\) \\(см\\). До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_1106_18,
    leftOptions: [
      { text: '\\(BK\\)' },
      { text: '\\(KC\\)' },
      { text: 'відстань між центрами кіл, описаних навколо квадрата \\(ABCD\\) та трикутника \\(KBC\\)' },
    ],
    variants: [
      { text: '\\(6\\) \\(см\\)' },
      { text: '\\(7\\) \\(см\\)' },
      { text: '\\(8\\) \\(см\\)' },
      { text: '\\(9\\) \\(см\\)' },
      { text: '\\(10\\) \\(см\\)' },
    ]
  },
  {
    text: 'На рисунку зображено графік функції \\(f(x) = \\begin{cases} 1, & x \\in (-\\infty; 0] \\\\ 2, & x \\in (0; +\\infty) \\end{cases}\\). <br><br> Обчислить \\(\\int_{-4}^{-1} f(x) dx + 2 \\int_{1}^{8} f(x) dx\\).',
    type: 'input',
    image: image_1106_19,
  },
  {
    text: 'У прямокутній системі координат у просторі задано конус з вершиною \\(M(4; -9; 7)\\), осьовим перерізом якого є рівносторонній трикутник \\(AMB\\), \\(A(8; -12; 12)\\). Обчисліть площу \\(S\\) повної поверхні цього конуса. У відповідь запишіть значення \\(\\frac{S}{\\pi}\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'Заступник директора школи складає розклад уроків для \\(10\\)-го класу. Він запланував на понеділок шість уроків з таких предметів: геометрія, біологія, англійська мова, хімія, фізична культура, географія. Скільки всього існує різних варіантів розкладу уроків на цей день, якщо урок фізичної культури має бути першим або останнім у розкладі?',
    type: 'input',
    image: null,
  },
  {
    text: 'Знайдіть \\(суму\\) всіх цілих значень \\(a\\), за кожного з яких рівняння \\(\\lg (2ax + 5 - a) = \\lg (4x)\\) не має коренів.',
    type: 'input',
    image: null,
  },
];

  export default tasks;