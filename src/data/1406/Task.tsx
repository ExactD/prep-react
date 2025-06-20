import testImage from '../../image/test1.jpg';

import image_1406_1 from '../../image/1406-1.jpg';
import image_1406_2 from '../../image/1406-2.jpg';
import image_1406_4 from '../../image/1406-4.jpg';
import image_1406_5 from '../../image/1406-5.jpg';
import image_1406_11_1 from '../../image/1406-11-1.jpg';
import image_1406_11_2 from '../../image/1406-11-2.jpg';
import image_1406_11_3 from '../../image/1406-11-3.jpg';
import image_1406_11_4 from '../../image/1406-11-4.jpg';
import image_1406_11_5 from '../../image/1406-11-5.jpg';
import image_1406_14 from '../../image/1406-14.jpg';
import image_1406_18 from '../../image/1406-18.jpg';

const tasks = [
  {
    text: 'Група туристів рухається у напрямку \\(OA\\), утворюючи кут \\(15^\\circ\\) із напрямком «північ» (див. рисунок). На який кут \\(\\alpha\\) потрібно повернути цій групі, щоб вони рухалися в напрямку «захід»?',
    image: image_1406_1,
    variants: [
      { text: '\\(95^\\circ\\)', image: null },
      { text: '\\(105^\\circ\\)', image: null },
      { text: '\\(115^\\circ\\)', image: null },
      { text: '\\(75^\\circ\\)', image: null },
      { text: '\\(85^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Хлопчик рибалив і зловив різні риби. Результати його риболовлі зображені на круговій діаграмі. Користуючись діаграмою, визначте кількість зловлених лящів.',
    image: image_1406_2,
    variants: [
      { text: '\\(10\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(8\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\(3x^2 \\cdot (2x - 7)\\).',
    image: null,
    variants: [
      { text: '\\(6x^3 - 21x^2\\)', image: null },
      { text: '\\(6x^3 - 7\\)', image: null },
      { text: '\\(6x^2 - 21\\)', image: null },
      { text: '\\(6x^2 - 7\\)', image: null },
      { text: '\\(6x^3 - 21\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено прямокутний паралелепіпед \\(ABCDA_1B_1C_1D_1\\). Яка з наведених прямих лежить в одній площині з прямою \\(CC_1\\)?',
    image: image_1406_4,
    variants: [
      { text: '\\(AB\\)', image: null },
      { text: '\\(DB_1\\)', image: null },
      { text: '\\(A_1D_1\\)', image: null },
      { text: '\\(BD\\)', image: null },
      { text: '\\(AA_1\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку \\([-5; 5]\\). Скільки всього точок екстремуму має ця функція на проміжку \\([-5; 5]\\)?',
    image: image_1406_5,
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
    text: 'В одному грамі ґрунту міститься близько \\(4 \\cdot 10^7\\) бактерій. Скільки бактерій міститься в одному кілограмі ґрунту?',
    image: null,
    variants: [
      { text: '\\(4 \\cdot 10^{10}\\)', image: null },
      { text: '\\(4 \\cdot 10^{21}\\)', image: null },
      { text: '\\(4 \\cdot 10^9\\)', image: null },
      { text: '\\(4 \\cdot 10^{14}\\)', image: null },
      { text: '\\(4000 \\cdot 10^{10}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(5^x \\leq 1\\).',
    image: null,
    variants: [
      { text: '\\([0; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; 1]\\)', image: null },
      { text: '\\((-\\infty; 0]\\)', image: null },
      { text: '\\((-\\infty; \\frac{1}{5})\\)', image: null },
      { text: '\\([1; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Визначте площу сфери, діаметр якої дорівнює \\(18\\) \\(см\\).',
    image: null,
    variants: [
      { text: '\\(54\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(108\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(324\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(658\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(972\\pi\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть \\(\\frac{33^4}{9 \\cdot 11^3}\\).',
    image: null,
    variants: [
      { text: '\\(\\frac{9}{11}\\)', image: null },
      { text: '\\(99\\)', image: null },
      { text: '\\(33\\)', image: null },
      { text: '\\(\\frac{11}{9}\\)', image: null },
      { text: '\\(990\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними? <br><br> I. У будь-яку рівнобічну трапецію можна вписати коло.<br> II. Довжина радіуса вписаного в ромб кола дорівнює половині його висоти.<br> III. Навколо будь-якої рівнобічної трапеції можна описати коло.',
    image: null,
    variants: [
      { text: 'лише II', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише II та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть рисунок, на якому може бути зображений графік первісної для функції \\(f(x) = -3\\).',
    image: null,
    variants: [
      { text: ' ', image: image_1406_11_1 },
      { text: ' ', image: image_1406_11_2 },
      { text: ' ', image: image_1406_11_3 },
      { text: ' ', image: image_1406_11_4 },
      { text: ' ', image: image_1406_11_5 }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(\\sqrt{7 - 2x} = 3\\).',
    image: null,
    variants: [
      { text: '\\((-\\infty; -8]\\)', image: null },
      { text: '\\((-8; -1]\\)', image: null },
      { text: '\\((-1; 1]\\)', image: null },
      { text: '\\((1; 8]\\)', image: null },
      { text: '\\((8; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(2 - 2\\cos^2\\alpha - \\sin^2\\alpha =\\)',
    image: null,
    variants: [
      { text: '\\(-3\\sin^2\\alpha\\)', image: null },
      { text: '\\(-\\sin^2\\alpha\\)', image: null },
      { text: '\\(3\\sin^2\\alpha\\)', image: null },
      { text: '\\(\\sin^2\\alpha\\)', image: null },
      { text: '\\(\\cos^2\\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутнику \\(ABCD\\) вибрано точки \\(K\\) і \\(L\\) так, що \\(AL = LD\\), \\(LK\\) – бісектриса кута \\(CLD\\) (див. рисунок). Знайдіть площу цього прямокутника, якщо \\(LK = d\\), \\(\\angle KLD = \\beta\\). ',
    image: image_1406_14,
    variants: [
      { text: '\\(\\frac{2d^2 cos^2 \\beta}{tg2 \\beta}\\)', image: null },
      { text: '\\(2d^2 sin^2 \\beta tg2\\beta\\)', image: null },
      { text: '\\(\\frac{2d^2 tg2 \\beta}{cos^2 \\beta}\\)', image: null },
      { text: '\\(\\frac{2d^2 sin^2 \\beta}{tg2 \\beta}\\)', image: null },
      { text: '\\(2d^2 cos^2 \\beta tg2\\beta\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть різницю найбільшого і найменшого коренів рівняння \\(4x^4 - 5x^2 - 9 = 0\\).',
    image: null,
    variants: [
      { text: '\\(3\\)', image: null },
      { text: '\\(3.25\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(-3\\)', image: null },
      { text: '\\(2.25\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним, якщо \\( e \\approx 2,7 \\).',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\) \\(про\\) \\(значення\\) \\(виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(2e \\cdot \\frac{1}{e}\\)' },
      { text: '\\((e-1)(e+1)\\)' },
      { text: '\\(\\ln\\left(\\sqrt{e\\cdot e^{-\\frac{1}{2}}}\\right)\\)' }
    ],
    variants: [
      { text: 'є простим числом' },
      { text: 'є цілим від\'ємним числом' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'є нецілим додатним числом' },
      { text: 'є нецілим від\'ємним числом' }
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та кількістю спільних точок (А – Д) її графіка з прямою \\( y = x \\).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Кількість\\) \\(спільних\\) \\(точок\\)<br><br>',
    leftOptions: [
      { text: '\\( y = \\frac{1}{x} \\)' },
      { text: '\\( y = x + 3 \\)' },
      { text: '\\( y = tg x \\)' }
    ],
    variants: [
      { text: 'жодної' },
      { text: 'одна' },
      { text: 'дві' },
      { text: 'три' },
      { text: 'безліч' }
    ]
  },
  {
    type: 'matching',
    text: 'Діагоналі \\( AC \\) і \\( BD \\) паралелограма \\( ABCD \\) перетинаються в точці \\( O \\) (див. рисунок). З точки \\( O \\) на сторону \\( AD \\) опущено перпендикуляр \\( OK = 12 \\) \\(см\\), \\( AK = 22 \\) \\(см\\), \\( KD = 15 \\) \\(см\\). До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    image: image_1406_18,
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    leftOptions: [
      { text: 'Висота, проведена до \\( AD \\)' },
      { text: 'Проєкція \\( AB \\) на \\( AD \\)' },
      { text: '\\( AB \\)' }
    ],
    variants: [
      { text: '\\(7\\) \\(см\\)' },
      { text: '\\(9\\) \\(см\\)' },
      { text: '\\(24\\) \\(см\\)' },
      { text: '\\(25\\) \\(см\\)' },
      { text: '\\(30\\) \\(см\\)' }
    ]
  },
  {
    text: 'Знайдіть похідну функції \\( f(x) = \\frac{x^2 - 5}{3x + 1} \\) у точці з абсцисою \\( x_0 = 3 \\).',
    type: 'input',
    image: null
  },
  {
    text: 'У прямокутній системі координат у просторі задано конус з вершиною \\( M(-6; -9; 7) \\), осьовим перерізом якого є прямокутний трикутник \\( AMB \\), \\( A(6; -12; 4) \\). Обчисліть об\'єм \\( V \\) цього конуса. У відповідь запишіть значення \\(\\frac{V}{\\pi}\\).',
    type: 'input',
    image: null
  },
  {
    text: 'У дитячому таборі відпочивають \\(10\\) дівчат і \\(5\\) хлопців. Відомо, що середній зріст дівчат складає \\(142,3\\) \\(см\\), а середній зріст хлопців - \\(138,4\\) \\(см\\). Знайдіть середній зріст (у \\(см\\)) усіх дітей у таборі.',
    type: 'input',
    image: null
  },
  {
    text: 'Знайдіть <i>найменше</i> ціле значення \\( a \\), за якого розв\'язок \\( (x_0; y_0) \\) системи рівнянь \\(\\begin{cases} \\log_3(xy) = a - 13, \\\\ \\log_3 x - \\log_3 y = 3a - 3 \\end{cases}\\) <br><br> задовольняє умову \\(\\begin{cases} x_0 < 1, \\\\ y_0 < 1. \\end{cases}\\)',
    type: 'input',
    image: null
  },
];

  export default tasks;