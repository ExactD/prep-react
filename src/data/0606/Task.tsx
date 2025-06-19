import testImage from '../../image/test1.jpg';

import image_0606_2 from '../../image/0606-2.jpg';
import image_0606_4 from '../../image/0606-4.jpg';
import image_0606_7 from '../../image/0606-7.jpg';
import image_0606_9 from '../../image/0606-9.jpg';
import image_0606_11 from '../../image/0606-11.jpg';
import image_0606_17 from '../../image/0606-17.jpg';
import image_0606_18 from '../../image/0606-18.jpg';

const tasks = [
  {
    text: 'Випущено партію з \\(300\\) лотерейних білетів. Імовірність того, що навмання вибраний білет із цієї партії буде виграшним, дорівнює \\(0,2\\). Визначте кількість виграшних білетів серед цих \\(300\\) білетів.<br><br>',
    image: null,
    variants: [
      { text: '\\(6\\)', image: null },
      { text: '\\(60\\)', image: null },
      { text: '\\(294\\)', image: null },
      { text: '\\(150\\)', image: null },
      { text: '\\(240\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено куб \\(ABCDA_1B_1C_1D_1\\). Укажіть пряму, яка перетинає площину \\(ABC\\).',
    image: image_0606_2,
    variants: [
      { text: '\\(AB\\)', image: null },
      { text: '\\(AC\\)', image: null },
      { text: '\\(B_1D\\)', image: null },
      { text: '\\(B_1C_1\\)', image: null },
      { text: '\\(A_1C_1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(\\frac{3}{2} = \\frac{x}{4}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{8}{3}\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(1,5\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(\\frac{2}{3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено прямі \\(m\\) і \\(n\\), що перетинаються. Визначте градусну міру кута \\(\\beta\\), якщо \\(\\alpha + \\beta + \\gamma = 230^\\circ\\).',
    image: image_0606_4,
    variants: [
      { text: '\\(120^\\circ\\)', image: null },
      { text: '\\(50^\\circ\\)', image: null },
      { text: '\\(145^\\circ\\)', image: null },
      { text: '\\(130^\\circ\\)', image: null },
      { text: '\\(140^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\sqrt[3]{2^3} \\cdot \\sqrt{36} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(72\\)', image: null },
      { text: '\\(6\\sqrt{2}\\)', image: null },
      { text: '\\(12\\)', image: null },
      { text: '\\(42\\)', image: null },
      { text: '\\(36\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть площу бічної поверхні циліндра, висота якого дорівнює \\(9\\) \\(см\\), а площа основи - \\(16\\pi\\) \\(см^2\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(96\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(144\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(48\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(36\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(72\\pi\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У яких координатних чвертях розташований графік функції \\(y = (x - 1)^2\\)? Положення координатних чвертей зображено на рисунку.<br><br>',
    image: image_0606_7,
    variants: [
      { text: 'лише в І та ІІ', image: null },
      { text: 'лише в І, ІІ та ІІІ', image: null },
      { text: 'лише в ІІ та ІІІ', image: null },
      { text: 'лише в І, ІІ та IV', image: null },
      { text: 'в усіх чвертях', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Зі \\(100\\) \\(кг\\) соняшникового насіння можна виготовити \\(45\\) \\(кг\\) олії. Скільки олії можна виготовити з \\(350\\) \\(кг\\) соняшникового насіння?<br><br>',
    image: null,
    variants: [
      { text: '\\(136\\) \\(кг\\)', image: null },
      { text: '\\(147,5\\) \\(кг\\)', image: null },
      { text: '\\(145\\) \\(кг\\)', image: null },
      { text: '\\(157,5\\) \\(кг\\)', image: null },
      { text: '\\(162,5\\) \\(кг\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено паралелограм \\(ABCD\\). Які з наведених тверджень є правильними?<br><br>I. \\(\\angle A = \\angle C\\).<br>II. \\(AB + BC = CD + AD\\).<br>III. \\(AC = BD\\).<br><br>',
    image: image_0606_9,
    variants: [
      { text: 'лише I', image: null },
      { text: 'лише II', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему нерівностей \\(\\left\\{ \\begin{array}{cl} x^2 + 9 \\geq 0 \\\\ 2^x > \\frac{1}{16} \\end{array} \\right.\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\varnothing\\)', image: null },
      { text: '\\((-4; +\\infty)\\)', image: null },
      { text: '\\((-4; -3]\\)', image: null },
      { text: '\\((-4; -3] \\cup [3; +\\infty)\\)', image: null },
      { text: '\\([-3; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено прямокутник \\(ABCD\\). Точка \\(K\\) лежить на стороні \\(AD\\). Визначте периметр прямокутника, якщо \\(CK = 15\\), \\(KD = 12\\), \\(\\angle ABK = \\beta\\).',
    image: image_0606_11,
    variants: [
      { text: '\\(42 + \\frac{18}{\\tan\\beta}\\)', image: null },
      { text: '\\(42 + 18\\cos\\beta\\)', image: null },
      { text: '\\(42 + 18\\tan\\beta\\)', image: null },
      { text: '\\(42 + \\frac{18}{\\sin\\beta}\\)', image: null },
      { text: '\\(42 + 18\\sin\\beta\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\cos 2\\alpha - \\cos^2 \\alpha =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-\\sin 2\\alpha\\)', image: null },
      { text: '\\(-\\sin^2 \\alpha\\)', image: null },
      { text: '\\(\\sin 2\\alpha\\)', image: null },
      { text: '\\(\\sin^2 \\alpha\\)', image: null },
      { text: '\\(0\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В арифметичній прогресії \\((a_n)\\) перший член \\(a_1 = -16,5\\), різниця \\(d = 1,5\\). Скільки всього додатних членів має ця прогресія?<br><br>',
    image: null,
    variants: [
      { text: '\\(10\\)', image: null },
      { text: '\\(11\\)', image: null },
      { text: '\\(12\\)', image: null },
      { text: '\\(13\\)', image: null },
      { text: '\\(14\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\(\\frac{x^2 - y^2}{x - y} : (2x + 2y)\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{x - y}{2x + 2y}\\)', image: null },
      { text: '\\(2(x + y)^2\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(\\frac{1}{2x + 2y}\\)', image: null },
      { text: '\\(\\frac{1}{2}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(\\log_{\\frac{1}{3}} (x + 1) - \\log_{\\frac{1}{3}} 3 = -1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-1; 0]\\)', image: null },
      { text: '\\((0; 1]\\)', image: null },
      { text: '\\((1; 7]\\)', image: null },
      { text: '\\((7; 9]\\)', image: null },
      { text: '\\((9; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\) \\(про\\) \\(значення\\) \\(виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(\\log_\\pi 1\\)' },
      { text: '\\(\\sin\\left(-\\frac{\\pi}{6}\\right)\\)' },
      { text: '\\(\\pi^3 \\cdot \\pi^{-4}\\)' },
    ],
    variants: [
      { text: 'є нецілим додатним числом' },
      { text: 'є нецілим від\'ємним числом' },
      { text: 'дорівнює 0' },
      { text: 'є цілим додатним числом' },
      { text: 'є цілим від\'ємним числом' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-4\\); \\(5\\)]. Установіть відповідність між початком речення (1–3) та його закінченням (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    image: image_0606_17,
    leftOptions: [
      { text: 'Нуль функції належить проміжку' },
      { text: 'Точка максимуму функції належить проміжку' },
      { text: 'Абсциса точки перетину графіка функції з графіком функції \\(y = \\log_{\\frac{1}{3}} x\\) належить проміжку' },
    ],
    variants: [
      { text: '(\\(-4\\); \\(-2\\)]' },
      { text: '(\\(-2\\); \\(0\\)]' },
      { text: '(\\(0\\); \\(1\\)]' },
      { text: '(\\(1\\); \\(3\\)]' },
      { text: '(\\(3\\); \\(5\\)]' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено квадрат \\(ABCD\\), площа якого \\(144\\) \\(см^2\\). Точки \\(K\\) і \\(M\\) - середини сторін \\(BC\\) і \\(CD\\) відповідно. До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_0606_18,
    leftOptions: [
      { text: 'сторона квадрата' },
      { text: '\\(KM\\)' },
      { text: 'відстань від точки \\(A\\) до центра кола, описаного навколо трикутника \\(KMC\\)' },
    ],
    variants: [
      { text: '\\(6\\) \\(см\\)' },
      { text: '\\(6\\sqrt{2}\\) \\(см\\)' },
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(8\\sqrt{2}\\) \\(см\\)' },
      { text: '\\(9\\sqrt{2}\\) \\(см\\)' },
    ]
  },
  {
    text: 'Задано функцію \\(f(x) = \\begin{cases} \\frac{9}{x^2}, & \\text{якщо } x < -1 \\\\ -5x^3 - 4x, & \\text{якщо } x \\geq -1 \\end{cases}\\). Обчисліть \\(f(-2) + f\'(2)\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано пряму чотирикутну призму \\(ABCDA_1B_1C_1D_1\\), в основі якої лежить паралелограм \\(ABCD\\), \\(A(5; 2; 0)\\), \\(D(-3; 8; 0)\\). Площина \\(ABC\\) лежить у площині \\(xy\\). В основі призми з точки \\(B\\) на сторону \\(AD\\) проведено висоту, довжина якої дорівнює \\(5\\). Точка \\(K(0; 0; 8)\\) належить площині \\(A_1B_1C_1D_1\\). Знайдіть об\'єм цієї призми.',
    type: 'input',
    image: null,
  },
  {
    text: 'Михайло отримав з математики в першому семестрі такі оцінки: "\\(8\\)", "\\(7\\)", "\\(9\\)", "\\(9\\)". Яку \\(найменшу\\) кількість оцінок "\\(10\\)" протягом цього семестру треба отримати Михайлові з математики, щоб середнє арифметичне всіх отриманих у першому семестрі оцінок із цього предмета було більше за \\(9,5\\)? Уважайте, що інших оцінок із математики, окрім "\\(10\\)", Михайло не отримуватиме.',
    type: 'input',
    image: null,
  },
  {
    text: 'Визначте кількість усіх цілих значень \\(a\\) з проміжку \\((-3; 8)\\), за кожного з яких рівняння \\(\\frac{\\sqrt{x + 2a} - \\sqrt{8 - 2x}}{x}=0\\) має корені.',
    type: 'input',
    image: null,
  },
];

  export default tasks;