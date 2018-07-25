var urlWebHook =
  'https://hooks.slack.com/services/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'

const posted = []

export default function sendToSlack (
  message = '',
  imageUrl = undefined,
  imageId
) {

  const payload = {
      text: message,
      attachments: [
          {
              fallback: 'this image failed to post',
              text: `${message}`,
              image_url: `${imageUrl}`,
              thumb_url: `${imageUrl}`
            }
        ]
    }

    posted.includes(imageId)
    ? (
        console.log(Error("that's already been posted"))
    )
    : fetch(urlWebHook, {
        method: 'post',
        body: JSON.stringify(payload)
    })
    posted.push(imageId)
}
