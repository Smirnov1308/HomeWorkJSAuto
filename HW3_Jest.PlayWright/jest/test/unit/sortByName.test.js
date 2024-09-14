const sorting = require('../../app');

describe('Books names test suite', () => {
  it('Books names should be sorted in ascending order', () => {
    expect(
      sorting.sortByName([
        'Гарри Поттер',
        'Властелин Колец',
        'Волшебник изумрудного города',
      ])
    ).toEqual([
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ]);
  });

  it('should return an empty array if input is empty', () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it('should return the same array if it contains one element', () => {
    expect(sorting.sortByName(['Единственный Книжный Заголовок'])).toEqual([
      'Единственный Книжный Заголовок',
    ]);
  });

  it('should sort identical book names correctly', () => {
    expect(
      sorting.sortByName(['Гарри Поттер', 'Гарри Поттер', 'Гарри Поттер'])
    ).toEqual(['Гарри Поттер', 'Гарри Поттер', 'Гарри Поттер']);
  });

  it('should handle strings with leading and trailing spaces', () => {
    expect(
      sorting.sortByName([
        '  Гарри Поттер',
        'Властелин Колец',
        '  Волшебник изумрудного города  ',
      ])
    ).toEqual([
      '  Волшебник изумрудного города  ',
      '  Гарри Поттер',
      'Властелин Колец',
    ]);
  });

  it('should handle strings with special characters', () => {
    expect(sorting.sortByName(['груша!', 'яблоко@', 'абрикос#'])).toEqual([
      'абрикос#',
      'груша!',
      'яблоко@',
    ]);
  });


it('should handle case sensitivity', () => {
  expect(sorting.sortByName(['грибы', 'Яблоки', 'арбуз'])).toEqual([
    'арбуз',
    'грибы',
    'Яблоки',
  ]);
});

it('should sort words with mixed case correctly', () => {
  expect(sorting.sortByName(['яблоко', 'Груша', 'Апельсин'])).toEqual([
    'Апельсин',
    'Груша',
    'яблоко',
  ]);
});

it('should sort words with EN/RU', () => {
  expect(
    sorting.sortByName(['яблоко', 'aнанас', 'груша', 'абрикос', ])
  ).toEqual(['aнанас', 'абрикос', 'груша', 'яблоко']);
});


});
