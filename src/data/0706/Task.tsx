import testImage from '../../image/test1.jpg';

import image_0706_2 from '../../image/0706-2.jpg';
import image_0706_3 from '../../image/0706-3.jpg';
import image_0706_4 from '../../image/0706-4.jpg';
import image_0706_9 from '../../image/0706-9.jpg';
import image_0706_10_1 from '../../image/0706-10-1.jpg';
import image_0706_10_2 from '../../image/0706-10-2.jpg';
import image_0706_10_3 from '../../image/0706-10-3.jpg';
import image_0706_10_4 from '../../image/0706-10-4.jpg';
import image_0706_10_5 from '../../image/0706-10-5.jpg';
import image_0706_14 from '../../image/0706-14.jpg';
import image_0706_16 from '../../image/0706-16.jpg';
import image_0706_17 from '../../image/0706-17.jpg';
import image_0706_18 from '../../image/0706-18.jpg';

const tasks = [
  {
    text: 'Обчисліть вираз \\(\\left(\\frac{4}{5}a^5\\right)^3 = \\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{12}{125}a^{15}\\)', image: null },
      { text: '\\(\\frac{64}{125}a^{15}\\)', image: null },
      { text: '\\(\\frac{12}{125}a^8\\)', image: null },
      { text: '\\(\\frac{64}{125}a^{125}\\)', image: null },
      { text: '\\(\\frac{64}{125}a^8\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Точки \\(A\\) та \\(B\\) лежать на сфері, причому \\(AB = 10\\) см (див. рисунок). Укажіть із-поміж наведених \\(найменше\\) можливе значення радіуса цієї сфери.',
    image: image_0706_2,
    variants: [
      { text: '\\(4\\) см', image: null },
      { text: '\\(3\\) см', image: null },
      { text: '\\(6\\) см', image: null },
      { text: '\\(11\\) см', image: null },
      { text: '\\(8\\) см', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Хлопчик вирішив порахувати \\(200\\) цифр після коми числа \\(\\pi\\) і подав це у вигляді графіка (див. рисунок). Визначте, яка цифра зустрічалася найчастіше за інші.',
    image: image_0706_3,
    variants: [
      { text: '\\(7\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(8\\)', image: null },
      { text: '\\(9\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено рівнобічну трапецію \\(ABCD\\) (\\(BC \\parallel AD\\)), \\(\\angle DAB = 28^\\circ\\) (див. рисунок). Знайдіть градусну міру кута \\(BCD\\).',
    image: image_0706_4,
    variants: [
      { text: '\\(62^\\circ\\)', image: null },
      { text: '\\(162^\\circ\\)', image: null },
      { text: '\\(118^\\circ\\)', image: null },
      { text: '\\(142^\\circ\\)', image: null },
      { text: '\\(152^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(18x = 9\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; -10]\\)', image: null },
      { text: '\\((-10; 0]\\)', image: null },
      { text: '\\((0; 1]\\)', image: null },
      { text: '\\((1; 10]\\)', image: null },
      { text: '\\((10; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Визначте площу \\(бічної\\) поверхні циліндра, довжина кола основи якого дорівнює \\(16\\pi\\) см, а твірна дорівнює \\(15\\) см.<br><br>',
    image: null,
    variants: [
      { text: '\\(240\\pi\\) см²', image: null },
      { text: '\\(960\\pi\\) см²', image: null },
      { text: '\\(60\\pi\\) см²', image: null },
      { text: '\\(368\\pi\\) см²', image: null },
      { text: '\\(120\\pi\\) см²', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Заробітна плата працівника становить \\(9000\\) грн. Із цієї суми він сплачує до державного бюджету \\(18\\%\\) податку. Знайдіть суму податку, який буде вирахувано із заробітної плати цього працівника.<br><br>',
    image: null,
    variants: [
      { text: '\\(162\\) грн', image: null },
      { text: '\\(900\\) грн', image: null },
      { text: '\\(1440\\) грн', image: null },
      { text: '\\(1620\\) грн', image: null },
      { text: '\\(500\\) грн', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\((\\frac{1}{3})^{x-7} = \\sqrt{3}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\([-7; -6]\\)', image: null },
      { text: '\\((-6; -4]\\)', image: null },
      { text: '\\((-4; 4]\\)', image: null },
      { text: '\\((4; 7]\\)', image: null },
      { text: '\\((7; 10]\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними для будь-якого ромба \\(ABCD\\) (див. рисунок)?<br><br>I. \\(\\angle ABD = \\angle CBD\\).<br>II. Точки \\(B\\) і \\(D\\) симетричні відносно прямої \\(AC\\).<br>III. Висота ромба, проведена з вершини \\(B\\) до сторони \\(AD\\), є бісектрисою трикутника \\(ABD\\).<br><br>',
    image: image_0706_9,
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
    text: 'На якому з наведених рисунків зображено ескіз графіка функції \\(y = -\\frac{2}{x}\\)?',
    image: null,
    variants: [
      { text: 'A', image: image_0706_10_1 },
      { text: 'Б', image: image_0706_10_2 },
      { text: 'В', image: image_0706_10_3 },
      { text: 'Г', image: image_0706_10_4 },
      { text: 'Д', image: image_0706_10_5 }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{x^5 \\cdot x^{-2}}{x^{-5}} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(x^2\\)', image: null },
      { text: '\\(x^{12}\\)', image: null },
      { text: '\\(x^{15}\\)', image: null },
      { text: '\\(x^{-2}\\)', image: null },
      { text: '\\(x^8\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(x^2 - 8 < 6x + 8\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-2; 8)\\)', image: null },
      { text: '\\((-\\infty; -2) \\cup (8; +\\infty)\\)', image: null },
      { text: '\\((0; 6)\\)', image: null },
      { text: '\\((-\\infty; -2)\\)', image: null },
      { text: '\\((-8; 2)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\sqrt{(\\sqrt{7} - 3)^2} =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\sqrt{7} + 3\\)', image: null },
      { text: '\\(\\sqrt{7} - 3\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(-\\sqrt{7} - 3\\)', image: null },
      { text: '\\(3 - \\sqrt{7}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) з гострим кутом \\(\\angle A = \\alpha\\) проведено висоту \\(BK\\) і відрізок \\(KC\\), трикутник \\(KDC\\) є рівнобедреним (див. рисунок). Визначте площу паралелограма \\(ABCD\\), якщо \\(KD = 6\\).',
    image: image_0706_14,
    variants: [
      { text: '\\(36\\left(1 + \\frac{1}{\\sin\\alpha}\\right)\\frac{1}{\\cos\\alpha}\\)', image: null },
      { text: '\\(12(2 + \\cos\\alpha)\\)', image: null },
      { text: '\\(18(1 + \\tan\\alpha)\\sin\\alpha\\)', image: null },
      { text: '\\(36(1 + \\cos\\alpha)\\sin\\alpha\\)', image: null },
      { text: '\\(36(1 + \\sin\\alpha)\\cos\\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В арифметичній прогресії \\((a_n)\\) перший член \\(a_1 = -9,4\\), різниця \\(d = 1,5\\). Укажіть член цієї прогресії, що належить проміжку \\((2; 4)\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(2,4\\)', image: null },
      { text: '\\(2,6\\)', image: null },
      { text: '\\(2,9\\)', image: null },
      { text: '\\(3,1\\)', image: null },
      { text: '\\(3,6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та точкою (А – Д) на координатній прямій (див. рисунок), координатою якої є значення цього виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Точка\\)<br><br>',
    image: image_0706_16,
    leftOptions: [
      { text: '\\(\\sin^2\\frac{\\pi}{6} + \\cos^2\\frac{\\pi}{6}\\)' },
      { text: '\\(\\frac{\\pi^2 - 4}{\\pi - 2} - \\pi\\)' },
      { text: '\\(\\log_3 \\pi^0\\)' },
    ],
    variants: [
      { text: '\\(K\\)', image: null },
      { text: '\\(L\\)', image: null },
      { text: '\\(M\\)', image: null },
      { text: '\\(N\\)', image: null },
      { text: '\\(P\\)', image: null },
    ]
  },
  {
    type: 'matching',
    text: 'На кожному з рисунків (1–3) зображено графік функції \\(y = f(x)\\), визначеної на проміжку [–3; 3]. Узгодьте рисунок (1–3) з твердженням (А – Д) щодо функції \\(y = f(x)\\), графік якої зображено на цьому рисунку.',
    leftTitle: '\\(Рисунок\\)<br><br>',
    rightTitle: '\\(Твердження\\)<br><br>',
    image: image_0706_17,
    leftOptions: [
      { text: 'Рис. 1' },
      { text: 'Рис. 2' },
      { text: 'Рис. 3' },
    ],
    variants: [
      { text: 'графік функції \\(f\\) є фрагментом кола \\(x^2 + (y - 1)^2 = 9\\)' },
      { text: 'графік функції \\(f\\) є фрагментом кола \\(x^2 + (y + 1)^2 = 9\\)' },
      { text: 'функція \\(f\\) зростає на області визначення' },
      { text: 'графік функції \\(y = f(x) + 2\\) розташований лише в I і II чвертях' },
      { text: 'графік функції \\(f\\) має лише одну спільну точку з графіком функції \\(y = 2^x\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'У рівносторонньому трикутнику \\(ABC\\) \\(AB = 24\\) см. З точки \\(K\\), що є серединою сторони \\(AB\\), на сторону \\(AC\\) опущено перпендикуляр \\(KM\\) (див. рисунок). До кожного початку речення (1–3) доберіть його закінчення (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок\\) \\(речення\\)<br><br>',
    rightTitle: '\\(Закінчення\\) \\(речення\\)<br><br>',
    image: image_0706_18,
    leftOptions: [
      { text: 'Відстань від точки \\(K\\) до середини сторони \\(BC\\)' },
      { text: 'Відстань від точки \\(M\\) до прямої \\(BC\\)' },
      { text: 'Сума радіусів описаного та вписаного в цей трикутник кіл' },
    ],
    variants: [
      { text: 'дорівнює \\(12\\) см' },
      { text: 'дорівнює \\(16\\) см' },
      { text: 'дорівнює \\(6\\sqrt{3}\\) см' },
      { text: 'дорівнює \\(9\\sqrt{3}\\) см' },
      { text: 'дорівнює \\(12\\sqrt{3}\\) см' },
    ]
  },
  {
    text: 'Обчисліть \\(f\'(-5) + \\int_{1}^{4} f(x) dx\\), якщо \\(f(x) = -6x + 8\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано куб \\(ABCDA_1B_1C_1D_1\\). Діагоналі грані \\(ABCD\\) перетинаються в точці \\(K(-6; 2; 5)\\). Точка \\(M(-1; 3; 4)\\) - середина ребра \\(DD_1\\). Знайдіть об\'єм \\(призми\\) \\(ABCA_1B_1C_1\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У таксопарку парку \\(n\\) автобусів, шосту частину яких було обладнано інформаційними табло. Після залучення коштів із міського бюджету інформаційні табло встановили ще на \\(14\\) досі не переобладнаних автобусів. Під час проведеної після переобладнання перевірки навмання вибирають один з \\(n\\) автобусів таксопарку. Імовірність того, що це буде автобус без інформаційного табло, становить \\(0,5\\). Обчисліть значення \\(n\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'За якого \\(найбільшого\\) \\(цілого\\) \\(від\'ємного\\) значення \\(a\\) для розв\'язку \\((x_0; y_0)\\) системи \\(\\begin{cases} \\log_2 x + y = 3a \\\\ 2\\log_2 x - 3y = a + 25 \\end{cases} \\) <br><br> справджується нерівність \\((x_0 - 1) \\cdot 2^{y_0} < 0\\)?',
    type: 'input',
    image: null,
  },
];

  export default tasks;