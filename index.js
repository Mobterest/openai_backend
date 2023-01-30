const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: true}));

const port = 1000;

const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    apiKey: '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'
})
const openai = new OpenAIApi(configuration);


app.post('/request', async function(req, res) {
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: req.body.widget +  "(//Dart \n //" +req.body.prompt + " \n",
        max_tokens: 100,
        temperature: 0,
        stop: "\n"
    });

    res.send({data: response.data.choices[0].text})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})