"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const words = fio.split(' ');
    return `${words[1]} ${words[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    // return Array.from(new Set(array));
    return [...new Set(array)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (!array.length) return false;

    const info = array.reduce(
        (acc, value) => {
            return {
                min: acc.min < value ? acc.min : value,
                max: acc.max > value ? acc.max : value,
            };
        },
        {min: array[0], max: array[0]}
    );

    return info.max / info.min;
}

// Реализуйте класс "словарь слов"
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.map = new Map();
    }
    set(key, value) {
        if (typeof key !== 'string' || typeof value !== 'string')
            return undefined;
        this.map.set(key, value);
    }
    get(key) {
        if (typeof key !== 'string') return undefined;
        return this.map.get(key);
    }
    has(key) {
        if (typeof key !== 'string') return undefined;
        return this.map.has(key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};