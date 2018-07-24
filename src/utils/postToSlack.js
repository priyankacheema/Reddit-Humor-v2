var urlWebHook = "https://hooks.slack.com/services/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";

export default function sendToSlack (message = '', imageUrl = undefined ) {
	const payload = {
        text: message,
        attachments: [
            {
            "fallback": "this image failed to post",
            "text": `${message}`,
            "image_url": `${imageUrl}`,
            "thumb_url": `${imageUrl}`
            }
        ]
		}

	fetch(urlWebHook, {
        method: 'post',
        body: JSON.stringify(payload)
    })
	}
