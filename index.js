// Code your solution in this file!
const drivers = ['Kev', 'Dan', 'Ann', 'Mike']
const returnFirstTwoDrivers = (drivers) => {
    const newArray = drivers.slice(0, 2);
    return (newArray);
}
const returnLastTwoDrivers = (drivers) => {
    const lastValues = drivers.slice(-2);
    return (lastValues);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier  = (num1) => {
    return () => num1 * 5
}
const fareDoubler = (num2) => {
    return num2 * 2;
}
const fareTripler = (num3) => {
    return num3 * 3;
}
const selectDifferentDrivers = (driver, value) => {
    return value(driver);
}