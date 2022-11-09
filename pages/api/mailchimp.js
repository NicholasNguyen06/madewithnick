import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: '4d1cfd1c23c3224a0426f188abef8681',
  server: 'us21', // E.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const test = await mailchimp.lists.addListMember('2d600991a0', {
      email_address: email,
      status: 'subscribed',
    })
    return res.status(201).json({ error: '' })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
