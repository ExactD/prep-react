import testImage from '../../image/test1.jpg';

import image_1206_1 from '../../image/1206-1.jpg';
import image_1206_2 from '../../image/1206-2.jpg';
import image_1206_5 from '../../image/1206-5.jpg';
import image_1206_7 from '../../image/1206-7.jpg';
import image_1206_12 from '../../image/1206-12.jpg';
import image_1206_18 from '../../image/1206-18.jpg';
import image_1206_19 from '../../image/1206-19.jpg';
import image_1206_21 from '../../image/1206-21.jpg';

const tasks = [
  {
    text: 'Людина купляє першою білет на вагон потяга навмання. У цьому вагоні є \\(60\\) доступних місць, причому спереду і позаду нього є столик, кожен з яких охоплює по \\(4\\) пасажирських місця (див. рисунок). Визначте ймовірність того, що цій людині дістанеться місце за столиком.<br><br>',
    image: image_1206_1,
    variants: [
      { text: '\\(\\frac{1}{30}\\)', image: null },
      { text: '\\(\\frac{1}{60}\\)', image: null },
      { text: '\\(\\frac{4}{15}\\)', image: null },
      { text: '\\(\\frac{2}{15}\\)', image: null },
      { text: '\\(\\frac{1}{10}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено чотирикутну піраміду \\(SABCD\\). Чим є для цієї піраміди відрізок \\(SA\\)?',
    image: image_1206_2,
    variants: [
      { text: 'ребро основи', image: null },
      { text: 'діагональ основи', image: null },
      { text: 'бічне ребро', image: null },
      { text: 'висота', image: null },
      { text: 'апофема', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\((-2x^2)^3 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-8x^6\\)', image: null },
      { text: '\\(-6x^6\\)', image: null },
      { text: '\\(-2x^6\\)', image: null },
      { text: '\\(-8x^5\\)', image: null },
      { text: '\\(-2x^5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему рівнянь \\(\\left\\{ \\begin{array}{cl} \\frac{2}{x} = -0.5 \\\\ \\frac{y}{3} = 2 \\end{array} \\right.\\)<br><br>',
    image: null,
    variants: [
      { text: '\\((6; -4)\\)', image: null },
      { text: '\\((-\\frac{1}{4}; \\frac{2}{3})\\)', image: null },
      { text: '\\(\\left(-\\frac{1}{4}; 6\\right)\\)', image: null },
      { text: '\\(\\left(-4; \\frac{2}{3}\\right)\\)', image: null },
      { text: '\\((-4; 6)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У рівнобедреному трикутнику \\(ABC\\) (\\(AB = BC\\)) \\(\\angle B = 50^\\circ\\) (див. рисунок). Визначте градусну міру зовнішнього кута при вершині \\(A\\).',
    image: image_1206_5,
    variants: [
      { text: '\\(105^\\circ\\)', image: null },
      { text: '\\(125^\\circ\\)', image: null },
      { text: '\\(115^\\circ\\)', image: null },
      { text: '\\(95^\\circ\\)', image: null },
      { text: '\\(130^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть формулу для обчислення об\'єму \\(V\\) конуса, радіус основи якого дорівнює \\(R\\), а висота конуса - \\(6R\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(V = 6\\pi R^3\\)', image: null },
      { text: '\\(V = 12\\pi R^3\\)', image: null },
      { text: '\\(V = 6\\pi R^2\\)', image: null },
      { text: '\\(V = 2\\pi R^3\\)', image: null },
      { text: '\\(V = 12\\pi R^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть з-поміж наведених функцію, ескіз графіка якої зображено на рисунку.',
    image: image_1206_7,
    variants: [
      { text: '\\(y = x^2 - 2\\)', image: null },
      { text: '\\(y = (x - 2)^2\\)', image: null },
      { text: '\\(y = x^2\\)', image: null },
      { text: '\\(y = (x + 2)^2\\)', image: null },
      { text: '\\(y = x^2 + 2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Вартість транспортування \\(P\\) (у \\(грн\\)) вантажу пов\'язана з відстанню \\(x\\) (у \\(км\\)) його перевезення співвідношенням \\(P(x) = 270 + 30 \\cdot x\\). Знайдіть вартість перевезення вантажу на відстань \\(40\\) \\(км\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(12000\\) \\(грн\\)', image: null },
      { text: '\\(1470\\) \\(грн\\)', image: null },
      { text: '\\(340\\) \\(грн\\)', image: null },
      { text: '\\(1270\\) \\(грн\\)', image: null },
      { text: '\\(970\\) \\(грн\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Середня лінія трапеції дорівнює півсумі її бічних сторін.<br>II. Середня лінія трапеції ділить трапецію на рівні за площею фігури.<br>III. Середня лінія трапеції паралельна її основам.<br><br>',
    image: null,
    variants: [
      { text: 'лише I та II', image: null },
      { text: 'лише I', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише III', image: null },
      { text: 'лише II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{3\\cos^2 150^\\circ - 3}{\\sin 150^\\circ} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{3}{2}\\)', image: null },
      { text: '\\(\\frac{3\\sqrt{3}}{2}\\)', image: null },
      { text: '\\(-\\frac{3}{2}\\)', image: null },
      { text: '\\(-\\frac{3\\sqrt{3}}{2}\\)', image: null },
      { text: '\\(-3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(\\log_{0.9}(3x) > 2\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; 0.27)\\)', image: null },
      { text: '\\((-\\infty; 0.6)\\)', image: null },
      { text: '\\((0.27; +\\infty)\\)', image: null },
      { text: '\\((0.6; +\\infty)\\)', image: null },
      { text: '\\((0; 0.27)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На стороні \\(BC\\) паралелограма \\(ABCD\\) вибрано точку \\(M\\) так, що \\(BM = MC\\), \\(\\angle CDM = 90^\\circ\\) (див. рисунок). Знайдіть площу паралелограма \\(ABCD\\), якщо \\(MD = d\\), \\(\\angle A = \\alpha\\).',
    image: image_1206_12,
    variants: [
      { text: '\\(\\frac{2d^2}{\\tan \\alpha}\\)', image: null },
      { text: '\\({2d^2 \\cos \\alpha}{\\sin 2\\alpha}\\)', image: null },
      { text: '\\(\\frac{4d^2}{\\sin 2\\alpha}\\)', image: null },
      { text: '\\(\\frac{2d^2}{\\sin \\alpha}\\)', image: null },
      { text: '\\({2d^2 \\tan \\alpha}{\\sin \\alpha}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\((a^2 - b^2)(a - b)^{-1}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{(a + b)}\\)', image: null },
      { text: '\\(a - b\\)', image: null },
      { text: '\\(\\frac{a + b}{(a - b)^2}\\)', image: null },
      { text: '\\(a + b\\)', image: null },
      { text: '\\(\\frac{1}{(a - b)}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть похідну функції \\(f(x) = 6\\sqrt{x} - 8\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(f\'(x) = 4\\sqrt{x}^3 - 8x\\)', image: null },
      { text: '\\(f\'(x) = 3\\sqrt{x} - 8\\)', image: null },
      { text: '\\(f\'(x) = \\frac{3}{\\sqrt{x}}\\)', image: null },
      { text: '\\(f\'(x) = 3\\sqrt{x}\\)', image: null },
      { text: '\\(f\'(x) = \\frac{3}{\\sqrt{x}} - 8x\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть суму коренів рівняння \\(5(x + 3)^2 = 125\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(10\\)', image: null },
      { text: '\\(-6\\)', image: null },
      { text: '\\(0\\)', image: null },
      { text: '\\(-16\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та проміжком (A – Д), якому належить значення цього виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Проміжок\\)<br><br>',
    leftOptions: [
      { text: '\\(\\tan \\frac{\\pi}{3}\\)' },
      { text: '\\(1 - \\pi\\)' },
      { text: '\\(\\left(\\frac{1}{2}\\right)^{\\log_2 \\pi}\\)' },
    ],
    variants: [
      { text: '[\\(-5\\); \\(-2\\))' },
      { text: '[\\(-2\\); \\(0\\))' },
      { text: '[\\(0\\); \\(1\\))' },
      { text: '[\\(1\\); \\(2\\))' },
      { text: '[\\(2\\); \\(5\\))' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та властивістю її графіка (A – Д).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Властивість\\) \\(графіка\\) \\(функції\\)<br><br>',
    leftOptions: [
      { text: '\\(y = \\sqrt{x + 4}\\)' },
      { text: '\\(y = \\frac{4}{x}\\)' },
      { text: '\\(y = 4^x\\)' },
    ],
    variants: [
      { text: 'розташований лише в першій чверті' },
      { text: 'має спільну точку з віссю \\(x\\)' },
      { text: 'проходить через точку \\((0; 1)\\)' },
      { text: 'не перетинає вісь \\(y\\)' },
      { text: 'симетричний відносно осі \\(y\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'У ромбі \\(ABCD\\) точки \\(K\\) і \\(M\\) є серединами сторін \\(AD\\) і \\(CD\\) відповідно, \\(BO\\) - перпендикуляр, проведений до відрізка \\(KM\\) (див. рисунок). \\(BO = 18\\) см, \\(KM = 16\\) см. До кожного відрізка (1–3) доберіть його довжину (A – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_1206_18,
    leftOptions: [
      { text: '\\(BD\\)' },
      { text: '\\(AC\\)' },
      { text: 'сторона ромба' },
    ],
    variants: [
      { text: '\\(20\\) см' },
      { text: '\\(24\\) см' },
      { text: '\\(32\\) см' },
      { text: '\\(36\\) см' },
      { text: '\\(40\\) см' },
    ]
  },
  {
    text: 'Обчисліть \\(\\int_{0}^{7} f(x)dx\\), використавши зображений на рисунку графік лінійної функції \\(y = f(x)\\).',
    type: 'input',
    image: image_1206_19,
  },
  {
    text: 'У прямокутній системі координат у просторі задано куб \\(ABCDA_1B_1C_1D_1\\). Точки \\(K(3; -8; 5)\\) і \\(M(1; -6; -3)\\) є точками перетину діагоналей граней \\(ABCD\\) і \\(DD_1C_1C\\) відповідно. Визначте площу \\(повної\\) поверхні цього куба.',
    type: 'input',
    image: null,
  },
  {
    text: 'Було проведено опитування серед учнів \\(5\\) класу про те, скільки приблизно годин на день кожен з них витрачає на соціальні мережі. Відповіді учнів відображено на діаграмі (див. рисунок). Психолог зазначив, що рекомендована кількість часу на користування соціальними мережами дорівнює \\(2\\) \\(години\\). На скільки відсотків середня кількість годин користування учнями соціальними мережами перевищує рекомендовану?',
    type: 'input',
    image: image_1206_21,
  },
  {
    text: 'Знайдіть \\(найбільше\\) значення параметра \\(a\\), за якого не має коренів рівняння \\(3^x + (4a^2 + 10a) \\cdot 3^{-x} = 4a + 5\\).',
    type: 'input',
    image: null,
  },
];

  export default tasks;