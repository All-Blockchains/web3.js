import AbstractMethod from '../../../../lib/methods/AbstractMethod';
import SetGasPriceMethod from '../../../../src/methods/miner/SetGasPriceMethod';

/**
 * SetGasPriceMethod test
 */
describe('SetGasPriceMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new SetGasPriceMethod({});
    });

    it('constructor check', () => {
        expect(method).toBeInstanceOf(AbstractMethod);

        expect(method.rpcMethod).toEqual('miner_setGasPrice');

        expect(method.parametersAmount).toEqual(1);
    });

    it('beforeExecution should call Utils.numberToHex', () => {
        method.parameters = [1];

        method.beforeExecution();

        expect(method.parameters[0]).toEqual('0x1');
    });
});
