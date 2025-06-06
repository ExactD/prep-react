import testImage from '../../image/test1.jpg';
import image_0506_4 from '../../image/0506-4.jpg';
import image_0506_10 from '../../image/0506-10.jpg';
import image_0506_13 from '../../image/0506-13.jpg';
import image_0506_17 from '../../image/0506-17.jpg';
import image_0506_18 from '../../image/0506-18.jpg';

const tasks = [
  {
    text: 'Комп\'ютерна програма видаляє у шестицифровому числі одну цифру навмання. Яка ймовірність того, що в числі \\(125790\\) буде видалено непарну цифру?<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{2}\\)', image: null },
      { text: '\\(\\frac{1}{6}\\)', image: null },
      { text: '\\(\\frac{2}{3}\\)', image: null },
      { text: '\\(\\frac{5}{6}\\)', image: null },
      { text: '\\(\\frac{1}{3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Доберіть закінчення речення так, щоб утворилося правильне твердження: «Бічною гранню правильної чотирикутної піраміди є...<br><br>',
    image: null,
    variants: [
      { text: 'квадрат».', image: null },
      { text: 'рівнобедрений трикутник».', image: null },
      { text: 'прямокутний трикутник».', image: null },
      { text: 'паралелограм».', image: null },
      { text: 'відрізок».', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '|\\(4{,}2 - \\frac{68}{10}| =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-2{,}6\\)', image: null },
      { text: '\\(-2{,}4\\)', image: null },
      { text: '\\(1{,}6\\)', image: null },
      { text: '\\(2{,}4\\)', image: null },
      { text: '\\(2{,}6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Кут між орбітою та віссю обертання Землі дорівнює \\(66{,}5^{\\circ}\\) (див. рисунок). Визначте кут нахилу осі обертання Землі до осі, перпендикулярної до земної орбіти.',
    image: image_0506_4,
    variants: [
      { text: '\\(22{,}5^{\\circ}\\)', image: null },
      { text: '\\(23{,}5^{\\circ}\\)', image: null },
      { text: '\\(21{,}5^{\\circ}\\)', image: null },
      { text: '\\(13{,}5^{\\circ}\\)', image: null },
      { text: '\\(33{,}5^{\\circ}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(\\sqrt[3]{3x} = -4\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; -20]\\)', image: null },
      { text: '\\((-20; -10]\\)', image: null },
      { text: '\\((-10; 0]\\)', image: null },
      { text: '\\((0; 10]\\)', image: null },
      { text: '\\((10; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Діаметр основи конуса дорівнює \\(12\\) \\(см\\). Знайдіть площу бічної поверхні конуса, якщо його висота на \\(2\\) \\(см\\) більша за радіус основи.<br><br>',
    image: null,
    variants: [
      { text: '\\(96\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(60\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(72\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(36\\pi\\) \\(см^2\\)', image: null },
      { text: '\\(48\\pi\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Клієнт банку зняв \\(0{,}2\\) від суми рахунку, після чого на рахунку залишилося \\(4800\\) \\(грн\\). Визначте, скільки грошей було на його рахунку спочатку.<br><br>',
    image: null,
    variants: [
      { text: '\\(6000\\) \\(грн\\)', image: null },
      { text: '\\(9600\\) \\(грн\\)', image: null },
      { text: '\\(5600\\) \\(грн\\)', image: null },
      { text: '\\(6400\\) \\(грн\\)', image: null },
      { text: '\\(7200\\) \\(грн\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть корінь рівняння \\(2^x = 2 \\cdot 16\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(7\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Медіана трикутника з\'єднує його вершину з серединою протилежної сторони.<br>II. Точка перетину медіан довільного трикутника знаходиться в центрі кола, вписаного в цей трикутник.<br>III. У рівносторонньому трикутнику медіана належить серединному перпендикуляру, проведеному до спільної сторони.<br><br>',
    image: null,
    variants: [
      { text: 'лише I', image: null },
      { text: 'лише I та III', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У прямокутній системі координат \\(ху\\) зображено точку \\(M\\). Укажіть функцію, графік якої проходить через початок координат і точку \\(M\\).',
    image: image_0506_10,
    variants: [
      { text: '\\(y = 4 - 2x\\)', image: null },
      { text: '\\(y = 2x\\)', image: null },
      { text: '\\(y = 8 + 2x\\)', image: null },
      { text: '\\(y = -2x\\)', image: null },
      { text: '\\(y = -\\frac{x}{2}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\frac{\\cos(450^{\\circ} + \\alpha)}{\\sin\\alpha} = \\)<br><br>',
    image: null,
    variants: [
      { text: '\\(1\\)', image: null },
      { text: '\\(\\tan \\alpha\\)', image: null },
      { text: '\\(\\frac{1}{\\tan \\alpha}\\)', image: null },
      { text: '\\(-1\\)', image: null },
      { text: '\\(-\\tan \\alpha\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(-x^2 - x + 6 < 0\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-3; 2)\\)', image: null },
      { text: '\\((-\\infty; -3) \\cup (2; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; -1) \\cup (6; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; -2) \\cup (3; +\\infty)\\)', image: null },
      { text: '\\((-2; 3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На більшій основі \\(AD\\) рівнобічної трапеції \\(ABCD\\) вибрано точку \\(K\\) так, що \\(BK \\parallel CD\\), \\(CK \\parallel AB\\) (див. рисунок). \\(KD = 8\\), \\(\\angle BAD = \\beta\\). Знайдіть площу цієї трапеції.',
    image: image_0506_13,
    variants: [
      { text: '\\(12 \\tan \\beta\\)', image: null },
      { text: '\\(12 \\sin \\beta\\)', image: null },
      { text: '\\(\\frac{48}{\\tan \\beta}\\)', image: null },
      { text: '\\(48 \\tan \\beta\\)', image: null },
      { text: '\\(\\frac{12}{\\tan \\beta}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\(\\frac{x^2 - 4xy + 4y^2}{x - 2y} : (2y - x)\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(-1\\)', image: null },
      { text: '\\(-x^2 + 4xy - y^2\\)', image: null },
      { text: '\\(2y - x\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(x^2 - 4xy + y^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть похідну функції \\(f(x) = x + \\frac{1}{x^2}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(f\'(x) = 1 + \\frac{1}{2x}\\)', image: null },
      { text: '\\(f\'(x) = x - \\frac{2}{x^2}\\)', image: null },
      { text: '\\(f\'(x) = 1 + \\frac{2}{x^2}\\)', image: null },
      { text: '\\(f\'(x) = \\frac{x^2}{2} - \\frac{1}{x}\\)', image: null },
      { text: '\\(f\'(x) = 1 - \\frac{2}{x^3}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1-3) та проміжком (А-Д), якому належить значення цього виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Проміжок\\)<br><br>',
    leftOptions: [
      { text: '\\((\\sqrt{2})^{-2}\\)' },
      { text: '\\(1 - \\sqrt{2}\\)' },
      { text: '\\((\\frac{1}{3})^{\\log_3{\\sqrt{2}}}\\)' }
    ],
    variants: [
      { text: '\\([-4; -1)\\)', image: null },
      { text: '\\([-1; 0)\\)', image: null },
      { text: '\\([0; 1)\\)', image: null },
      { text: '\\([1; 2)\\)', image: null },
      { text: '\\([2; 5)\\)', image: null }
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку \\([-4; 4]\\). Установіть відповідність між початком речення (1-3) та його закінченням (А-Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок речення\\)<br><br>',
    rightTitle: '\\(Закінчення речення\\)<br><br>',
    image: image_0506_17,
    leftOptions: [
      { text: 'Найменше значення функції \\(y = f(x)\\)' },
      { text: 'Точка екстремуму функції \\(y = f(x) - 5\\)' },
      { text: 'Нуль функції \\(y = f(x + 2)\\)' }
    ],
    variants: [
      { text: 'дорівнює \\(-3\\)' },
      { text: 'дорівнює \\(-2\\)' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'дорівнює \\(2\\)' },
      { text: 'дорівнює \\(3\\)' }
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено ромб \\(ABCD\\), у який вписано коло з центром у точці \\(O\\). З тупого кута \\(B\\) на сторону \\(AD\\) проведено висоту \\(BK\\), коло дотикається до сторони \\(AD\\) у точці \\(M\\). \\(AK = 7\\) \\(см\\), \\(KM = 9\\) \\(см\\). До кожного відрізка (1-3) доберіть його довжину (А-Д).',
    leftTitle: '\\(Відрізок\\)<br><br>',
    rightTitle: '\\(Довжина відрізка\\)<br><br>',
    image: image_0506_18,
    leftOptions: [
      { text: '\\(AD\\)' },
      { text: '\\(BK\\)' },
      { text: '\\(OM\\)' }
    ],
    variants: [
      { text: '\\(12\\) \\(см\\)' },
      { text: '\\(15\\) \\(см\\)' },
      { text: '\\(20\\) \\(см\\)' },
      { text: '\\(24\\) \\(см\\)' },
      { text: '\\(25\\) \\(см\\)' }
    ]
  },
  {
    text: "Сума \\(S_5\\) п'яти перших членів геометричної прогресії \\((b_n)\\) дорівнює \\(-77{,}5\\), знаменник \\(q = 2\\). Знайдіть перший член \\(b_1\\) цієї прогресії.",
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано пряму трикутну призму \\(ABCA_1B_1C_1\\), в основі якої лежить прямокутний рівнобедрений трикутник \\(ABC\\) (\\(\\angle C = 90^{\\circ}\\)). \\(A(5; 2; 0)\\), \\(B(-7; 7; 0)\\), основа \\(ABC\\) призми лежить у площині \\(xy\\). Точка \\(K(0; 0; 10)\\) належить площині \\(A_1B_1C_1\\). Знайдіть об\'єм цієї призми.',
    type: 'input',
    image: null,
  },
  {
    text: 'Компанія виділила кошти на закупівлю \\(70\\) дерев: \\(50\\) каштанів по \\(1600\\) \\(грн\\) кожний і \\(20\\) ялинок. Середня ціна одного дерева складає \\(1500\\) \\(грн\\). Знайдіть вартість однієї ялинки (у \\(грн\\)).',
    type: 'input',
    image: null,
  },
  {
    text: 'Знайдіть \\(найменше\\) ціле значення \\(a\\), за якого розв\'язок \\((x_0; y_0)\\) системи рівнянь \\(\\begin{cases} \\log_5 \\frac{x}{y} = a - 18 \\\\ \\log_5 x + 2\\log_5 y = 3a + 12 \\end{cases}\\) задовольняє умову \\(\\begin{cases} x_0 < \\sqrt{5}, \\\\ y_0 > 5. \\end{cases} \\)',
    type: 'input',
    image: null,
  }
];

  export default tasks;