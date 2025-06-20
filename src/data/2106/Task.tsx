import testImage from '../../image/test1.jpg';

import image_2106_1 from '../../image/2106-1.jpg';
import image_2106_3 from '../../image/2106-3.jpg';
import image_2106_6 from '../../image/2106-6.jpg';
import image_2106_7 from '../../image/2106-7.jpg';
import image_2106_12 from '../../image/2106-12.jpg';

const tasks = [
  {
    text: 'На діаграмі відображено інформацію щодо результатів контрольної роботи учнів \\(11\\)-го класу. Користуючись діаграмою, визначте кількість учнів, які отримали оцінки від \\(7\\) до \\(12\\) включно.',
    image: image_2106_1,
    variants: [
      { text: '\\(22\\)', image: null },
      { text: '\\(21\\)', image: null },
      { text: '\\(19\\)', image: null },
      { text: '\\(14\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(-7(5x + y) =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-35x - 7y\\)', image: null },
      { text: '\\(35x + y\\)', image: null },
      { text: '\\(-35x + y\\)', image: null },
      { text: '\\(-2x + y\\)', image: null },
      { text: '\\(-35x + 7y\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено конус, трикутник \\(ASB\\) – його осьовий переріз. Укажіть відрізок, який є твірною цього конуса.',
    image: image_2106_3,
    variants: [
      { text: '\\(OB\\)', image: null },
      { text: '\\(SB\\)', image: null },
      { text: '\\(AB\\)', image: null },
      { text: '\\(SO\\)', image: null },
      { text: '\\(AO\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(4(x - 2) ≤ 2\\).<br><br>',
    image: null,
    variants: [
      { text: '[\\(2,5\\); \\(+\\infty\\))', image: null },
      { text: '(\\(-\\infty\\); \\(1\\)]', image: null },
      { text: '(\\(-\\infty\\); \\(1,5\\)]', image: null },
      { text: '[\\(1\\); \\(+\\infty\\))', image: null },
      { text: '(\\(-\\infty\\); \\(2,5\\)]', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Фільм з бюджетом \\(80\\) млн гривень за перший тиждень прокату заробив \\(6\\) млн гривень. Який відсоток від вартості фільму становить прокат фільму за цей тиждень?<br><br>',
    image: null,
    variants: [
      { text: '\\(5\\)%', image: null },
      { text: '\\(7,5\\)%', image: null },
      { text: '\\(6\\)%', image: null },
      { text: '\\(0,75\\)%', image: null },
      { text: '\\(74\\)%', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутній системі координат \\(xy\\) відрізок \\(OA\\) утворює з віссю \\(y\\) кут \\(15^\\circ\\), \\(O\\) – початок координат. Точка \\(B\\) належить осі \\(y\\). Визначте градусну міру кута \\(AOB\\).',
    image: image_2106_6,
    variants: [
      { text: '\\(165^\\circ\\)', image: null },
      { text: '\\(155^\\circ\\)', image: null },
      { text: '\\(175^\\circ\\)', image: null },
      { text: '\\(105^\\circ\\)', image: null },
      { text: '\\(115^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-5\\); \\(5\\)]. Укажіть різницю між найбільшим і найменшим значенням функції \\(f(x)\\) на проміжку [\\(0\\); \\(5\\)].',
    image: image_2106_7,
    variants: [
      { text: '\\(7\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(8\\)', image: null },
      { text: '\\(10\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть \\(18^5 \\cdot 9^{-5}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(0\\)', image: null },
      { text: '\\(10\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(32\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Діагоналі будь-якого прямокутника ділять його кути навпіл.<br>II. Діагоналі будь-якої рівнобічної трапеції ділять її кути навпіл.<br>III. Діагоналі будь-якого прямокутника рівні.<br><br>',
    image: null,
    variants: [
      { text: 'лише I та II', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише II та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В основі прямої трикутної призми лежить прямокутний трикутник зі сторонами \\(3\\) \\(см\\), \\(4\\) \\(см\\), \\(5\\) \\(см\\). Знайдіть площу \\(повної\\) призми, якщо її висота дорівнює \\(6\\) \\(см\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(60\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(72\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(84\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(36\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(96\\) \\(см\\)\\(^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть корінь рівняння \\(\\cos (2x) = -1\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\pi\\)', image: null },
      { text: '\\(\\frac{3\\pi}{2}\\)', image: null },
      { text: '\\(2\\pi\\)', image: null },
      { text: '\\(\\frac{\\pi}{6}\\)', image: null },
      { text: '\\(\\frac{2\\pi}{3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На сторонах \\(AD\\) й \\(BC\\) паралелограма \\(ABCD\\) вибрано відповідно точки \\(P\\) й \\(K\\) так, що трикутник \\(PKD\\) є правильним, \\(BP \\perp AD\\) (див. рисунок). Визначте площу паралелограма \\(ABCD\\), якщо \\(PK = 6\\), \\(\\angle ABP = \\alpha\\).',
    image: image_2106_12,
    variants: [
      { text: '\\(18\\sqrt{3} + \\frac{9}{tg \\alpha}\\)', image: null },
      { text: '\\(18 + 9 tg \\alpha\\)', image: null },
      { text: '\\(18\\sqrt{3} + 9 tg \\alpha\\)', image: null },
      { text: '\\(18 + 27 tg \\alpha\\)', image: null },
      { text: '\\(18\\sqrt{3} + 27 tg \\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{4y^2 - x^2}{3x^2 - 6xy -5x +10y} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{2y - x}{3x - 5}\\)', image: null },
      { text: '\\(\\frac{2y - x}{3x + 5}\\)', image: null },
      { text: '\\(\\frac{2y + x}{3x - 5}\\)', image: null },
      { text: '\\(\\frac{2y + x}{5 - 3x}\\)', image: null },
      { text: '\\(\\frac{2y + x}{3x + 5}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У геометричній прогресії \\((b_n)\\) відомо, що \\(b_1 = 32\\), \\(b_2 = 8\\). Визначте \\(b_5\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{2}\\)', image: null },
      { text: '\\(\\frac{1}{4}\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(\\frac{1}{8}\\)', image: null },
      { text: '\\(\\frac{1}{16}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему рівнянь \\(\\begin{cases} \\sqrt{y} - \\frac{6}{x} = 6 \\\\ \\sqrt{y} + \\frac{4}{x} = 1 \\end{cases}\\). Якщо \\((x_0; y_0)\\) – розв\'язок системи, то \\(x_0 + y_0 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-2\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(9\\)', image: null },
      { text: '\\(83\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\)<br><br>',
    leftOptions: [
      { text: '\\((\\sqrt{3} - 1)^2\\)' },
      { text: '\\(\\sqrt[3]{-8^2}\\)' },
      { text: '\\({\\frac{\\sqrt{12}}{\\sqrt{3}}}\\)' },
    ],
    variants: [
      { text: 'є ірраціональним додатним числом' },
      { text: 'є ірраціональним від\'ємним числом' },
      { text: 'дорівнює 0' },
      { text: 'є натуральним числом' },
      { text: 'є цілим від\'ємним числом' },
    ]
  },
  {
    type: 'matching',
    text: 'До кожного початку речення (1–3) доберіть його закінчення (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    leftOptions: [
      { text: 'Графік функції \\(y = 2x\\)' },
      { text: 'Графік функції \\(y = \\log_2 x\\)' },
      { text: 'Графік функції \\(y = 2^x\\)' },
    ],
    variants: [
      { text: 'симетричний відносно осі абсцис' },
      { text: 'симетричний відносно осі ординат' },
      { text: 'симетричний відносно початку координат' },
      { text: 'не перетинає вісь абсцис' },
      { text: 'не перетинає вісь ординат' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між геометричною фігурою (1–3) та радіусом кола (А–Д), вписаного в цю фігуру.',
    leftTitle: '\\(Геометрична\\) \\(фігура\\)<br><br>',
    rightTitle: '\\(Радіус\\) \\(кола\\)<br><br>',
    leftOptions: [
      { text: 'ромб з висотою \\(4\\) \\(см\\)' },
      { text: 'трикутник з площею \\(24\\) \\(см\\)\\(^2\\) та периметром \\(12\\) \\(см\\)' },
      { text: 'квадрат з периметром \\(64\\) \\(см\\)' },
    ],
    variants: [
      { text: '\\(4\\) \\(см\\)' },
      { text: '\\(\\sqrt{3}\\) \\(см\\)' },
      { text: '\\(8\\) \\(см\\)' },
      { text: '\\(6\\) \\(см\\)' },
      { text: '\\(2\\) \\(см\\)' },
    ]
  },
  {
    text: 'Задано функцію \\(f(x) = 81\\sqrt{x} - \\frac{81}{x} + \\ln 5\\). Обчисліть \\(f\'(9)\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано правильну чотирикутну піраміду \\(SABCD\\), \\(A(15; 1; 10)\\), \\(B(-1; 5; 6)\\). Усі ребра піраміди рівні. Знайдіть об\'єм цієї піраміди.',
    type: 'input',
    image: null,
  },
  {
    text: 'Партія складалася з \\(9\\) кавунів середньою масою \\(12\\) \\(кг\\). До цієї партії додали один херсонський кавун масою \\(23\\) \\(кг\\). Визначте середню масу (у \\(кг\\)) в партії з \\(10\\) кавунів.',
    type: 'input',
    image: null,
  },
  {
    text: 'Знайдіть \\(найменше\\) ціле значення параметра \\(a\\), за якого рівняння \\((2a - 1) \\cdot 25^{x} - (4a + 8) \\cdot 5^{x} + 20 = 0\\) має два різних корені, з яких один додатний, а другий – від\'ємний.',
    type: 'input',
    image: null,
  },
];

  export default tasks;