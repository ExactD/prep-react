import testImage from '../../image/test1.jpg';

import image_1706_1 from '../../image/1706-1.jpg';
import image_1706_2 from '../../image/1706-2.jpg';
import image_1706_7 from '../../image/1706-7.jpg';
import image_1706_9 from '../../image/1706-9.jpg';
import image_1706_11 from '../../image/1706-11.jpg';
import image_1706_18 from '../../image/1706-18.jpg';

const tasks = [
  {
    text: 'У залі кінотеатру є \\(39\\) місць (див. рисунок). Усі місця з кріслами-мішками зайняті. Михайло навмання обирає собі місце в кінотеатрі. Визначте ймовірність того, що він обере VIP-місце.',
    image: image_1706_1,
    variants: [
      { text: '\\(\\frac{1}{6}\\)', image: null },
      { text: '\\(\\frac{2}{13}\\)', image: null },
      { text: '\\(\\frac{2}{5}\\)', image: null },
      { text: '\\(\\frac{1}{5}\\)', image: null },
      { text: '\\(\\frac{1}{4}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено трикутну піраміду \\(SABC\\), \\(O\\) – центр кола, вписаного у трикутник \\(ABC\\). Укажіть площину, яка може проходити через \\(OB\\) та точку \\(A\\).',
    image: image_1706_2,
    variants: [
      { text: '\\(ASB\\)', image: null },
      { text: '\\(ASC\\)', image: null },
      { text: '\\(BSC\\)', image: null },
      { text: '\\(ASO\\)', image: null },
      { text: '\\(ABC\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Спростіть вираз \\(4a^3 \\cdot 7a^2\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(28a^5\\)', image: null },
      { text: '\\(11a^5\\)', image: null },
      { text: '\\(28a^6\\)', image: null },
      { text: '\\(28a^8\\)', image: null },
      { text: '\\(11a^6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Сума двох паралельних сторін квадрата дорівнює \\(16\\) \\(см\\). Знайдіть площу цього квадрата.<br><br>',
    image: null,
    variants: [
      { text: '\\(256\\) \\(см^2\\)', image: null },
      { text: '\\(16\\) \\(см^2\\)', image: null },
      { text: '\\(64\\) \\(см^2\\)', image: null },
      { text: '\\(8\\) \\(см^2\\)', image: null },
      { text: '\\(32\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему рівнянь \\(\\left\\{ \\begin{array}{cl} 2^x + 2y = 0 \\\\ 2^x - 4y = 6 \\end{array} \\right.\\)<br><br>',
    image: null,
    variants: [
      { text: '\\((-3; 3)\\)', image: null },
      { text: '\\((1; -1)\\)', image: null },
      { text: '\\((2; -2)\\)', image: null },
      { text: '\\((-1; 1)\\)', image: null },
      { text: '\\((3; -3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Знайдіть площу бічної поверхні прямої призми, в основі якої лежить ромб зі стороною \\(5\\) \\(см\\), а діагональ її бічної грані дорівнює \\(13\\) \\(см\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(120\\) \\(см^2\\)', image: null },
      { text: '\\(260\\) \\(см^2\\)', image: null },
      { text: '\\(300\\) \\(см^2\\)', image: null },
      { text: '\\(240\\) \\(см^2\\)', image: null },
      { text: '\\(130\\) \\(см^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку \\([-5; 5]\\). Укажіть поміж наведених координати точки, що належить цьому графіку.',
    image: image_1706_7,
    variants: [
      { text: '\\((-3; 2)\\)', image: null },
      { text: '\\((-2; 3)\\)', image: null },
      { text: '\\((-4; 3)\\)', image: null },
      { text: '\\((2; -2)\\)', image: null },
      { text: '\\((-1; 4)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Каністра заповнюється на \\(\\frac{3}{5}\\) об\'єму за \\(10\\) хвилин. Скільки \\(повних\\) таких каністр можна заповнити за дві години?<br><br>',
    image: null,
    variants: [
      { text: '\\(5\\)', image: null },
      { text: '\\(6\\)', image: null },
      { text: '\\(7\\)', image: null },
      { text: '\\(8\\)', image: null },
      { text: '\\(9\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку прямі \\(AB\\), \\(AC\\) і \\(CB\\) лежать в одній площині, \\(\\angle CAB = 30^\\circ\\), \\(\\angle ACB = 100^\\circ\\). Які з наведених тверджень є правильним?<br><br>I. \\(\\angle ABC = 50^\\circ\\).<br>II. \\(AC^2 + BC^2 = AB^2\\).<br>III. Прямі \\(AB\\) і \\(CD\\) є паралельними.<br><br>',
    image: image_1706_9,
    variants: [
      { text: 'лише I', image: null },
      { text: 'лише II', image: null },
      { text: 'лише III', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише I та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(|12-8^2|=\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(4\\)', image: null },
      { text: '\\(52\\)', image: null },
      { text: '\\(16\\)', image: null },
      { text: '\\(-4\\)', image: null },
      { text: '\\(-52\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) з гострим кутом \\(\\angle A = \\alpha\\) на стороні \\(AD\\) вибрано точку \\(K\\) так, що \\(AB = AK = KD\\) (див. рисунок). Визначте периметр паралелограма \\(ABCD\\), якщо \\(BK = d\\).',
    image: image_1706_11,
    variants: [
      { text: '\\(12d \\cos \\frac{\\alpha}{2}\\)', image: null },
      { text: '\\(\\frac{3d}{\\sin \\frac{\\alpha}{2}}\\)', image: null },
      { text: '\\(\\frac{6d}{\\sin \\frac{\\alpha}{2}}\\)', image: null },
      { text: '\\(\\frac{3d}{\\cos \\frac{\\alpha}{2}}\\)', image: null },
      { text: '\\(3d \\sin \\frac{\\alpha}{2}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\sin^2 4\\beta - \\cos^2 4\\beta =\\)<br><br>',
    image: null,
    variants: [
      { text: '\\(-\\cos 8\\beta\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(\\cos 2\\beta\\)', image: null },
      { text: '\\(\\cos 8\\beta\\)', image: null },
      { text: '\\(-\\cos 2\\beta\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(\\frac{1}{0,5x - 1} = \\frac{1}{2}\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; 0]\\)', image: null },
      { text: '\\((0; 4,5]\\)', image: null },
      { text: '\\((4,5; 6]\\)', image: null },
      { text: '\\((6; 12]\\)', image: null },
      { text: '\\((12; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Послідовність задано формулою n-го члена \\(b_n = 0,8 \\cdot 2^n + 3n\\). Визначте четвертий член цієї послідовності.<br><br>',
    image: null,
    variants: [
      { text: '\\(18,4\\)', image: null },
      { text: '\\(37,6\\)', image: null },
      { text: '\\(13,4\\)', image: null },
      { text: '\\(63,2\\)', image: null },
      { text: '\\(24,8\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(x^2 + 3x < 6(x + 3)\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-3; 6)\\)', image: null },
      { text: '\\((-\\infty; -6) \\cup (3; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; -3)\\)', image: null },
      { text: '\\((-\\infty; -3) \\cup (6; +\\infty)\\)', image: null },
      { text: '\\((-6; 3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Число \\(\\varphi = \\frac{\\sqrt{5} + 1}{2}\\) називають золотим перетином, що пов\'язано з числами Фібоначі. Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження про значення виразу\\)<br><br>',
    leftOptions: [
      { text: '\\(\\varphi \\cdot \\frac{\\sqrt{5} - 1}{2}\\)' },
      { text: '\\(\\log_5 (2\\varphi - \\sqrt{5})\\)' },
      { text: '\\(\\varphi - 2\\)' },
    ],
    variants: [
      { text: 'є натуральним числом' },
      { text: 'є цілим від\'ємним числом' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'є раціональним нецілим числом' },
      { text: 'є ірраціональним числом' },
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між твердженням (1–3) та функцією (А – Д), для якої це твердження є правильним.',
    leftTitle: '\\(Твердження\\)<br><br>',
    rightTitle: '\\(Функція\\)<br><br>',
    leftOptions: [
      { text: 'є непарною' },
      { text: 'зростає на відрізку \\([1; 4]\\)' },
      { text: 'найбільше значення функції на відрізку \\([1; 4]\\) є від’ємним числом ' },
    ],
    variants: [
      { text: '\\(y = \\frac{1}{x + 1}\\)' },
      { text: '\\(y = \\sin x\\)' },
      { text: '\\(y = x^2 - 1\\)' },
      { text: '\\(y = 0,5^x\\)' },
      { text: '\\(y = -\\sqrt{x}\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'На рисунку зображено прямокутник \\(ABCD\\) і кругові сектори \\(BCL\\) та \\(KAD\\), що мають одну спільну точку \\(M\\). \\(N\\) – проекція точки \\(M\\) на пряму \\(AB\\), \\(BC = 12\\) \\(см\\). До кожного початку речення (1–3) доберіть його закінчення (А – Д) так, щоб утворилося правильне твердження.',
    leftTitle: '\\(Початок речення\\)<br><br>',
    rightTitle: '\\(Закінчення речення\\)<br><br>',
    image: image_1706_18,
    leftOptions: [
      { text: 'Довжина \\(AN\\)' },
      { text: 'Довжина \\(AB\\)' },
      { text: 'Довжина \\(AC\\)' },
    ],
    variants: [
      { text: 'дорівнює \\(24\\) \\(см\\)' },
      { text: 'дорівнює \\(18\\) \\(см\\)' },
      { text: 'дорівнює \\(8\\sqrt{3}\\) \\(см\\)' },
      { text: 'дорівнює \\(6\\sqrt{3}\\) \\(см\\)' },
      { text: 'дорівнює \\(12\\sqrt{3}\\) \\(см\\)' },
    ]
  },
  {
    text: 'Визначте для функції \\(f(x) = \\frac{15}{x^2} + 7\\) первісну \\(F(x)\\), графік якої проходить через точку \\((-5; 0)\\). У відповідь запишіть значення \\(F(-2)\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'У прямокутній системі координат у просторі задано конус з вершиною \\(S(6; 1; 8)\\). Точка \\(K(-8; 3; -2)\\) лежить на колі основи конуса. Твірна конуса дорівнює діаметру його основи. Обчисліть об\'єм \\(V\\) конуса. У відповідь запишіть значення \\(\\frac{V}{\\pi}\\).',
    type: 'input',
    image: null,
  },
  {
    text: 'На підприємстві, що займається виробництвом дронів, є \\(7\\) українських і \\(3\\) іноземні філіали. Відомо, що середня кількість дронів, вироблених в одній українській філії, складає \\(26\\) одиниць, а середня кількість дронів, вироблених в одній іноземній філії, складає \\(46\\) одиниць. Визначте середню кількість дронів, вироблених в одній філії компанії.',
    type: 'input',
    image: null,
  },
  {
    text: 'Визначте \\(найменше\\) ціле значення параметра \\(a\\), за якого рівняння \\((\\sqrt{4x + 8} + 9) \\cdot (\\log_3 (2x - a) - 3) = 0\\) має корінь.',
    type: 'input',
    image: null,
  },
];

  export default tasks;