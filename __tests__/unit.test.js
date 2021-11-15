// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Unit test for isEmail 
test('school email is email', () => {
    expect(functions['isEmail']('q5ma@ucsd.edu')).toBe(true)
});

test('personal email is email', () => {
    expect(functions['isEmail']('qixuanma2001@gmail.com')).toBe(true)
});

test('name is not email', () => {
    expect(functions['isEmail']('Harrison Ma')).toBe(false)
});

test('phone number is not email', () => {
    expect(functions['isEmail']('100-100-1000')).toBe(false)
});

// Unit test for isPhoneNumber
test('email is not phone number', () => {
    expect(functions['isPhoneNumber']('q5ma@ucsd.edu')).toBe(false)
});

test('date is not phone number', () => {
    expect(functions['isPhoneNumber']('2000-01-01')).toBe(false)
});

test('phone number is phone number', () => {
    expect(functions['isPhoneNumber']('100-100-1000')).toBe(true)
});

test('international phone number is phone number', () => {
    expect(functions['isPhoneNumber']('189-7919-1000')).toBe(true)
});

// Unit test for isStrongPassword
test('password is not string password', () => {
    expect(functions['isStrongPassword']('123')).toBe(false)
});

test('simple password is not strong password', () => {
    expect(functions['isStrongPassword']('12345678')).toBe(false)
});

test('random string is strong password', () => {
    expect(functions['isStrongPassword']('woshishui876')).toBe(true)
});

test('another random string is strong password', () => {
    expect(functions['isStrongPassword']('nihao123')).toBe(true)
});

// Unit test for isDate
test('phone number is not date', () => {
    expect(functions['isDate']('189-7919-1000')).toBe(false)
});

test('name is not date', () => {
    expect(functions['isDate']('Harrison Ma')).toBe(false)
});

test('date is date', () => {
    expect(functions['isDate']('11/21/1968')).toBe(true)
});

test('another date is date', () => {
    expect(functions['isDate']('10/01/1949')).toBe(true)
});

// Unit test for isHexColor
test('phone number is not HexColor', () => {
    expect(functions['isHexColor']('189-7919-1000')).toBe(false)
});

test('name is not HexColor', () => {
    expect(functions['isHexColor']('Harrison Ma')).toBe(false)
});

test('3-digit HexColor is HexColor', () => {
    expect(functions['isHexColor']('FFF')).toBe(true)
});

test('6-digit HexColor is HexColor', () => {
    expect(functions['isHexColor']('FAFAFA')).toBe(true)
});