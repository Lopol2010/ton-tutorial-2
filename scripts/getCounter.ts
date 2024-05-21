import { Address, toNano } from '@ton/core';
import { Counter } from '../wrappers/Counter';
import { compile, NetworkProvider } from '@ton/blueprint';
import env from "./env";
console.log(env)
export async function run(provider: NetworkProvider) {

    const counter = provider.open(Counter.createFromAddress(Address.parse("EQAQSCG0cIanpjYw9COWx8KxvquK7QEZQmBW_RRxCpscCOu7")));

    console.log("counter value: ", await counter.getCounter());
}
