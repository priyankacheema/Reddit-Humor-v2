import 'isomorphic-fetch'
import sinon from 'sinon'
import {expect} from 'code'
import {fetchProgrammerHumor, URL} from './fetchProgrammerHumor'

describe('fetchProgrammerHumor', () => {

    let fetchStub

    beforeEach(() => {
        fetchStub = sinon.stub(global, 'fetch')
    })

    afterEach(() => {
        sinon.restore()
    })

    it('should be called once with the correct endpoint', async () => {

        const json = sinon.spy()
        fetchStub.resolves({json})

        await fetchProgrammerHumor()

        sinon.assert.calledOnce(fetchStub)
        sinon.assert.calledWithExactly(fetchStub, URL)

    })

    describe('and it is successful', () => {

        it('should return the result of the json function', async () => {

            const expectedValue = {someData: true}
            const json = sinon.stub().returns(expectedValue)
            fetchStub.resolves({json})

            const data = await fetchProgrammerHumor()
            expect(data).to.equal(expectedValue)

        })

    })

})