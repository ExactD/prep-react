import testImage from '../../image/test1.jpg';
import image_0106_2 from '../../image/0106-2.jpg';
import image_0106_4 from '../../image/0106-4.jpg';
import image_0106_10 from '../../image/0106-10.jpg';
import image_0106_11 from '../../image/0106-11.jpg';
import image_0106_12 from '../../image/0106-12.jpg';
import image_0106_18 from '../../image/0106-18.jpg';
import image_0106_21 from '../../image/0106-21.jpg';

const tasks = [
  {
    text: 'В Андрія є \\(25\\) кульок: \\(7\\) синіх і по \\(6\\) зелених, жовтих та червоних. Щоб визначити першочергову справу у вихідний день, хлопець навмання вибирав одну кульку: якщо вибере синю кульку, буде робити домашнє завдання, а якщо іншого кольору – піде на баскетбол. Визначте ймовірність того, що Андрій піде на баскетбол.<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{18}{25}\\)', image: null },
      { text: '\\(\\frac{7}{25}\\)', image: null },
      { text: '\\(\\frac{1}{7}\\)', image: null },
      { text: '\\(\\frac{1}{18}\\)', image: null },
      { text: '\\(\\frac{1}{25}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено пряму чотирикутну призму \\(ABCDA_1B_1C_1D_1\\). Укажіть пряму, яка паралельна грані \\(AA_1D_1D\\).',
    image: image_0106_2,
    variants: [
      { text: '\\(C_1D\\)', image: null },
      { text: '\\(A_1B\\)', image: null },
      { text: '\\(CB_1\\)', image: null },
      { text: '\\(C_1D_1\\)', image: null },
      { text: '\\(BD\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть число, що є розв\'язком нерівності \\((\\frac{4}{3} - 2)(x - 2) < 0\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(2\\)', image: null },
      { text: '\\(-3\\)', image: null },
      { text: '\\(-2\\)', image: null },
      { text: '\\(0\\)', image: null },
      { text: '\\(3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На прямій \\(AB\\) два кола з центрами в точках \\(A\\) і \\(C\\) мають зовнішній дотик, точка \\(B\\) належить меншому колу (див. рисунок). Обчисліть відстань \\(AB\\), якщо радіуси кіл дорівнюють \\(8\\) \\(см\\) і \\(5\\) \\(см\\).',
    image: image_0106_4,
    variants: [
      { text: '\\(26\\) \\(см\\)', image: null },
      { text: '\\(18\\) \\(см\\)', image: null },
      { text: '\\(16\\) \\(см\\)', image: null },
      { text: '\\(13\\) \\(см\\)', image: null },
      { text: '\\(21\\) \\(см\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\((a - b)(3a + 3b) =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(9a^2 - 9b^2\\)', image: null },
      { text: '\\(6a - 6b\\)', image: null },
      { text: '\\(9a^2 + 9b^2\\)', image: null },
      { text: '\\(3a^2 - 3b^2\\)', image: null },
      { text: '\\(3a^2 + 3b^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Площа основи трикутної піраміди дорівнює площі квадрата зі стороною \\(5\\) \\(см\\). Визначте об\'єм піраміди, якщо вершина віддалена на \\(24\\) \\(см\\) від площини основи.<br><br>',
    image: null,
    variants: [
      { text: '\\(600\\) \\(см^3\\)', image: null },
      { text: '\\(300\\) \\(см^3\\)', image: null },
      { text: '\\(160\\) \\(см^3\\)', image: null },
      { text: '\\(200\\) \\(см^3\\)', image: null },
      { text: '\\(480\\) \\(см^3\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(|1 - 0,5^{-2}| =\\)<br><br>',
    image: null,
    variants: [
      { text: '2', image: null },
      { text: '1,25', image: null },
      { text: '0', image: null },
      { text: '1', image: null },
      { text: '3', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'В одному мегабайті міститься \\(2^{10}\\) кілобайт. Скільки кілобайт у \\(16\\) мегабайтах?<br><br>',
    image: null,
    variants: [
      { text: '\\(2^{14}\\)', image: null },
      { text: '\\(2^{18}\\)', image: null },
      { text: '\\(32^{10}\\)', image: null },
      { text: '\\(2^{13}\\)', image: null },
      { text: '\\(2^{40}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Будь-який ромб є паралелограмом.<br>II. Центр вписаного в будь-який ромб кола лежить на перетині бісектрис його кутів.<br>III. Менша діагональ будь-якого ромба ділить його на 2 правильні трикутники.<br><br>',
    image: null,
    variants: [
      { text: 'лише I', image: null },
      { text: 'лише II', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише I та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [\\(-4\\); \\(6\\)]. Укажіть різницю між найбільшим і найменшим значенням функції \\(f(x)\\) на цьому проміжку.',
    image: image_0106_10,
    variants: [
      { text: '\\(7\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(10\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) проведено висоту \\(BH\\). На \\(BH\\) вибрано точку \\(K\\) так, що трикутник \\(CKD\\) є правильним (див. рисунок). Знайдіть площу цього паралелограма, якщо периметр трикутника \\(CKD\\) дорівнює \\(18\\), \\(\\angle A = \\alpha\\).',
    image: image_0106_11,
    variants: [
      { text: '\\(18\\tan\\alpha\\)', image: null },
      { text: '\\(\\frac{18}{\\tan\\alpha}\\)', image: null },
      { text: '\\(18\\sin\\alpha\\)', image: null },
      { text: '\\(6\\cos\\alpha + 12\\)', image: null },
      { text: '\\(9\\tan\\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку \\((-\\infty; +\\infty)\\). Укажіть правильну подвійну нерівність, якщо \\(a = \\int_{-2}^{0} f(x) dx\\), \\(b = \\int_{0}^{2} f(x) dx\\), \\(c = \\int_{2}^{4} f(x) dx\\).<br><br>',
    image: image_0106_12,
    variants: [
      { text: '\\(a < b < c\\)', image: null },
      { text: '\\(b < c < a\\)', image: null },
      { text: '\\(c < a < b\\)', image: null },
      { text: '\\(c < b < a\\)', image: null },
      { text: '\\(b < a < c\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему рівнянь \\(\\left\\{ \\begin{array}{cl} \\frac{2}{y} = \\frac{7}{x} \\\\ x - 4y = 2 \\end{array} \\right.\\) Якщо \\((x_0; y_0)\\) - розв\'язок системи, то \\(x_0 + y_0 =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(22\\)', image: null },
      { text: '\\(-10\\)', image: null },
      { text: '\\(-18\\)', image: null },
      { text: '\\(10\\)', image: null },
      { text: '\\(18\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(\\frac{9}{\\sqrt{5x-2}} = \\sqrt{5x-2}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(1,4\\)', image: null },
      { text: '\\(81\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(16,6\\)', image: null },
      { text: '\\(2,2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Обчисліть \\(\\log_2 \\frac{16}{a}\\), якщо \\(\\log_2 a = 0,5\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(8\\)', image: null },
      { text: '\\(4,5\\)', image: null },
      { text: '\\(3,5\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(16\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та проміжком (А – Д), якому належить значення цього виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Проміжок\\)<br><br>',
    leftOptions: [
      { text: '\\(\\cos\\frac{\\pi}{3}\\)' },
      { text: '\\(2\\pi - 5\\)' },
      { text: '\\(\\log_3\\pi - \\log_3(3\\pi)\\)' },
    ],
    variants: [
      { text: '[\\(-4\\); \\(-1\\))' },
      { text: '[\\(-1\\); \\(0\\))' },
      { text: '[\\(0\\); \\(1\\))' },
      { text: '[\\(1\\); \\(2\\))' },
      { text: '[\\(2\\); \\(5\\))' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та кількістю спільних точок (А – Д) її графіка з прямою \\(y = -1\\).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Кількість\\) \\(спільних\\) \\(точок\\)<br><br>',
    leftOptions: [
      { text: '\\(y = \\frac{2}{x}\\)' },
      { text: '\\(y = x^2 - 4\\)' },
      { text: '\\(y = \\sin x\\)' },
    ],
    variants: [
      { text: 'жодної' },
      { text: 'одна' },
      { text: 'дві' },
      { text: 'три' },
      { text: 'більше трьох' },
    ]
  },
  {
    type: 'matching',
    text: 'У рівнобічній трапеції \\(ABCD\\) (\\(BC\\parallel AD\\)) проведено висоту \\(CO\\) (див. рисунок). Середня лінія трапеції дорівнює \\(23\\) \\(см\\), \\(AD = 38\\) \\(см\\), \\(\\angle AOB = 45^\\circ\\). До кожного відрізка (1–3) доберіть його довжину (А – Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина\\) \\(відрізка\\)<br><br>',
    image: image_0106_18,
    leftOptions: [
      { text: '\\(BC\\)' },
      { text: '\\(OD\\)' },
      { text: '\\(AB\\)' },
    ],
    variants: [
      { text: '\\(8\\) \\(см\\)' },
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(15\\) \\(см\\)' },
      { text: '\\(17\\) \\(см\\)' },
      { text: '\\(18\\) \\(см\\)' },
    ]
  },
  {
    text: 'Задано функцію \\(f(x) = \\begin{cases} 30, & \\text{якщо } x < -2 \\\\ 2x^4 + x, & \\text{якщо } x \\geq -2 \\end{cases}\\). Обчисліть \\(f(-3) - f\'(2)\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано циліндр, осьовим перерізом якого є прямокутник \\(ABCD\\). Висота й радіус основи циліндра є рівними. Обчисліть площу \\(S\\) повної поверхні циліндра, якщо \\(A(-10; 8; 3)\\), \\(C(0; -7; 8)\\). У відповідь запишіть значення \\(\\frac{S}{\\pi}\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'На діаграмі наведено відвідуваність сеансу одного фільму в кінотеатрі протягом \\(6\\) робочих днів. На скільки\\(відсотків\\) кількість глядачів на найбільш відвідуваному сеансі перевищує середню кількість глядачів за ці \\(6\\) днів?',
    type: 'input',
    image: image_0106_21,
  },
  {
    text: 'Знайдіть суму всіх цілих значень параметра \\(a\\), за яких усі корені рівняння \\(4^x - 15 \\cdot 2^x - 4a^2 + 30a = 0\\) є додатними.',
    type: 'input',
    image: null,
  },
];

  export default tasks;