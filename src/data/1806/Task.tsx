import testImage from '../../image/test1.jpg';

import image_1806_2 from '../../image/1806-2.jpg';
import image_1806_5 from '../../image/1806-5.jpg';
import image_1806_6 from '../../image/1806-6.jpg';
import image_1806_14 from '../../image/1806-14.jpg';
import image_1806_18 from '../../image/1806-18.jpg';
import image_1806_19 from '../../image/1806-19.jpg';
import image_1806_21 from '../../image/1806-21.jpg';

const tasks = [
  {
    text: '\\(\\left( 1\\frac{1}{4} \\right)^{-1} = \\)<br><br>',
    image: null,
    variants: [
      { text: '\\(\\frac{5}{4}\\)', image: null },
      { text: '\\(\\frac{1}{4}\\)', image: null },
      { text: '\\(\\frac{4}{5}\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(-1\\frac{1}{4}\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку відображено зміну густини (\\(мкг/м\\)\\(^3\\)) дрібнодисперсного пилу в повітрі протягом доби в деякому районі міста. Укажіть із-поміж наведених проміжок часу (у \\(год\\)), упродовж якого густина такого пилу в повітрі лише \\(збільшувалася\\).<br><br>',
    image: image_1806_2,
    variants: [
      { text: '\\([2; 6]\\)', image: null },
      { text: '\\([8; 10]\\)', image: null },
      { text: '\\([12; 16]\\)', image: null },
      { text: '\\([16; 20]\\)', image: null },
      { text: '\\([20; 24]\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть нерівність \\(-3(x + 8) < 0\\).<br><br>',
    image: null,
    variants: [
      { text: '\\((-\\infty; -8)\\)', image: null },
      { text: '\\((8; +\\infty)\\)', image: null },
      { text: '\\((-\\infty; 8)\\)', image: null },
      { text: '\\((-\\infty; \\frac{8}{3})\\)', image: null },
      { text: '\\((-8; +\\infty)\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Периметр ромба більший за сторону ромба на \\(60\\) \\(см\\). Знайдіть сторону ромба.<br><br>',
    image: null,
    variants: [
      { text: '\\(15\\) \\(см\\)', image: null },
      { text: '\\(20\\) \\(см\\)', image: null },
      { text: '\\(25\\) \\(см\\)', image: null },
      { text: '\\(30\\) \\(см\\)', image: null },
      { text: '\\(40\\) \\(см\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено графік функції \\( y = f(x) \\), визначеної на проміжку \\([-5; 4]\\). Скільки точок перетину з осями координат має ця функція на заданому проміжку?<br><br>',
    image: image_1806_5,
    variants: [
      { text: '\\(2\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(4\\)', image: null },
      { text: '\\(5\\)', image: null },
      { text: '\\(6\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'На рисунку зображено трикутну піраміду \\( SABC \\) з основою \\( ABC \\). Точка \\( M \\) – середина ребра \\( AB \\). Укажіть лінію перетину площин \\( SMC \\) і \\( ABS \\).<br><br>',
    image: image_1806_6,
    variants: [
      { text: '\\( SM \\)', image: null },
      { text: '\\( AB \\)', image: null },
      { text: '\\( AC \\)', image: null },
      { text: '\\( BC \\)', image: null },
      { text: '\\( CM \\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Маса Землі приблизно становить \\( 5,972 \\cdot 10^{24} \\) \\(кг\\). Відомо, що маса екзопланети в \\(10\\) разів більша за масу Землі. Знайдіть масу екзопланети.<br><br>',
    image: null,
    variants: [
      { text: '\\( 59,72 \\cdot 10^{25} \\) \\(кг\\)', image: null },
      { text: '\\( 5,972 \\cdot 10^{25} \\) \\(кг\\)', image: null },
      { text: '\\( 5,972 \\cdot 10^{27} \\) \\(кг\\)', image: null },
      { text: '\\( 5,972 \\cdot 10^{26} \\) \\(кг\\)', image: null },
      { text: '\\( 5,972 \\cdot 10^{23} \\) \\(кг\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(\\sqrt{5x + 10} = 4\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(-1,2\\)', image: null },
      { text: '\\(1\\)', image: null },
      { text: '\\(-0,6\\)', image: null },
      { text: '\\(2\\)', image: null },
      { text: '\\(1,2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Які з наведених тверджень є правильними?<br><br>I. Діагональ рівнобічної трапеції ділить її на \\(2\\) трикутники, один з яких тупокутний<br>II. Діагоналі будь-якої трапеції ділять її на \\(4\\) трикутники, серед яких обов’язково є два подібних. <br>III. Діагоналі рівнобічної трапеції точкою перетину діляться навпіл. <br><br>',
    image: null,
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
    text: '\\(\\frac{3x - 6}{2 - x} = \\)<br><br>',
    image: null,
    variants: [
      { text: '\\(0\\)', image: null },
      { text: '\\(-3\\)', image: null },
      { text: '\\(1,5\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(-1,5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Визначте площу повної поверхні циліндра, радіус основи якого дорівнює \\(4\\) \\(см\\), а висота дорівнює \\(6\\) \\(см\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(64\\pi\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(40\\pi\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(144\\pi\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(56\\pi\\) \\(см\\)\\(^2\\)', image: null },
      { text: '\\(80\\pi\\) \\(см\\)\\(^2\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: '\\(\\log_a 3a - \\log_a 3 = \\)<br><br>',
    image: null,
    variants: [
      { text: '\\(1\\)', image: null },
      { text: '\\(\\log_a 9\\)', image: null },
      { text: '\\(\\log_a (3a - 3)\\)', image: null },
      { text: '\\(3\\)', image: null },
      { text: '\\(0\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Геометричну прогресію задано формулою \\(n\\)-го члена \\(b_n = 5 \\cdot 2^{n-3}\\). Визначте шостий член цієї прогресії.<br><br>',
    image: null,
    variants: [
      { text: '\\(1000\\)', image: null },
      { text: '\\(30\\)', image: null },
      { text: '\\(21\\)', image: null },
      { text: '\\(40\\)', image: null },
      { text: '\\(343\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'У паралелограмі ABCD з гострим кутом \\(\\angle A = \\alpha \\) проведено висоту \\(BK = 8\\) (див. рисунок). Визначте площу паралелограма \\(ABCD\\), якщо \\(BD = 17\\).<br><br>',
    image: image_1806_14,
    variants: [
      { text: '\\(\\frac{32}{tg \\alpha} + 60\\)', image: null },
      { text: '\\(64 tg \\alpha + 120\\)', image: null },
      { text: '\\(64 \\cos \\alpha + 120\\)', image: null },
      { text: '\\(32 tg \\alpha + 60\\)', image: null },
      { text: '\\(\\frac{64}{tg \\alpha} + 120\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    text: 'Розв\'яжіть рівняння \\(\\frac{9}{x+2} - 2 = x\\).<br><br>',
    image: null,
    variants: [
      { text: '\\(-\\sqrt{5}; \\sqrt{5}\\)', image: null },
      { text: '\\(-2; 3\\)', image: null },
      { text: '\\(-5; 1\\)', image: null },
      { text: '\\(-3; 2\\)', image: null },
      { text: '\\(-1; 5\\)', image: null }
    ],
    variantImage: testImage
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між виразом (1–3) та твердженням про його значення (А – Д)), яке є правильним.',
    leftTitle: '\\(Вираз\\)<br><br>',
    rightTitle: '\\(Твердження\\)<br><br>',
    leftOptions: [
      { text: '\\((\\sqrt{2} + 5)(\\sqrt{2} - 5)\\)' },
      { text: '\\(2 \\log_2 \\sqrt{8}\\)' },
      { text: '\\(|1 - \\sqrt{2}|\\)' }
    ],
    variants: [
      { text: 'є цілим додатним числом' },
      { text: 'є цілим від’ємним числом ' },
      { text: 'дорівнює \\(0\\)' },
      { text: 'є нецілим додатним числом ' },
      { text: 'є нецілим від’ємним числом' }
    ]
  },
  {
    type: 'matching',
    text: 'Установіть відповідність між функцією (1–3) та властивістю її графіка (А – Д).',
    leftTitle: '\\(Функція\\)<br><br>',
    rightTitle: '\\(Властивість\\)<br><br>',
    leftOptions: [
      { text: '\\(y = 2x^3\\)' },
      { text: '\\(y = \\frac{2}{x} - 1\\)' },
      { text: '\\(y = \\cos x\\)' }
    ],
    variants: [
      { text: 'двічі перетинає пряму \\(x = 1\\)' },
      { text: 'симетричний відносно початку координат' },
      { text: 'симетричний відносно осі абсцис' },
      { text: 'симетричний відносно осі ординат' },
      { text: 'не перетинає вісь ординат' }
    ]
  },
  {
    type: 'matching',
    text: 'Точка \\(O\\) – центр кола, зображеного на рисунку.  До цього кола проведено дотичну \\(KB\\), \\(B\\) – точка дотику. На колі вибрано точки \\(A\\) і \\(C\\) так, що \\(AB = BC\\), \\(\\angle ABC = 50^{\\circ}\\). Установіть відповідність між кутом (1–3) та його градусною мірою (А – Д).',
    image: image_1806_18,
    leftTitle: '\\(Кут\\)<br><br>',
    rightTitle: '\\(Градусна\\) \\(міра\\) \\(кута\\)<br><br>',
    leftOptions: [
      { text: '\\(\\angle AOC\\)' },
      { text: '\\(\\angle BOC\\)' },
      { text: '\\(\\angle KBA\\)' }
    ],
    variants: [
      { text: '\\(50^\\circ\\)' },
      { text: '\\(65^\\circ\\)' },
      { text: '\\(100^\\circ\\)' },
      { text: '\\(90^\\circ\\)' },
      { text: '\\(130^\\circ\\)' }
    ]
  },
  {
    text: 'На рисунку зображено графік неперервної на відрізку \\([0; 5]\\) функції \\( y = f(x) \\). Площі фігур \\( A \\) і \\( B \\), обмежених віссю \\( x \\) та графіком цієї функції, дорівнюють \\(7,2\\) \\(кв.\\) \\(од.\\) і \\(6,1\\) \\(кв.\\) \\(од.\\) відповідно.<br><br>Обчисліть \\( \\int\\limits_{0}^{5}{(f(x)+6)dx}  \\)',
    type: 'input',
    image: image_1806_19
  },
  {
    text: 'У прямокутній системі координат у просторі задано куб \\( ABCDA_1B_1C_1D_1 \\), \\( A(5; 1; 0) \\). Діагоналі грані \\( CC_1D_1D \\) перетинаються в точці \\( K(-6; -4; 2) \\). Знайдіть об\'єм цього куба.',
    type: 'input',
    image: null
  },
  {
    text: 'Фермер вирішив посадити \\(2\\) види плодових дерев (груша та яблуня) і \\(4\\) види кістянок (абрикос, слива, вишня та персик) в \\(6\\) рядів, де в кожному ряду мають бути однакові дерева. У першому та останньому ряду мають бути плодові дерева, а всередині – по \\(1\\) ряду кожного виду кістянок (див. рисунок). Скільки всього варіантів оформлення саду в нього є?',
    type: 'input',
    image: image_1806_21
  },
  {
    text: 'За якого значення \\( a \\) для розв\'язку (\\( x_0 \\), \\( y_0 \\)) системи рівнянь \\(\\begin{cases} 2^x - 3y = 5a - 8, \\\\ 2^{x+1} - y = 5a + 8 \\end{cases}\\) <br><br>справджується рівність \\( x_0 = 1 + \\log_2 y_0 \\)?',
    type: 'input',
    image: null
  }
];

  export default tasks;