import testImage from '../../image/test1.jpg';
import image_0406_2 from '../../image/0406-2.jpg';
import image_0406_3 from '../../image/0406-3.jpg';
import image_0406_5 from '../../image/0406-5.jpg';
import image_0406_7 from '../../image/0406-7.jpg';
import image_0406_11 from '../../image/0406-11.jpg';
import image_0406_17 from '../../image/0406-17.jpg';
import image_0406_18 from '../../image/0406-18.jpg';

const tasks = [
  {
    text: 'Розкладіть вираз \\(4x^2 - 144\\) на множники.<br><br>',
    image: null,
    variants: [
      { text: '\\((2x - 12)^2\\)', image: null },
      { text: '\\((2x - 72)^2\\)', image: null },
      { text: '\\((2x - 12)(2x + 12)\\)', image: null },
      { text: '\\(2(x - 6)(x + 6)\\)', image: null },
      { text: '\\((2x - 72)(2x + 72)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку відображено зміну густини \\((мкг/м^3)\\) дрібнодисперсного пилу в повітрі протягом доби в деякому районі міста. Укажіть із-поміж наведених проміжок часу (у \\( год\\)), упродовж якого густина такого пилу в повітрі лише \\(зменшувалася\\).',
    image: image_0406_2,
    variants: [
      { text: '\\([2; 6]\\)', image: null },
      { text: '\\([8; 12]\\)', image: null },
      { text: '\\([12; 14]\\)', image: null },
      { text: '\\([14; 16]\\)', image: null },
      { text: '\\([20; 24]\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено циліндр, прямокутник \\(ABCD\\) \\(-\\) його осьовий переріз. Укажіть відрізок, який є твірною цього циліндра.',
    image: image_0406_3,
    variants: [
      { text: '\\(BC\\)', image: null },
      { text: '\\(AB\\)', image: null },
      { text: '\\(AD\\)', image: null },
      { text: '\\(BD\\)', image: null },
      { text: '\\(AC\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Яке з наведених чисел є коренем рівняння \\(|3x + 2| = 2\\)?<br><br>',
    image: null,
    variants: [
      { text: '\\(-\\frac{1}{3}\\)', image: null },
      { text: '\\(\\frac{3}{2}\\)', image: null },
      { text: '\\(\\frac{4}{3}\\)', image: null },
      { text: '\\(-\\frac{4}{3}\\)', image: null },
      { text: '\\(-\\frac{2}{3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Зовнішній кут при вершині \\(A\\) трикутника \\(ABC\\) дорівнює \\(100^\\circ\\), \\(\\angle C = 20^\\circ\\) (див. рисунок). Визначте градусну міру кута \\(B\\).',
    image: image_0406_5,
    variants: [
      { text: '\\(90^\\circ\\)', image: null },
      { text: '\\(70^\\circ\\)', image: null },
      { text: '\\(80^\\circ\\)', image: null },
      { text: '\\(120^\\circ\\)', image: null },
      { text: '\\(100^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть \\(\\frac{\\sqrt[3]{189}}{\\sqrt[3]{7}} \\).<br><br>',
    image: null,
    variants: [
      { text: '\\(27\\)', image: null },
      { text: '\\(21\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(9\\)', image: null },
      { text: '\\(3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку \\([–3; 3]\\). У яких координатних чвертях розташований графік функції \\(y = f(x – 4)\\)?',
    image: image_0406_7,
    variants: [
      { text: 'лише в I та IV', image: null },
      { text: 'лише в II та III', image: null },
      { text: 'лише в III та IV', image: null },
      { text: 'лише в I та II', image: null },
      { text: 'в усіх чвертях', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть площу бічної поверхні правильної трикутної піраміди, сторона основи якої дорівнює \\(8\\) \\(см\\), а апофема на \\(2\\) \\(см\\) більша за сторону основи піраміди.<br><br>',
    image: null,
    variants: [
      { text: '\\(120\\) \\(см^2\\)', image: null },
      { text: '\\(240\\) \\(см^2\\)', image: null },
      { text: '\\(192\\) \\(см^2\\)', image: null },
      { text: '\\(72\\) \\(см^2\\)', image: null },
      { text: '\\(384\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Існує паралелограм, діагональ якого дорівнює сумі його сусідніх сторін.<br>II. Існує паралелограм, один із кутів якого вдвічі більший за інший кут.<br>III. Існує паралелограм, діагоналі якого перпендикулярні.<br><br>',
    image: null,
    variants: [
      { text: 'лише II', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише II та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Микола частує свою родину фруктовим салагом із яблук, бананів й апельсинів. Для приготування однієї порції салату потрібно \\(1\\) банан, \\(2\\) апельсини та \\(3\\) яблука. Скільки \\(апельсинів\\) використав Микола, якщо він приготував за цим рецептом салат із \\(24\\) фруктів?<br><br>',
    image: null,
    variants: [
      { text: '\\(18\\)', image: null },
      { text: '\\(12\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(8\\)', image: null },
      { text: '\\(4\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено прямокутник \\(ABCD\\). Точка \\(K\\) лежить на стороні \\(AD\\). Визначте довжину сторони \\(AD\\), якщо \\(BK\\) = \\(d\\), \\(\\angle AKB = \\alpha \\), \\(\\angle KCD = \\beta\\).',
    image: image_0406_11,
    variants: [
      { text: '\\(d(sin \\alpha + cos \\alpha tan \\beta)\\)', image: null },
      { text: '\\(d(sin \\alpha + \\frac{cos \\alpha }{ tan \\beta })\\)', image: null },
      { text: '\\(d(cos \\alpha + sin \\alpha sin \\beta)\\)', image: null },
      { text: '\\(d(cos \\alpha + \\frac{sin \\alpha}{tan \\beta})\\)', image: null },
      { text: '\\(d(cos \\alpha + sin \\alpha tan \\beta)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему нерівностей \\(\\begin{cases} 5^x < 25 \\\\ 2 - x < 8 \\end{cases}\\)<br><br>',
    image: null,
    variants: [
      { text: '\\((-6; 2)\\)', image: null },
      { text: '\\((-\\infty; -6)\\)', image: null },
      { text: '\\((2; +\\infty)\\)', image: null },
      { text: '\\((-6; 5)\\)', image: null },
      { text: '\\((2; 6)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить значення виразу \\(\\log_{0.2} 125\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; -3)\\)', image: null },
      { text: '\\([-3; 0)\\)', image: null },
      { text: '\\([0; 3)\\)', image: null },
      { text: '\\([3; 25)\\)', image: null },
      { text: '\\([25; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть корінь рівняння \\(\\tan(3x) = -1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(-\\frac{\\pi}{4}\\)', image: null },
      { text: '\\(-\\frac{\\pi}{12}\\)', image: null },
      { text: '\\(-\\frac{4\\pi}{3}\\)', image: null },
      { text: '\\(-\\frac{\\pi}{3}\\)', image: null },
      { text: '\\(\\frac{\\pi}{12}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В арифметичній прогресії (\\(a_n\\)) відомо, що \\(a_6\\) \\(-\\) \\(a_1\\) = \\(-30\\). Знайдіть значення виразу \\(a_6\\) \\(-\\) \\(a_1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(10\\)', image: null },
      { text: '\\(-15\\)', image: null },
      { text: '\\(-12\\)', image: null },
      { text: '\\(-10\\)', image: null },
      { text: '\\(15\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'До кожного початку речення (1-3) доберіть його закінчення (А-Д) так, щоб утворилося правильне твердження, якщо \\(a=3\\).<br><br>',
    leftTitle: '\\(Початок речення\\)<br><br>',
    rightTitle: '\\(Закінчення речення\\)<br><br>',
    leftOptions: [
      { text: 'Значення виразу \\(a^{-1}\\)' },
      { text: 'Значення виразу \\(a^0\\)' },
      { text: 'Значення виразу \\(sin(\\pi a)\\)' }
    ],
    variants: [
      { text: 'є раціональним нецілим числом' },
      { text: 'є ірраціональним числом' },
      { text: 'є натуральним числом' },
      { text: 'дорівнює нулю' },
      { text: 'є цілим від\'ємним числом' }
    ]
  },
  {
    type: 'matching',
    text: 'У прямокутній декартовій системі координат на площині зображено замкнену ламану \\(ABCA\\), де \\(A(-1; 0)\\), \\(B(0; 1)\\), \\(C(1; 0)\\). Узгодьте функцію (1-3) з кількістю (А-Д) спільних точок її графіка та ламаної \\(ABCA\\).<br><br>',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Кількість спільних точок\\)<br><br>',
    image: image_0406_17,
    leftOptions: [
      { text: '\\(y = 0\\)' },
      { text: '\\(y = 1 - x^2\\)' },
      { text: '\\(y = cos x\\)' }
    ],
    variants: [
      { text: 'жодної' },
      { text: 'лише одна' },
      { text: 'лише дві' },
      { text: 'лише три' },
      { text: 'безліч' }
    ]
  },
  {
    type: 'matching',
    text: 'Навколо кола описано рівнобічну трапецію (див. рисунок), периметр якої дорівнює \\(100\\) \\(см\\). Різниця основ трапеції дорівнює \\(14\\) \\(см\\). До кожного початку речення (1-3) доберіть його закінчення (А-Д) так, щоб утворилося правильне твердження.<br><br>',
    leftTitle: '\\(Початок речення\\)<br><br>',
    rightTitle: '\\(Закінчення речення\\)<br><br>',
    image: image_0406_18,
    leftOptions: [
      { text: 'Довжина середньої лінії трапеції' },
      { text: 'Довжина більшої основи трапеції' },
      { text: 'Довжина висоти трапеції' }
    ],
    variants: [
      { text: 'дорівнює \\(18\\) \\(см\\)' },
      { text: 'дорівнює \\(24\\) \\(см\\)' },
      { text: 'дорівнює \\(25\\) \\(см\\)' },
      { text: 'дорівнює \\(32\\) \\(см\\)' },
      { text: 'дорівнює \\(36\\) \\(см\\)' }
    ]
  },
  {
    text: "Обчисліть інтеграл \\(\\int_{3}^{5} \\frac{x^2 + 2x + 1}{x + 1} dx\\).",
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано правильну чотирикутну призму \\(ABCDA_1B_1C_1D_1\\). Діагоналі основи \\(ABCD\\) перетинаються в точці \\(M\\). Висота призми втричі більша за сторону \\(AB\\). Обчисліть об\'єм цієї призми, якщо \\(A(4; \\sqrt{10}; 3)\\), \\(M(-2; 0; 1)\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'Сергій купив \\(4\\) чорні, \\(6\\) червоних і \\(n\\) синіх ручок по \\(27\\) \\(грн\\), \\(15\\) \\(грн\\) і \\(10\\) \\(грн\\) кожна. Середня ціна однієї купленої ручки виявилася меншою за \\(13\\) \\(грн\\). Укажіть \\(найменше\\) можливе значення \\(n\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'Знайдіть усі значення a, за яких рівняння \\(\\frac{x^2 - ax + 4}{x - 5} = 0\\) має лише один корінь. Якщо таких значень кілька, то запишіть у відповіді їхній \\(добуток\\).',
    type: 'input',
    image: null,
  }
];

  export default tasks;