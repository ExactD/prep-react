import testImage from '../../image/test1.jpg';
import image_1805_1 from '../../image/1805-1.jpg';
import image_1805_14 from '../../image/1805-14.jpg';
import image_1805_17 from '../../image/1805-17.jpg';
import image_1805_18 from '../../image/1805-18.jpg';
import image_1805_21 from '../../image/1805-21.jpg';

const tasks = [
    {
      text: 'У паралелограмі \\(\\textit{ABCD}\\) діагональ BD утворює із сторонами \\(\\textit{BC}\\) і \\(\\textit{CD}\\) кути \\(57^{\\circ}\\) і \\(65^{\\circ}\\) (див. рисунок). Визначте градусну міру кута \\(\\textit{ABC}\\).',
      image: image_1805_1,
      variants: [
        { text: '\\( 122^{\\circ} \\)', image: null },
        { text: '\\( 58^{\\circ} \\)', image: null },
        { text: '\\( 98^{\\circ} \\)', image: null },
        { text: '\\( 132^{\\circ} \\)', image: null },
        { text: '\\( 112^{\\circ} \\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Розв&rsquo;яжіть сисстему рівнянь: \\( \\left\\{ \\begin{array}{cl} \\frac{8}{x} = -2 \\\\ x + \\frac{y}{2} = 0 \\end{array} \\right. \\)',
      image: null,
      variants: [
        { text: '(-4; -8)', image: null },
        { text: '(-4; 8)', image: null },
        { text: '(0,25; 0,5)', image: null },
        { text: '(-0,25; 0,5)', image: null },
        { text: '(4; -8)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Доберіть закінчення речення так, щоб утворилося правильне твердження: «Висота конуса та його твірна лежать на прямих, що...',
      image: null,
      variants: [
        { text: 'лежать в одній площині».', image: null },
        { text: 'паралельні».', image: null },
        { text: 'не мають спільних точок».', image: null },
        { text: 'перпендикулярні».', image: null },
        { text: 'мимобіжні».', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Знайдіть значення виразу \\(\\frac{1}{3}m+\\frac{1}{5}n\\), якщо \\(m=-18\\), \\(n=55\\).',
      image: null,
      variants: [
        { text: '-5', image: null },
        { text: '-17', image: null },
        { text: '2', image: null },
        { text: '5', image: null },
        { text: '17', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Ціна акції компанії зросла на 600 \\(грн\\), що становить 5% від її початкової ціни.Якою була початкова ціна акції?',
      image: null,
      variants: [
        { text: '120000 \\(грн\\)', image: null },
        { text: '12 000 \\(грн\\)', image: null },
        { text: '30 000 \\(грн\\)', image: null },
        { text: '1200 \\(грн\\)', image: null},
        { text: '3000 \\(грн\\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: '\\(\\frac{(x^{5})^{2}}{x^{-5}}=\\)',
      image: null,
      variants: [
        { text: '\\(x^{2}\\)', image: null },
        { text: '\\(x^{12}\\)', image: null },
        { text: '\\(x^{15}\\)', image: null },
        { text: '\\(x^{-2}\\)', image: null },
        { text: '\\(x^{5}\\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Які з наведених тверджень є правильними? <br><br>I. Існує трапеція, у якої одна з бічних сторін перпендикулярна до її основ.<br>II. Існує трапеція, у якої суми протилежних сторін рівні.<br>III. Існує трапеція, у якої суми протилежних кутів рівні.',
      image: null,
      variants: [
        { text: 'лише I', image: null },
        { text: 'лише II ', image: null },
        { text: 'лише III', image: null },
        { text: 'лише II та III', image: null },
        { text: 'I, II та III', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Скільки всього цілих чисел містить проміжок [\\(-1\\); \\(\\log_{4}16\\)]?',
      image: null,
      variants: [
        { text: '2', image: null },
        { text: '3', image: null },
        { text: '4', image: null },
        { text: '5', image: null },
        { text: '6', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Укажіть графік непарної функції.',
      image: null,
      variants: [
        { text: '0', image: testImage },
        { text: '1', image: testImage },
        { text: '2', image: testImage },
        { text: '3', image: testImage },
        { text: '4', image: testImage }
      ],
      variantImage: testImage
    },
    {
      text: 'Комп’ютерна програма видаляє у п’ятицифровому числі одну цифру навмання. Яка ймовірність того, що в числі 37281 буде видалено цифру 1 або цифру 2?',
      image: null,
      variants: [
        { text: '\\(\\frac{1}{2}\\)', image: null },
        { text: '\\(\\frac{1}{5}\\)', image: null },
        { text: '\\(\\frac{2}{3}\\)', image: null },
        { text: '\\(\\frac{2}{5}\\)', image: null },
        { text: '\\(\\frac{1}{3}\\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Визначте об’єм правильної чотирикутної піраміди, площа основи якої дорівнює 36 \\(см^{2}\\), а висота дорівнює стороні основи.',
      image: null,
      variants: [
        { text: '36 \\(см^{3}\\)', image: null },
        { text: '72 \\(см^{3}\\)', image: null },
        { text: '144 \\(см^{3}\\)', image: null },
        { text: '432 \\(см^{3}\\)', image: null },
        { text: '216 \\(см^{3}\\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Розв’яжіть нерівність \\(x^2\\) + 2\\(x\\) – 15 \\(\\geqslant\\) 0.',
      image: null,
      variants: [
        { text: '(\\(-\\infty\\); \\(-5\\)] \\(\\cup\\) [\\(3\\); \\(+\\infty\\))', image: null },
        { text: '[\\(-5\\); \\(3\\)]', image: null },
        { text: '[\\(3\\); \\(+\\infty\\))', image: null },
        { text: '(\\(-\\infty\\); \\(-3\\)] \\(\\cup\\) [\\(5\\); \\(+\\infty\\))', image: null },
        { text: '[\\(-3\\); \\(5\\)]', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'В арифметичній прогресії (\\(a_{n}\\)) перший член \\(a_{1}\\) = 18,5, різниця \\(d\\) = –2,5. Скільки всього додатних членів має ця прогресія?',
      image: null,
      variants: [
        { text: '6', image: null },
        { text: '7', image: null},
        { text: '8', image: null },
        { text: '9', image: null },
        { text: '10', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Діагоналі \\(\\textit{BD}\\) і \\(\\textit{AC}\\) прямокутника \\(\\textit{ABCD}\\) перетинаються в точці \\(\\textit{O}\\), \\(\\angle\\textit{AOB}\\) = \\(\\angle\\beta\\) (див. рисунок). Відстань між серединами відрізків \\(\\textit{AO}\\) і \\(\\textit{DO}\\) дорівнює \\(d\\). Знайдіть площу цього прямокутника.',
      image: image_1805_14,
      variants: [
        { text: '\\(2d^2\\tan\\frac{\\beta}{2}\\)', image: null },
        { text: '\\(4d^2\\tan\\frac{\\beta}{2}\\)', image: null },
        { text: '\\(4d^2\\sin\\frac{\\beta}{2}\\)', image: null },
        { text: '\\(\\frac{4d^2}{\\tan\\frac{\\beta}{2}}\\)', image: null },
        { text: '\\(\\frac{2d^2}{\\cos\\frac{\\beta}{2}}\\)', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Укажіть проміжок, якому належить корінь рівняння \\(4^x\\cdot5^x=\\frac{1}{400}\\).',
      image: null,
      variants: [
        { text: '(\\(-\\infty\\); \\(-10\\))', image: null },
        { text: '[\\(-10\\); \\(-2\\))', image: null},
        { text: '[\\(-2\\); \\(-0,5\\))', image: null },
        { text: '[\\(-0,5\\); \\(2\\))', image: null },
        { text: '[\\(2\\); \\(+\\infty\\))', image: null }
      ],
      variantImage: testImage
    },
    {
      type: 'matching',
      text: 'Установіть відповідність між твердженням (1–3) та функцією (А – Д), для якої це твердження є правильним.',
      leftTitle: '\\(Твердження\\)<br><br>',        // <-- нове поле
      rightTitle: '\\(Функція\\)<br><br>',         // <-- нове поле
      leftOptions: [
        { text: 'функція має 2 нулі' },
        { text: 'на відрізку [–1; 3] функція набуває від’ємних значень' },
        { text: 'найменше значення функції на відрізку [–1; 3] дорівнює 0,5' },
      ],
      variants: [
        { text: '\\(y\\) = \\(x^2\\) – 4' },
        { text: '\\(y=\\frac{1}{x-4}\\)' },
        { text: '\\(y=2^x\\)' },
        { text: '\\(y=0,5^x\\)' },
        { text: '\\(\\sqrt{x+1}\\)' },
      ]
    },
    {
      type: 'matching',
      text: 'Круг, площа якого 36\\(\\pi\\), дотикається до паралельних прямих \\(m\\) і \\(n\\) (див. рисунок). Точки \\(\\textit{L, N, P}\\) належать прямій \\(m\\), а точки \\(\\textit{K, M, Q}\\) – прямій \\(n\\). Трикутник \\(\\textit{KLM}\\) рівносторонній. \\(\\textit{MNPQ}\\) – ромб, площа якого 156. Установіть відповідність між відрізом (1–3) та його довжиною (А – Д).',
      leftTitle: '\\(Відрізок\\)',        // <-- нове поле
      rightTitle: '\\(Довжина відрізка\\)',         // <-- нове поле
      image: image_1805_17,
      leftOptions: [
        { text: 'діаметр круга' },
        { text: 'довжина сторони трикутника \\(\\textit{KLM}\\)' },
        { text: 'довжина сторони ромба \\(\\textit{MNPQ}\\)' },
      ],
      variants: [
        { text: '\\(8\\sqrt{3}\\)' },
        { text: '\\(6\\)' },
        { text: '\\(12\\)' },
        { text: '\\(13\\)' },
        { text: '\\(15\\)' },
      ]
    },
    {
      type: 'matching',
      text: 'Узгодьте вираз (1–3) з точкою (А – Д) на координатній прямій, координатою якої є значення виразу.',
      leftTitle: '\\(Вираз\\)<br><br>',        // <-- нове поле
      rightTitle: '\\(Точка\\)<br><br>',         // <-- нове поле
      image: image_1805_18,
      leftOptions: [
        { text: '\\(\\log_{\\sqrt{2}}cos360^\\circ\\)' },
        { text: '\\(\\frac{1}{\\sqrt{2}-1}\\)' },
        { text: '\\(1-(\\sqrt{2})^2\\)' },
      ],
      variants: [
        { text: '\\(\\textit{K}\\)' },
        { text: '\\(\\textit{L}\\)' },
        { text: '\\(\\textit{M}\\)' },
        { text: '\\(\\textit{N}\\)' },
        { text: '\\(\\textit{P}\\)' },
      ]
    },
    {
      text: "Обчисліть \\(f^{'}(-1)+\\int_{1}^{2}f(x)dx\\), якщо \\(f(x)=4x^3-3\\).",
      type: 'input',
      image: null,
    },
    {
      text: 'У прямокутній системі координат у просторі задано циліндр, осьовим перерізом якого є квадрат \\(\\textit{ABCD}\\). Точки \\(\\textit{K}\\)(3; –5; 7) і \\(\\textit{M}\\)(11; 1; –3) є серединами сторін \\(\\textit{AD}\\) і \\(\\textit{CD}\\) відповідно. Обчисліть площу \\(\\textit{S}\\) бічної поверхні цього циліндра. У відповідь запишіть значення \\(\\frac{\\textit{S}}{\\pi}\\).',
      type: 'input',
      image: null,
    },
    {
      text: 'На діаграмі відображено результати опитування 1000 клієнтів, які ставили оцінки від 1 до 5. Середня оцінка склала 4,2 бали. За відгуками тих відвідувачів, які оцінили роботу від 1 до 4 включно, середня оцінка 2,5 бали. Скільки людей поставили оцінку «5»?',
      type: 'input',
      image: image_1805_21,
    },
    {
      text: 'Визначте кількість усіх цілих значень \\(a\\) з проміжку [–11; 11], за кожного з яких рівняння \\(\\sqrt{2x-a+4}\\cdot(\\log_2x-2)=0\\) має два різних корені.',
      type: 'input',
      image: null,
    },
  ];

  export default tasks;