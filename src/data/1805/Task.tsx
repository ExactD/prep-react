import testImage from '../../image/test1.jpg';

const tasks = [
    {
      text: 'Завдання 1: У першу годину роботи на телефон гарячої лінії надійшло <strong>145</strong> дзвінків, а за другу <br>годину – <strong>17</strong> на дзвінків більше. Скільки всього дзвінків надійшло за дві години? \\(\\sqrt{16}\\)',
      image: testImage,
      variants: [
        { text: '0', image: null },
        { text: '1', image: null },
        { text: '2', image: null },
        { text: '3', image: null },
        { text: '4', image: null }
      ],
      variantImage: testImage
    },
    {
      text: 'Завдання 2: Який результат додавання \\(2 + 2\\)?',
      image: testImage,
      variants: [
        { text: '', image: testImage },
        { text: '', image: testImage },
        { text: '', image: testImage },
        { text: '', image: testImage },
        { text: '', image: testImage }
      ],
      variantImage: testImage
    },
    {
      text: 'Завдання 3: Обчисліть значення виразу \\(5 \\times 3\\)',
      image: testImage,
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
      text: 'Завдання 4: Оберіть правильну відповідь: \\(\\frac{10}{2}\\) = ?',
      image: testImage,
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
      text: 'Завдання 5: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 6: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 7: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 8: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 9: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 10: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 11: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 12: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 13: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 14: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      text: 'Завдання 15: Яке число є квадратом \\(3\\)?',
      image: testImage,
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
      type: 'matching',
      text: 'Знайди відповідності...',
      leftTitle: 'Кількість яблук',        // <-- нове поле
      rightTitle: 'Кількість груш',         // <-- нове поле
      leftOptions: [
        { text: '2' },
        { text: '3' },
        { text: '5' },
      ],
      variants: [
        { text: 'Дві груші' },
        { text: 'Три груші' },
        { text: 'П’ять груш' },
        { text: 'Чотири груші' },
        { text: 'Одна груша' },
      ]
    },
    {
      type: 'matching',
      text: 'Знайди відповідності...',
      leftTitle: 'Кількість яблук',        // <-- нове поле
      rightTitle: 'Кількість груш',         // <-- нове поле
      leftOptions: [
        { text: '2' },
        { text: '3' },
        { text: '5' },
      ],
      variants: [
        { text: 'Дві груші' },
        { text: 'Три груші' },
        { text: 'П’ять груш' },
        { text: 'Чотири груші' },
        { text: 'Одна груша' },
      ]
    },
    {
      type: 'matching',
      text: 'Знайди відповідності...',
      leftTitle: 'Кількість яблук',        // <-- нове поле
      rightTitle: 'Кількість груш',         // <-- нове поле
      leftOptions: [
        { text: '2' },
        { text: '3' },
        { text: '5' },
      ],
      variants: [
        { text: 'Дві груші' },
        { text: 'Три груші' },
        { text: 'П’ять груш' },
        { text: 'Чотири груші' },
        { text: 'Одна груша' },
      ]
    },
    {
      text: 'Введіть значення x, якщо 2x = 10',
      type: 'input',
      image: null,
    },
    {
      text: 'Введіть площу квадрата зі стороною 3 см',
      type: 'input',
      image: null,
    },
    {
      text: 'Введіть обʼєм куба зі стороною 2 см',
      type: 'input',
      image: null,
    },
    {
      text: 'Введіть відповідь: √9 = ?',
      type: 'input',
      image: null,
    },
  ];

  export default tasks;