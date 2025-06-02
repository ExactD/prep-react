import testImage from '../../image/test1.jpg';

const tasks = [
  {
    text: 'Обчисліть \\(\\left(\\frac{5}{2}\\right)^2\\).',
    image: null,
    variants: [
      { text: '3,5', image: null },
      { text: '6,25', image: null },
      { text: '4,5', image: null },
      { text: '5', image: null },
      { text: '12,5', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Місця в літаку розташовані у 20 рядів, у кожному ряді є по 3 місця, розділені проходом, ліворуч і праворуч від проходу (див. рисунок). Комп\'ютерна програма випадковим чином обирає місце для пасажира. Визначте ймовірність того, що пасажиру дістанеться перший або останній ряд.',
    image: null,
    variants: [
      { text: '\\(\\frac{1}{20}\\)', image: null },
      { text: '\\(\\frac{1}{4}\\)', image: null },
      { text: '\\(\\frac{1}{5}\\)', image: null },
      { text: '\\(\\frac{1}{2}\\)', image: null },
      { text: '\\(\\frac{1}{10}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'До кола з центром у точці \\(O\\) проведено дотичну \\(AK\\), \\(A\\) - точка дотику (див. рисунок). На \\(AK\\) вибрано точку \\(B\\) так, що \\(\\angle AOB = 55^\\circ\\). Знайдіть градусну міру кута \\(OBK\\).',
    image: null,
    variants: [
      { text: '\\(145^\\circ\\)', image: null },
      { text: '\\(55^\\circ\\)', image: null },
      { text: '\\(135^\\circ\\)', image: null },
      { text: '\\(155^\\circ\\)', image: null },
      { text: '\\(125^\\circ\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Точка \\(A\\) розташована всередині сфери з центром у точці \\(O\\). Укажіть найменше можливе значення діаметра цієї сфери, якщо \\(OA = 6\\).',
    image: null,
    variants: [
      { text: '15', image: null },
      { text: '7', image: null },
      { text: '18', image: null },
      { text: '13', image: null },
      { text: '11', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(\\frac{x}{3} - 2 = 0\\).',
    image: null,
    variants: [
      { text: '3', image: null },
      { text: '2', image: null },
      { text: '-3', image: null },
      { text: '0', image: null },
      { text: '-2', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\(y = f(x)\\), визначеної на проміжку [–2; 4]. Укажіть точку перетину графіка функції \\(y = f(x + 1)\\) з віссю \\(y\\).',
    image: null,
    variants: [
      { text: '(1; 0)', image: null },
      { text: '(3; 0)', image: null },
      { text: '(0; -3)', image: null },
      { text: '(0; -4)', image: null },
      { text: '(0; -1)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У магазині одягу всі футболки коштують 300 грн. У магазині діє акція: отримай знижку на одиницю другого товару. Скільки гривень має заплатити покупець за дві такі футболки разом, якщо за умовами акції за другу футболку він має заплатити на 40% менше?',
    image: null,
    variants: [
      { text: '180 грн', image: null },
      { text: '450 грн', image: null },
      { text: '420 грн', image: null },
      { text: '120 грн', image: null },
      { text: '480 грн', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Існує ромб, діагональ якого дорівнює сумі двох протилежних сторін.<br>II. Існує ромб, сума протилежних кутів якого дорівнює 20°.<br>III. Існує ромб, діагональ якого ділить його на два правильні трикутники.',
    image: null,
    variants: [
      { text: 'лише II', image: null },
      { text: 'лише I та II', image: null },
      { text: 'лише III', image: null },
      { text: 'лише II та III', image: null },
      { text: 'I, II та III', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Визначте об\'єм конуса, твірна якого дорівнює 13 см, а висота - 12 см.',
    image: null,
    variants: [
      { text: '156π см³', image: null },
      { text: '325π см³', image: null },
      { text: '100π см³', image: null },
      { text: '60π см³', image: null },
      { text: '300π см³', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розкладіть на множники \\(x^2 - 6x + 5\\).',
    image: null,
    variants: [
      { text: '\\((x + 1)(x - 5)\\)', image: null },
      { text: '\\((x - 1)(x + 5)\\)', image: null },
      { text: '\\((x + 1)(x + 5)\\)', image: null },
      { text: '\\((x - 1)(x - 5)\\)', image: null },
      { text: '\\((x - 2)(x - 3)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить корінь рівняння \\(5^{3x} \\cdot 5^{-2x} = \\frac{1}{5}\\).',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-1\\)]', image: null },
      { text: '(\\(-1\\); \\(-0,5\\)]', image: null },
      { text: '(\\(-0,5\\); \\(0\\)]', image: null },
      { text: '(\\(0\\); \\(0,5\\)]', image: null },
      { text: '(\\(0,5\\); \\(+\\infty\\))', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Укажіть проміжок, якому належить значення виразу \\(\\sqrt{5} \\cdot \\sqrt{6}\\).',
    image: null,
    variants: [
      { text: '(\\(0\\); \\(2\\)]', image: null },
      { text: '(\\(2\\); \\(4\\)]', image: null },
      { text: '(\\(4\\); \\(6\\)]', image: null },
      { text: '(\\(6\\); \\(8\\)]', image: null },
      { text: '(\\(8\\); \\(10\\)]', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі \\(ABCD\\) бісектриса кута \\(A\\) перетинає сторону \\(BC\\) в точці \\(K\\) так, що \\(BK : KC = 4 : 3\\) (див. рисунок). \\(AK = b\\), \\(\\angle KAD = \\alpha\\). Знайдіть периметр цього паралелограма.',
    image: null,
    variants: [
      { text: '\\(\\frac{46b}{11\\cos\\alpha}\\)', image: null },
      { text: '\\(\\frac{11b}{4\\tan\\alpha}\\)', image: null },
      { text: '\\(\\frac{11b}{4\\cos\\alpha}\\)', image: null },
      { text: '\\(\\frac{36b}{\\cos\\alpha}\\)', image: null },
      { text: '\\(\\frac{11b}{4\\sin\\alpha}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть систему нерівностей \\(\\begin{cases} x^2 + 4 \\geq 0 \\\\ 2(3x - 5) - 6 < x + 8 \\end{cases}\\)',
    image: null,
    variants: [
      { text: '(\\(-\\infty\\); \\(-2\\)] \\(\\cup\\) [\\(2\\); \\(4,8\\))', image: null },
      { text: '(\\(-\\infty\\); \\(4,8\\))', image: null },
      { text: '(\\(-\\infty\\); \\(2\\)]', image: null },
      { text: '[\\(2\\); \\(4,8\\))', image: null },
      { text: '(\\(-\\infty\\); \\(-2\\)]', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У геометричній прогресії \\((b_n)\\) відомо, що \\(b_3 = 24\\), \\(b_4 = 12\\). Визначте перший член \\(b_1\\) цієї прогресії.',
    image: null,
    variants: [
      { text: '36', image: null },
      { text: '48', image: null },
      { text: '72', image: null },
      { text: '96', image: null },
      { text: '192', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Узгодьте вираз (1-3) з точкою (А - Д) на координатній прямій, координатою якої є значення виразу.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Точка\\)<br><br>',
    image: testImage,
    leftOptions: [
      { text: '\\(2\\pi \\cdot \\pi^{-1}\\)' },
      { text: '\\(\\tan\\frac{5\\pi}{4}\\)' },
      { text: '\\(\\log_\\pi\\frac{1}{\\pi^2}\\)' },
    ],
    variants: [
      { text: '\\(K\\)' },
      { text: '\\(L\\)' },
      { text: '\\(M\\)' },
      { text: '\\(N\\)' },
      { text: '\\(P\\)' },
    ]
  },
  {
    type: 'matching',
    text: 'У прямокутній системі координат на площині зображено ламану \\(ABC\\), \\(A(-2; 0)\\), \\(B(0; 1)\\), \\(C(2; 1)\\) (див. рисунок). Установіть відповідність між функцією (1-3) та кількістю спільних точок (А - Д) її графіка з ламаною \\(ABC\\).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Кількість спільних точок\\)<br><br>',
    image: testImage,
    leftOptions: [
      { text: '\\(y = 2 - x^2\\)' },
      { text: '\\(y = \\sin x\\)' },
      { text: '\\(y = \\log_5 x\\)' },
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
    text: 'На паралельних прямих \\(m\\) та \\(n\\) побудовано прямокутник \\(ABCD\\), прямокутну трапецію \\(DKLM\\) і прямокутний трикутник \\(MQP\\) (див. рисунок). Користуючись даними на рисунку, узгодьте фігуру (1-3) з її площею (А - Д).',
    leftTitle: '\\(Фігура\\)<br><br>',
    rightTitle: '\\(Площа фігури\\)<br><br>',
    image: testImage,
    leftOptions: [
      { text: 'Прямокутник \\(ABCD\\)' },
      { text: 'Трапеція \\(DKLM\\)' },
      { text: 'Трикутник \\(MQP\\)' },
    ],
    variants: [
      { text: '12' },
      { text: '18' },
      { text: '21' },
      { text: '24' },
      { text: '36' },
    ]
  },
  {
    text: "Обчисліть інтеграл: \\(\\int_{1}^{4} \\frac{x^2 - 5^2}{x - 5} dx\\).",
    type: 'input',
    image: null,
  },
  {
    text: 'Олена планує придбати горіхи в кіоску. Їй потрібно придбати 500 г фундука, 300 г кеш\'ю та 200 г волоських горіхів. Користуючись даними в таблиці, знайдіть середню вартість (у грн) за 100 г придбаних Оленою горіхів.',
    type: 'input',
    image: testImage,
  },
  {
    text: 'У прямокутній системі координат у просторі задано правильну трикутну призму \\(ABCA_1B_1C_1\\), у якій \\(A(2; -8; 10)\\). Усі ребра призми рівні. Діагоналі грані \\(BCC_1B_1\\) перетинаються в точці \\(K(12; -2; 7)\\). Обчисліть площу бічної поверхні цієї призми.',
    type: 'input',
    image: null,
  },
  {
    text: 'Визначте кількість усіх від\'ємних цілих значень \\(a\\), за кожного з яких рівняння \\((4x - 2a - 4 - 3) \\cdot (\\lg^2 x + 1) = 0\\) має корінь.',
    type: 'input',
    image: null,
  },
];

  export default tasks;