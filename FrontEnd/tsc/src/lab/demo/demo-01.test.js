import { checkPhone } from "./demo-01";
describe('check phone', function () {
    it('should return phone > 0 ', function () {
        expect(checkPhone(-1)).toBe(false);
    });
    it('should return phone > 0 ', function () {
        expect(checkPhone(200)).toBe(true);
    });
});
