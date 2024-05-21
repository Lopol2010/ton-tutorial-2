import { toNano } from '@ton/core';
import { Counter } from '../wrappers/Counter';
import { compile, NetworkProvider } from '@ton/blueprint';
import env from "./env";
console.log(env)
export async function run(provider: NetworkProvider) {
    const counter = provider.open(Counter.createFromConfig({ initialCounter: Date.now() }, await compile('Counter')));

    if(await provider.isContractDeployed(counter.address)) {
        throw Error("contract is already deployed!");
    }

    await counter.sendDeploy(provider.sender(), toNano('0.01'));

    console.log("waiting for deploy at: ", counter.address);
    await provider.waitForDeploy(counter.address, 10, 2000);

    // run methods on `counter`
}
