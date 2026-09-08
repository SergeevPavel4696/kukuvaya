//Получить угол треугольника по трем сторонам.
export function polUgPo3St(prot, pril1, pril2) {
    return Math.acos((-prot * prot + pril1 * pril1 + pril2 * pril2) / (2 * pril1 * pril2));
}
