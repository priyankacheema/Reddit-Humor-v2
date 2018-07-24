import { expect } from 'code'
import sendToSlack from './postToSlack'
import sinon from 'sinon'

describe('Given a slack service', () => {
  let fetchStub
  const urlWebHook =
    'https://hooks.slack.com/services/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'
  const mockGif = 'https://media.giphy.com/media/xThuWjDsB8IbJggCME/giphy.gif'
  const mockMessage = 'hello world'
  const mockPayload = {
    text: mockMessage,
    attachments: [
      {
        fallback: 'this image failed to post',
        text: `${mockMessage}`,
        image_url: `${mockGif}`,
        thumb_url: `${mockGif}`
      }
    ]
  }

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => {
    sinon.restore()
  })

  describe('When the service is called successfuly', () => {
    it('should post to slack webhook', () => {
      fetchStub.resolves({ json: sinon.spy() })

      sendToSlack(mockMessage, mockGif)

      sinon.assert.calledOnce(fetchStub)
      sinon.assert.calledWithExactly(fetchStub, urlWebHook, {
        method: 'post',
        body: JSON.stringify(mockPayload)
      })
    })

    describe('when the services is unsuccessful', () => {
      it('should return an error', () => {
        fetchStub.rejects({ json: 'bork bork' })
        sendToSlack(mockMessage, mockGif)
          .then(data => expect(data).to.be.undefined())
          .catch(e => expect(e).to.not.equal(undefined))
      })
    })
  })
})
