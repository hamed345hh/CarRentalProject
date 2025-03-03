import { stripe } from '../server.js'

const stripePayment = async (req, res) => {
  let { amount, id } = req.body
  id = 'pm_card_visa';
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Rent a Car',
      payment_method: id,
      confirm: true,
      payment_method_types: ['card'],
    })
    console.log('Payment', payment)
    res.json({
      message: 'Payment successful',
      success: true,
    })
  } catch (error) {
    console.log('Error', error)
    res.json({
      message: 'Payment failed',
      success: false,
    })
  }
}

export { stripePayment }
