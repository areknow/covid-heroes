const SparkPost = require('sparkpost');
const SPARKPOST_CLIENT = new SparkPost(process.env.SPARKPOST);
const RECEIVER = process.env.FORM_RECEIVER;
const SENDER = 'COVIDHEROES.<form@mail.covidheroes.gives>';

exports.handler = async function (event, context, callback) {
  const data = JSON.parse(event.body);
  const email = `
    <html><body>
      <h2>New ${data.type} form submitted</h2>
      <table style="width:100%">
      <tr style="display: ${data.org == 'N/A' ? 'none' : 'table-row'}">
        <td>Organization</td><td>${data.org}</td>
      </tr>
      <tr>
        <td>First name</td><td>${data.first}</td>
      </tr>
      <tr>
        <td>Last name</td><td>${data.last}</td>
      </tr>
      <tr>
        <td>Phone</td><td>${data.phone}</td>
      </tr>
      <tr>
        <td>Email</td><td>${data.email}</td>
      </tr>
      <tr>
        <td>Address</td><td>${data.street}</td>
      </tr>
      <tr>
        <td>City</td><td>${data.city}</td>
      </tr>
      <tr>
        <td>State</td><td>${data.state}</td>
      </tr>
      <tr>
        <td>Donation items</td><td>${data.list}</td>
      </tr>
      <tr>
        <td>Other items</td><td>${data.other}</td>
      </tr>
      <tr>
        <td>Volunteer</td><td>${data.volunteer}</td>
      </tr>
      </table>
    </body></html>
  `;
  try {
    const data = await SPARKPOST_CLIENT.transmissions.send({
      options: { sandbox: false },
      content: {
        from: SENDER,
        subject: `New ${data.type} form submitted`,
        html: email
      },
      recipients: [{ address: RECEIVER }]
    });
    console.log(data);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: data })
    });
  } catch (error) {
    console.log(error);
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: error })
    });
  }
};
